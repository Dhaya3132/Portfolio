import { useState } from "react";
import { skillDataSet, workExperience } from "../../utils/json/data";
import { FaGithub } from "react-icons/fa";
import { PiLink } from "react-icons/pi";
import CustomCursor from "../../components/Cursor";

const Home = () => {
  const [isActive, setIsActive] = useState(null);
  const [showDesc, setShowDesc] = useState(null);
  const [cursorType, setCursorType] = useState(null);
  const [cursorLabel, setCursorLabel] = useState("");


  const handleShowExperienceDesc = (id) => {
    if (showDesc) {
      setShowDesc(null);
    } else {
      setShowDesc(id);
    }
  };

  const project = {
    title: "Chat Collect",
    duration: "Jan 2024 - Feb 2024",
    description:
      "With the release of the OpenAI GPT Store, I built a SaaS that allows users to collect email addresses from GPT users and monetize GPT API usage.",
    image: "/chat-collect.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Stripe",
      "Shadcn UI",
      "Magic UI",
    ],
    website: "https://yourwebsite.com",
  };

  return (
    <>
   
    <div className="h-screen">

      <div className="font-Poppins header_section flex items-center justify-center gap-5">
        <div className="header_title">
          <h2 className="font-bold text-5xl mb-2">Hi, I'm Dhayalan 👋</h2>
          <p className="font-normal text-xl mb-2 text-gray-400">
            Frontend Engineer with a Growing Passion for Backend Systems.
          </p>
        </div>

        <div 
        className="custom-cursor-area font-Poppins profile_img w-40 h-38 rounded-full overflow-hidden" 
        onMouseEnter={() => setCursorType("heart")}
        onMouseLeave={() => setCursorType(null)}
        >
          <img
            src="/assests/profile/profile_img.jpg"
            alt="Profile photo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="font-Poppins about_section py-5">
        <h4 className="font-semibold text-xl mb-2">About</h4>
        <p className="mb-2 font-normal text-md text-gray-500 max-h-40">
          I’m a Frontend Developer with 2+ years of experience building
          scalable, high-performance web applications for retail and POS
          systems. I specialize in React.js, modern JavaScript, and state
          management using Redux and Redux-Saga, delivering production-ready
          features used across 140+ retail stores.
        </p>
      </div>

      <div className="font-Poppins work_Experience py-5">
        <h4 className="font-semibold text-xl">Work Experience</h4>

        <div className="work_experience_list flex flex-col gap-3 my-5 custom-cursor-area">
          {workExperience?.map((data) => (
            <>
              <div
                className="company_list flex gap-5 cursor-pointer"
                onClick={() => handleShowExperienceDesc(data?.id)}
                onMouseEnter={() => {setIsActive(data?.id); setCursorType("experience")}}
                onMouseLeave={() => {setIsActive(null); setCursorType(null)}}
              >
                <img
                  src={data?.image}
                  alt=""
                  className="rounded-full w-12 h-12 border border-gray-200"
                />

                <div>
                  <div className="w-full flex gap-5 justify-between items-center">
                    <div>
                      <h5 className="text-sm font-medium flex gap-2 items-center">
                        {data?.title}
                        {isActive === data?.id && (
                          <span className="font-medium text-sm text-gray-500">{`>`}</span>
                        )}
                      </h5>
                      <p className="text-sm font-normal text-gray-700">
                        {data?.company}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-normal text-gray-400">
                        {data?.duration}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`experience_desc overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        showDesc === data?.id
                          ? "max-h-40 opacity-100 mt-3"
                          : "max-h-0 opacity-0 mt-0"
                      }
                    `}
                  >
                    <p className="text-sm font-normal text-gray-700">
                      {data?.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="font-Poppins skills_section py-5"> 
        <h4 className="font-semibold text-xl mb-2">Skills</h4>
        <div className="skills flex flex-wrap gap-1 custom-cursor-area">
          {skillDataSet?.map((data) => (
            <p 
              onMouseEnter={() => {setCursorType("skills"); setCursorLabel(data);}}
              onMouseLeave={() => {setCursorType(null); setCursorLabel(null);}}
              className="bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-xs font-normal w-fit px-2 py-2 me-1">
              {data}
            </p>
          ))}
        </div>
      </div>

      <div className="font-Poppins project_section py-10 mt-5">
        <h4 className="font-semibold text-4xl mb-2 text-center">
          Check out my latest work
        </h4>
        <p className="font-normal text-md mb-5 text-center text-gray-500">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>

        <div className="project_cards flex flex-wrap gap-5 justify-center items-center">
          <div className="bg-white border border-gray-200 rounded h-80 w-78 p-2">
            <img
              src="/assests/projects/image.png"
              alt="project01"
              className="h-32 rounded"
            />

            <p className="text-xs text-light mt-1 text-gray-500">
              Frontend-only resume analyzer helping job seekers optimize ATS
              compatibility by analyzing resumes against job descriptions with
              skill and keyword insights.{" "}
            </p>

            <div className="flex gap-1 flex-wrap overflow-hidden mt-2 text-xs">
              {["React JS", "JavaScript", "Word Analyzer", "HTML/CSS"].map(
                (data, index) => (
                  <p
                    key={index}
                    className="bg-gray-50 rounded-lg text-gray-500 text-xs font-normal w-fit px-2 py-1 me-1"
                  >
                    {data}
                  </p>
                )
              )}
            </div>

            <div className="flex gap-2 mt-3">
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs py-1 px-2">
                <PiLink color="white" size={13} />
                Website
              </button>
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs px-2 py-1">
                <FaGithub color="white" size={13} />
                gitHub
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded h-80 w-78 p-2">
            <img
              src="/assests/projects/prj2.png"
              alt="project01"
              className="h-32 rounded"
            />

            <p className="text-xs text-light mt-1 text-gray-500">
              Frontend-only e-commerce analytics tool helping businesses optimize conversion rates by analyzing product data against user behavior with sales and keyword insights.
            </p>

            <div className="flex gap-1 flex-wrap overflow-hidden mt-2 text-xs">
              {["React JS", "JavaScript", "Redux", "APIs", "HTML/CSS"].map(
                (data, index) => (
                  <p
                    key={index}
                    className="bg-gray-50 rounded-lg text-gray-500 text-xs font-normal w-fit px-2 py-1 me-1"
                  >
                    {data}
                  </p>
                )
              )}
            </div>

            <div className="flex gap-2 mt-3">
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs py-1 px-2">
                <PiLink color="white" size={13} />
                Website
              </button>
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs px-2 py-1">
                <FaGithub color="white" size={13} />
                gitHub
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded h-80 w-78 p-2">
            <img
              src="/assests/projects/image.png"
              alt="project01"
              className="h-32 rounded"
            />

            <p className="text-xs text-light mt-1 text-gray-500">
              Frontend-only resume analyzer helping job seekers optimize ATS
              compatibility by analyzing resumes against job descriptions with
              skill and keyword insights.{" "}
            </p>

            <div className="flex gap-1 flex-wrap overflow-hidden mt-2 text-xs">
              {["React JS", "JavaScript", "Word Analyzer", "HTML/CSS"].map(
                (data, index) => (
                  <p
                    key={index}
                    className="bg-gray-50 rounded-lg text-gray-500 text-xs font-normal w-fit px-2 py-1 me-1"
                  >
                    {data}
                  </p>
                )
              )}
            </div>

            <div className="flex gap-2 mt-3">
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs py-1 px-2">
                <PiLink color="white" size={13} />
                Website
              </button>
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs px-2 py-1">
                <FaGithub color="white" size={13} />
                gitHub
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded h-80 w-78 p-2">
            <img
              src="/assests/projects/image.png"
              alt="project01"
              className="h-32 rounded"
            />

            <p className="text-xs text-light mt-1 text-gray-500">
              Frontend-only resume analyzer helping job seekers optimize ATS
              compatibility by analyzing resumes against job descriptions with
              skill and keyword insights.{" "}
            </p>

            <div className="flex gap-1 flex-wrap overflow-hidden mt-2 text-xs">
              {["React JS", "JavaScript", "Word Analyzer", "HTML/CSS"].map(
                (data, index) => (
                  <p
                    key={index}
                    className="bg-gray-50 rounded-lg text-gray-500 text-xs font-normal w-fit px-2 py-1 me-1"
                  >
                    {data}
                  </p>
                )
              )}
            </div>

            <div className="flex gap-2 mt-3">
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs py-1 px-2">
                <PiLink color="white" size={13} />
                Website
              </button>
              <button className="bg-black rounded-md text-white flex gap-2 items-center text-xs px-2 py-1">
                <FaGithub color="white" size={13} />
                gitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h4 className="text-start  text-4xl font-medium font-Poppins">
          Get in Touch
        </h4>

        <div className="mt-10 flex justify-center gap-5">
          <div className="flex flex-col items-start justify-center text-start border-r-2 border-gray-200 pr-5">
            <h2 className="font-SchoolBell text-6xl text-emerald-600">
              building
            </h2>
            <h2 className="font-SchoolBell text-5xl">things up!</h2>
          </div>
          <div>
          <p className="text-start text-3xl font-Poppins font-light text-gray-600">
            Want to chat? Just shoot me a dm with a{" "}
            <a
              href="https://www.linkedin.com/in/dhayalan-nataraj-udhayakumar/"
              className="text-blue-500"
            >
              direct question on linkedIn{" "}
            </a>
            and I'll respond whenever I can.
          </p>
        </div>
        </div>

        

      </div>

    </div>

    <CustomCursor type={cursorType} label={cursorLabel} />  
    </>
  );
};

export default Home;
