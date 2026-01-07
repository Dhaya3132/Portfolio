import React, { useState, useEffect } from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaSun,
    FaMoon,
} from 'react-icons/fa';
import { FaHome, FaUser, FaBriefcase } from 'react-icons/fa';
import { AiFillThunderbolt } from "react-icons/ai";
import { useTheme } from '../context/ThemeContext';
import CustomCursor from './Cursor';
import { FiFolder } from "react-icons/fi";
import ProfileModal from './ProfileModal';


const Sidebar = ({ activeSection, setActiveSection }) => {
    const navItems = ['About', 'Projects', 'Experience', 'Contact'];

    const mobileNav = [
        { id: 'About', icon: FaHome },
        { id: 'Projects', icon: FiFolder },
        { id: 'Profile', icon: AiFillThunderbolt },
        { id: 'Experience', icon: FaBriefcase },
        { id: 'Contact', icon: FaEnvelope },
    ];

    const { theme, toggleTheme, bgColor, setBgColor } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
            setIsMobileNavVisible(!isBottom);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (section) => {

        if (section === 'Profile') {
            setIsProfileOpen(true);
            return;
        }

        setActiveSection(section);
        document
            .getElementById(section.toLowerCase())
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* ================= MOBILE BOTTOM GLASS NAV ================= */}
            <div
                className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2
                           w-[90%] h-16 px-3
                           flex items-center justify-between
                           z-50
                           rounded-full
                           bg-indigo-200 dark:bg-black/30
                           backdrop-blur-xl
                           border border-indigo-300 dark:border-white/10
                           shadow-full
                           transition-transform duration-300 ease-in-out
                           ${isMobileNavVisible ? 'translate-y-0' : 'translate-y-[200%]'}
                           `}
            >
                {mobileNav.map(({ id, icon: Icon }) => {
                    const isActive = activeSection === id;

                    return (
                        <button
                            key={id}
                            onClick={() => handleNavigation(id)}
                            className="relative flex items-center justify-center w-12 h-12"
                        >
                            {/* Active liquid glass */}
                            {isActive && (
                                <span
                                    className="absolute inset-0 rounded-full
                                               bg-white/50 dark:bg-white/5
                                               backdrop-blur-xl
                                               shadow-full transition-all border border-white/30 dark:border-white/10"
                                />
                            )}

                            <Icon
                                size={`${id === 'Profile' ? 24 : 22}`}
                                color={`${id === 'Profile' && 'orange'}`}
                                className={`relative z-10 transition-colors
                                    ${isActive
                                        ? 'text-black dark:text-white'
                                        : 'text-indigo-500 dark:text-neutral-400'
                                    }`}
                            />
                        </button>
                    );
                })}
            </div>

            {/* ================= DESKTOP SIDEBAR ================= */}
            <aside
                className={`
                    fixed inset-0 md:sticky md:top-0 z-40
                    h-full
                    bg-white
                    border-r border-neutral-200 dark:border-white/10
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
                style={{ backgroundColor: theme === 'dark' ? bgColor : undefined }}
            >
                <div className="flex flex-col justify-between h-full overflow-y-auto p-8 md:p-12 max-w-sm mx-auto">

                    {/* Profile */}
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

                    {/* Navigation */}
                    <nav className="mt-10 flex flex-col gap-6">
                        {navItems.map((item) => {
                            const isActive = activeSection === item;

                            return (
                                <button
                                    key={item}
                                    onClick={() => handleNavigation(item)}
                                    className={`cursor-none relative text-left text-2xl w-max transition-colors
                                        ${isActive
                                            ? 'text-black dark:text-white font-medium'
                                            : 'text-neutral-400 hover:text-black dark:hover:text-white'
                                        }`}
                                >
                                    {item}

                                    <span
                                        className={`absolute -left-6 top-1/2 -translate-y-1/2
                                            w-2 h-2 rounded-full bg-green-500 transition-all
                                            ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                                        `}
                                    />
                                </button>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-6">
                                <a
                                    href="https://github.com/dhaya3132"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-none text-neutral-400 hover:text-black dark:hover:text-white"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-none text-neutral-400 hover:text-black dark:hover:text-white"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                                <a
                                    href="mailto:dhayalanu103@gmail.com"
                                    className="cursor-none text-neutral-400 hover:text-black dark:hover:text-white"
                                >
                                    <FaEnvelope size={20} />
                                </a>
                            </div>

                            <button
                                onClick={toggleTheme}
                                className="hidden md:block text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                {theme === 'dark'
                                    ? <FaSun color="orange" />
                                    : <FaMoon color="black" />
                                }
                            </button>
                        </div>

                        <div className="hidden md:block">
                            <CustomCursor type="experience" />
                        </div>
                    </div>

                    {/* Theme Colors */}
                    {theme === 'dark' && (
                        <div>
                            <p className="text-sm text-neutral-500 mb-3 font-medium">
                                Theme Colors
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    '#000000',
                                    '#0f172a',
                                    '#1e1b4b',
                                    '#310B0B',
                                    '#022c22',
                                    '#172554',
                                ].map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setBgColor(color)}
                                        className={`w-8 h-3 rounded transition-transform hover:scale-110
                                            ${bgColor === color ? 'ring-1 ring-offset-1' : ''}
                                        `}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Profile Modal */}
            <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </>
    );
};

export default Sidebar;
