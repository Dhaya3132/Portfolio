import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageWithSkeleton from "./ui/ImageWithSkeleton";
import SplitText from "./ui/SplitText";
import { techStack } from "../utils/json/data";
import { EASE_FLUID } from "../utils/motion";

const spreadPositions = [
  { x: -380, y: -190, rotate: -18, scale: 1.0 },
  { x: -260, y: -260, rotate: 12, scale: 0.9 },
  { x: -110, y: -300, rotate: -8, scale: 1.1 },
  { x: 100, y: -280, rotate: 15, scale: 0.9 },
  { x: 280, y: -220, rotate: -14, scale: 1.0 },

  { x: -430, y: -50, rotate: 20, scale: 0.85 },
  { x: -290, y: -100, rotate: -12, scale: 1.05 },
  { x: 280, y: -100, rotate: 18, scale: 0.9 },
  { x: 430, y: -40, rotate: -20, scale: 1.0 },

  { x: -450, y: 120, rotate: -10, scale: 1.0 },
  { x: -300, y: 150, rotate: 16, scale: 0.9 },
  { x: 300, y: 130, rotate: -18, scale: 1.05 },
  { x: 450, y: 120, rotate: 10, scale: 0.9 },

  { x: -350, y: 270, rotate: 15, scale: 0.9 },
  { x: -190, y: 230, rotate: -20, scale: 1.0 },
  { x: 190, y: 240, rotate: 12, scale: 0.95 },
  { x: 350, y: 270, rotate: -15, scale: 1.0 },

  { x: -270, y: 340, rotate: -12, scale: 0.9 },
  { x: -80, y: 320, rotate: 18, scale: 1.0 },
  { x: 100, y: 330, rotate: -15, scale: 0.9 },
  { x: 280, y: 340, rotate: 14, scale: 1.0 },
];

// Shrinks the icon "burst" on narrow screens so it stays inside the viewport.
const useSpreadScale = () => {
  const getScale = () => Math.min(1, Math.max(0.42, window.innerWidth / 1100));
  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const onResize = () => setScale(getScale());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return scale;
};

const TechShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);
  const spread = useSpreadScale();

  return (
    <section
      id="skills"
      className="relative mx-auto mt-20 flex min-h-[760px] flex-col items-center justify-center overflow-hidden"
    >
      <SplitText
        as="h4"
        text="What I bring to the table..."
        gradient={[4, 5]}
        className="relative z-30 px-4 text-center font-display text-5xl text-black md:text-7xl"
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: EASE_FLUID }}
        className="relative z-30 max-w-xl p-3 text-center text-sm text-black/70 md:text-base"
      >
        Creating thoughtful digital experiences and gradually evolved into
        understanding the systems, logic, and foundations that bring those
        experiences to life.
      </motion.p>

      {/* MacBook with a breathing gradient glow behind it */}
      <div className="relative z-30 mt-4">
        <motion.div
          aria-hidden="true"
          // A 64px blur over a gradient that repaints every frame is one of the
          // most expensive things a page can do, so this glow stays static
          // (it still breathes through the opacity/scale animation below).
          className="apple-gradient-bg absolute inset-6 -z-10 rounded-full blur-3xl"
          style={{ animation: "none" }}
          animate={{ opacity: isHovered ? 0.75 : 0.35, scale: isHovered ? 1.3 : 1 }}
          transition={{ duration: 0.8, ease: EASE_FLUID }}
        />
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [-8, -2, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ImageWithSkeleton
            src="/assests/about/Macbook-Pro-PNG-File.png"
            alt="MacBook — hover to reveal my tech stack"
            data-cursor
            className="h-56 w-56 cursor-pointer"
            imgClassName="object-contain"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered((prev) => !prev)}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          />
        </motion.div>
      </div>

      <svg viewBox="0 0 500 180" className="h-[180px] w-[min(500px,92vw)] overflow-visible" aria-hidden="true">
        <defs>
          <path id="curve" d="M 40 40 Q 250 180 460 40" fill="none" />
          <linearGradient
            id="curve-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="500"
            y2="0"
            spreadMethod="repeat"
          >
            <stop offset="0%" stopColor="#0a84ff" />
            <stop offset="33%" stopColor="#bf5af2" />
            <stop offset="66%" stopColor="#ff375f" />
            <stop offset="100%" stopColor="#0a84ff" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0"
              to="500 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        <AnimatePresence mode="wait" initial={false}>
          <motion.text
            key={isHovered ? "great" : "hint"}
            className="font-display"
            fill="url(#curve-gradient)"
            fontSize="42"
            textAnchor="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <textPath href="#curve" startOffset="50%">
              {isHovered ? (
                "Great !!!"
              ) : (
                <>
                  <tspan className="hidden md:inline">you wanna see it!... hover me</tspan>
                  <tspan className="inline md:hidden">you wanna see it!... tap me</tspan>
                </>
              )}
            </textPath>
          </motion.text>
        </AnimatePresence>
      </svg>

      {/* Tech icons burst out of the laptop */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {techStack.map((tech, index) => {
          const position = spreadPositions[index];

          return (
            <motion.div
              key={`${tech.label}-${index}`}
              className="absolute left-1/2 top-1/2"
              initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0, rotate: 0 }}
              animate={
                isHovered
                  ? {
                      x: `calc(-50% + ${position.x * spread}px)`,
                      y: `calc(-50% + ${position.y * spread}px)`,
                      opacity: 1,
                      scale: position.scale,
                      rotate: position.rotate,
                    }
                  : { x: "-50%", y: "-50%", opacity: 0, scale: 0, rotate: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 16,
                mass: 0.7,
                delay: isHovered ? index * 0.025 : 0,
              }}
            >
              <ImageWithSkeleton
                src={tech.icon}
                alt={tech.label}
                className="h-9 w-9 drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)] md:h-11 md:w-11"
                imgClassName="object-contain"
                animate={isHovered ? { y: [0, -5, 0, 4, 0] } : { y: 0 }}
                transition={{
                  duration: 3 + (index % 3),
                  repeat: isHovered ? Infinity : 0,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TechShowcase;
