import React from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

// Inertia-based smooth scrolling for the whole page.
// Disabled automatically for users who prefer reduced motion.
const SmoothScroll = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return children;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
