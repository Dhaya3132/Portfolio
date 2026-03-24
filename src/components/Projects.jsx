import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

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

const ProjectCard = ({ project, index }) => {
    return (
        <motion.a
            href={project.live || project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col md:flex-row justify-between py-10 border-b border-[var(--color-divider)] hover:bg-[var(--color-surface)] transition-colors duration-300 px-4 -mx-4 rounded-xl cursor-pointer block"
        >
            {/* Year / ID */}
            <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0 flex items-center gap-4">
                <span className="text-sm font-sans tracking-wide text-[var(--color-text-muted)] font-medium uppercase">
                    {project.year}
                </span>
                <span className="text-xs font-mono text-gray-600 block md:hidden">
                    {project.id}
                </span>
            </div>

            {/* Title & Description */}
            <div className="md:w-2/4 pr-8">
                <h3 className="text-3xl font-serif font-semibold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-[var(--color-text-light)] opacity-80 text-lg mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs font-sans font-medium px-3 py-1 bg-white/5 border border-white/10 text-[var(--color-text-light)] rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links / Arrow */}
            <div className="md:w-1/4 flex flex-row md:flex-col justify-end items-end gap-4 mt-6 md:mt-0">
                <div className="text-[var(--color-accent)] transform origin-top-right transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <FiArrowUpRight size={32} />
                </div>
                {project.github && (
                    <div className="text-[var(--color-text-muted)] hover:text-white transition-colors p-2" onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}>
                        <FiGithub size={24} />
                    </div>
                )}
            </div>
        </motion.a>
    );
};

const Projects = () => {
    return (
        <section className="w-full">
            <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-serif font-semibold mb-16 tracking-tight text-white"
            >
                Selected <span className="text-[var(--color-accent)] italic">Projects</span>
            </motion.h2>

            <div className="flex flex-col border-t border-[var(--color-divider)]">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
