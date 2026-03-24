import React, { useState, useEffect, useRef } from 'react';
import Taskbar from '../../components/Taskbar';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import BackgroundPattern from '../../components/BackgroundPattern';
import SkillSet from '../../components/SkillSet';
const Home = () => {
  const [activeSection, setActiveSection] = useState('About');
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName);
    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-[var(--color-accent)] selection:text-white" ref={containerRef}>
      <BackgroundPattern />

      <main className="w-full relative z-10">

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="skillset">
          <SkillSet />
        </section>

        <div className="container mx-auto max-w-5xl px-4 py-5">
          <section id="experience" className="py-24">
            <Experience />
          </section>

          <section id="projects" className="py-24">
            <Projects />
          </section>

          <section>
            <div className="flex flex-wrap justify-start md:justify-center text-6xl md:text-9xl py-5 md:py-20 text-gray-100 text-start md:text-center font-serif leading-tight">
              {"The real skill in coding is figuring things out when nothing makes sense."
                .split(" ")
                .map((word, index) => (
                  <span
                    key={index}
                    className="mx-2 cursor-default transition-colors duration-300 hover:text-[var(--color-accent)] hover:italic"
                  >
                    {word}
                  </span>
                ))}
            </div>
          </section>

          <section id="contact" className="py-24">
            <Contact />
          </section>
        </div>

      </main>

      <Taskbar activeSection={activeSection} setActiveSection={handleNavClick} />
    </div>
  );
};

export default Home;
