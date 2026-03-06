import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../utils/json/data";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-24 pt-10"
    >
      {/* Brutalist Hero */}
      <section className="relative">
        <div className="absolute -left-10 top-0 text-[180px] font-black text-white/5 select-none leading-none -z-10">
          DHAYALAN
        </div>

        <div className="max-w-2xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-block bg-[#dfff00] text-black font-bold px-4 py-1 text-sm mb-8"
          >
            SYSTEM_STATUS: ACTIVE
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black text-distorted mb-8 leading-[0.85]">
            BUILDING <br />
            <span className="text-white/20">RAW</span> DIGITAL <br />
            <span className="text-[#dfff00]">POWER</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-tight border-l-4 border-[#dfff00] pl-6 py-2">
            Frontend Engineer specializing in high-performance web systems and
            experimental UI architectures. Currently optimizing retail POS ecosystems.
          </p>
        </div>
      </section>

      {/* Tech Strip */}
      <div className="border-t border-b border-[#1a1a1a] py-6 -mx-10 overflow-hidden">
        <Marquee speed={60} gradient={false}>
          {techStack.map((item, index) => (
            <div
              key={index}
              className="mx-12 flex items-center gap-4 group cursor-none"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-10 h-10 grayscale invert brightness-200 group-hover:grayscale-0 group-hover:invert-0 transition-all"
              />
              <span className="text-2xl font-black italic tracking-tighter opacity-10 group-hover:opacity-100 group-hover:text-[#dfff00] transition-all">
                {item.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Staggered Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          className="brutalist-card acid-border"
        >
          <span className="text-[10px] font-mono text-[#dfff00] mb-4 block">// PROTOCOL_01</span>
          <h2 className="text-4xl font-black mb-6">Core Ethics</h2>
          <p className="text-gray-400 leading-relaxed font-mono text-sm">
            I believe in building software that doesn't just look good, but feels
            physically robust. My approach bridges the gap between raw backend
            logic and high-fidelity frontend execution.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          className="brutalist-card mt-0 md:mt-20 border-white/10"
        >
          <span className="text-[10px] font-mono text-white/30 mb-4 block">// PROTOCOL_02</span>
          <h2 className="text-4xl font-black mb-6">Experience</h2>
          <p className="text-gray-400 leading-relaxed font-mono text-sm">
            2+ years deep in reactive systems. Scaling POS platforms for 140+
            nodes. Architecture is the foundation of digital experience.
          </p>
        </motion.div>
      </div>

      {/* Unique CTA */}
      <section className="py-20 text-center border-t border-[#1a1a1a] mb-20">
        <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter">
          NEED <span className="text-[#dfff00]">SUPPORT?</span>
        </h2>
        <button className="bg-white text-black font-black px-12 py-5 text-2xl hover:bg-[#dfff00] transition-colors shadow-[10px_10px_0px_rgba(255,255,255,0.1)] hover:shadow-[10px_10px_0px_rgba(223,255,0,0.5)]">
          INIT_CONTACT();
        </button>
      </section>
    </motion.div>
  );
};

export default About;
