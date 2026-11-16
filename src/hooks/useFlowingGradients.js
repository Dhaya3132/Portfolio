import { useEffect } from "react";

const SELECTOR = ".apple-gradient, .apple-gradient-bg";

// The flowing gradient text / fills are repaint-heavy (text-clipped gradients
// cannot be composited), so they should only run while someone can see them.
// This watches every such element once, flips `data-flow` on/off as it enters
// or leaves the viewport, and CSS pauses the animation when it is not "on".
//
// A data attribute is used instead of a class so React re-renders that rewrite
// `className` never wipe the state.
export const useFlowingGradients = () => {
  useEffect(() => {
    const seen = new WeakSet();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.dataset.flow = entry.isIntersecting ? "on" : "off";
        }
      },
      { rootMargin: "80px 0px" },
    );

    const watch = (el) => {
      if (seen.has(el)) return;
      seen.add(el);
      io.observe(el);
    };

    const scan = (node) => {
      if (node.nodeType !== 1) return;
      if (node.matches(SELECTOR)) watch(node);
      node.querySelectorAll(SELECTOR).forEach(watch);
    };

    scan(document.body);

    // Sections mount lazily (AnimatePresence, tabs, modals) - catch those too.
    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) mutation.addedNodes.forEach(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};
