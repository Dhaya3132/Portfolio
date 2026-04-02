import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    title: "Understanding MCP, RAG, and AI Agents — The Backbone of Modern AI Systems",
    image: "/assests/company/blog1.webp",
    link: "https://medium.com/@dhayalanu103/understanding-mcp-rag-and-ai-agents-the-backbone-of-modern-ai-systems-12631d67efc5",
    tag: "AI Architecture"
  },
  {
    id: 2,
    title: "I stumbled across Google's Quantum AI chip — and it broke my brain a little",
    image: "/assests/company/blog2.webp",
    link: "https://medium.com/@dhayalanu103/i-stumbled-across-googles-quantum-ai-chip-and-it-broke-my-brain-a-little-f264746a6bb0",
    tag: "Quantum AI"
  },
  {
    id: 3,
    title: "AI Model vs AI Agent — A Simple Real-World Explanation",
    image: "/assests/company/blog3.webp",
    link: "https://medium.com/@dhayalanu103/ai-model-vs-ai-agent-a-simple-real-world-explanation-f9c71d930a4d",
    tag: "AI Concepts"
  }
];

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => window.open(blog.link, "_blank")}
      className="group relative w-full md:w-[380px] rounded-[2rem] p-3 glassMorp border border-white/5 hover:border-[var(--color-accent)] transition-all duration-500 cursor-pointer hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] mb-5">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tag Overlay */}
        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent)]">
            {blog.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-4">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl md:text-2xl font-serif font-medium leading-tight text-white group-hover:text-[var(--color-accent)] transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>
          <div className="flex-shrink-0 mt-1 bg-white/5 p-2 rounded-full group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
            <FiArrowUpRight size={20} />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-sans text-gray-500 uppercase tracking-widest mt-4">
          <span>Read on Medium</span>
          <span className="h-px w-8 bg-gray-800" />
        </div>
      </div>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <section className="py-5">
      <div className="relative inline-block mb-16">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-white"
        >
          Recent{" "}
          <span className="text-[var(--color-accent)] italic">Blogs</span>
        </motion.h2>
        <motion.svg
          className="absolute -bottom-3 left-0 w-full h-4 text-[var(--color-accent)]"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <path
            d="M2 8.5C50 2 150 2 198 8.5"
            stroke="currentColor"
            strokeWidth="3"
          />
        </motion.svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-serif text-center italic text-gray-500 text-lg mt-10"
      >
        Stay tuned—more insights coming soon.
      </motion.p>
    </section>
  );
};

export default Blogs;
