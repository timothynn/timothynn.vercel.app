import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
    <div>
      
      <p className="uppercase text-sm tracking-widest text-[#a6adc8]">
       Let's build something cool together 
      </p>
      <h1 className="py-4 text-[#cdd6f4]">
        Hi, I'm <span className="text-[#f38ba8]">Tim</span>
      </h1>
      <h1 className="py-2 text-[#cdd6f4]">
        Data Scientist | Student 
      </h1>
    <p className="py-4 text-[#bac2de] max-w-[70%] m-auto">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <FaLinkedinIn />
      </div>
 <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <FaTwitter />
      </div> <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <FaGithub />
      </div> <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <AiOutlineMail />
      </div>
    </div>
    </div>  
    </div>
    </div>
  )
}

export default Main
