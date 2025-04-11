import React from 'react'

const Projects = () => {
  return (
    <>
      <div className="bg-[rgb(2,5,33)] pt-30 p-20 pl-[4rem]">
        <h1 className="text-white text-5xl font-semibold pb-20 pl-[4rem]">
          Projects
        </h1>

        <div className="grid grid-cols-3 gap-15 justify-center ">
          <div className="flex flex-col items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img
              className="w-90 h-50"
              src="./Book-my-show.png"
              alt="Book-my-show"
            />
            <h1 className="text-white text-xl font-bold">Book My Show</h1>
            <p className="text-gray-500 text-lg font-semibold">
              I created a Book My Show clone using HTML, <br /> CSS, and
              TailwindCSS. This project was a <br /> great learning experience
              in building a <br /> static web application.
            </p>
            <div className="flex gap-3">
              <a href="https://bookyourtickets.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/BookShow.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col  items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img
              className="w-90 h-50"
              src="./Tic-Tac-Toe.png"
              alt="Tic-Tac-Toe"
            />
            <h1 className="text-white text-xl font-bold">Tic Tac Toe</h1>
            <p className="text-gray-500 text-[16px] font-semibold">
              Tic Tac Toe Game Built with HTML, CSS, TailwindCSS,
              <br /> and JavaScript A simple two-player game where <br /> users
              take turns placing Xs and Os on a 3x3 grid. <br />
              The game highlights the winner, detects a draw, <br /> and
              includes a reset option for replaying.
            </p>
            <div className="flex gap-3">
              <a href="https://gameistictactoe.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/tic-tac-toe.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col  items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img
              className="w-90 h-50"
              src="./Task-Manager.png"
              alt="Task-Manager"
            />
            <h1 className="text-white text-xl font-bold">Task Manager</h1>
            <p className="text-gray-500 text-[16px] font-semibold">
              Task Manager App React & TailwindCSS A basic <br /> task manager
              where users can add, edit, and delete <br /> tasks. Built with
              React for dynamic updates and <br /> TailwindCSS for clean
              styling.
            </p>
            <div className="flex gap-3">
              <a href="https://youtaskmanager.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/State-Management.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img
              className="w-90 h-50"
              src="./BMI-Calculator.png"
              alt="BMI-Calculator"
            />
            <h1 className="text-white text-xl font-bold">BMI Calculator</h1>
            <p className="text-gray-500 text-lg font-semibold">
              I created a BMI Calculator using HTML, TailwindCSS,
              <br /> and JavaScript. This tool helps users easily calculate{" "}
              <br /> and identify their Body Mass Index (BMI) based on <br />{" "}
              their height and weight
            </p>
            <div className="flex gap-3">
              <a href="https://my-bmicheck.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/BMI-calculator.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col text-center items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img className="w-90 h-50" src="./Fav-Color.png" alt="Fav-Color" />
            <h1 className="text-white text-xl font-bold">Favorite Color</h1>
            <p className="text-gray-500 text-[16px] font-semibold">
              Built with HTML, CSS, TailwindCSS, and JavaScript <br /> A fun and
              interactive web application where users <br /> can click on color
              buttons to change the background <br />
              color of the page in real-time.styling with TailwindCSS,
              <br /> and user interaction using JavaScript
            </p>
            <div className="flex gap-3">
              <a href="https://favoritecolors.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/Fav-color.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col  items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img
              className="w-90 h-50"
              src="./Guess-Number.png"
              alt="Guess-Number"
            />
            <h1 className="text-white text-xl font-bold">Guess The Number</h1>
            <p className="text-gray-500 text-[16px] font-semibold">
              Guess The Number Game HTML, TailwindCSS, <br /> JavaScript A
              simple game where users guess a random <br /> number. The app
              gives feedback like "too high," "too low," <br />
              or "correct" based on the user's input.
            </p>
            <div className="flex gap-3">
              <a href="https://guessthenumberg.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/Guess-the-umber.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col  items-center h-140 w-120 bg-blue-10 pt-10 gap-7 border-1 border-purple-500 rounded-3xl shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
            <img
              className="w-90 h-50"
              src="./Word-count.png"
              alt="Word-count"
            />
            <h1 className="text-white text-xl font-bold">Word Count</h1>
            <p className="text-gray-500 text-[16px] font-semibold">
              Word Count App Built with HTML, TailwindCSS, and <br /> JavaScript
              A lightweight tool that counts the number <br /> of words and
              characters in real-time as the user <br /> types. Useful for
              writers, students, and anyone <br /> needing quick text analysis.
            </p>
            <div className="flex gap-3">
              <a href="https://countheword.netlify.app/">
                <button className="text-white text-sm font-semibold h-13 w-40 rounded-full cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_30px_10px_rgba(1,1,168,0.63)] transition-transform duration-500 hover:scale-105">
                  Live preview
                </button>
              </a>
              <a href="https://github.com/KarthikRajS32/Word-Count.git">
                <button className="text-white text-sm font-semibold h-13 w-50 rounded-full cursor-pointer border-1 transition-transform duration-500 hover:scale-105 hover:bg-white hover:text-black">
                  Check on GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects
