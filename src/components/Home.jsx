import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-red-500'> Hola, mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Mariano Labatut </h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'> Frontend Developer </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                    Soy estudiante de Programación en la Universidad Tecnológica Nacional en Mar del Plata, Argentina.
                    Paralelamente soy autodidacta, me estoy especializando en Desarrollo Web mediante cursos de distintas plataformas
                    y proyectos, los cuales me permiten crecer profesionalmente.
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-400'> View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home