import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Tab = () => {
    return (
        <div>
            <div className="w-full h-16 md:h-20 bg-[#0a192f] text-white flex justify-center items-center space-x-8 fixed left-0 bottom-0 shadow-md lg:hidden 2xl:hidden dark:bg-gray-800">
                <a href="https://www.linkedin.com/in/marianolabatut/" target='blank'>
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/marlaba07" target='blank'>
                    < FaGithub size={30} />
                </a>
                <a href="mailto:marianolabatut@gmail.com" target='blank'>
                    <HiOutlineMail size={35} />
                </a>
                <a href="https://drive.google.com/file/d/1neAYA2DQxcNOO4Wllns-wlnYhZLqO62U/view?usp=sharing" target='blank'>
                    <BsFillPersonLinesFill size={30} />
                </a>
            </div>
        </div>
    )
}

export default Tab