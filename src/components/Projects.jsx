import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Resume Analyzer",
        description:
            "Frontend-only resume analyzer that helps job seekers improve ATS compatibility by comparing resumes with job descriptions and highlighting missing skills and keywords.",
        tech: ["React JS", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion", "PDF Analysers"],
        image: "/assets/projects/resume-analyzer.png",
        live: "https://resume-parser-lilac.vercel.app/",
        github: "https://github.com/Dhaya3132/Resume_Parser",
        type: "Frontend",
        year: "2025",
    },
    {
        id: 2,
        title: "Full Stack Food Ordering Application",
        description:
            "Full Stack Food Ordering Application with user authentication, order management.",
        tech: ["React", "Tailwind CSS", "HTML/CSS", "Javascript", "Redux", "Components", "API Integration", "Node JS", "Express JS", "MongoDB"],
        image: "/assets/projects/weather-app.png",
        live: null,
        github: "https://github.com/Dhaya3132/crave_Mart",
        type: "Full Stack",
        year: "2024",
    },
    {
        id: 3,
        title: "Shoppy Global",
        description:
            "E-commerce website with a minimalist and futuristic design, featuring smooth animations and clean typography.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "E-Commerece", "HTML/CSS", "Javascript", "Redux", "Components", "Context-Data"],
        image: "/assets/projects/portfolio.png",
        live: "https://shoppy-global.vercel.app/",
        github: "https://github.com/Dhaya3132/ShoppyGlobal",
        type: "Frontend",
        year: "2024",
    },
    {
        id: 4,
        title: "Library Management",
        description:
            "Library Management System with book management, and browing functionality.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Javascript", "Redux", "Components", "Context-Data"],
        image: "/assets/projects/weather-app.png",
        live: "https://librarymanagement-dhayas-projects-99541db5.vercel.app/",
        github: "https://github.com/Dhaya3132/library_Management",
        type: "Frontend",
        year: "2024",
    },
    {
        id: 5,
        title: "Weather Application",
        description:
            "Real-time weather forecasting app with location-based search, temperature units toggle, and clean UI.",
        tech: ["React", "Tailwind CSS", "HTML/CSS", "Javascript", "Redux", "Components", "API Integration"],
        image: "/assets/projects/weather-app.png",
        live: null,
        github: "https://github.com/Dhaya3132/React_Weather_App",
        type: "API-Integration",
        year: "2024",
    },

];


const Projects = () => {
    return (
        <motion.div
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
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const ProjectItem = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group relative border-t border-neutral-300 dark:border-white/20 pt-8 transition-all duration-500 hover:border-black dark:hover:border-white"
        >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* ID / Year */}
                <div className="w-full md:w-32 flex-shrink-0 flex items-baseline justify-between md:flex-col md:items-start">
                    <span className="text-4xl text-neutral-300 dark:text-neutral-800 font-bold leading-none group-hover:text-green-500 dark:group-hover:text-green-500 transition-colors duration-300">
                        0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 mt-2">{project.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-3xl font-medium tracking-tight group-hover:underline underline-offset-4 decoration-1">
                            {project.title}
                        </h3>
                        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 border border-neutral-200 dark:border-white/10 px-3 py-1 rounded-full">
                            {project.type}
                        </span>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-4">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="text-xs font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded hover:text-black dark:hover:text-white transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {project?.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium flex items-center gap-2 hover:underline underline-offset-4">
                                Live Demo <span className="text-xs">↗</span>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium flex items-center gap-2 hover:underline underline-offset-4">
                                Source Code <span className="text-xs">↗</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
