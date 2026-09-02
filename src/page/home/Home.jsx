import React, { useState, useEffect, useRef } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Personal from "../../components/Personal";
import Blogs from "../../components/Blogs";
import WorkProcess from "../../components/WorkProcess";
import { motion } from "framer-motion";
import CreativeWorks from "../../components/CreativeWorks";
import ImageWithSkeleton from "../../components/ui/ImageWithSkeleton";

import { techStack } from "../../utils/json/data";
const Home = () => {
  const [activeSection, setActiveSection] = useState("About");
  const containerRef = useRef(null);
  const nameWrapRef = useRef(null);
  const nameTextRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);




  const spreadPositions = [
    { x: -380, y: -190, rotate: -18, scale: 1.0 },
    { x: -260, y: -260, rotate: 12, scale: 0.9 },
    { x: -110, y: -300, rotate: -8, scale: 1.1 },
    { x: 100, y: -280, rotate: 15, scale: 0.9 },
    { x: 280, y: -220, rotate: -14, scale: 1.0 },

    { x: -430, y: -50, rotate: 20, scale: 0.85 },
    { x: -290, y: -100, rotate: -12, scale: 1.05 },
    { x: 280, y: -100, rotate: 18, scale: 0.9 },
    { x: 430, y: -40, rotate: -20, scale: 1.0 },

    { x: -450, y: 120, rotate: -10, scale: 1.0 },
    { x: -300, y: 150, rotate: 16, scale: 0.9 },
    { x: 300, y: 130, rotate: -18, scale: 1.05 },
    { x: 450, y: 120, rotate: 10, scale: 0.9 },

    { x: -350, y: 270, rotate: 15, scale: 0.9 },
    { x: -190, y: 230, rotate: -20, scale: 1.0 },
    { x: 190, y: 240, rotate: 12, scale: 0.95 },
    { x: 350, y: 270, rotate: -15, scale: 1.0 },

    { x: -270, y: 340, rotate: -12, scale: 0.9 },
    { x: -80, y: 320, rotate: 18, scale: 1.0 },
    { x: 100, y: 330, rotate: -15, scale: 0.9 },
    { x: 280, y: 340, rotate: 14, scale: 1.0 },
  ];

  useEffect(() => {
    const scaleNameToFullWidth = () => {
      const wrap = nameWrapRef.current;
      const text = nameTextRef.current;
      if (!wrap || !text) return;
      text.style.transform = "scaleX(1)";
      const wrapWidth = wrap.offsetWidth;
      const textWidth = text.scrollWidth;
      if (textWidth > 0) {
        text.style.transform = `scaleX(${wrapWidth / textWidth})`;
      }
    };

    scaleNameToFullWidth();
    window.addEventListener("resize", scaleNameToFullWidth);
    document.fonts?.ready.then(scaleNameToFullWidth);

    return () => window.removeEventListener("resize", scaleNameToFullWidth);
  }, []);

  useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkScreen();

  window.addEventListener("resize", checkScreen);

  return () => {
    window.removeEventListener("resize", checkScreen);
  };
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.id.charAt(0).toUpperCase() +
                entry.target.id.slice(1),
            );
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName);
    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden selection:text-white"
      ref={containerRef}
    >

      <main className="w-full z-10">
        <section id="about" className="min-h-screen">
          <About />
        </section>

        <div>
          <section id="personal" className="mt-10">
            <Personal />
          </section>

          <section>
            <div className="home-stats" aria-label="Experience highlights">
              <article className="home-stat-card home-stat-card--one">
                <span className="home-stat-pin" aria-hidden="true" />
                <strong>2+</strong>
                <h5>Years of Experience</h5>
                <p>
                  Developing websites, apps, and digital products with a clear
                  focus on usability.
                </p>
              </article>

              <article className="home-stat-card home-stat-card--two">
                <span className="home-stat-pin" aria-hidden="true" />
                <strong>3+</strong>
                <h5>Projects Developed</h5>
                <p>From landing pages to complete website experiences.</p>
              </article>

              <article className="home-stat-card home-stat-card--three">
                <span className="home-stat-pin" aria-hidden="true" />
                <strong>2+</strong>
                <h5>Industries explored</h5>
                <p>
                  Worked across SaaS, retail, finance and service businesses.
                </p>
              </article>

              <article className="home-stat-card home-stat-card--four">
                <span className="home-stat-pin" aria-hidden="true" />
                <strong>100%</strong>
                <h5>Full Stack developer</h5>
                <p>Responsive websites designed, built, and published.</p>
              </article>
            </div>
          </section>

          <section className="relative mt-20 mx-auto min-h-[700px] flex flex-col justify-center items-center overflow-hidden">
            {/* Heading */}
            <h4 className="relative z-30 text-black text-center text-6xl font-display">
              What I bring to the table...
            </h4>

            {/* Description */}
            <p className="relative z-30 p-3 max-w-xl text-black text-center text-sm">
              Creating thoughtful digital experiences and gradually evolved into
              understanding the systems, logic, and foundations that bring those
              experiences to life.
            </p>
             
            {/* MacBook */}
            <ImageWithSkeleton
              src="/assests/about/Macbook-Pro-PNG-File.png"
              alt="MacBook"
              className="relative z-30 h-56 w-56 cursor-pointer"
              imgClassName="object-contain"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsHovered((prev) => !prev)}
              animate={{
                scale: isHovered ? 1.04 : 1,
                 y: [0, -14, 0], rotate: [-8, -2, -8]
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
                duration: 5, repeat: Infinity, ease: "easeInOut"
              }}
            />

            <svg
              viewBox="0 0 500 180"
              className="w-[500px] h-[180px] overflow-visible"
            >
              <defs>
                <path id="curve" d="M 40 40 Q 250 180 460 40" fill="none" />
              </defs>

              <text
                className="font-display fill-pink-500"
                fontSize="42"
                textAnchor="middle"
              >
                <textPath href="#curve" startOffset="50%">
                  {isHovered ? (
                    "Great !!!"
                  ) : (
                    <>
                      <tspan className="hidden md:inline">
                        you wanna see it!... hover me
                      </tspan>

                      <tspan className="inline md:hidden">
                        you wanna see it!... click me
                      </tspan>
                    </>
                  )}
                </textPath>
              </text>
            </svg>
            {/* Tech icons */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {techStack.map((tech, index) => {
                const position = spreadPositions[index];

                return (
                  <motion.div
                    key={tech.label}
                    className="absolute left-1/2 top-1/2"
                    initial={{
                      x: "-50%",
                      y: "-50%",
                      opacity: 0,
                      scale: 0,
                      rotate: 0,
                    }}
                    animate={
                      isHovered
                        ? {
                            x: `calc(-50% + ${position.x}px)`,
                            y: `calc(-50% + ${position.y}px)`,
                            opacity: 1,
                            scale: position.scale,
                            rotate: position.rotate,
                          }
                        : {
                            x: "-50%",
                            y: "-50%",
                            opacity: 0,
                            scale: 0,
                            rotate: 0,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 16,
                      mass: 0.7,
                      delay: isHovered ? index * 0.025 : 0,
                    }}
                  >
                    <ImageWithSkeleton
                      src={tech.icon}
                      alt={tech.label}
                      className="h-9 w-9"
                      imgClassName="object-contain"
                      animate={
                        isHovered
                          ? {
                              y: [0, -5, 0, 4, 0],
                            }
                          : {
                              y: 0,
                            }
                      }
                      transition={{
                        duration: 3 + (index % 3),
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut",
                        delay: index * 0.05,
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>

          

          <section>
            <CreativeWorks />
          </section>

          <section id="process" className="py-16">
            <WorkProcess />
          </section>

          <section id="blogs" className="mb-20">
            <Blogs />
          </section> 

          <section id="contact" className="w-full">
          <Contact />
        </section>

    
        </div>

        
      </main>

    </div>
  );
};

export default Home;
