import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className="relative inline-block mb-10"><motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white"
            >
                Recent <span className="text-[var(--color-accent)] italic">Blogs</span>
            </motion.h2>
                <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-[var(--color-accent)]"
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
                        strokeWidth="2"
                    />
                </motion.svg></div>

            <div className='cardSlider py-10 flex flex-col md:flex-row gap-5 items-center'>

                <div onClick={() =>
                    window.open(
                        "https://medium.com/@dhayalanu103/understanding-mcp-rag-and-ai-agents-the-backbone-of-modern-ai-systems-12631d67efc5",
                        "_blank"
                    )
                } className="card border-1 border-gray-900 h-full md:h-80 w-full md:w-96 rounded-3xl p-2 flex flex-col justify-between">

                    <div className='h-46 w-full rounded-2xl'>
                        <img src="/assests/company/blog1.webp" alt="" className='h-full w-full rounded-2xl' />
                    </div>

                    <div className='p-3'>
                        <p className='text-white text-2xl font-serif italic'>
                            Understanding MCP, RAG, and AI Agents — The Backbone of Modern AI Systems
                        </p>
                    </div>

                </div>

                <div className="card border-1 border-gray-900 h-full md:h-80 w-full md:w-96 rounded-3xl p-2 flex flex-col justify-center">

                    <p className='text-3xl font-serif text-center italic'>Coming Soon...</p>

                </div>


            </div>
        </section >
    )
}

export default Blogs