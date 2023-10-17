import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Main = () => {
  return (
    <div name="main" className='w-full h-screen '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
            <p className='text-blue-600'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-7xl font-bold'>Jude Ikemefuna Ihedioha</h1>
            <h2 className='text-3xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus esse, placeat consectetur delectus, ab natus facere saepe incidunt autem eligendi voluptas accusamus qui praesentium neque! Impedit architecto delectus iste molestiae?</p>

            <div>
                <button className='text-black group border-2 border-black px-6 py-3 my-2 flex items-center hover:scale-110 duration-500 hover:bg-black hover:text-white hover:animate-bounce'>See All Projects <span className=' group-hover:scale-110 group-hover:px-2 mx-2 group-hover:text-blue-300 duration-300'><HiArrowNarrowRight /></span></button>
            </div>
        </div>
    </div>
  )
}

export default Main