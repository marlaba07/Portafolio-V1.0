import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import Platzi from '../assets/platzi.png'
import Udemy from '../assets/udemy.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen lg:h-[900px] bg-[#0a192f] sm:bg-[#09244d] p-6 pt-14 text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-600'>Work</p>
                    <p className='py-6'> <b> Mira algunos de mis trabajos recientes: </b> </p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* PRIMER PROYECTO */}
                    {/* Grind item */}
                    <div style={{ backgroundImage: `url(${Platzi})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Travel Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://travel-platzi-app.netlify.app/" target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                                </a>
                                <a href="https://github.com/marlaba07/platzi-travel" target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* SEGUNDO PROYECTO */}
                    {/* Grind item */}
                    <div style={{ backgroundImage: `url(${Udemy})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Presupuesto Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://presupuesto-app-udemy.netlify.app/" target='blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/marlaba07/presupuesto-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* TERCER PROYECTO */}
                    {/* Grind item */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* CUARTO PROYECTO */}
                    {/* Grind item */}
                    <div style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* QUINTO PROYECTO */}
                    {/* Grind item */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* SEXTO PROYECTO */}
                    {/* Grind item */}
                    <div style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Work