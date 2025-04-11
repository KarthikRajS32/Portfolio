import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[rgb(2,5,33)] pt-30 p-20 pl-[9rem] items-center text-center justify-center">
      <h1 className="text-white text-5xl font-semibold pb-20">Contact Me</h1>

      <div>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-3xl font-semibold">
          Feel free to reach out me for any questions and opportunities!
        </p>
      </div>

      <div className="flex text-center justify-center gap-10 pt-15">
        <a href="https://www.linkedin.com/in/karthik-raj-b84964354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img
            className="h-12 w-12 transition-transform duration-500 hover:scale-120"
            src="./linkedin-img.png"
            alt="linkedin-img"
          />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=karthikraj2606@gmail.com&su=&body=, "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-12 w-12 transition-transform duration-500 hover:scale-120"
            src="./mail.png"
            alt="send Email"
          />
        </a>
        <a href="https://github.com/KarthikRajS32">
          <img
            className="h-12 w-12 transition-transform duration-500 hover:scale-120"
            src="./GitHub-img.png"
            alt="GitHub-img"
          />
        </a>
      </div>

      <div className="pt-10 flex flex-col gap-5">
        <p className="text-white text-xl font-semibold">
          Designed & Developed by Karthik Raj
        </p>
        <p className="text-white text-xl font-semibold">
          © 2025 Karthik Raj. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Contact
