import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const blogs = [
  {
    id: 1,
    title: "Understanding MCP, RAG, and AI Agents — The Backbone of Modern AI Systems",
    link: "https://medium.com/@dhayalanu103/understanding-mcp-rag-and-ai-agents-the-backbone-of-modern-ai-systems-12631d67efc5",
    tag: "AI Architecture"
  },
  {
    id: 2,
    title: "I stumbled across Google's Quantum AI chip — and it broke my brain a little",
    link: "https://medium.com/@dhayalanu103/i-stumbled-across-googles-quantum-ai-chip-and-it-broke-my-brain-a-little-f264746a6bb0",
    tag: "Quantum AI"
  },
  {
    id: 3,
    title: "AI Model vs AI Agent — A Simple Real-World Explanation",
    link: "https://medium.com/@dhayalanu103/ai-model-vs-ai-agent-a-simple-real-world-explanation-f9c71d930a4d",
    tag: "AI Concepts"
  }
];

const BlogRow = ({ blog, index }) => {
  return (
    <motion.a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full p-3 group flex items-center justify-between gap-2 py-6 border-b border-black/10 last:border-b-0"
    >
      <div>
        <span className="text-[10px] font-medium uppercase tracking-wider text-black">
          {blog.tag}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif font-medium text-black mt-1 group-hover:underline decoration-gray-200 underline-offset-4">
          {blog.title}
        </h3>
      </div>
      <div className="flex-shrink-0 bg-black/5 p-3 rounded-full group-hover:bg-blue-500 transition-all duration-300 transform group-hover:rotate-45">
        <FiArrowUpRight size={22} className={`group-hover:text-white text-black`} />
      </div>
    </motion.a>
  );
};

const Blogs = () => {
  return (
    <section className="relative overflow-hidden m-2 px-5 md:px-10 font-sans">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-display font-semibold text-black mb-12 text-center"
      >
        Recent Blogs
      </motion.h2>

      <div className="flex flex-col gap-3 max-w-5xl justify-start items-start mx-auto rounded-3xl">
        {blogs.map((blog, index) => (
          <BlogRow key={blog.id} blog={blog} index={index} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-serif text-center italic text-black/50 text-lg mt-10"
      >
        Stay tuned—more insights coming soon.
      </motion.p>
    </section>
  );
};

export default Blogs;
