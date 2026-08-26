import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import ResumeModal from "./ResumeModal";

const About = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  return (
    <div className="relative min-h-screen w-full flex items-start justify-start overflow-hidden text-black">
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assests/video/heroSectionBackground.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* <div className="absolute inset-0 bg-[var(--color-primary)]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/20" /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-start px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 w-full min-h-screen flex flex-col justify-between gap-12"
      >
        <div className="text-end">
          <h3 className="font-display text-xl">Dhayalan</h3>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:justify-evenly lg:items-center">
          <div className="min-w-0">
            <h1 className="max-w-4xl font-display text-4xl sm:text-5xl md:text-7xl xl:text-[7rem] font-black leading-[0.82] tracking-[-0.08em] text-black">
              Building products that move fast and scale clean
            </h1>

            <div className="max-w-xl rounded-[26px] mt-8 md:mt-10">
              <p className="text-base md:text-xl text-black/85 font-light leading-relaxed">
                I design and engineer high-performance web systems that connect
                product strategy, backend reliability, and polished user
                experiences into one clear result.
              </p>
            </div>
          </div>
          <div className="relative self-center w-45 h-52 shrink-0 bg-gray-50 align-center p-3 rounded border border-gray-100 rotate-12 shadow">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white">
                <img
                  src="/assests/about/Profile_Image.png"
                  alt=""
                  className="h-34 w-36 rounded"
                />
              </div>
              <div className="mt-2 flex flex-col text-center font-display">
                <p>Software Engineer</p>
                <p>2026</p>
              </div>
            </div>
            <img
              src="/assests/about/ping.png"
              alt=""
              aria-hidden="true"
              className="absolute -bottom-6 -right-5 w-12 h-12 object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-center w-full">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button className="flex items-center justify-center gap-3 w-full sm:w-fit text-center px-8 py-3 rounded-2xl border border-white/20 bg-blue-500 text-white font-light backdrop-blur-md transition-all duration-300 group">
              View Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="w-full sm:w-fit text-center px-8 py-3 rounded-2xl border border-white/15 bg-black text-white font-light hover:bg-black/5 hover:border-2 hover:border-black hover:text-black transition-all duration-300 backdrop-blur-md"
            >
              Resume
            </button>
          </div>
        </div>
      </motion.div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default About;
