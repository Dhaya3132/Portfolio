import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { useTheme } from "../context/ThemeContext";
import CustomCursor from "./Cursor";
import { FiFolder } from "react-icons/fi";
import ProfileModal from "./ProfileModal";
import { motion, AnimateSharedLayout } from "framer-motion";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = ["About", "Projects", "Experience", "Contact"];

  const mobileNav = [
    { id: "Home", icon: FaHome },
    { id: "Projects", icon: FiFolder },
    { id: "Profile", icon: AiFillThunderbolt },
    { id: "Experience", icon: FaBriefcase },
    { id: "Contact", icon: FaEnvelope },
  ];

  const navIconMap = {
    About: FaUser,
    Projects: FiFolder,
    Experience: FaBriefcase,
    Contact: FaEnvelope,
  };

  const { theme, toggleTheme, bgColor, setBgColor } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      setIsMobileNavVisible(!isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section) => {
    if (section === "Profile") {
      setIsProfileOpen(true);
      return;
    }

    setActiveSection(section);
    document
      .getElementById(section.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ================= MOBILE BOTTOM GLASS NAV ================= */}
      <div
        className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2
                           w-[90%] h-16 px-3
                           flex items-center justify-between
                           z-50
                           rounded-3xl
                           border border-gray-200
                           backdrop-blur-xl
                           bg-gray-50
                           shadow-full
                           transition-transform duration-300 ease-in-out
                           ${isMobileNavVisible ? "translate-y-0" : "translate-y-[200%]"}
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
                  className="absolute inset-0 rounded-3xl
                                               bg-white/50 dark:bg-white/5
                                               backdrop-blur-xl
                                               shadow-full transition-all border border-white/30 dark:border-white/10"
                />
              )}

              <Icon
                size={`${id === "Profile" ? 24 : 22}`}
                color={`${id === "Profile" && "orange"}`}
                className={`relative z-10 transition-colors
                                    ${
                                      isActive
                                        ? "text-black dark:text-white"
                                        : "text-gray-500 dark:text-neutral-400"
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
                    h-full md:h-fit
                    rounded-none md:rounded-3xl
                    bg-white
                    border-r md:border border-neutral-200 dark:border-white/10
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
        style={{ backgroundColor: theme === "dark" ? bgColor : undefined }}
      >
        <div className="flex flex-col items-start m-5 p-5 ">
          {/* Profile */}
          <div className="mt-16 md:mt-0 flex justify-evenly items-center w-full">
            <div className="h-22 w-22 rounded-full overflow-hidden">
              <img
                src="/assests/profile/profile_img.jpg"
                alt="Profile"
                className="object-cover rounded-full"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">Dhayalan N U</h1>
              <p className="text-md text-neutral-600 dark:text-neutral-400">
                Software Engineer
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-10 flex flex-col gap-2 w-full">
            <AnimateSharedLayout>
              {navItems.map((item) => {
                const isActive = activeSection === item;
                const Icon = navIconMap[item];

                return (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    className="relative flex items-center gap-1 text-start text-md w-full h-11 px-2 overflow-hidden"
                  >
                    {/* Active background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-black border border-gray-200 rounded-lg"
                        transition={{
                          type: "tween",
                          stiffness: 500,
                          damping: 40,
                        }}
                      />
                    )}

                    <Icon
                      size={16}
                      className={`relative z-10 transition-colors
              ${
                isActive
                  ? "text-gray-100 ml-2 mr-2"
                  : "text-neutral-400 group-hover:text-black dark:group-hover:text-white"
              }`}
                    />

                    {/* Text */}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white  font-normal"
                          : "text-neutral-400 hover:text-black dark:hover:text-white  font-light"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                );
              })}
            </AnimateSharedLayout>
          </nav>

          {/* Footer */}
          <div className="mt-10 w-full border-t border-gray-200 pt-5">
            <div className="w-full flex justify-evenly">
              <div className="flex gap-6">
                <a
                  href="https://github.com/dhaya3132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:dhayalanu103@gmail.com"
                  className="text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>

              {/* <button
                onClick={toggleTheme}
                className="hidden md:block text-neutral-400 hover:text-black dark:hover:text-white"
              >
                {theme === "dark" ? (
                  <FaSun color="orange" />
                ) : (
                  <FaMoon color="black" />
                )}
              </button> */}
            </div>
          </div>
        </div>
      </aside>

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};

export default Sidebar;
