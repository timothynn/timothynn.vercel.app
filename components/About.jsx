import Image from 'next/image'
import React from 'react'
import profileImg from "../public/assets/smiling.png";
import {Element} from 'react-scroll';

const About = () => {
  return (
    <Element name="about" id="about" className="w-full md:h-screen px-2 pb-2 pt-40 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-4">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#f38ba8]">About</p>
    <h2>Who I am</h2>
    <p>
Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
    </p>
    </div>
    <div className="w-full pt-8 h-auto m-auto rounded-xl max-w-[300px] shadow-xl shadow-black flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image src={profileImg} width="300" height="300" alt="/" />
    </div>
      </div> 
    </Element>
  )
}

export default About
