import React from "react";
import VelocityMarquee from "./ui/VelocityMarquee";
import { skillDataSet } from "../utils/json/data";

const Star = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="mx-6 h-6 w-6 shrink-0 md:mx-10 md:h-9 md:w-9">
    <path
      fill="url(#marquee-star-gradient)"
      d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
    />
  </svg>
);

const edgeFade = {
  maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
  WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
};

const SkillsMarquee = () => (
  <section aria-label="Core skills" className="relative overflow-hidden py-10 md:py-16" style={edgeFade}>
    {/* shared gradient for every star */}
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="marquee-star-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a84ff" />
          <stop offset="50%" stopColor="#bf5af2" />
          <stop offset="100%" stopColor="#ff9f0a" />
        </linearGradient>
      </defs>
    </svg>

    <VelocityMarquee baseVelocity={-2.5}>
      {skillDataSet.map((skill, index) => (
        <span key={skill} className="flex items-center">
          <span
            className={`text-5xl font-semibold tracking-tight md:text-8xl ${
              index % 2 === 0 ? "text-black" : "text-outline"
            }`}
          >
            {skill}
          </span>
          <Star />
        </span>
      ))}
    </VelocityMarquee>

    <VelocityMarquee baseVelocity={2} className="mt-2 md:mt-4">
      {["Design", "Structure", "Develop", "Test", "Ship", "Iterate"].map((word) => (
        <span key={word} className="flex items-center">
          <span className="apple-gradient font-display text-5xl md:text-8xl">{word}</span>
          <Star />
        </span>
      ))}
    </VelocityMarquee>
  </section>
);

export default SkillsMarquee;
