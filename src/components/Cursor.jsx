import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useDamped } from "../hooks/useDamped";

const INTERACTIVE = "a, button, [role='button'], [data-cursor]";

const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// Base ring is 32px; hover / label states are reached by scaling it
// (54px and 76px), so the cursor never triggers layout.
const BASE = 32;
const HOVER_SCALE = 54 / BASE;
const LABEL_SCALE = 76 / BASE;

const CustomCursor = () => {
  const [enabled] = useState(hasFinePointer);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);
  const visibleRef = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  // The dot is glued to the pointer; the ring glides after it with
  // frame-rate independent damping (no spring wobble, no overshoot).
  const ringX = useDamped(mouseX, { lambda: 16, precision: 0.05 });
  const ringY = useDamped(mouseY, { lambda: 16, precision: 0.05 });

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      // only touch React state when visibility actually flips
      if (!visibleRef.current) {
        visibleRef.current = true;
        // first move: start the ring under the pointer instead of letting it
        // glide in from the corner it was parked in
        ringX.set(event.clientX);
        ringY.set(event.clientY);
        setVisible(true);
      }
    };
    const over = (event) => {
      const target = event.target.closest?.(INTERACTIVE);
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursorLabel ?? "");
    };
    const leave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [enabled, mouseX, mouseY, ringX, ringY]);

  if (!enabled) return null;

  const scale = (label ? LABEL_SCALE : hovering ? HOVER_SCALE : 1) * (pressed ? 0.85 : 1);

  // No mix-blend-mode here on purpose: blending a fixed, constantly moving
  // layer forces the browser to re-composite everything behind it on every
  // frame. A two-tone outline (dark ring + light halo) reads on any background.
  const ringStyle = label
    ? "border-transparent bg-black/85"
    : hovering
      ? "border-black/60 bg-black/10 shadow-[0_0_0_1px_rgba(255,255,255,0.7)]"
      : "border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.75)]";

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className={`-ml-4 -mt-4 h-8 w-8 rounded-full border transition-[background-color,border-color,box-shadow] duration-300 ${ringStyle}`}
          animate={{ scale, opacity: visible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 26, mass: 0.5 }}
        />
        <span
          className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.15em] text-white transition-opacity duration-200"
          style={{ opacity: visible && label ? 1 : 0 }}
        >
          {label}
        </span>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-black shadow-[0_0_0_1.5px_#fff]"
        style={{ x: mouseX, y: mouseY }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
