import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            id: '01',
            role: 'Frontend Developer / React Developer',
            company: 'Vasanth & Co Private Limited',
            subCompany: '(via Knowillence Pvt Ltd)',
            location: 'Chennai',
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
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10"
        >
            <h2 className="text-6xl md:text-8xl font-black mb-20 tracking-tighter">
                WORK <span className="text-[#dfff00]">LOGS</span>
            </h2>

            <div className="flex flex-col gap-10">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative group">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-[#1a1a1a] group-hover:bg-[#dfff00] transition-colors" />

                        <div className="brutalist-card acid-border ml-2">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                                <div>
                                    <span className="text-[10px] font-mono text-[#dfff00] mb-2 block">// ID: {exp.id}</span>
                                    <h3 className="text-3xl md:text-4xl font-black leading-none">{exp.role}</h3>
                                    <p className="text-gray-500 font-mono text-sm mt-2">{exp.company} | {exp.location}</p>
                                </div>
                                <div className="text-right">
                                    <span className="bg-[#1a1a1a] text-white px-3 py-1 text-[10px] font-mono whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {exp.highlights.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-gray-400 text-sm font-mono leading-relaxed">
                                        <span className="text-[#dfff00]">_</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1a1a1a]">
                                {exp.tech.map((tech, i) => (
                                    <span key={i} className="text-[9px] font-mono border border-white/5 bg-white/5 px-2 py-0.5 text-gray-400 group-hover:text-white transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;