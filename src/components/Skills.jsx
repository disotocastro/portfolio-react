import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Python from '../assets/python.png';
import MySQL from '../assets/mysql.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#111111] text-gray-300' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div >
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-4'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={HTML} alt="HTML Icon" className='w-20 mx-auto ' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={CSS} alt="CSS Icon" className='w-20 mx-auto ' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={JavaScript} alt="JavaScript Icon" className='w-20 mx-auto ' />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={ReactImg} alt="React Icon" className='w-20 mx-auto ' />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={Node} alt="Node.js Icon" className='w-20 mx-auto ' />
            <p className='my-4'>Node.js</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={MySQL} alt="MySQL Icon" className='w-20 mx-auto ' />
            <p className='my-4'>MySQL</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={Python} alt="HTML Icon" className='w-20 mx-auto ' />
            <p className='my-4'>Python</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={Tailwind} alt="HTML Icon" className='w-20 mx-auto ' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c18] hover:scale-110 duration-500'>
            <img src={Bootstrap} alt="Bootstrap Icon" className='w-20 mx-auto ' />
            <p className='my-4'>Bootstrap</p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Skills;