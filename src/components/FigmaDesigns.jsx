import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const figmaDesigns = [
  {
    id: 1,
    title: 'Furniture Landing page UI',
    description: 'A modern, clean Furniture Landing page UI',
    img: '/assests/company/figma1.webp',
    link: 'https://dribbble.com/shots/23269044-Furniture-Landing-page-UI',
    color: '#1a1a1a'
  },
  {
    id: 2,
    title: 'Home interior decor Landing page UI',
    description: 'Home interior decor Landing page UI',
    img: '/assests/company/figma2.webp',
    link: 'https://dribbble.com/shots/23374077-Home-interior-decor-Landing-page-UI',
    color: '#1e1e1e'
  },
  {
    id: 3,
    title: 'Pet foods ordering landing page UI',
    description: 'Pet foods ordering landing page UI',
    img: '/assests/company/figma3.webp',
    link: 'https://dribbble.com/shots/23374070-Pet-foods-ordering-landing-page-UI',
    color: '#161616'
  },
  {
    id: 4,
    title: 'Travel Booking Landing page UI Design',
    description: 'Travel Booking Landing page UI Design',
    img: '/assests/company/figma4.webp',
    link: 'https://dribbble.com/shots/23277948-Travel-Booking-Landing-page-UI-Design',
    color: '#1c1c1c'
  },
  {
    id: 5,
    title: 'Hotel Booking app UI design',
    description: 'Hotel Booking app UI design',
    img: '/assests/company/figma5.webp',
    link: 'https://dribbble.com/shots/23347899-Hotel-Booking-app-UI-design',
    color: '#141414'
  }
];

const DesignCard = ({ design, index, total, scrollProgress }) => {
  // Calculate range for this specific card
  const start = index / total;
  const end = (index + 1) / total;

  // Transform values based on scroll
  const scale = useTransform(scrollProgress, [start, end], [1, 0.9]);
  const opacity = useTransform(scrollProgress, [start, end], [1, 0.8]);

  return (
    <div className="sticky top-24 w-full flex items-center justify-center mb-20">
      <motion.div
        style={{ scale, opacity, backgroundColor: design.color }}
        className="relative w-full max-w-4xl h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-divider)] flex flex-col md:flex-row glassMorp"
      >


        {/* Content Section */}
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center gap-4 bg-gradient-to-br from-transparent to-black/30">
          <span className="text-[var(--color-accent)] font-serif italic text-lg">0{design.id}</span>
          <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
            {design.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {design.description}
          </p>
          <div className="mt-4">
            <a
              href={design.link}
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-white transition-colors duration-300 font-medium group"
            >
              View Case Study
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/3 h-2/3 md:h-full overflow-hidden">
          <img
            src={design.img}
            alt={design.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Shine effect overlay */}
        <div className="absolute inset-0 pointer-events-none shine-effect opacity-20"></div>
      </motion.div>
    </div>
  );
};

const FigmaDesigns = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div id="designs" className="relative py-20 px-4" ref={containerRef}>
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-accent)] uppercase tracking-[0.3em] text-sm font-medium"
        >
          Visual Showcase
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl mt-4 mb-6"
        >
          Figma Designs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          A selection of user interfaces and experience designs focused on aesthetics,
          usability, and modern design principles.
        </motion.p>
      </div>

      <div className="relative">
        {figmaDesigns.map((design, index) => (
          <DesignCard
            key={design.id}
            design={design}
            index={index}
            total={figmaDesigns.length}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <span className="text-[20rem] font-serif italic">Design</span>
      </div>
    </div>
  );
};

export default FigmaDesigns;
