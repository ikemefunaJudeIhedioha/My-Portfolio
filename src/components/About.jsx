import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full gap-8'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p >Hello, I'm Jude. You're welcome to take a look around.</p>
                </div>
                <div className='text-xl'>
                    A Tech enthusiast passionate about building nice and eye-catching UIs for web users. Hobbies include, singing, video games, snacking. All in all i'm just a fun personality to be around🤗🤗
                </div>
            </div>
        </div>
    </div>
  )
}

export default About