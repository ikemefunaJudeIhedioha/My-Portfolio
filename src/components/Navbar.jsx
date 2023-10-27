import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/mylogologo.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className='fixed w-[100%] h-[80px] flex justify-between items-center px-2 bg-white text-gray-600 z-30'>
			<div>
				<img
					src={Logo}
					alt='Logo'
					className='w-[80px] sm:w-[100px] lg:w-[200px]'
				/>
			</div>

			{/* Menu */}
			<ul className='hidden md:flex'>
				<li className='pb-1 border-b border-white hover:border-black duration-300 ease-in-out mx-2 hover:scale-105'>
					<Link to='main' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='pb-1 border-b border-white hover:border-black duration-300 ease-in-out mx-2 hover:scale-105'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='pb-1 border-b border-white hover:border-black duration-300 ease-in-out mx-2 hover:scale-105'>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='pb-1 border-b border-white hover:border-black duration-300 ease-in-out mx-2 hover:scale-105'>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='pb-1 border-b border-white hover:border-black duration-300 ease-in-out mx-2 hover:scale-105'>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-4"
				}>
				<li onClick={handleClick} className='py-6 text-4xl'>
					{" "}
					<Link to='main' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li onClick={handleClick} className='py-6 text-4xl'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li onClick={handleClick} className='py-6 text-4xl'>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li onClick={handleClick} className='py-6 text-4xl'>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li onClick={handleClick} className='py-6 text-4xl'>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-2 hover:ml-[-5px] duration-500 bg-blue-600 hover:my-4 hover:animate-bounce'>
						<a
							href='https://www.linkedin.com/in/ikemefunajudeihedioha/'
							className='flex justify-between items-center w-full text-white hover:text-black'>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-2 hover:ml-[-5px] duration-500 bg-gray-600  hover:my-4 hover:animate-bounce'>
						<a
							href='https://github.com/ikemefunaJudeIhedioha'
							className='flex justify-between items-center w-full text-white hover:text-black'>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-2 hover:ml-[-5px] duration-500 bg-red-500  hover:my-4 hover:animate-bounce'>
						<a
							href='mailto:ikemefunajudeihedioha@gmail.com?'
							className='flex justify-between items-center w-full text-white hover:text-black'>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] my-2 hover:ml-[-5px] duration-500 bg-green-500 hover:my-4 hover:animate-bounce'>
						<a
							href='/'
							className='flex justify-between items-center w-full text-white hover:text-black'>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
