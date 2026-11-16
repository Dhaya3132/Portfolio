import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import SplitText from "./ui/SplitText";
import { EASE_FLUID } from "../utils/motion";

const blogs = [
  {
    id: 1,
    title: "Understanding MCP, RAG, and AI Agents — The Backbone of Modern AI Systems",
    link: "https://medium.com/@dhayalanu103/understanding-mcp-rag-and-ai-agents-the-backbone-of-modern-ai-systems-12631d67efc5",
    tag: "AI Architecture",
    image: "/assests/company/blog1.webp",
  },
  {
    id: 2,
    title: "I stumbled across Google's Quantum AI chip — and it broke my brain a little",
    link: "https://medium.com/@dhayalanu103/i-stumbled-across-googles-quantum-ai-chip-and-it-broke-my-brain-a-little-f264746a6bb0",
    tag: "Quantum AI",
    image: "/assests/company/blog2.webp",
  },
  {
    id: 3,
    title: "AI Model vs AI Agent — A Simple Real-World Explanation",
    link: "https://medium.com/@dhayalanu103/ai-model-vs-ai-agent-a-simple-real-world-explanation-f9c71d930a4d",
    tag: "AI Concepts",
    image: "/assests/company/blog3.webp",
  },
];

const BlogRow = ({ blog, index, onHover }) => (
  <motion.a
    href={blog.link}
    target="_blank"
    rel="noopener noreferrer"
    data-cursor-label="Read"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.9, delay: index * 0.12, ease: EASE_FLUID }}
    onPointerEnter={(event) => event.pointerType === "mouse" && onHover(index)}
    onPointerLeave={() => onHover(null)}
    className="group relative isolate flex w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border-b border-black/10 px-4 py-7 last:border-b-0 md:px-6"
  >
    {/* ink fill that sweeps up on hover */}
    <span className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-2xl bg-black transition-transform duration-500 ease-fluid group-hover:scale-y-100" />

    <div className="flex items-start gap-4 md:gap-8">
      <span className="apple-gradient mt-1 font-display text-2xl md:text-4xl">0{index + 1}</span>
      <div>
        <span className="inline-block rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-black transition-colors duration-500 group-hover:border-white/20 group-hover:text-white/70">
          {blog.tag}
        </span>
        <h3 className="mt-2 font-serif text-2xl font-medium text-black transition-[color,translate] duration-500 ease-fluid group-hover:translate-x-2 group-hover:text-white md:text-3xl">
          {blog.title}
        </h3>
      </div>
    </div>

    <div className="flex-shrink-0 rounded-full bg-black/5 p-3 transition-all duration-500 ease-fluid group-hover:rotate-45 group-hover:bg-white">
      <FiArrowUpRight size={22} className="text-black" />
    </div>
  </motion.a>
);

const Blogs = () => {
  const [hovered, setHovered] = useState(null);

  // Preview card that trails the cursor while a row is hovered.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.6 });

  const handleMove = (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  return (
    <section className="relative m-2 px-5 font-sans md:px-10" onPointerMove={handleMove}>
      <SplitText
        as="h2"
        text="Recent Blogs"
        gradient={[1]}
        className="mb-12 text-center font-display text-5xl font-semibold text-black md:text-7xl"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-start justify-start gap-3">
        {blogs.map((blog, index) => (
          <BlogRow key={blog.id} blog={blog} index={index} onHover={setHovered} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-10 text-center font-serif text-lg italic text-black/50"
      >
        Stay tuned—more insights coming soon.
      </motion.p>

      {/* floating preview (desktop only) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -8 }}
              transition={{ duration: 0.4, ease: EASE_FLUID }}
              className="relative ml-10 -mt-48 h-40 w-64 overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)]"
            >
              {blogs.map((blog, index) => (
                <motion.img
                  key={blog.id}
                  src={blog.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                  animate={{ opacity: hovered === index ? 1 : 0, scale: hovered === index ? 1 : 1.15 }}
                  transition={{ duration: 0.5, ease: EASE_FLUID }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Blogs;
