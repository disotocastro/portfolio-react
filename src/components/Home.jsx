import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#111111]'>
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full" >
        <h1 className='text-4xl sm:text-5xl font-medium text-[#FFFFFF] mx-auto my-5'>Diego Soto</h1>
        <h2 className='text-4xl sm:text-7xl font-semibold text-[#FFFFFF] mx-auto'>Front-end Developer</h2>
        <p className='text-[#FFFFFF] py-4 max-w-[700px] mx-auto text-justify		'>
          CS Student, self-learner and tech lover.
        </p>

        <div>
          <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:border-gray-600 mx-auto'>


            <Link to="work" smooth={true} duration={500} >
              View Work
            </Link>









            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;