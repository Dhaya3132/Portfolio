import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ProfileModal = ({ isOpen, onClose }) => {
    const { theme, toggleTheme, bgColor, setBgColor } = useTheme();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShowContent(true), 600);
            return () => clearTimeout(timer);
        } else {
            setShowContent(false);
        }
    }, [isOpen]);

    const lightningPath = "M150 0 L50 180 L130 180 L50 400 L150 400";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center bg-black/90 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2"
                    >
                        <IoClose size={20} color='orange' />
                    </button>

                    {/* Lightning Animation Layer */}
                    {!showContent && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
                            {/* Lightning Bolt SVG */}
                            <svg
                                viewBox="0 0 200 400"
                                className="w-full h-full max-w-sm max-h-[80vh] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                            >
                                <motion.path
                                    d={lightningPath}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1, 1, 1],
                                        opacity: [0, 1, 1, 0],
                                        strokeWidth: [2, 10, 15, 0]
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        times: [0, 0.3, 0.4, 1],
                                        ease: "easeInOut"
                                    }}
                                />
                            </svg>
                        </div>
                    )}

                    {/* Flash Effect Layer */}
                    <motion.div
                        className="absolute inset-0 bg-white pointer-events-none z-30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                    />

                    {/* Profile Content */}
                    {showContent && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative z-20 flex flex-col p-8 max-w-sm w-full mt-26"
                        >
                            {/* Profile Image */}
                            <div className="w-full h-32 rounded-sm overflow-hidden mb-6">
                                <img
                                    src="/assests/profile/profile_img.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Info */}
                            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                Dhayalan N U
                            </h2>
                            <p className="text-lg text-neutral-400 mb-8 font-light">
                                Software Engineer
                                <br />
                                <span className="text-sm opacity-70">@ Vasanth & Co</span>
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-6">
                                <a
                                    href="https://github.com/dhaya3132"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white transition-transform hover:-translate-y-1 hover:scale-110 duration-300"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white transition-transform hover:-translate-y-1 hover:scale-110 duration-300"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    href="mailto:dhayalanu103@gmail.com"
                                    className="text-white/60 hover:text-white transition-transform hover:-translate-y-1 hover:scale-110 duration-300"
                                >
                                    <FaEnvelope size={20} />
                                </a>
                            </div>

                            {/* Theme Controls */}
                            {/* <div className="mt-8 w-full flex items-center gap-6 border-t border-white/10 pt-3">

                                <div className="flex items-center justify-start w-full">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        {theme === 'dark'
                                            ? <FaSun size={17} className="text-orange-400" />
                                            : <FaMoon size={17} className="text-white" />
                                        }
                                    </button>
                                </div>

                                {theme === 'dark' && (
                                    <div className="w-full">

                                        <div className="flex justify-center gap-3">
                                            {[
                                                '#000000',

                                                '#1e1b4b',
                                                '#310B0B',
                                                '#022c22',

                                            ].map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setBgColor(color)}
                                                    className={`w-8 h-8 rounded-full transition-transform hover:scale-110 border border-white/10
                                                        ${bgColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}
                                                    `}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div> */}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProfileModal;
