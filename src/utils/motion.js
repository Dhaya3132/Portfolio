// Shared motion tokens so every animation on the page feels like one system.

// Apple-like "fluid" ease-out: fast start, long soft landing.
export const EASE_FLUID = [0.16, 1, 0.3, 1];

// Symmetric ease for curtains / page-level transitions.
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

export const SPRING_SOFT = { type: "spring", stiffness: 120, damping: 18, mass: 0.8 };
export const SPRING_SNAPPY = { type: "spring", stiffness: 260, damping: 22, mass: 0.6 };

// Exponential ease used for Lenis programmatic scrolls.
export const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const clamp = (min, max, v) => Math.min(max, Math.max(min, v));

/**
 * Frame-rate independent exponential smoothing.
 *
 *   next = current + (target - current) * (1 - e^(-lambda * dt))
 *
 * The naive `current += (target - current) * 0.1` moves a different distance
 * per second at 60Hz than at 144Hz (or after a dropped frame) and that is
 * exactly what reads as "stuttery". Scaling the blend factor by elapsed time
 * makes the glide identical at any refresh rate.
 * Same maths Lenis uses for its own scroll smoothing.
 *
 * @param {number} lambda responsiveness in 1/seconds (higher = tighter)
 * @param {number} dt     seconds since the previous step
 */
export const damp = (current, target, lambda, dt) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

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
