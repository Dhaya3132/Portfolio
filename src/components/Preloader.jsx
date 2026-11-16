import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { EASE_FLUID, EASE_IN_OUT } from "../utils/motion";

const HERO_IMAGE = "/assests/about/hero1.webp";
const MIN_DURATION = 1.4; // seconds the counter takes to reach 100

// Short intro: gradient name + counter, then a curved curtain lifts away.
const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);
  const [fontReady, setFontReady] = useState(false);
  const lenis = useLenis();

  // Lock scrolling while the intro is on screen.
  useEffect(() => {
    lenis?.stop();
    document.documentElement.classList.add("is-loading");
    return () => {
      lenis?.start();
      document.documentElement.classList.remove("is-loading");
    };
  }, [lenis]);

  useEffect(() => {
    let cancelled = false;

    // Wait for the hero image (or give up after 3s) so the reveal is clean.
    const heroReady = new Promise((resolve) => {
      const img = new Image();
      img.onload = img.onerror = resolve;
      img.src = HERO_IMAGE;
      setTimeout(resolve, 3000);
    });

    // Don't reveal the name in a fallback font.
    const fontReady = Promise.race([
      document.fonts?.load("64px Engagement") ?? Promise.resolve(),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]).then(() => {
      if (!cancelled) setFontReady(true);
    });

    const counter = animate(0, 100, {
      duration: MIN_DURATION,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
    });

    Promise.all([counter, heroReady, fontReady]).then(() => {
      if (!cancelled) onFinish();
    });

    return () => {
      cancelled = true;
      counter.stop();
    };
  }, [onFinish]);

  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-white text-black"
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: EASE_IN_OUT }}
    >
      {/* curved bottom edge that trails the curtain as it lifts */}
      <svg
        aria-hidden="true"
        className="absolute left-0 top-full h-[12vh] w-full text-white"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path d="M0 0H100Q50 10 0 0Z" fill="currentColor" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
        animate={fontReady ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
        transition={{ duration: 1.2, ease: EASE_FLUID }}
        className="text-center"
      >
        <p className="apple-gradient font-display text-7xl leading-none sm:text-8xl md:text-9xl">
          Dhayalan
        </p>
        <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.45em] text-black/45">
          Software Engineer · Portfolio
        </p>
      </motion.div>

      <div className="absolute inset-x-6 bottom-8 flex items-end justify-between sm:inset-x-10">
        <span className="font-display text-5xl tabular-nums text-black/80 sm:text-6xl">
          {count}
          <span className="text-2xl">%</span>
        </span>
        <div className="mb-3 h-[2px] w-1/2 overflow-hidden rounded-full bg-black/10">
          <div
            className="apple-gradient-bg h-full origin-left rounded-full"
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
