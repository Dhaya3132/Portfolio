import React, { useState } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaSun,
    FaMoon,
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import CustomCursor from './Cursor';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const navItems = ['About', 'Experience', 'Projects', 'Contact'];
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* ---------------- Mobile Header ---------------- */}
            <div className="md:hidden fixed top-0 left-0 w-full h-20 px-6 flex items-center justify-between z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                        <img
                            src="/assests/profile/profile_img.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-semibold text-lg">Dhayalan</span>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme}>
                        {theme === 'dark' ? <FaSun color='orange' /> : <FaMoon color='black' />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>
            </div>

            {/* ---------------- Sidebar ---------------- */}
            <aside
                className={`
          fixed inset-0 md:sticky md:top-0 z-40
          h-screen
          bg-white dark:bg-black
          border-r border-neutral-200 dark:border-white/10
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
            >
                <div className="flex flex-col justify-between h-full p-8 md:p-12 max-w-sm mx-auto">
                    {/* -------- Profile -------- */}
                    <div className="space-y-6 mt-16 md:mt-0">
                        <div className="w-full h-24 rounded-xl overflow-hidden grayscale">
                            <img
                                src="/assests/profile/profile_img.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                Dhayalan N U
                            </h1>
                            <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">
                                Associate Frontend Developer @ Vasanth & Co
                            </p>
                        </div>
                    </div>

                    {/* -------- Navigation -------- */}
                    <nav className="mt-10 md:mt-0 flex flex-col gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setActiveSection(item);
                                    setIsMenuOpen(false);
                                }}
                                className={`cursor-none relative text-left text-2xl transition-colors w-max
                  ${activeSection === item
                                        ? 'text-black dark:text-white font-medium'
                                        : 'text-neutral-400 hover:text-black dark:hover:text-white'
                                    }
                `}
                            >
                                {item}

                                {/* Active Indicator */}
                                <span
                                    className={`absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 dark:bg-green-500 transition-all
                    ${activeSection === item
                                            ? 'opacity-100 scale-100'
                                            : 'opacity-0 scale-0'
                                        }
                  `}
                                />
                            </button>
                        ))}
                    </nav>

                    {/* -------- Footer -------- */}
                    <div className="mt-10 md:mt-0 space-y-6">
                        <div className="flex items-center justify-between">
                            {/* Socials */}
                            <div className="flex gap-6">
                                <a
                                    href="https://github.com/dhaya3132"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-none text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-none text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    href="mailto:dhayalanu103@gmail.com"
                                    className="cursor-none text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <FaEnvelope size={20} />
                                </a>
                            </div>

                            {/* Theme Toggle (Desktop only) */}
                            <button
                                onClick={toggleTheme}
                                className="cursor-none  hidden md:block text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {theme === 'dark' ? <FaSun color='orange' /> : <FaMoon color='black' />}
                            </button>
                        </div>

                        {/* Custom Cursor */}
                        <div className="hidden md:block">
                            <CustomCursor type="experience" />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
