import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Element } from 'react-scroll';


const Main = () => {
  return (
    <div id="home">
      
    <Element name="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto pb-2 px-2 md:pt-0 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#a6adc8]">
            Let&apos;s build something cool together
          </p>
          <h1 className="py-4 text-[#cdd6f4]">
            Hi, I&apos;m <span className="text-[#f38ba8]">Tim</span>
          </h1>
          <h1 className="py-2 text-[#cdd6f4]">Data Scientist | Student</h1>
          <p className="py-4 text-[#bac2de] max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter />
            </div>
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </Element>
    </div>
  );
};

export default Main;
