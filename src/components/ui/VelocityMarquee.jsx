import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "../../utils/motion";
import { scrollY } from "../../utils/scrollEngine";

const COPIES = 4;

/**
 * Infinite marquee whose speed and direction react to scroll velocity,
 * with a subtle skew while the page is moving.
 */
const VelocityMarquee = ({ children, baseVelocity = 3, className = "" }) => {
  const baseX = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-2500, 2500], [8, -8]);
  const direction = useRef(1);

  // Each copy is 100/COPIES % wide, so wrapping over one copy is seamless.
  const x = useTransform(baseX, (v) => `${wrap(-100 / COPIES, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max flex-nowrap" style={{ x, skewX }}>
        {Array.from({ length: COPIES }).map((_, index) => (
          <div key={index} className="flex shrink-0 items-center" aria-hidden={index > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VelocityMarquee;
