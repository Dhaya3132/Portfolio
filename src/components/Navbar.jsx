import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useIntro } from "../context/introContext";
import { useScrollTo } from "../hooks/useScrollTo";
import { EASE_FLUID, SPRING_SNAPPY } from "../utils/motion";
import { scrollY } from "../utils/scrollEngine";

const LINKS = [
  { id: "about", label: "Home" },
  { id: "personal", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "works", label: "Work" },
  { id: "process", label: "Process" },
  { id: "blogs", label: "Blogs" },
];

const SECTION_IDS = [...LINKS.map((link) => link.id), "contact"];

const Navbar = () => {
  const { ready } = useIntro();
  const scrollTo = useScrollTo();
  const [active, setActive] = useState("about");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide while scrolling down, reveal on the slightest scroll up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const delta = latest - previous;
    setScrolled(latest > 40);
    if (Math.abs(delta) < 3) return;
    setHidden(delta > 0 && latest > 240 && !menuOpen);
  });

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <motion.header
      initial={{ y: -110, opacity: 0 }}
      animate={ready ? { y: hidden ? -110 : 0, opacity: 1 } : { y: -110, opacity: 0 }}
      transition={{ duration: 0.7, ease: EASE_FLUID, delay: ready && !scrolled ? 0.5 : 0 }}
      className="fixed inset-x-0 top-3 z-[100] flex justify-center px-3 sm:top-5"
    >
      <nav
        aria-label="Primary"
        className={`relative flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border border-white/50 py-1.5 pl-2 pr-1.5 backdrop-blur-lg transition-[background-color,box-shadow] duration-500 ${
          scrolled
            ? "bg-white/70 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.25)]"
            : "bg-white/35 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)]"
        }`}
      >
        <button
          type="button"
          onClick={() => go("about")}
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-black"
        >
          <span className="apple-gradient-bg h-2.5 w-2.5 rounded-full" />
          <span className="font-display text-xl leading-none">Dhayalan</span>
        </button>

        <ul className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  active === link.id ? "text-white" : "text-black/70 hover:text-black"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={SPRING_SNAPPY}
                    className="absolute inset-0 -z-10 rounded-full bg-black"
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <span className="glow-ring hidden rounded-full sm:inline-flex">
            <span className="glow-ring__glow" aria-hidden="true" />
            <span className="glow-ring__ring" aria-hidden="true" />
            <button
              type="button"
              onClick={() => go("contact")}
              className="group flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-[13px] font-medium text-white"
            >
              Let&apos;s talk
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </span>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white md:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10, scale: 0.97, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.97, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: EASE_FLUID }}
              className="absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top rounded-3xl border border-white/60 bg-white/85 p-2 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] backdrop-blur-xl md:hidden"
            >
              {[...LINKS, { id: "contact", label: "Contact" }].map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.4, ease: EASE_FLUID }}
                >
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium ${
                      active === link.id ? "bg-black text-white" : "text-black/80"
                    }`}
                  >
                    {link.label}
                    <FiArrowUpRight className="opacity-60" />
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
