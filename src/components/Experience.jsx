import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const Experience = () => {
    const experiences = [
        {
            id: '01',
            role: 'Frontend Developer',
            company: 'Vasanth & Co Private Limited',
            subCompany: '(via Knowillence Pvt Ltd)',
            location: 'Chennai',
            current: true,
            period: 'July 2025 - Present',
            project: 'Retail POS Platform (Microservices)',
            tech: ['React.js', 'Redux-Saga', 'Ant Design', 'Bootstrap'],
            highlights: [
                'Delivered modular micro-frontend applications improving scalability.',
                'Optimized admin-side performance and real-time inventory sync.',
                'Designed efficient scrolling data management to reduce API calls.',
                'Adopted AI-assisted development to enhance code quality.'
            ]
        },
        {
            id: '02',
            role: 'Software Engineer',
            company: 'Knowillence Private Limited',
            location: 'Coimbatore',
            period: 'Jun 2024 - Jun 2025',
            project: 'Retail POS Platform',
            current: false,
            tech: ['React.js', 'Redux', 'Redux-Saga', 'Ant Design'],
            highlights: [
                'Built POS solutions supporting 140+ retail stores.',
                'Implemented refund, cancellation, and payment workflows.',
                'Developed CRM tools for customer issue tracking.',
                'Created responsive auth flows with microservices.'
            ]
        }
    ];

    return (
        <section className="w-full">

            <div className="relative inline-block mb-10">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white"
                >
                    Work <span className="text-[var(--color-accent)] italic">History</span>
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
                </motion.svg>
            </div>


            <div className="flex flex-col border-t border-[var(--color-divider)]">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative flex flex-col md:flex-row justify-between py-10 border-b border-[var(--color-divider)] hover:bg-[var(--color-surface)] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-default"
                    >
                        {/* Period on desktop / Mobile top row */}
                        <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0 flex items-start gap-3">
                            {exp.current && (
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)]  opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-accent)] animate-bounce"></span>
                                </span>
                            )}
                            <span className="text-sm font-sans tracking-wide text-[var(--color-text-muted)] font-medium uppercase">
                                {exp.period}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/4 pr-8">
                            <h3 className="text-2xl font-serif font-semibold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                {exp.role}
                            </h3>
                            <p className="text-[var(--color-text-light)] text-lg mb-6">
                                {exp.company} <span className="opacity-50">| {exp.location}</span>
                            </p>

                            <ul className="space-y-3 mb-6 hidden md:block group-hover:block transition-all duration-300">
                                {exp.highlights.map((point, i) => (
                                    <li key={i} className="flex gap-3 text-[var(--color-text-muted)] text-sm leading-relaxed">
                                        <span className="text-[var(--color-accent)] opacity-50">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="relative overflow-hidden shine-effect text-xs font-sans font-medium px-3 py-1 
             bg-white/5 border border-white/10 text-[var(--color-text-light)] 
             rounded-full cursor-default transition-all duration-300"
                                    >
                                        <span className="relative z-10">{tech}</span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Arrow Icon */}
                        <div className="md:w-1/4 flex justify-end items-start mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-[var(--color-accent)]">
                            <FiArrowUpRight size={28} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;