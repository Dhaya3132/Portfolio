import React, { useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import ResumeModal from "./ResumeModal";
import ImageWithSkeleton from "./ui/ImageWithSkeleton";
import SplitText from "./ui/SplitText";
import Magnetic from "./ui/Magnetic";
import { useIntro } from "../context/introContext";
import { useScrollTo } from "../hooks/useScrollTo";
import { useTilt } from "../hooks/useTilt";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { EASE_FLUID } from "../utils/motion";

const About = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const { ready } = useIntro();
  const scrollTo = useScrollTo();
  const tilt = useTilt({ max: 14 });
  const sectionRef = useRef(null);

  // Scroll-linked exit: the hero recedes into a rounded card while the
  // background drifts slower than the page (parallax).
  const scrollYProgress = useScrollProgress(sectionRef, ["start start", "end start"]);
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const frameRadius = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const enter = (delay) => ({
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    animate: ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined,
    transition: { duration: 1.1, delay, ease: EASE_FLUID },
  });

  return (
    <div ref={sectionRef} className="relative min-h-screen w-full">
      <motion.div
        style={{ scale: frameScale, borderRadius: frameRadius }}
        className="relative min-h-screen w-full origin-top overflow-hidden text-black"
      >
        {/* Background: slow Ken Burns settle on load + scroll parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[5%] h-[115%]">
          <motion.img
            src="/assests/about/hero1.webp"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
            initial={{ scale: 1.25 }}
            animate={{ scale: ready ? 1.05 : 1.25 }}
            transition={{ duration: 2.6, ease: EASE_FLUID }}
          />
        </motion.div>

        {/* gentle light wash for legibility + soft fade into the page */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/25 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/25 to-transparent" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 flex min-h-screen w-full flex-col justify-between gap-12 px-4 pb-24 pt-28 text-start sm:px-6 sm:pb-8 md:px-10 md:pt-32"
        >
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-evenly">
            <div className="min-w-0">
              <motion.p
                {...enter(0.15)}
                className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-black/75"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Software Engineer · 2026
              </motion.p>

              <SplitText
                as="h1"
                text="Building products that move fast and scale clean"
                start={ready}
                delay={0.25}
                stagger={0.07}
                gradient={[3, 4, 6, 7]}
                variant="deep"
                className="max-w-4xl font-display text-5xl font-black leading-[0.86] tracking-[-0.06em] text-black sm:text-6xl md:text-7xl xl:text-[7rem]"
              />

              <motion.div
                {...enter(0.9)}
                className="liquid-glass liquid-glass-lg mt-8 max-w-xl rounded-[26px] bg-white/30 p-5 md:mt-10"
              >
                <p className="text-base font-normal leading-relaxed text-black/80 md:text-xl">
                  I design and engineer high-performance web systems that connect
                  product strategy, backend reliability, and polished user
                  experiences into one clear result.
                </p>
              </motion.div>
            </div>

            {/* Pinned polaroid: springs in, floats, and tilts toward the cursor */}
            <motion.div
              initial={{ opacity: 0, y: 120, rotate: 32, scale: 0.8 }}
              animate={ready ? { opacity: 1, y: 0, rotate: 12, scale: 1 } : undefined}
              transition={{ type: "spring", stiffness: 70, damping: 12, mass: 1, delay: 0.7 }}
              className="self-center"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  {...tilt}
                  data-cursor
                  className="relative h-57 w-45 shrink-0 rounded border border-gray-100 bg-gray-50 p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.35)] xl:scale-110"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-white">
                      <ImageWithSkeleton
                        src="/assests/about/Profile_Image.webp"
                        alt="Portrait of Dhayalan"
                        loading="eager"
                        className="h-34 w-36 overflow-hidden rounded"
                        imgClassName="rounded object-cover"
                        skeletonClassName="rounded"
                      />
                    </div>
                    <div className="mt-2 flex flex-col text-center font-display">
                      <p>Software Engineer</p>
                      <p>2026</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500 px-2 font-mono text-sm text-white">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      Available for work
                    </div>
                  </div>
                  <ImageWithSkeleton
                    src="/assests/about/ping.webp"
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    className="absolute bottom-50 right-35 h-12 w-12"
                    imgClassName="object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative flex w-full flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.div {...enter(1.1)} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Magnetic className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scrollTo("works")}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-blue-500 px-8 py-3 font-light text-white shadow-[0_15px_35px_-12px_rgba(10,132,255,0.8)] transition-shadow duration-500 hover:shadow-[0_20px_45px_-10px_rgba(191,90,242,0.8)] sm:w-fit"
                >
                  <span className="apple-gradient-bg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative">View Work</span>
                  <FiArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsResumeModalOpen(true)}
                  className="liquid-glass liquid-glass-dark w-full rounded-2xl bg-black px-8 py-3 text-center font-light text-white transition-all duration-500 hover:border-black hover:bg-white/70 hover:text-black sm:w-fit"
                >
                  Resume
                </button>
              </Magnetic>
            </motion.div>

            <motion.button
              type="button"
              {...enter(1.4)}
              onClick={() => scrollTo("personal")}
              className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white lg:flex"
            >
              Scroll
              <span className="flex h-10 w-6 justify-center rounded-full border border-white/70 pt-2">
                <motion.span
                  className="block h-2 w-1 rounded-full bg-white"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
              <FiArrowDown />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
};

export default About;
