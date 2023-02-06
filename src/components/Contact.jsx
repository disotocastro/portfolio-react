import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#111111] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/8057ab11-201a-4bcb-b3e7-27a9ee83971c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='mb-10 flex justify-center items-center text-5xl font-normal text-white'>Get it touch</p>
        </div>
        <p className='text-1xl font-normal text-white'>What's your name?</p>
        <input className='bg-[#FFFF] p-5 my-4' type="text" placeholder='Enter your full name' name='name' />

        <p className='text-1xl font-normal text-white mt-4'>What's your e-mail?</p>
        <input className='bg-[#FFFF] p-5 my-4' type="email" placeholder='name@email.com' name='email' />

        <p className='text-1xl font-normal text-white my-4'>Your message</p>
        <textarea className='bg-[#FFFF] p-5' name="message" rows="5" placeholder='Message'></textarea>

        <button className='group text-white border-2 my-10 flex items-center hover:bg-gray-600 hover:border-gray-600 mx-auto px-5 py-3'>
          Send e-mail
          <span className='group-hover:-rotate-45 duration-300'>
            <HiArrowNarrowRight className='ml-2' />
          </span>
        </button>
      </form >
    </div >
  )
}

export default Contact