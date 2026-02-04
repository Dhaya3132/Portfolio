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
      className="flex flex-col items-start justify-center "
    >
      <div className="bg-white border border-neutral-200 rounded-3xl p-10 m-0">
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
      </div>

      {/* Tech Stack */}
      <motion.div
        variants={itemVariants}
        className="w-full mt-5 bg-white border border-neutral-200 rounded-3xl w-fit p-3"
      >
        <Marquee speed={40} gradient={false}>
          {techStack.map((item, index) => (
            <div
              key={index}
              className="mx-4 flex items-center gap-3 rounded-xl px-5 py-3 bg-white/10 backdrop-blur border border-gray-100"
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

      {/* Keywords Marquee */}
      {/* <motion.div
        variants={itemVariants}
        className="mt-16 w-full"
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
      </motion.div> */}

      {/* About_Me */}
      <motion.div
        variants={itemVariants}
        className="w-full mt-5 bg-white border border-neutral-200 rounded-3xl w-fit p-10"
      >
        <span className="p-2 bg-gray-200 border border-gray-300 rounded-xl font-normal px-4">
          About Me
        </span>

        <div className="mt-3 font-normal text-md">
          <p className="py-3">
            Frontend Developer with 2 years of hands-on experience building
            scalable, high-performance web applications for retail and POS
            systems. Hands-on experience working with React.js and JavaScript
            (ES6+), building reusable and responsive UI components using modern
            React Hooks. Proficient in Redux, Redux-Saga, and REST API
            integration, delivering production-ready features actively used
            across 140+ retail stores.
          </p>
        </div>
      </motion.div>

      {/* Carrer Story */}
      <motion.div
        variants={itemVariants}
        className="w-full mt-5 bg-white border border-neutral-200 rounded-3xl w-fit p-10"
      >
        <span className="p-2 bg-gray-200 border border-gray-300 rounded-xl font-normal px-4">
          Story
        </span>

        <div className="mt-3 font-normal text-md">
          <h5 className="font-semibold text-3xl mt-10">My Carrer Story</h5>
          <p className="py-3">
            Started my career by designing UI pages in Figma, which sparked my
            interest in understanding UX and how designs turn into real
            applications. This motivated me to learn web development and build
            my own designed pages. Later, I joined a startup where I worked on
            bug fixes, built scalable modules, and gained experience in
            microservice architecture. I also collaborated with backend and
            UI/UX teams to deliver seamless user interfaces.
          </p>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        variants={itemVariants}
        className="w-full mt-5 bg-white border border-neutral-200 rounded-3xl w-fit p-10"
      >
        <span className="p-2 bg-gray-200 border border-gray-300 rounded-xl font-normal px-4">
          Tech Stack
        </span>

        <div className="mt-3 font-normal text-md">
          <h5 className="font-semibold text-3xl mt-10">
            Tech Stack Behind My Work
          </h5>
          <p className="py-3">
            I’m skilled in HTML, CSS, JavaScript, React.js, Bootstrap, and
            Tailwind CSS, with strong experience in responsive web design. I
            have hands-on expertise in component development, state management
            using Redux and Redux-Saga, and API integration. I also work closely
            with design teams using Figma to ensure smooth design-to-development
            execution.{" "}
          </p>
        </div>
      </motion.div>

      {/* Let's Collbarate */}
      <motion.div
        variants={itemVariants}
        className="w-full mt-5 bg-white border border-neutral-200 rounded-3xl w-fit p-5"
      >
        <div className="mt-3 font-normal w-full flex flex-col md:flex-row items-center justify-start md:justify-center gap-5">
          <div>
            <h5 className="font-semibold text-3xl md:text-6xl mt-10">Let's Collaborate</h5>
            <p className="py-3 w-full md:w-96 text-gray-500 text-sm md:text-lg">
              I’m always excited to work on new and challenging projects.
              Whether you're looking to build a brand from the ground up,
              redesign your website, or create engaging digital experiences, I'm
              here to help bring your vision to life.
            </p>
          </div>
          <div>
            <img
              src="/assests/profile/image.png"
              className="h-25 md:h-45 w-25 md:w-45"
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
