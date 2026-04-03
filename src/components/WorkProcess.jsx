import React from 'react';
import { motion } from 'framer-motion';
import { FiPenTool, FiLayers, FiCode, FiCheckCircle, FiSend } from 'react-icons/fi';

const WorkProcess = () => {
    const steps = [
        {
            id: '01',
            title: 'Design Plan',
            description: 'Researching requirements, wireframing, and establishing the visual direction and user experience.',
            icon: <FiPenTool className="text-2xl" />,
            color: 'var(--color-accent)'
        },
        {
            id: '02',
            title: 'Prioritize Structure',
            description: 'Designing the architecture, defining the information flow, and setting up the project roadmap.',
            icon: <FiLayers className="text-2xl" />,
            color: 'var(--color-accent)'
        },
        {
            id: '03',
            title: 'Development',
            description: 'Crafting the application with clean, modular code using modern frontend technologies and best practices.',
            icon: <FiCode className="text-2xl" />,
            color: 'var(--color-accent)'
        },
        {
            id: '04',
            title: 'Testing',
            description: 'Rigorous unit and integration testing to ensure every component works flawlessly and bug-free.',
            icon: <FiCheckCircle className="text-2xl" />,
            color: 'var(--color-accent)'
        },
        {
            id: '05',
            title: 'Production',
            description: 'Deploying the refined product to the live server, with continuous monitoring and optimization.',
            icon: <FiSend className="text-2xl" />,
            color: 'var(--color-accent)'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="relative w-full py-10 overflow-hidden">
            <div className="relative inline-block mb-16">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-white"
                >
                    Work{" "}
                    <span className="text-[var(--color-accent)] italic">Process</span>
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

            <motion.div
                className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Connecting Line (Desktop) */}
                <div className="absolute top-[40px] left-0 w-full h-[1px] bg-[var(--color-divider)] hidden md:block z-0" />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        variants={itemVariants}
                        className="relative z-10 flex flex-col items-center md:items-start group md:flex-1"
                    >
                        {/* Step Circle/Wizard Ball */}
                        <div className="relative mb-6">
                            <div className="w-20 h-20 rounded-full glassMorp flex items-center justify-center border border-[var(--color-divider)] group-hover:border-[var(--color-accent)] group-hover:scale-110 transition-all duration-500 bg-white/5 relative z-10 overflow-hidden">
                                <div className="absolute inset-0 bg-[var(--color-accent)]/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                                <div className="text-[var(--color-accent)] transition-transform duration-500 group-hover:scale-110">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Step Number Overlay */}
                            <span className="absolute -top-2 -right-2 text-xs font-sans font-bold bg-[var(--color-accent)] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                {step.id}
                            </span>
                        </div>

                        {/* Text Content */}
                        <div className="text-center md:text-left px-2">
                            <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-[200px] md:max-w-none">
                                {step.description}
                            </p>
                        </div>

                        {/* Vertical Connecting Line (Mobile) */}
                        {index < steps.length - 1 && (
                            <div className="w-[1px] h-12 bg-[var(--color-divider)] mt-4 md:hidden" />
                        )}
                    </motion.div>
                ))}
            </motion.div>


        </section>
    );
};

export default WorkProcess;
