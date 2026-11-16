import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "framer-motion";
import { publishScroll, setScrollLimit } from "../../utils/scrollEngine";

// Lenis does the inertial scrolling, but it does NOT own a requestAnimationFrame
// loop here (autoRaf is off). Framer Motion's frame loop ticks Lenis, so there is
// one clock for the whole page and Lenis, springs, damped followers and
// scroll-linked values all resolve inside the same frame.
const LenisBridge = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return undefined;

    const tick = ({ timestamp }) => lenis.raf(timestamp);
    frame.update(tick, true);

    // Lenis emits "scroll" synchronously while it moves the page, so scrollY is
    // updated in the same frame (no one-frame lag, see scrollEngine.js).
    const onScroll = (instance) => publishScroll(instance.scroll);
    lenis.on("scroll", onScroll);
    publishScroll(lenis.scroll);

    return () => {
      cancelFrame(tick);
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return null;
};

// Keeps the document scroll range current and, when Lenis is not running
// (reduced motion), falls back to the native scroll event.
const ScrollMetrics = ({ native = false }) => {
  useEffect(() => {
    const measure = () =>
      setScrollLimit(document.documentElement.scrollHeight - window.innerHeight);
    const onScroll = () => publishScroll(window.scrollY);

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);
    window.addEventListener("resize", measure);

    if (native) {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, [native]);

  return null;
};

// Inertia-based smooth scrolling for the whole page.
// Disabled automatically for users who prefer reduced motion.
const SmoothScroll = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <>
        <ScrollMetrics native />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      <LenisBridge />
      <ScrollMetrics />
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
