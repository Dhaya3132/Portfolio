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
        { name: 'Projects', icon: FiFolder, code: 'DIR' },
        { name: 'Experience', icon: FaBriefcase, code: 'EXP' },
        { name: 'Contact', icon: FaEnvelope, code: 'HLR' },
    ];

    return (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 p-1 bg-[#121212] border border-[#222] shadow-[10px_10px_0px_#000]">
                {navItems.map((item) => {
                    const isActive = activeSection === item.name;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.name}
                            onClick={() => setActiveSection(item.name)}
                            className={`relative px-4 py-3 flex flex-col items-center gap-1 group transition-all duration-200 ${isActive ? 'bg-[#dfff00] text-black' : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-[8px] font-mono opacity-50 mb-1 leading-none">{item.code}</span>
                                <Icon size={18} />
                            </div>

                            {/* Mechanical Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="taskbar-active"
                                    className="absolute -top-[1px] left-0 w-full h-[2px] bg-black"
                                />
                            )}

                            {/* Tooltip */}
                            {!isActive && (
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    ./{item.name.toLowerCase()}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default Taskbar;
