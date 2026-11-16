import { motionValue } from "framer-motion";
import { clamp } from "./motion";

/**
 * Single source of truth for page scroll.
 *
 * Why this exists: Framer Motion's `useScroll` learns the scroll position from
 * the browser's `scroll` event, which fires one frame AFTER Lenis has moved the
 * page. Anything driven by it (parallax, scale, opacity) therefore trails the
 * content by a frame - at 2000px/s that is ~30px of "swim" and it reads as
 * jitter. Here <SmoothScroll> writes the position in the very same frame
 * Lenis moves the page, so every scroll-linked value is exactly in step.
 */

const initial = typeof window === "undefined" ? 0 : window.scrollY;

/** Current scroll offset in px (fractional while Lenis is gliding). */
export const scrollY = motionValue(initial);

/** 0 -> 1 across the whole document. */
export const scrollProgress = motionValue(0);

let limit = 1;

export const publishScroll = (y) => {
  scrollY.set(y);
  scrollProgress.set(clamp(0, 1, y / limit));
};

export const setScrollLimit = (value) => {
  limit = Math.max(1, value);
  scrollProgress.set(clamp(0, 1, scrollY.get() / limit));
};
