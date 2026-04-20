import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ResumeModal from "./ResumeModal";

const RadialLeaf = ({ className = "" }) => (
  <svg
    className={`w-10 h-10 ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    {[...Array(16)].map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="12"
          transform={`rotate(${angle} 50 50)`}
        />
      );
    })}

    {/* Stem */}
    <line x1="50" y1="50" x2="50" y2="85" />
  </svg>
);

const About = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-evenly" >
      {/* Left Side: Dark Content */}
      <div className="w-full lg:w-1/2  bg-[var(--color-primary)] text-white flex flex-col justify-center px-8 lg:px-20 py-20 relative">
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
              onClick={() => setIsResumeModalOpen(true)}
              className="w-full md:w-fit text-center md:text-left px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Light / Beige Image Area */}
      <div className="flex items-center justify-center relative p-8">

        <div
          className="relative w-full max-w-md cursor-pointer overflow-visible"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* Hand drawn Rotating Elements on Hover */}
          {/* <AnimatePresence>
            {isImageHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              >
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-[700px] h-[700px]"
                >
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -ml-5 -mt-5"
                      style={{
                        transform: `rotate(${angle}deg) translate(240px) rotate(-${angle}deg)`
                      }}
                    >
                      <RadialLeaf
                        className={`
        ${i % 2 === 0 ? "text-emerald-300" : "text-lime-300"}
        opacity-70
        ${i % 3 === 0 ? "w-12 h-12" : "w-8 h-8"}
      `}
                      />
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence> */}

          <div className="relative z-10 m-3 border-1 border-[var(--color-accent-hover)] p-2 transition-transform duration-500 hover:scale-[1.02]" style={{ borderRadius: "30% 70% 50% 24%" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative w-full aspect-[3/3] overflow-hidden shadow-1xl"
              style={{ borderRadius: "30% 70% 50% 24%" }}
            >
              <img
                src="/assests/profile/hero_section.jpeg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

      </div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
};

export default About;
