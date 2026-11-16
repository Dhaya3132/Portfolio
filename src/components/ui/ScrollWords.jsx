import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Word = ({ children, progress, range, highlight }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`inline-block ${highlight ? "apple-gradient" : ""}`}
    >
      {children}
    </motion.span>
  );
};

/**
 * Apple product-page style paragraph: words light up one by one
 * as the block scrolls through the viewport.
 */
const ScrollWords = ({ text, className = "", highlight = [] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <React.Fragment key={`${word}-${index}`}>
            <span aria-hidden="true">
              <Word
                progress={scrollYProgress}
                range={[start, end]}
                highlight={highlight.includes(word.replace(/[^\w]/g, "").toLowerCase())}
              >
                {word}
              </Word>
            </span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default ScrollWords;
