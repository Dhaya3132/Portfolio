import React from "react";
import Marquee from "react-fast-marquee";
import { techStack } from "../utils/json/data";

const SkillSet = () => {
    return (
        <div className="py-10 mb-0 m-0 h-full w-full">

            <Marquee
                speed={50}

                className="py-5"
            >
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="relative group flex items-center justify-center gap-3 mx-4 px-5 py-3 
               rounded-full bg-white/5 backdrop-blur-md border border-white/10
               opacity-50 hover:opacity-100 transition-all duration-300
               overflow-hidden cursor-pointer shine-effect "
                    >

                        {/* <span
                            className="absolute inset-0 before:absolute before:inset-0 
                 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                 before:translate-x-[-100%] group-hover:before:translate-x-[100%]
                 before:transition-transform before:duration-700"
                        ></span> */}

                        {/* Content */}
                        <img
                            src={tech.icon}
                            alt={tech.label}
                            className="w-5 h-5 object-contain relative z-10"
                        />
                        <p className="text-white text-md font-medium leading-relaxed relative z-10">
                            {tech.label}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default SkillSet;