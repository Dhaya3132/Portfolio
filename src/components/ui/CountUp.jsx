import React, { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { EASE_FLUID } from "../../utils/motion";

// Counts from 0 to `to` the first time it scrolls into view.
const CountUp = ({ to, suffix = "", duration = 1.8, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (latest) => Math.round(latest));

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(value, to, { duration, ease: EASE_FLUID });
    return () => controls.stop();
  }, [inView, to, duration, value]);

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      <motion.span aria-hidden="true">{rounded}</motion.span>
      <span aria-hidden="true">{suffix}</span>
    </span>
  );
};

export default CountUp;
