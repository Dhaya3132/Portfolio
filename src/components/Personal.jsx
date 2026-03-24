import React from 'react'
import { motion } from 'framer-motion';

const Personal = () => {
    return (
        <section className='w-full mb-10'>
            {/* <div className="relative inline-block mb-10"><motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white"
            >
                About <span className="text-[var(--color-accent)] italic">Me</span>
            </motion.h2>
                </div> */}



            <div className="flex flex-wrap justify-start md:justify-center text-5xl md:text-8xl py-5 md:py-20 text-gray-100 text-start md:text-center font-serif leading-tight">
                {"Frontend Developer with 2 years of hands-on experience building scalable, high-performance web applications for retail and POS systems."
                    .split(" ")
                    .map((word, index) => (
                        <span
                            key={index}
                            className="mx-2 cursor-default transition-colors duration-300 hover:text-[var(--color-accent)] hover:italic"
                        >
                            {word}
                        </span>
                    ))}
            </div>
        </section>
    )
}

export default Personal