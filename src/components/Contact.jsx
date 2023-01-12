import React from 'react'

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
        <textarea className='bg-[#FFFF] p-5' name="message" rows="10" placeholder='Message'></textarea>

        <button className='bg-[#FFFF] text-black hover:bg-gray-200 px-10 py-4 my-10 mx-auto flex items-end'>Send e-mail</button>
      </form >
    </div >
  )
}

export default Contact