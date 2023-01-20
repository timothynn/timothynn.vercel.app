import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaMedium, FaTwitter } from 'react-icons/fa';
import { AiFillCopyrightCircle, AiOutlineCopyright, AiOutlineMail } from 'react-icons/ai';
import { SiHashnode } from 'react-icons/si';

const Footer = () => {
  return (
    <div>
          <div className="flex items-center justify-between max-w-[530px] m-auto py-4 px-1">
            <Link href="https://www.linkedin.com/in/timothynn">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://twitter.com/im4_tim">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </Link>
            <Link href="https://github.com/timothynn">       
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:timothynn08@gmail.com">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
    <Link href="https://hashnode.dev/@timothynn">
              <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <SiHashnode />
              </div>
            </Link>
   
          </div>
    <div className="flex items-center justify-center align-middle text-gray-600 py-4">
      <AiOutlineCopyright /> 
      <p className="mx-2">2023</p>
    <p>Timothy Nduati</p>
    </div>
</div>

  )
}

export default Footer
