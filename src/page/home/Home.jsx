import React from "react";
import About from "../../components/About";
import Personal from "../../components/Personal";
import Stats from "../../components/Stats";
import SkillsMarquee from "../../components/SkillsMarquee";
import TechShowcase from "../../components/TechShowcase";
import CreativeWorks from "../../components/CreativeWorks";
import WorkProcess from "../../components/WorkProcess";
import Blogs from "../../components/Blogs";
import Contact from "../../components/Contact";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-clip">
      <main className="w-full">
        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="personal" className="mt-10">
          <Personal />
        </section>

        <Stats />

        <SkillsMarquee />

        <TechShowcase />

        <CreativeWorks />

        <section id="process" className="py-16">
          <WorkProcess />
        </section>

        <section id="blogs" className="mb-20">
          <Blogs />
        </section>

        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
