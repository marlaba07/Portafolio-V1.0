import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen lg:h-[900px] bg-[#0a192f] flex justify-center items-center p-8'>
            <form method='POST' action="https://getform.io/f/5bb8115a-f095-4834-912b-7a2263383ba2" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl 2xl:text-5xl font-bold inline border-b-4 border-yellow-600 text-gray-300'>Contact</p>
                    <p className='2xl:text-[25px] md:text-[20px] text-gray-300 py-4'> Envíe el formulario a continuación o envíeme un correo electrónico a: <b> marianolabatut@gmail.com </b> </p>
                </div>
                <input className='bg-[#ccd6f6] p-2 2xl:p-4 2xl:text-[20px]' type="text" placeholder='Nombre' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] 2xl:p-4 2xl:text-[20px]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 2xl:p-4 2xl:text-[20px]' name="message" rows="8" placeholder='Mensaje'></textarea>
                <button className='text-white border-2 hover:bg-red-600 hover:border-black px-4 py-3 my-8 '> Enviar mensaje </button>
            </form>

        </div>
    )
}

export default Contact