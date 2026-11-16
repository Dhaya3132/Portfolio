import { useCallback } from "react";
import { useLenis } from "lenis/react";
import { easeOutExpo } from "../utils/motion";

// Smoothly scrolls to a section id. Uses Lenis when it is running and falls
// back to native smooth scrolling (e.g. for reduced-motion users).
export const useScrollTo = () => {
  const lenis = useLenis();

  return useCallback(
    (id) => {
      const target = id === "top" ? 0 : document.getElementById(id);
      if (target === null) return;

      if (lenis) {
        lenis.scrollTo(target, { duration: 1.6, easing: easeOutExpo });
      } else if (target === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis],
  );
};
