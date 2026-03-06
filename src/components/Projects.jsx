import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 'PRJ_01',
        title: "Resume Analyzer",
        description: "ATS optimization engine for cross-matching skillsets against job descriptors.",
        tech: ["React JS", "Framer Motion", "PDF Parser"],
        live: "https://resume-parser-lilac.vercel.app/",
        github: "https://github.com/Dhaya3132/Resume_Parser",
        year: "2025"
    },
    {
        id: 'PRJ_02',
        title: "Crave Mart",
        description: "Full-scale distribution system for real-time food inventory management.",
        tech: ["MERN Stack", "Redux", "Express"],
        github: "https://github.com/Dhaya3132/crave_Mart",
        year: "2024"
    },
    {
        id: 'PRJ_03',
        title: "Shoppy Global",
        description: "Experimental commerce interface focused on high-speed user transitions.",
        tech: ["React", "Framer Motion", "Redux"],
        live: "https://shoppy-global.vercel.app/",
        github: "https://github.com/Dhaya3132/ShoppyGlobal",
        year: "2024"
    },
    {
        id: 'PRJ_04',
        title: "Library Sys",
        description: "Relational data management system for high-volume asset tracking.",
        tech: ["React", "Tailwind", "Redux"],
        live: "https://librarymanagement-dhayas-projects-99541db5.vercel.app/",
        github: "https://github.com/Dhaya3132/library_Management",
        year: "2024"
    }
];

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-10"
        >
            <h2 className="text-6xl md:text-8xl font-black mb-20 tracking-tighter">
                ACTIVE <span className="text-[#dfff00]">BUILDS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#1a1a1a]">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.id}
                        whileHover={{ backgroundColor: '#0c0c0c' }}
                        className="p-10 border border-[#1a1a1a] group transition-all"
                    >
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#dfff00]">
                                {project.id} // {project.year}
                            </span>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#dfff00]">
                                        <FaGithub size={18} />
                                    </a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#dfff00]">
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-4xl font-black mb-4 group-hover:translate-x-2 transition-transform duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 h-12 overflow-hidden">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="text-[8px] font-mono bg-[#1a1a1a] px-2 py-0.5 text-gray-500">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
