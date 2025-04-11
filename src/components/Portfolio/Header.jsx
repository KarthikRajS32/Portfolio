import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Header = () => {
  return (
    <>
      <div className="w-screen h-auto sm:h-[120px] flex flex-col sm:flex-row items-center text-center sm:text-left pt-[10px] sm:pt-[5px] pb-[10px] px-[150px] bg-[rgb(2,5,33)] gap-2 sm:gap-4">
        <h1 className="text-white font-bold text-3xl sm:text-5xl italic">
          Portfolio
        </h1>
        <span className="flex items-center justify-center gap-10 pt-[10px] pl-100 ">
          <ul className="cursor-pointer hover:scale-115 duration-550 hover:underline font-bold text-xl text-white">
            About me
          </ul>
          <ul className="cursor-pointer hover:scale-115 duration-550 hover:underline font-bold text-xl text-white">
            Skills & Tools
          </ul>
          {/* <ul className="cursor-pointer hover:scale-115 duration-550 hover:underline font-bold text-xl text-white">
            Experience
          </ul> */}
          <ul className="cursor-pointer hover:scale-115 duration-550 hover:underline font-bold text-xl text-white">
            Projects
          </ul>
          <ul className="cursor-pointer hover:scale-115 duration-550 hover:underline font-bold text-xl text-white">
            Education
          </ul>
          <ul className="cursor-pointer hover:scale-115 duration-550 hover:underline font-bold text-xl text-white">
           Contact
          </ul>
        </span>
      </div>
      <div>
        <AboutMe />
        <Skills />
        <SoftSkills />
        {/* <Experience/> */}
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  );
};

export default Header;

