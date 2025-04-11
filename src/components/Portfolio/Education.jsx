import React from 'react'

const Education = () => {
  return (
    <div className="bg-[rgb(2,5,33)] pt-30 p-20 pl-[9rem]">
      <h1 className="text-white text-5xl font-semibold pb-20">Education</h1>
      <div className="absolute top-[4550px] w-[78em] border-t-4 border-white"></div>
      <div className="flex justify-between gap-2">
        <div className="z-10">
          <h1 className="text-white text-4xl font-semibold pb-5">2018-2019</h1>
          <button className="bg-blue-100 pb-3 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>

          <p className="text-gray-400 text-xl font-semibold pt-4">
            Govt High School
          </p>
          <p className="text-gray-400 text-lg font-semibold pt-4">SSLC (80%)</p>
        </div>

        <div className="z-10">
          <h1 className="text-white text-4xl font-semibold pb-5">2020-2021</h1>
          <button className="bg-blue-100 pb-3 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
          <p className="text-gray-400 text-xl font-semibold pt-4">
            AP Boys Govt Hr Sec School
          </p>
          <p className="text-gray-400 text-lg font-semibold pt-4">HSC (82%)</p>
        </div>

        <div className="z-10">
          <h1 className="text-white text-4xl font-semibold pb-5">2021-2024</h1>
          <button className="bg-blue-100 pb-3 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
          <p className="text-gray-400 text-xl font-semibold pt-4">
            J . J College of arts and science
          </p>
          <p className="text-gray-400 text-lg font-semibold pt-4">
            B. SC (IT) (71%)
          </p>
        </div>

        <div className="z-10">
          <h1 className="text-white text-4xl font-semibold pb-5">Present</h1>
          <button className="bg-blue-100 pb-3 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
        </div>
      </div>
    </div>
  );
}

export default Education
