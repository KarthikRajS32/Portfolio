import React from 'react'

const SoftSkills = () => {
  return (
    <div className="bg-[rgb(2,5,33)] pt-20 p-20 pl-[9rem]">
      <h1 className="text-white text-5xl font-semibold pb-20">Soft Skills</h1>

      <div className="grid grid-cols-2 gap-20">
        <div className='flex items-center text-center gap-5'>
          <button className="bg-blue-100 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
          <h1 className="text-white text-3xl font-semibold">Time Management</h1>
        </div>
        <div className='flex items-center text-center gap-5'>
             <button className="bg-blue-100 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
          <h1 className="text-white text-3xl font-semibold">
            Problem Solving & Debugging
          </h1>
        </div>
        <div className='flex items-center text-center gap-5'>
             <button className="bg-blue-100 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
          <h1 className="text-white text-3xl font-semibold">Teamwork</h1>
        </div>
        <div className='flex items-center text-center gap-5'>
             <button className="bg-blue-100 h-7 w-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"></button>
          <h1 className="text-white text-3xl font-semibold">
            Collaborative & Communication
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SoftSkills
