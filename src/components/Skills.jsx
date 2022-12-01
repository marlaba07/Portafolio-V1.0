import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import C from '../assets/c.png'
import Git from '../assets/git.png'
import Java from '../assets/java.png'
import Trello from '../assets/trello.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] p-8 pt-14 text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-3xl 2xl:text-5xl md:text-[35px] font-bold inline border-b-4 border-yellow-600 '>Skills</p>
                    <p className='py-4 2xl:text-2xl md:text-2xl '>  Estas son las tecnologías con las que he trabajado:  </p>
                    <br />
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-2'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML 5</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={CSS} alt="CSS icon" />
                        <p className='my-4'>CSS 3</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={Bootstrap} alt="Bootstrap icon" />
                        <p className='my-4'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={Tailwind} alt="Tailwind icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={C} alt="C icon" />
                        <p className='my-4'>C</p>
                    </div>
                    {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Java} alt="Java icon" />
                        <p className='my-4'>Java</p>
                    </div> */}
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto 2xl:w-[93px]' src={Git} alt="Git icon" />
                        <p className='my-4'>Git</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills