import React, { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import ImageWithSkeleton from "./ui/ImageWithSkeleton";
import SplitText from "./ui/SplitText";
import ScrollWords from "./ui/ScrollWords";
import Magnetic from "./ui/Magnetic";
import { useScrollTo } from "../hooks/useScrollTo";
import { EASE_FLUID } from "../utils/motion";

// A layer that drifts with the mouse (depth) and with scroll (parallax).
const DepthLayer = ({ mouseX, mouseY, scrollProgress, depth, scrollDepth, children }) => {
  const mx = useTransform(mouseX, (v) => v * depth);
  const my = useTransform(mouseY, (v) => v * depth);
  const sy = useTransform(scrollProgress, [0, 1], [scrollDepth, -scrollDepth]);
  const y = useTransform([my, sy], ([a, b]) => a + b);

  return (
    <motion.div aria-hidden="true" style={{ x: mx, y }} className="pointer-events-none absolute inset-0">
      {children}
    </motion.div>
  );
};

const objects = [
  {
    src: "/assests/about/helmet.png",
    className: "personal-object personal-dice",
    animate: { y: [0, -14, 0], rotate: [-8, -2, -8] },
    duration: 5,
    depth: 40,
    scrollDepth: 90,
  },
  {
    src: "/assests/about/character.webp",
    className: "personal-object personal-character",
    animate: { y: [0, 12, 0], rotate: [5, 1, 5] },
    duration: 6,
    depth: -30,
    scrollDepth: 140,
  },
  {
    src: "/assests/about/artwork.webp",
    className: "personal-object personal-artwork",
    animate: { y: [0, -10, 0], rotate: [7, 11, 7] },
    duration: 7,
    depth: 55,
    scrollDepth: 60,
  },
  {
    src: "/assests/about/wheel.webp",
    className: "personal-object personal-wheel",
    animate: { y: [0, 10, 0], rotate: [-12, -5, -12] },
    duration: 5.5,
    depth: -45,
    scrollDepth: 110,
  },
];

const Personal = () => {
  const sectionRef = useRef(null);
  const scrollTo = useScrollTo();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useSpring(rawX, { stiffness: 60, damping: 18 });
  const mouseY = useSpring(rawY, { stiffness: 60, damping: 18 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative isolate mx-auto flex min-h-[760px] w-full max-w-7xl flex-col items-center justify-center overflow-hidden p-6 text-center md:p-10"
    >
      {objects.map((object) => (
        <DepthLayer
          key={object.src}
          mouseX={mouseX}
          mouseY={mouseY}
          scrollProgress={scrollYProgress}
          depth={object.depth}
          scrollDepth={object.scrollDepth}
        >
          <ImageWithSkeleton
            src={object.src}
            alt=""
            aria-hidden="true"
            className={object.className}
            imgClassName="object-contain"
            animate={object.animate}
            transition={{ duration: object.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        </DepthLayer>
      ))}

      <div className="relative z-10 max-w-4xl">
        <motion.h5
          initial={{ opacity: 0, scale: 0.6, filter: "blur(16px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease: EASE_FLUID }}
          className="mb-2 text-5xl text-black md:text-8xl"
        >
          Hello<span className="apple-gradient">.</span>
        </motion.h5>

        <SplitText
          as="h2"
          text="I Make designs people remember"
          gradient={[4]}
          delay={0.15}
          className="mb-6 font-display text-4xl text-orange-500 md:text-7xl"
        />

        <ScrollWords
          text="I develop clean websites, apps, and systems that help ideas look sharper, feel trusted and work with purpose"
          highlight={["sharper", "trusted", "purpose"]}
          className="max-w-5xl text-center text-3xl font-medium leading-tight text-black md:text-6xl"
        />

        <motion.div
          className="personal-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: EASE_FLUID }}
        >
          <Magnetic strength={0.4}>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="group relative mt-6 -rotate-9 overflow-hidden rounded-xl bg-indigo-500 px-6 py-3 font-medium text-white shadow-[0_18px_40px_-12px_rgba(99,102,241,0.8)] transition-transform duration-500 hover:rotate-0"
            >
              <span className="apple-gradient-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative">Start project</span>
            </button>
          </Magnetic>
          <ImageWithSkeleton
            src="/assests/about/ping.webp"
            alt=""
            aria-hidden="true"
            className="personal-ping"
            animate={{ scale: [1, 1.08, 1], rotate: [8, 13, 8] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Personal;
