import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-[rgb(2,5,33)] pt-30 p-20 pl-[9rem] w-full h-auto overflow-x-hidden flex gap-50">
      <div>
        <div>
          <h1 className="text-6xl font-semibold text-white ">
            Hello, I'm Karthik Raj,
          </h1>
          <h1 className="text-6xl font-semibold text-white pt-6 pb-6">
            web developer
          </h1>
          <p className="text-gray-400 text-lg font-semibold">
            I'm a Frontend Developer passionate about creating clean,
            responsive,
            <br />
            and user-friendly web interfaces. I specialize in building <br />{" "}
            modern web experiences using React, TailwindCSS, JavaScript,
            <br /> and Figma for UI design. I enjoy turning ideas and wireframes
            into functional,
            <br /> visually appealing websites. From crafting intuitive layouts
            to implementing <br />
            smooth interactions, I love every step of the frontend development
            process. <br /> I'm always exploring new technologies and design
            trends to build better, <br /> faster, and more engaging web
            experiences.
          </p>
        </div>

        <div className="pt-15">
          <button className="text-white text-xl h-20 w-50 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] p-6 transition-transform duration-500 hover:scale-105">
            Download CV
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-114 h-114 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border-3 border-blue-300 p-1 shadow-lg">
        {/* Glow wrapper */}
        <div className="w-full h-full rounded-full bg-[#020521] flex items-center justify-center">
          {/* Inner image */}
          <img
            src="/karthi.jpg"
            alt="karthi"
            className="w-105 h-105 rounded-full object-cover border-4 border-[#020521] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
