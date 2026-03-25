import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-evenly" >
      {/* Left Side: Dark Content */}
      <div className="w-full lg:w-1/2 bg-[var(--color-primary)] text-white flex flex-col justify-center px-8 lg:px-20 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl mx-auto lg:mx-0"
        >
          <div className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-1.5 text-xs font-semibold tracking-wider mb-8 rounded-full uppercase">
            Creative Developer
          </div>
          <p className="text-5xl md:text-7xl font-serif font-light leading-[1.1]">I'm Dhayalan</p>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold mb-6 leading-[1.1]">
            Crafting Digital <br />
            <span className="text-[var(--color-text-muted)] italic">Experiences.</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-light)] opacity-80 font-normal leading-relaxed mb-12 max-w-lg font-sans">
            Specializing in high-performance web systems and clean UI architectures. Building software that scales effortlessly without the noise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full md:w-fit btn-primary flex justify-center md:justify-start items-center gap-2 group w-fit">
              View Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/1ETYxsfHW7dLr_7NI3VUD2_qqLhLJ4mklH8CGt-vdf5g/edit?usp=sharing",
                  "_blank"
                )
              }
              className="w-full md:w-fit text-center md:text-left px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Light / Beige Image Area */}
      <div className="lg:w-1/2 flex items-start justify-start relative overflow-hidden">

        <div className="mx-auto">
          <div className="m-3 border-1 border-[var(--color-accent-hover)] p-2" style={{ borderRadius: "30% 70% 50% 24%" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative w-full max-w-md aspect-[3/3] overflow-hidden shadow-1xl"
              style={{ borderRadius: "30% 70% 50% 24%" }}
            >
              {/* Placeholder for portrait image */}
              {/* <div className="absolute inset-0 bg-[#D9CDBF] mix-blend-multiply opacity-20 z-10"></div> */}


              <img
                src="/assests/profile/hero_section.jpeg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />


            </motion.div>

          </div>
        </div>



      </div>

    </div>
  );
};

export default About;
