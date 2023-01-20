import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <Link to="home" smooth={true} duration={500} >
                    <img className='cursor-pointer' src={Logo} alt="Logo Image" style={{ width: '90px' }} />
                </Link>
            </div>

            {/* menú */}

            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>


            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>



            {/* social icons */}
            <div className='hidden md:hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='2xl:w-[160px] 2xl:h-[60px] lg:w-[150px] lg:h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://www.linkedin.com/in/marianolabatut/" target='blank'>
                            Linkedin <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='2xl:w-[160px] 2xl:h-[60px] lg:w-[150px] lg:h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://github.com/marlaba07" target='blank'>
                            GitHub <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='2xl:w-[160px] 2xl:h-[60px] lg:w-[150px] lg:h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#04755d]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="mailto:marianolabatut@gmail.com"  >
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='2xl:w-[160px] 2xl:h-[60px] lg:w-[150px] lg:h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#454f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300'
                            href="https://drive.google.com/file/d/1neAYA2DQxcNOO4Wllns-wlnYhZLqO62U/view?usp=sharing" download="Mariano Labatut CV.pdf" target='blank'>
                            CV <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>
            </div>


        </div>


    )
}

export default Navbar