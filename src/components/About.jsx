import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] sm:bg-[#09244d] text-gray-300 p-8' >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl 2xl:text-5xl md:text-[40px] font-bold inline border-b-4 border-yellow-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right 2xl:text-3xl md:text-2xl lg:text-3xl text-2xl font-bold text-yellow-300'>
                        <p>¡Hola, me llamo Mariano! </p>
                        <p> Un gusto conocerte </p>
                    </div>
                    <div>
                        <p className='2xl:text-3xl md:text-2xl text-2xl'>
                            Me considero un entusiasta y apasionado de la tecnología.
                            Quiero aprender y desarrollar mis habilidades en el campo de IT, adquirir experiencia y dedicarme a ello.
                            Estoy dando mis primeros pasos como desarrollador,
                            estuve trabajando en proyectos tanto personales e individuales como en conjunto.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About