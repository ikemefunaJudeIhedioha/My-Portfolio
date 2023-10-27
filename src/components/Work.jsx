import React from "react";
import travel from "../assets/projects/travel.png";
import game from "../assets/projects/game.png";
import tts from "../assets/projects/tts.png";
import yum from "../assets/projects/yumeats.png";

const Work = () => {
	return (
		<div name='work' className='w-full h-fit'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold border-b-4 inline leading-relaxed border-blue-500 '>
						Works <span className='text-blue-500'>and</span> Projects
					</p>
					<p className='py-6'>Below is a list of my recent Projects</p>
				</div>

				{/* container */}
				<div className='grid sm:grid-cols-2 gap-8'>
					{/* items */}

					<div
						style={{ backgroundImage: `url(${travel})` }}
						className='shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden'>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 p-4 group-hover:bg-black h-full w-full flex flex-col justify-center items-center duration-300 ease-in-out'>
							<span className='text-2xl font-bold tracking-wider text-white'>
								Next Js Simple landing Page
							</span>

							<div className='pt-8 text-center flex items-center justify-between '>
								<a href='https://hilink-woad.vercel.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>
										Demo
									</button>
								</a>
								<a href='https://github.com/ikemefunaJudeIhedioha/hilink'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

					<div
						style={{ backgroundImage: `url(${game})` }}
						className='shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden '>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 p-4 group-hover:bg-black h-full w-full flex flex-col justify-center items-center duration-300 ease-in-out'>
							<span className='text-2xl font-bold tracking-wider text-white'>
								Gaming site clone
							</span>

							<div className='pt-8 text-center flex items-center justify-between '>
								<a href='https://gaming-site-clone.vercel.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>
										Demo
									</button>
								</a>
								<a href='https://github.com/ikemefunaJudeIhedioha/Gaming-site-clone'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${tts})` }}
						className='shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden'>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 p-4 group-hover:bg-black h-full w-full flex flex-col justify-center items-center duration-300 ease-in-out'>
							<span className='text-2xl font-bold tracking-wider text-white'>
								TTS Converter
							</span>

							<div className='pt-8 text-center flex items-center justify-between '>
								<a href='https://tts-converter.vercel.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>
										Demo
									</button>
								</a>
								<a href='https://github.com/ikemefunaJudeIhedioha/tts-converter'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${yum})` }}
						className='shadow-sm shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-hidden'>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 p-4 group-hover:bg-black h-full w-full flex flex-col justify-center items-center duration-300 ease-in-out'>
							<span className='text-2xl font-bold tracking-wider text-white'>
								Yumeats
							</span>

							<div className='pt-8 text-center flex items-center justify-between '>
								<a href='https://restaurant-nine-snowy.vercel.app/'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg '>
										Demo
									</button>
								</a>
								<a href='https://github.com/ikemefunaJudeIhedioha/restaurant'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
