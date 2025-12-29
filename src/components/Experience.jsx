import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCode, FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Frontend Developer / React Developer',
            company: 'Vasanth & Co Private Limited',
            subCompany: '(via Knowillence Pvt Ltd)',
            location: 'Chennai',
            period: 'July 2025 - Present',
            project: 'Retail POS Platform (Microservices)',
            tech: ['React.js', 'Redux-Saga', 'Ant Design', 'Bootstrap', 'REST APIs'],
            highlights: [
                'Delivered modular micro-frontend applications improving scalability.',
                'Optimized admin-side performance and real-time inventory sync.',
                'Designed efficient scrolling data management to reduce API calls.',
                'Improved coupon and refund workflows for transaction accuracy.',
                'Adopted AI-assisted development to enhance code quality.'
            ]
        },
        {
            id: 2,
            role: 'Software Engineer',
            company: 'Knowillence Private Limited',
            location: 'Coimbatore',
            period: 'Jun 2024 - Jun 2025',
            project: 'Retail POS Platform',
            tech: ['React.js', 'Redux', 'Redux-Saga', 'Bootstrap', 'Ant Design'],
            highlights: [
                'Built POS solutions supporting 140+ retail stores.',
                'Implemented refund, cancellation, and payment workflows.',
                'Developed CRM tools for customer issue tracking.',
                'Created responsive auth flows with microservices.'
            ]
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen mt-10 md:mt-0 py-6"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-semibold tracking-tight mb-16"
            >
                Experience
            </motion.h2>

            <div className="relative dark:border-white/20 ml-4 pl-10 space-y-14">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={exp.id} data={exp} index={index} />
                ))}
            </div>
        </motion.section>
    );
};

const ExperienceItem = ({ data, index }) => {
    const [open, setOpen] = useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative"
        >
            {/* Timeline Dot */}
            <span
                className={`absolute -left-[33px] top-4 w-3 h-3 rounded-full transition-colors duration-300 ${open ? 'bg-green-500 dark:bg-green-500' : 'bg-neutral-400 dark:bg-neutral-600'
                    }`}
            />

            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left group"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:underline underline-offset-4 cursor-none">
                            {data.role}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="flex items-center gap-2"><FaBuilding /> {data.company} {data.subCompany}</span>
                            <span className="flex items-center gap-2"><FaMapMarkerAlt /> {data.location}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-neutral-500">
                        <span className="flex items-center gap-2 border border-neutral-300 dark:border-white/30 px-3 py-1 rounded-full">
                            <FaCalendarAlt /> {data.period}
                        </span>
                        <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown />
                        </motion.span>
                    </div>
                </div>
            </button>

            {/* Accordion Content */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden mb-10"
                    >
                        <div className="mt-8 border-l border-dashed border-neutral-300 dark:border-white/20 pl-6 space-y-8">
                            <p className="text-sm italic text-neutral-500">Project: {data.project}</p>

                            <ul className="space-y-4">
                                {data.highlights.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                        <span className="mt-2 w-1 h-1 rounded-full bg-neutral-500 dark:bg-neutral-400 shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div>
                                <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 mb-4">
                                    <FaCode /> Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {data.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs border border-neutral-300 dark:border-white/20 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Experience;