import React, { useState } from 'react';
import Taskbar from '../../components/Taskbar';
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
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-blue-500/30">
      <BackgroundPattern />

      <main className="container mx-auto max-w-4xl px-4 pt-10 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Taskbar activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

export default Home;
