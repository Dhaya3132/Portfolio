import { useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";
import { scrollY } from "../utils/scrollEngine";
import { clamp } from "../utils/motion";

const KEYWORDS = { start: 0, center: 0.5, end: 1 };

const parseEdge = (edge = "start") => {
  if (edge in KEYWORDS) return KEYWORDS[edge];
  const value = parseFloat(edge);
  return Number.isNaN(value) ? 0 : value;
};

/**
 * Drop-in replacement for `useScroll({ target, offset }).scrollYProgress`
 * that reads the shared, frame-locked scroll value (see scrollEngine.js).
 *
 * `offset` uses the same syntax: [`<target edge> <viewport edge>`, ...] where an
 * edge is `start | center | end` or a 0-1 fraction, e.g. ["start end", "end start"].
 */
export const useScrollProgress = (targetRef, offset = ["start end", "end start"]) => {
  const progress = useMotionValue(0);
  const offsetKey = offset.join("|");
  // measured bounds live in a ref so scrolling never allocates or re-renders
  const bounds = useRef({ start: 0, end: 1 });

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return undefined;

    const [startSpec, endSpec] = offsetKey.split("|").map((spec) => spec.split(" "));

    const update = (y) => {
      const { start, end } = bounds.current;
      const span = end - start;
      progress.set(span === 0 ? (y >= end ? 1 : 0) : clamp(0, 1, (y - start) / span));
    };

    // Scroll position at which a given element edge meets a given viewport edge.
    const measure = () => {
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const viewport = window.innerHeight;
      const at = ([targetEdge, viewportEdge]) =>
        top + parseEdge(targetEdge) * rect.height - parseEdge(viewportEdge) * viewport;

      bounds.current = { start: at(startSpec), end: at(endSpec) };
      update(scrollY.get());
    };

    measure();
    const unsubscribe = scrollY.on("change", update);

    // Re-measure when the section or anything above it changes size
    // (images decoding, fonts swapping, window resize).
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    observer.observe(document.body);
    window.addEventListener("resize", measure);

    return () => {
      unsubscribe();
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [targetRef, offsetKey, progress]);

  return progress;
};
