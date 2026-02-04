import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../utils/json/data";
import Marquee from "react-fast-marquee";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const text = "About Me".split("");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-start justify-center px-6"
    >
      {/* Intro */}
      <motion.p
        variants={itemVariants}
        className="text-start font-SchoolBell text-3xl md:text-4xl text-gray-600 mb-6"
      >
        Hey there, I’m Dhayalan
      </motion.p>

      {/* Headline */}
      <motion.h2
        variants={itemVariants}
        className=" text-start text-4xl md:text-7xl font-light text-gray-900 leading-tight w-full"
      >
        Engineering{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500 font-normal">
          scalable web experiences
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="mt-2 max-w-4xl text-start text-lg md:text-xl text-gray-500 leading-relaxed"
      >
        Frontend Developer with 2+ years of experience building scalable,
        high-performance web applications for retail and POS systems.
      </motion.p>

      {/* Keywords Marquee */}
      <motion.div
        variants={itemVariants}
        className="relative mt-16 h-full w-full overflow-x-hidden"
      >
        <Marquee speed={60} gradient={false}>
          {["Code", "Design", "Develop", "Review", "Analyze"].map(
            (item, index) => (
              <span
                key={index}
                className="mx-10 text-3xl font-medium text-gray-300 tracking-wide whitespace-nowrap"
              >
                {item}
              </span>
            ),
          )}
        </Marquee>
      </motion.div>

      {/* Tech Stack */}
      <motion.div variants={itemVariants} className="w-full mt-14">
        <Marquee speed={40} gradient={false}>
          {techStack.map((item, index) => (
            <div
              key={index}
              className="mx-4 flex items-center gap-3 rounded-xl px-5 py-3
                     bg-white/60 backdrop-blur border border-gray-200"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm text-gray-700 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default About;
