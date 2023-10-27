import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full max-h-screen flex justify-center items-center p-8'>
      <form method="POST" action="https://getform.io/f/3838575d-bec4-4938-b8c2-df929f27aa11" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-3xl sm:text-4xl border-b-4 border-blue-500 inline font-bold'>Contact</p>
          <p className='my-4'>Submit the Form below or send me an email - ikemefunajudeihedioha@gmail.com</p>
        </div>
        <input className='outline-0 border border-gray-300 rounded-md p-2' type="text"  placeholder='Name' name='name'/>
        <input className='outline-0 my-4 p-2 border border-gray-300 rounded-md' type="email"  placeholder='Email' name='Email'/>
        <textarea className='border border-gray-300 rounded-md p-4 outline-0' placeholder='Send me a message' name="message" rows="10"></textarea>
        <button className='my-4 border-2 border-black rounded-lg duration-500 font-bold px-4 py-3 hover:bg-black hover:text-white hover:border-white flex items-center mx-auto justify-between'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact