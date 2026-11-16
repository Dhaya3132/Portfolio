import React from "react";
import { motion } from "framer-motion";
import CountUp from "./ui/CountUp";
import { useTilt } from "../hooks/useTilt";

const stats = [
  {
    value: 2,
    suffix: "+",
    title: "Years of Experience",
    text: "Developing websites, apps, and digital products with a clear focus on usability.",
  },
  {
    value: 3,
    suffix: "+",
    title: "Projects Developed",
    text: "From landing pages to complete website experiences.",
  },
  {
    value: 2,
    suffix: "+",
    title: "Industries explored",
    text: "Worked across SaaS, retail, finance and service businesses.",
  },
  {
    value: 100,
    suffix: "%",
    title: "Full Stack developer",
    text: "Responsive websites designed, built, and published.",
  },
];

const modifiers = ["one", "two", "three", "four"];

const StatCard = ({ stat, index }) => {
  const tilt = useTilt({ max: 8 });

  return (
    <motion.article
      className={`home-stat-card home-stat-card--${modifiers[index]}`}
      initial={{ opacity: 0, y: -90, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 110, damping: 13, mass: 0.9, delay: index * 0.12 }}
      style={tilt.style}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
    >
      <span className="home-stat-pin" aria-hidden="true" />
      <strong>
        <CountUp to={stat.value} suffix={stat.suffix} className="apple-gradient" />
      </strong>
      <h5>{stat.title}</h5>
      <p>{stat.text}</p>
    </motion.article>
  );
};

const Stats = () => (
  <section>
    <div className="home-stats" aria-label="Experience highlights">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} stat={stat} index={index} />
      ))}
    </div>
  </section>
);

export default Stats;
