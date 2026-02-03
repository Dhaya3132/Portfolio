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
    <div className="m-3 md:m-5 flex flex-col gap-3 md:gap-5 md:flex-row h-[calc(100vh-1.5rem)] md:h-[calc(100vh-2.5rem)] text-neutral-900 dark:text-white selection:bg-neutral-900 dark:selection:bg-white selection:text-white dark:selection:text-black transition-colors duration-300">
      <div className="w-full md:w-96 h-auto md:h-full flex-shrink-0 z-50">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>

      <div className="relative flex-1 bg-white border border-neutral-200 rounded-3xl mb-0 md:mb-10 overflow-hidden">
        <div className="p-4 md:p-6 h-full overflow-y-auto custom-scrollbar md:p-12 lg:p-24 pb-28 md:pb-12">
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

      {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 text-neutral-900 dark:text-white">
        <BackgroundPattern />
      </div> */}
    </div>
  );
};

export default Home;
