import React from 'react';
import { motion } from 'framer-motion';
import {
    FaUser,
    FaBriefcase,
    FaEnvelope
} from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';

const Taskbar = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { name: 'About', icon: FaUser, code: 'DEF' },
        { name: 'Experience', icon: FaBriefcase, code: 'EXP' },
        { name: 'Projects', icon: FiFolder, code: 'DIR' },
        { name: 'Contact', icon: FaEnvelope, code: 'HLR' },
    ];

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 p-2 bg-[var(--color-primary)]/80 backdrop-blur-xl border border-[var(--color-divider)] rounded-full shadow-2xl">
                {navItems.map((item) => {
                    const isActive = activeSection === item.name;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.name}
                            onClick={() => setActiveSection(item.name)}
                            className={`glassMorp group relative w-14 h-14 flex flex-col items-center justify-center rounded-full transition-all duration-300 ${isActive ? 'bg-[var(--color-surface)] text-[var(--color-accent)]' : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <div className="flex flex-col items-center">
                                <Icon size={isActive ? 22 : 20} className="transition-all duration-300" />
                            </div>

                            {/* Minimal Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="taskbar-active"
                                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                                />
                            )}

                            {/* Tooltip */}
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] border border-[var(--color-divider)] text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
                                {item.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default Taskbar;
