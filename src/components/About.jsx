import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const titleVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        },
    };

    const text = "About Me".split("");

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full mt-3 md:mt-0 flex flex-col justify-start md:justify-center max-w-2xl"
        >
            <motion.h2
                variants={titleVariants}
                className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter flex overflow-hidden text-neutral-900 dark:text-white"
            >
                {text.map((char, index) => (
                    <motion.span key={index} variants={letterVariants} className={char === " " ? "mr-4" : ""}>
                        {char}
                    </motion.span>
                ))}
            </motion.h2>

            <motion.div className="space-y-6 text-md md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed transition-colors duration-300">
                <motion.p variants={itemVariants}>
                    Frontend Developer with 2 years of hands-on experience building scalable, high-performance web applications for
                    retail and POS systems.
                </motion.p>
                <motion.p variants={itemVariants}>
                    Hands-on experience working with React.js and JavaScript (ES6+), building reusable and
                    responsive UI components using modern React Hooks. Proficient in Redux, Redux-Saga, and REST API integration,
                    delivering production-ready features actively used across 140+ retail stores.
                </motion.p>

            </motion.div>
        </motion.div>
    );
};

export default About;

