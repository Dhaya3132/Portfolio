import React from "react";

const Home = () => {
  return (
    <div>

      <div className="header_section flex items-center gap-5 pb-5">

        <div className="header_title">
          <h2 className="font-bold text-5xl mb-2">Hi, I'm Dhayalan 👋</h2>
          <p className="font-normal text-2xl mb-2 text-gray-900">Frontend Engineer with a Growing Passion for Backend Systems.</p>
        </div>

        <div className="profile_img w-40 h-33 rounded-full overflow-hidden">
          <img
            src="/assests/profile/profile_img.jpg"
            alt="Profile photo"
            className="w-full h-full object-cover"
          />
        </div>


      </div>

      <div className="about_section py-5">
        <h4 className="mb-2 font-semibold text-2xl">About</h4>
        <p className="mb-2 font-normal text-lg text-gray-500">I’m a Frontend Developer with 2+ years of experience building scalable, high-performance web applications for retail and POS systems. I specialize in React.js, modern JavaScript, and state management using Redux and Redux-Saga, delivering production-ready features used across 140+ retail stores.</p>
      </div>

    </div>
  );
};

export default Home;
