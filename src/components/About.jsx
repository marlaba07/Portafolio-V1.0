import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] sm:bg-[#09244d] text-gray-300 p-8' >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>¡Hola, me llamo Mariano! </p>
                        <p> Un gusto conocerte </p>
                    </div>
                    <div>
                        <p>
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