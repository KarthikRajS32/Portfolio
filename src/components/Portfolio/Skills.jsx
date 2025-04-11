import React from 'react'

const Skills = () => {
  return (
    <div className="bg-[rgb(2,5,33)] pt-30 p-20 pl-[9rem]">
      <h1 className="text-white text-5xl font-semibold pb-20">
        Skills & Tools
      </h1>
      <div className="flex gap-15">
        <div className="pt-10 border-1 border-purple-500 rounded-3xl h-120 w-160 text-center shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
          <h1 className="text-white text-3xl font-semibold ">
            Programming Languages
          </h1>
          <div className="flex gap-10 flex-row pt-20 text-center justify-evenly">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5 text-left">
                <img
                  className="h-17 w-18"
                  src="./html-img.svg"
                  alt="html-img"
                />
                <p className="text-white font-semibold text-2xl">HTML</p>
              </div>

              <div className="flex flex-col gap-5 text-left">
                <img className="h-18 w-18" src="./js-img.png" alt="js-img" />
                <p className="text-white font-semibold text-2xl">JavaScript</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <img className="h-20 w-20" src="./css-img.png" alt="css-img" />
                <p className="text-white font-semibold text-2xl">CSS</p>
              </div>
              <div className="flex flex-col gap-5">
                <img
                  className="h-20 w-20"
                  src="./react-img.png"
                  alt="react-img"
                />
                <p className="text-white font-semibold text-2xl">React</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-1 border-purple-500 rounded-3xl h-120 w-160 text-center shadow-[0_0_30px_10px_rgba(10,10,100,0.5)] transition-transform duration-500 hover:scale-102">
          <h1 className="text-white text-3xl font-semibold ">
            Tools & Technologies
          </h1>
          <div className="flex gap-10 flex-row pt-20 text-center justify-evenly">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5 text-left">
                <img
                  className="h-17 w-18"
                  src="./GitHub-img.png"
                  alt="GitHub-img"
                />
                <p className="text-white font-semibold text-2xl">GitHub</p>
              </div>

              <div className="flex flex-col gap-5 text-left">
                <img
                  className="h-18 w-18"
                  src="./figma-img.png"
                  alt="figma-img"
                />
                <p className="text-white font-semibold text-2xl">Figma</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <img
                  className="h-20 w-20"
                  src="./vscode-img.png"
                  alt="vscode-img"
                />
                <p className="text-white font-semibold text-2xl">VS Code</p>
              </div>
              <div className="flex flex-col gap-5">
                <img
                  className="h-20 w-20"
                  src="./netlify-img.png"
                  alt="netlify-img"
                />
                <p className="text-white font-semibold text-2xl">Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
