import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaFacebook, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  
  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div className="w-full fixed h-20 shadow-xl z-[100] bg-[#11111b]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
       <Image src="/../public/assets/navLogo.png" alt="/" width="80" height="15" /> 
    <div>
      <ul className="hidden md:flex">
        <Link href="/">
          <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
        </Link>
        <Link href="/">
          <li className="ml-10 text-sm uppercase hover:border-b">About</li>
        </Link>
        <Link href="/">
          <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
        </Link>
        <Link href="/">
          <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
        </Link>
        <Link href="/">
          <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
        </Link>
      </ul>
    <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25}/>
    </div>
        </div>
      </div>
    <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/30" : ''}>
     <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-[#11111b] p-10 ease-in duration-300" : "fixed left-[-100%] top-0 p-10 ease-in duration-300"}>
     <div >
      <div className="flex w-full items-center justify-between">
        <Image src="/../public/assets/navLogo.png" width="87" height="35" alt='/' />
    <div onClick={handleNav } className="rounded-full shadow-lg shadow-black  p-3 cursor-pointer">
      <AiOutlineClose />
    </div>
      </div>
    <div  className="border-b border-gray-400 my-4">
      <p className="w-[85%] md:w-[90%] py-4"> 
    Lets build something cool together
    </p>

    </div>
         </div> 
    <div classsName="py-4 flex flex-col">
      <ul className="uppercase">
        <Link href='/' >
    <li className="py-4 text-sm">Home</li>
    </Link>

        <Link href='/' >
    <li className="py-4 text-sm">About</li>
    </Link>
        <Link href='/' >
    <li className="py-4 text-sm">Skills</li>
    </Link>
        <Link href='/' >
    <li className="py-4 text-sm">Projects</li>
    </Link>
        <Link href='/' >
    <li className="py-4 text-sm">Contact</li>
    </Link>
      </ul>
    <div className="pt-40">
     <p  className="uppercase tracking-widest text-[#f38ba8]">Lets Connect</p>
    <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
    <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
      
      <FaLinkedinIn />
    </div>
    <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
      
      <FaTwitter />
    </div><div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
      
      <FaGithub />
    </div><div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
      
      <AiOutlineMail />
    </div>
    </div>
    </div>
    </div>
     </div> 
    </div>
    </div>
  )
}

export default Navbar
