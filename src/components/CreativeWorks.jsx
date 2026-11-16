import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiMove } from "react-icons/fi";
import ImageWithSkeleton from "./ui/ImageWithSkeleton";
import SplitText from "./ui/SplitText";
import { EASE_FLUID } from "../utils/motion";

/* =========================================================
   COMBINED WORKS
   ========================================================= */

const works = [
  // ---------------- PROJECTS ----------------
  {
    id: "PRJ_01",
    type: "project",
    label: "PROJECT",
    title: "Resume Analyzer",
    description:
      "An experiment in turning complex information into something easier to navigate.",
    image: "/assests/projects/image.png",
    tech: ["React", "Framer Motion"],
    year: "2025",
    live: "https://resume-parser-lilac.vercel.app/",
    github: "https://github.com/Dhaya3132/Resume_Parser",

    position: {
      x: "-34%",
      y: "-20%",
      rotate: -7,
    },
  },

  {
    id: "PRJ_02",
    type: "project",
    label: "PROJECT",
    title: "Crave Mart",
    description:
      "A digital system exploring commerce, inventory and real-time interactions.",
    image: "/assests/projects/prj2.png",
    tech: ["MERN", "Redux", "Express"],
    year: "2024",
    github: "https://github.com/Dhaya3132/crave_Mart",

    position: {
      x: "28%",
      y: "-25%",
      rotate: 6,
    },
  },

  {
    id: "PRJ_03",
    type: "project",
    label: "PROJECT",
    title: "Shoppy Global",
    description:
      "An experimental commerce interface focused on fast and fluid interactions.",
    image: "/assests/company/figma1.webp",
    tech: ["React", "Redux", "Framer Motion"],
    year: "2024",
    live: "https://shoppy-global.vercel.app/",
    github: "https://github.com/Dhaya3132/ShoppyGlobal",

    position: {
      x: "-38%",
      y: "22%",
      rotate: 5,
    },
  },

  {
    id: "PRJ_04",
    type: "project",
    label: "PROJECT",
    title: "Library System",
    description:
      "A relational data management experience designed around clarity and usability.",
    image: "/assests/company/figma2.webp",
    tech: ["React", "Tailwind", "Redux"],
    year: "2024",
    live: "https://librarymanagement-dhayas-projects-99541db5.vercel.app/",
    github: "https://github.com/Dhaya3132/library_Management",

    position: {
      x: "34%",
      y: "25%",
      rotate: -5,
    },
  },

  // ---------------- FIGMA ----------------

  {
    id: "FIG_01",
    type: "design",
    label: "FIGMA",
    title: "Furniture",
    description: "A clean visual direction for a modern furniture experience.",
    image: "/assests/company/figma3.webp",
    year: "2024",
    link: "https://dribbble.com/shots/23269044-Furniture-Landing-page-UI",

    position: {
      x: "-8%",
      y: "-43%",
      rotate: -4,
    },
  },

  {
    id: "FIG_02",
    type: "design",
    label: "FIGMA",
    title: "Interior",
    description:
      "A calm and spacious interface exploring interior design and visual hierarchy.",
    image: "/assests/company/figma2.webp",
    year: "2024",
    link: "https://dribbble.com/shots/23374077-Home-interior-decor-Landing-page-UI",

    position: {
      x: "9%",
      y: "39%",
      rotate: 6,
    },
  },

  {
    id: "FIG_03",
    type: "design",
    label: "FIGMA",
    title: "Pet Foods",
    description:
      "An approachable ordering experience designed around simple discovery.",
    image: "/assests/company/figma3.webp",
    year: "2024",
    link: "https://dribbble.com/shots/23374070-Pet-foods-ordering-landing-page-UI",

    position: {
      x: "39%",
      y: "-2%",
      rotate: 7,
    },
  },

  {
    id: "FIG_04",
    type: "design",
    label: "FIGMA",
    title: "Travel",
    description:
      "A travel booking concept focused on visual storytelling and exploration.",
    image: "/assests/company/figma4.webp",
    year: "2024",
    link: "https://dribbble.com/shots/23277948-Travel-Booking-Landing-page-UI",

    position: {
      x: "-3%",
      y: "43%",
      rotate: -7,
    },
  },

  {
    id: "FIG_05",
    type: "design",
    label: "FIGMA",
    title: "Hotel Booking",
    description:
      "A visual booking experience built around simplicity and discovery.",
    image: "/assests/company/figma5.webp",
    year: "2024",
    link: "https://dribbble.com/shots/23347899-Hotel-Booking-app-UI-design",

    position: {
      x: "8%",
      y: "-42%",
      rotate: 5,
    },
  },

  // ---------------- TAILWIND / UI EXPERIMENTS ----------------

  {
    id: "UI_01",
    type: "experiment",
    label: "UI EXPERIMENT",
    title: "Interface Study",
    description:
      "A collection of small interface experiments exploring spacing, typography and interaction.",
    image: "/assests/png/ui-experiment-1.png",
    year: "2025",

    position: {
      x: "-45%",
      y: "0%",
      rotate: -9,
    },
  },

  {
    id: "UI_02",
    type: "experiment",
    label: "TAILWIND",
    title: "Visual Experiment",
    description:
      "A playful interface experiment built around movement and composition.",
    image: "/assests/png/ui-experiment-2.png",
    year: "2025",

    position: {
      x: "45%",
      y: "10%",
      rotate: 9,
    },
  },

  // ---------------- ILLUSTRATION ----------------
];

const featuredWorks = works.slice(0, 5);

const edgeMask = {
  maskImage: "linear-gradient(to bottom, transparent, #000 10rem, #000 calc(100% - 8rem), transparent)",
  WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 10rem, #000 calc(100% - 8rem), transparent)",
};

const cardLayout = [
  { left: "7%", top: "5%", rotate: -7, z: 3 },
  { left: "36%", top: "3%", rotate: 4, z: 2 },
  { left: "69%", top: "6%", rotate: -5, z: 3 },
  { left: "17%", top: "51%", rotate: 5, z: 4 },
  { left: "58%", top: "50%", rotate: -4, z: 2 },
];

const WorkCard = ({ work, index, constraintsRef }) => {
  const href = work.link || work.live || work.github;

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.12}
      dragMomentum={true}
      data-cursor
      data-cursor-label="Drag"
      whileHover={{
        scale: 1.04,
        rotate: 0,
        zIndex: 100,
        transition: { type: "spring", stiffness: 260, damping: 20 },
      }}
      whileDrag={{
        scale: 1.08,
        rotate: 0,
        zIndex: 200,
        cursor: "grabbing",
      }}
      initial={{
        opacity: 0,
        y: 140,
        scale: 0.85,
        rotate: cardLayout[index].rotate * 3,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: cardLayout[index].rotate,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1.2,
        delay: index * 0.1,
        ease: EASE_FLUID,
      }}
      style={{
        left: cardLayout[index].left,
        top: cardLayout[index].top,
        zIndex: cardLayout[index].z,
      }}
      className="
        creative-work-card
        absolute
        w-[clamp(220px,24vw,350px)]
        cursor-grab
        select-none
        touch-none
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[14px]
          border
          border-black/10
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.14)]
          transition-shadow
          duration-500
          hover:shadow-[0_35px_90px_rgba(0,0,0,0.2)]
        "
      >
        {/* IMAGE */}

        <div className="relative aspect-[4/3] overflow-hidden">
          <ImageWithSkeleton
            src={work.image}
            alt={work.title}
            draggable="false"
            className="h-full w-full"
            imgClassName="object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Gradient */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-transparent
            "
          />

          {/* TYPE */}

          <div className="absolute left-3 top-3">
            <span
              className="
                rounded-full
                bg-white/90
                px-2.5
                py-1.5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-black
                backdrop-blur-md
              "
            >
              {work.label}
            </span>
          </div>

          {/* YEAR */}

          <div className="absolute right-3 top-3">
            <span
              className="
                rounded-full
                bg-black/70
                px-2.5
                py-1.5
                text-[9px]
                tracking-widest
                text-white
                backdrop-blur-md
              "
            >
              {work.year}
            </span>
          </div>
        </div>

        {/* CONTENT */}

        <div className="flex items-center justify-between gap-3 px-3 py-2.5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg leading-none text-black">
                {work.title}
              </h3>
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${work.title}`}
                data-cursor-label="Open"
                onPointerDown={(e) => e.stopPropagation()}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-[var(--color-accent)]
                  hover:text-black
                "
              >
                <FiArrowUpRight size={15} />
              </a>
            )}
          </div>

          <span className="shrink-0 text-[8px] uppercase tracking-[0.12em] text-black/40">
            {work.type === "design" ? "Figma" : "Web"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CreativeWorks = () => {
  const constraintsRef = useRef(null);
  const sectionRef = useRef(null);

  // The painting drifts slower than the page for a sense of depth.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative isolate h-fit w-full overflow-hidden"
    >
      {/* masked so the painting dissolves into the grid paper above/below */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden" style={edgeMask}>
        <motion.div
          style={{
            y: bgY,
            backgroundImage: "url('/assests/about/mountains.webp')",
          }}
          className="absolute inset-x-0 -inset-y-[14%] bg-cover bg-center bg-no-repeat"
        />
      </div>

      <div className="relative z-10 mx-auto px-4 pt-16">
        <div className="flex flex-col items-center text-center">
          <SplitText
            as="h2"
            text="Things I've designed & built"
            gradient={[2, 4]}
            className="max-w-4xl font-display text-5xl leading-[0.95] text-black sm:text-6xl md:text-7xl lg:text-8xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_FLUID }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg"
          >
            A collection of interfaces, products, experiments and visual
            explorations — connected by curiosity rather than a category.
          </motion.p>
        </div>
      </div>

      <div
        ref={constraintsRef}
        className="
          creative-works-canvas
          relative
          mx-auto
          mt-12
          px-4
          h-[960px]
          w-full
          max-w-[1500px]
          overflow-hidden
          rounded-2xl
          md:h-[650px]
        "
      >
        {/* <div className="creative-works-wash" /> */}

        <div className="absolute inset-0 flex md:flex-row flex-col">
          {featuredWorks.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              index={index}
              constraintsRef={constraintsRef}
            />
          ))}
        </div>

        {/* Bottom instruction */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 1,
          }}
          className="
            absolute
            bottom-6
            left-1/2
            z-30
            hidden
            -translate-x-1/2
            items-center
            gap-2
            whitespace-nowrap
            rounded-full
            border
            border-white/60
            bg-white/60
            px-4
            py-2
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-black/60
            backdrop-blur-md
            md:bottom-8
            md:flex
          "
        >
          <FiMove size={12} />
          Drag the cards around
        </motion.div>
      </div>

    </section>
  );
};

export default CreativeWorks;
