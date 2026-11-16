import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], [data-cursor]";

const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const CustomCursor = () => {
  const [enabled] = useState(hasFinePointer);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");
  const [pressed, setPressed] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 260, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 260, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };
    const over = (event) => {
      const target = event.target.closest?.(INTERACTIVE);
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursorLabel ?? "");
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
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
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  const size = label ? 76 : hovering ? 54 : 32;

  return (
    <>
      <motion.div
        aria-hidden="true"
        // blend mode must sit on the transformed element itself, otherwise
        // the transform isolates it and "difference" has nothing to blend with
        className={`pointer-events-none fixed left-0 top-0 z-[9999] ${
          label ? "" : "mix-blend-difference"
        }`}
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[11px] font-medium uppercase tracking-[0.15em] ${
            label
              ? "bg-black/85 text-white"
              : hovering
                ? "bg-white"
                : "border border-white"
          }`}
          animate={{
            width: size,
            height: size,
            opacity: visible ? 1 : 0,
            scale: pressed ? 0.85 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.5 }}
        >
          {label}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
        style={{ x: mouseX, y: mouseY }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
      />
    </>
  );
};

export default CustomCursor;
