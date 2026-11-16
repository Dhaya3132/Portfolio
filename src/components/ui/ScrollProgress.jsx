import React from "react";
import { motion } from "framer-motion";
import { scrollProgress } from "../../utils/scrollEngine";

// Thin Apple-gradient reading progress bar pinned to the top of the viewport.
// No spring on top: Lenis already glides the scroll, and the shared value is
// frame-locked, so the bar stays glued to the page instead of lagging behind it.
const ScrollProgress = () => (
  <motion.div
    aria-hidden="true"
    style={{ scaleX: scrollProgress }}
    className="apple-gradient-bg pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] origin-left"
  />
);

export default ScrollProgress;
