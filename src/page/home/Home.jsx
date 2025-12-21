import React from "react";

const Home = () => {
  return (
    <div>
      <div className="header_section flex items-center gap-5 border-b border-gray-200 pb-5">

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
    </div>
  );
};

export default Home;
