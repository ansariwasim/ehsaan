
import React, { useState } from 'react'
import{AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'


function Navbar() {
  const[nav,setNav] = useState(true);

  const handleNav = ()=>{
    setNav(!nav)
  }
  return (
    <>
    <div className="text-white flex justify-between item-center h-24 max-w-[1240px] mx-auto px-3">
    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">JENI.</h1>
       <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
       
        
       </ul>

       <div className='text-white block md:hidden py-6 px-4' onClick={handleNav}>
        {!nav ? <AiOutlineClose size={25}/>:  <AiOutlineMenu size={25}/>}
     
       </div>

       <div className={!nav? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-1000':"fixed left-[-100%] "} >
    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 px-3">JENI.</h1>
        

        <ul className=' uppercase p-4'>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
        </ul>
       </div>
    </div>
    </>
  
  )
}

export default Navbar;