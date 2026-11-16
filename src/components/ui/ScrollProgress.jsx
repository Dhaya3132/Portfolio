import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Thin Apple-gradient reading progress bar pinned to the top of the viewport.
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="apple-gradient-bg pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] origin-left"
    />
  );
};

export default ScrollProgress;
