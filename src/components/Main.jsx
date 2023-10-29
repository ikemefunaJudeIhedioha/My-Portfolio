import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Main = () => {
  return (
    <div name="main" className='w-full h-screen '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-7xl font-bold'>Jude Ikemefuna Ihedioha</h1>
            <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-xl'>An entry-level Front-end Web Developer. I have experience with building web pages with HTML5, CSS3, Javascript, ReactJS and NextJS. Click on the button below to see my completed projects</p>

            <div>
                <Link className='text-black group border-2 border-black px-6 py-3 my-2 inline-flex items-center hover:scale-110 duration-500 hover:bg-black hover:text-white hover:animate-bounce cursor-pointer' to='work' smooth={true} duration={500}>See All Projects <span className=' group-hover:scale-110 group-hover:px-2 mx-2 group-hover:text-blue-300 duration-300 '><HiArrowNarrowRight /></span></Link>
            </div>
        </div>
    </div>
  )
}

export default Main