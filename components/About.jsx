import Image from 'next/image'
import React from 'react'
import profileImg from "../public/assets/smiling.png";
import {Element} from 'react-scroll';
import { SiDeepnote, SiHashnode, SiKaggle } from 'react-icons/si';
import { AiOutlineDown, AiOutlineDownCircle } from 'react-icons/ai';
import Link from 'next/link';
import { FaKaggle } from 'react-icons/fa';

const About = () => {
  return (
    <Element name="about" id="about" className="w-full md:h-screen px-2 pb-2 pt-40 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-4">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#f38ba8]">About</p>
    <h2>Who I am</h2>
    <p>
    I am currently a 3rd year student pursing computer science. I am interested in <span className="font-bold">Data Science</span>, <span className='font-bold'>Machine Learning</span> and <span className="font-bold">Data Engineering</span>. I began my DS learning path in <span className="font-bold">Kaggle </span> and since then I have been researching and create some cool projects in <span className="font-bold">Kaggle</span> and <span className="font-bold">DeepNote</span>. I&apos;m currently mastering SQL and learning Data Science. I am also trying to write articles on <span className="font-bold" > Hasnode </span>
    </p>
      
    <p className="pt-4 font-bold  pb-1 uppercase tracking-wide flex text-[#f38ba8]">
    Check out me out <AiOutlineDownCircle size={20} className="ml-4 mt-1" /> 
   </p> 
    <div className="flex items-center justify-between max-w-[270px] py-4">
            <Link href="https://www.deepnote.com/@timothynn">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiDeepnote />
              </div>
            </Link>
            <Link href="https://www.kaggle.com/timothynduati">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaKaggle />
              </div>
            </Link>
            <Link href="https://timothynn.hashnode.dev">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiHashnode />
              </div>
            </Link>

          </div>
    </div>
    <div className="w-full pt-8 h-auto m-auto rounded-xl max-w-[300px] shadow-xl shadow-black flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image src={profileImg} width="300" height="300" alt="/" />
    </div>
      </div> 
    </Element>
  )
}

export default About
