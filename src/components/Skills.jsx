import React from "react";

import ts from "../assets/projects/TypeScript-logo.webp";
import nextJs from "../assets/projects/next-js.svg";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Git from "../assets/github.png";

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen py-8 mb-8'>
			{/* container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='border-b-4 font-bold border-blue-500 text-2xl w-1/2 lg:w-full'>
						Skills
					</p>
					<p className='text-xl py-4'>
						These are the Technologies i have worked with
					</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 py-8'>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={HTML}
							alt='HTML Icon'
						/>
						<p className='text-center'>HTML</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={CSS}
							alt='HTML Icon'
						/>
						<p className='text-center'>CSS</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={Tailwind}
							alt='HTML Icon'
						/>
						<p className='text-center'>Tailwind CSS</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={Javascript}
							alt='HTML Icon'
						/>
						<p className='text-center'>JavaScript</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={ReactImg}
							alt='HTML Icon'
						/>
						<p className='text-center'>React</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={Git}
							alt='HTML Icon'
						/>
						<p className='text-center'>Github</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={ts}
							alt='HTML Icon'
						/>
						<p className='text-center'>TypeScript</p>
					</div>
					<div className='duration-300 hover:scale-105 border border-gray-200 rounded-lg py-6'>
						<img
							className='w-20 mx-auto object-cover'
							src={nextJs}
							alt='HTML Icon'
						/>
						<p className='text-center'>Next Js</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
