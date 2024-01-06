import React from 'react'
import Typed from 'react-typed'

import { FaFacebookSquare,FaInstagram,FaWhatsappSquare } from "react-icons/fa";




function Hero() {
  return (
    <>
    <div className='text-white  lg:mt-10'  >
      
        <div className='max-w-[800px] 2xl:max-w-[900px] mt-[-96px] 2xl:mt-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center  '>
         <h1 className='text-white font-bold 2xl:font-semibold p-2 md:p-4 2xl:p-6 text-lg sm:text-xl md:text-3xl lg:text-4xl 2xl:text-6xl'>WELCOME TO EHSAAN ERA</h1>
         <h2 className='font-serif text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-thin lg:font-extralight '>ABOUT ME</h2>
         <h1 className='text-[#00df9a] text-base sm:text-lg  md:text-2xl  lg:text-3xl 2xl:text-4xl md:py-2 2xl:py-4'>A WEBSITE FOR  <Typed className='text-white'
         strings={["COMPUTER SERVICE","CCTV CAMERA SETUP"]}
         typeSpeed={120}
         backSpeed={140}
         loop
         
         /> </h1>
      
      <div className=' py-4'>
        <ul className='flex items-center justify-center gap-x-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
        <li className='text-blue-500'><a href="https://www.realme.com/np/"><FaFacebookSquare /></a></li>
        <li className='text-green-700'><a href=""></a><FaWhatsappSquare /></li>
        <li className='text-rose-500'><a href=""><FaInstagram /></a></li>
        </ul>
        </div>
        </div>
    </div>

    </>
  )
}

export default Hero;