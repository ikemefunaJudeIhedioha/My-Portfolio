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
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis nesciunt qui non maxime deleniti fuga temporibus possimus maiores labore praesentium sed illum amet, aliquam facere quo cumque, ex corrupti.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About