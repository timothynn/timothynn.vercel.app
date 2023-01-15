import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import {Link} from "react-scroll";
import { HiChevronDoubleUp } from "react-icons/hi";
import contactImg from '../public/assets/convo.webp';
import Image from "next/image";


const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen px-4 pt-20">
      <div className="max-w-[1240px]  m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#f38ba8]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 md:col-span-2 w-full h-full shadow-xl shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image src={contactImg} width="auto" height="auto" alt="/" className="rounded-xl hover:scale-105 ease-in duration-300" />
              </div>
              <div>
                <h2 className="py-2">Timothy Nduati</h2>
                <p>Data Scientist</p>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                  sint cillum sint consectetur cupidatat.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#f38ba8]">Connect with me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaTwitter />
                  </div>{" "}
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>{" "}
                  <div className="rounded-full shadow-lg shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="rounded-lg border-2 p-3 flex bg-[#181825] border-gray-900 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="rounded-lg border-2 p-3 flex bg-[#181825] border-gray-900 "
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    type="email"
                    className="rounded-lg border-2 p-3 flex bg-[#181825] border-gray-900 "
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="rounded-lg border-2 p-3 flex bg-[#181825] border-gray-900 "
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <textarea
                    type="text"
                    rows="8"
                    className="rounded-lg border-2 p-3 flex bg-[#181825] border-gray-900 "
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-[#181825] font-bold mt-4 bg-gradient-to-r from-[#f38ba8] to-[#eba0ac] "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} >
            <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiChevronDoubleUp size={30} className="text-[#f38ba8]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
