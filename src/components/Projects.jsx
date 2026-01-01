import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Resume Analyzer",
        description:
            "Frontend-only resume analyzer that helps job seekers improve ATS compatibility by comparing resumes with job descriptions and highlighting missing skills and keywords.",
        tech: [
            "React JS",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Framer Motion",
            "PDF Analyzer",
        ],
        live: "https://resume-parser-lilac.vercel.app/",
        github: "https://github.com/Dhaya3132/Resume_Parser",
        type: "Frontend",
        year: "2025",
    },
    {
        id: 2,
        title: "Full Stack Food Ordering Application",
        description:
            "Full Stack Food Ordering Application with user authentication and order management.",
        tech: [
            "React",
            "Redux",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        github: "https://github.com/Dhaya3132/crave_Mart",
        type: "Full Stack",
        year: "2024",
    },
    {
        id: 3,
        title: "Shoppy Global",
        description:
            "E-commerce website with a minimalist and futuristic design, featuring smooth animations and clean typography.",
        tech: [
            "React",
            "Redux",
            "Tailwind CSS",
            "Framer Motion",
            "Context API",
        ],
        live: "https://shoppy-global.vercel.app/",
        github: "https://github.com/Dhaya3132/ShoppyGlobal",
        type: "Frontend",
        year: "2024",
    },
    {
        id: 4,
        title: "Library Management",
        description:
            "Library Management System with book management and browsing functionality.",
        tech: ["React", "Tailwind CSS", "Redux"],
        live: "https://librarymanagement-dhayas-projects-99541db5.vercel.app/",
        github: "https://github.com/Dhaya3132/library_Management",
        type: "Frontend",
        year: "2024",
    },
    {
        id: 5,
        title: "Weather Application",
        description:
            "Real-time weather forecasting app with location-based search and clean UI.",
        tech: ["React", "API Integration", "Tailwind CSS"],
        github: "https://github.com/Dhaya3132/React_Weather_App",
        type: "API",
        year: "2024",
    },
];

const Projects = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen mt-16 md:mt-0 py-8"
        >
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-semibold tracking-tight mb-10 md:mb-20"
            >
                Projects
            </motion.h2>

            <div className="flex flex-col gap-16">
                {projects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
            </div>
        </motion.section>
    );
};

const ProjectItem = ({ project, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            className="
        group relative border-t border-neutral-300 dark:border-white/20
        pt-10 transition-colors duration-300
        md:hover:border-black md:dark:hover:border-white
      "
        >
            <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                <div className="w-full md:w-32 flex justify-between md:flex-col md:justify-start">
                    <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-800 md:group-hover:text-green-500 transition-colors">
                        0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 mt-1">
                        {project.year}
                    </span>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-3xl font-medium tracking-tight md:group-hover:underline underline-offset-4">
                            {project.title}
                        </h3>

                        <span className="text-xs font-mono uppercase tracking-widest border px-3 py-1 rounded-full text-neutral-500">
                            {project.type}
                        </span>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-3">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-neutral-500"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div
                        className="
              flex gap-6 pt-4
              opacity-100 translate-y-0
              md:opacity-0 md:translate-y-2
              md:group-hover:opacity-100 md:group-hover:translate-y-0
              transition-all duration-300
            "
                    >
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium hover:underline underline-offset-4"
                            >
                                Live Demo ↗
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium hover:underline underline-offset-4"
                            >
                                Source Code ↗
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default Projects;
