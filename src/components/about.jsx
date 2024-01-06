import React from 'react'
import Me from '../assets/myphoto.jpg'

function About() {
  return (
    <>
<div className='w-full  py-2 px-4 bg-white ' >
    <h1 className=' text-center text-xl sm:text-2xl md:text-3xl 2xl:text-4xl py-4  text-black font-bold'>WHO I AM</h1>
    <div className='text-white mx-auto  my-auto lg:my-2 flex flex-col lg:flex-row  items-center lg:items-start lg:justify-between  lg:gap-x-10 xl:gap-x-24  lg:w-full xl:w-[1000px] 2xl:w-[1290px]'>

        <div>
    <img className='w-[500px]  md:w-full xl:w-[1200px] 2xl:w-[1100px] ' src={Me} alt="/" />
    </div>

    <div className='py-4 lg:py-0 '>
        <h1 className='text-xl sm:text-2xl 2xl:text-3xl font-bold text-black '>EHSAAN ANSARI</h1>
        <p className='text-black pt-3 font-medium sm:text-[16px]'>Computer Software and hardware knowledge. Computer technician with an improved track of employer and client satisfaction in providing technical support in hardware and software including printer and customer service to clients. I also have hands-on experience in CCTV camera setup and looking forward to contributing to your organization with the earned experience.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default About;