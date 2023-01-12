import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#111111] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/8057ab11-201a-4bcb-b3e7-27a9ee83971c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='mb-10 flex justify-center items-center text-4xl font-normal text-gray-300'>Get it touch</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
      </form>
      <button className='bg-[#FFFF] text-black hover:bg-gray-200 px-10 py-4 my-10 mx-auto flex items-end'>Send e-mail</button>
    </div>
  )
}

export default Contact