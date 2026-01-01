import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundPattern from '../../components/BackgroundPattern';

const Home = () => {
  const [activeSection, setActiveSection] = useState('About');

  const renderContent = () => {
    switch (activeSection) {
      case 'About': return <About />;
      case 'Experience': return <Experience />;
      case 'Projects': return <Projects />;
      case 'Contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="custom-cursor-area cursor-none flex flex-col md:flex-row h-screen w-full overflow-hidden text-neutral-900 dark:text-white selection:bg-neutral-900 dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-300">
      {/* Left Column - Sidebar */}
      <div className="w-full md:w-96 h-auto md:h-full flex-shrink-0 z-50">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      {/* Right Column - Content */}
      <div className="flex-1 h-full overflow-y-auto relative">
        <div className="max-w-4xl mx-auto h-full p-6 md:p-12 lg:p-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Elements (Optional for "Futurist" feel) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 text-neutral-900 dark:text-white">
        <BackgroundPattern />
      </div>
    </div>
  );
};

export default Home;
