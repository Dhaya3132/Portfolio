import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE_FLUID } from "../../utils/motion";

const wordVariants = {
  hidden: { opacity: 0, y: "0.55em", rotate: 2, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: "0em",
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE_FLUID },
  },
};

/**
 * Word-by-word headline reveal (fade + rise + un-blur), Apple keynote style.
 *
 * - `gradient`: true for every word, or an array of word indexes to highlight.
 * - `start`: gate the animation (e.g. wait for the intro curtain).
 */
const SplitText = ({
  text,
  as = "h2",
  className = "",
  gradient = false,
  variant = "apple",
  delay = 0,
  stagger = 0.06,
  start = true,
  once = true,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "0px 0px -12% 0px" });
  const Tag = motion[as] ?? motion.h2;
  const words = text.split(" ");
  const variantClass = variant === "apple" ? "" : `apple-gradient--${variant}`;

  const isGradient = (index) =>
    gradient === true || (Array.isArray(gradient) && gradient.includes(index));

  return (
    <Tag
      ref={ref}
      aria-label={text}
      className={className}
      initial="hidden"
      animate={start && inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <motion.span
            aria-hidden="true"
            variants={wordVariants}
            className={`inline-block will-change-transform ${
              isGradient(index) ? `apple-gradient ${variantClass}` : ""
            }`}
            // Phase-shift each word so the gradient ripples across the line.
            style={isGradient(index) ? { animationDelay: `${-index * 0.8}s` } : undefined}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </Tag>
  );
};

export default SplitText;
