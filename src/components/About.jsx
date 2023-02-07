import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#111111] text-gray-300'>

      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-7xl font-bold hello_text'>
            Hi :)
          </p>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-white'>
          <div className='sm:text-right text-3xl font-bold text-center'>
            <p>I ‎ ♥ ‎  UI/UX, minimalism</p>
            <p>dark mode and material desing.</p>
          </div>
          <div className='text-center'>
            <p> I'm an entry level Web Developer with knowledge in a variety of programming languages, good programming practices, control version and design patterns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;