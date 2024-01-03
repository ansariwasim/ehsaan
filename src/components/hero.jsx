import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <>
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
         <h1 className='text-[#00df9a] font-bold p-2 text-3xl'>WELCOME TO EHSAAN ERA</h1>
         <h2>ABOUT ME.</h2>
         <h1>A WEBSITE FOR    <Typed 
         strings={["ansri","AHSAAN","JENI"]}
         typeSpeed={120}
         backSpeed={140}
         loop
         /> </h1>
      

        </div>
    </div>

    </>
  )
}

export default Hero;