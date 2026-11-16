import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUp, FiCopy, FiCheck } from "react-icons/fi";
import SplitText from "./ui/SplitText";
import Magnetic from "./ui/Magnetic";
import { useScrollTo } from "../hooks/useScrollTo";
import { EASE_FLUID } from "../utils/motion";

const EMAIL = "dhayalanu103@gmail.com";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar/",
    icon: FaLinkedin,
    hover: "hover:text-[#0a66c2]",
  },
  {
    label: "GitHub",
    href: "https://github.com/Dhaya3132/",
    icon: FaGithub,
    hover: "hover:text-black",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const scrollTo = useScrollTo();
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "0%"]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div ref={sectionRef} className="relative isolate overflow-hidden">
      {/* masked top edge so the landscape fades in from the grid paper */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, #000 12rem)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 12rem)",
        }}
      >
        <motion.div
          style={{ scale: bgScale, y: bgY, backgroundImage: "url('/assests/about/footerbg.webp')" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
      </div>

      {/* bottom padding leaves room for the floating "Now playing" pill */}
      <section className="relative w-full px-6 pb-28 pt-24 font-sans sm:px-12 md:pt-32 lg:px-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: EASE_FLUID }}
          className="relative z-10 max-w-3xl rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-black/50">
            Contact
          </p>

          <SplitText
            as="h3"
            text="Let's build something Great."
            gradient={[3]}
            className="mb-6 font-display text-5xl font-semibold text-black md:text-7xl"
          />

          <p className="mb-5 max-w-2xl font-sans text-lg leading-relaxed text-black/80 md:text-xl">
            I am currently looking for new opportunities in Full Stack
            Engineering. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Magnetic>
              <span className="glow-ring inline-flex rounded-2xl">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex w-fit items-center gap-2 rounded-2xl bg-black px-6 py-3.5 text-white"
                >
                  Say Hello
                  <motion.span
                    aria-hidden="true"
                    className="inline-block origin-[70%_80%]"
                    animate={{ rotate: [0, 18, -8, 18, -4, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                  >
                    👋
                  </motion.span>
                </a>
              </span>
            </Magnetic>

            <Magnetic>
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-5 py-3.5 text-sm text-black backdrop-blur-md transition-colors duration-300 hover:bg-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "done" : "copy"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    {copied ? <FiCheck className="text-green-600" /> : <FiCopy />}
                    {copied ? "Copied!" : "Copy email"}
                  </motion.span>
                </AnimatePresence>
              </button>
            </Magnetic>

            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Magnetic key={social.label} strength={0.5}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/60 text-black/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white ${social.hover}`}
                    >
                      <Icon className="text-2xl" />
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/40 pt-6 text-sm text-white sm:flex-row">
          <p className="drop-shadow">© {new Date().getFullYear()} Dhayalan · Designed &amp; built with care</p>
          <button
            type="button"
            onClick={() => scrollTo("top")}
            className="group flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-4 py-2 backdrop-blur-md transition-colors duration-300 hover:bg-white/30"
          >
            Back to top
            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
