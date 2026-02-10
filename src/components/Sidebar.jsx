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
        className={`fixed bottom-4 left-1/2 -translate-x-1/2
                           w-[90%] md:w-[23%] h-16 px-3
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
      

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
};

export default Sidebar;
