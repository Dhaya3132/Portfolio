// Shared motion tokens so every animation on the page feels like one system.

// Apple-like "fluid" ease-out: fast start, long soft landing.
export const EASE_FLUID = [0.16, 1, 0.3, 1];

// Symmetric ease for curtains / page-level transitions.
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

export const SPRING_SOFT = { type: "spring", stiffness: 120, damping: 18, mass: 0.8 };
export const SPRING_SNAPPY = { type: "spring", stiffness: 260, damping: 22, mass: 0.6 };

// Exponential ease used for Lenis programmatic scrolls.
export const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

// Fade + rise + un-blur. Use as `variants` on a motion element.
export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE_FLUID },
  },
};
