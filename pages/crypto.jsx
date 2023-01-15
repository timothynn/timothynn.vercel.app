import Image from "next/image";
import React from "react";
import cryptoImg from "../public/assets/projects/7257118.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import Navbar from '../components/NavbarAlt';

const crypto = () => {
  return (
    <>
    <Navbar />
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px w-full left-[50%]  right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 py-2 px-4">
          <h2 className="py-2">Crypto Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-2 px-4 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <p className="uppercase text-[#f38ba8] tracking-widest font-bold">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
          <button className="px-8 py-2 mt-4 mr-8 bg-gradient-to-r from-[#a6e3a1] to-[#94e2d5]">
            Demo
          </button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className="">
                <p className="text-[#bac2de] py-2 flex items-center">
                  <RiRadioButtonFill className="mr-1 min-w-fit" /> React{" "}
                </p>
              </div>
              <div className="">
                <p className="text-[#bac2de] py-2 flex items-center">
                  <RiRadioButtonFill className="mr-1 min-w-fit" /> Tailwind{" "}
                </p>
              </div>
              <div className="">
                <p className="text-[#bac2de] py-2 flex items-center">
                  <RiRadioButtonFill className="mr-1 min-w-fit" /> Javascript{" "}
                </p>
              </div>
              <div className="">
                <p className="text-[#bac2de] py-2 flex items-center">
                  <RiRadioButtonFill className="mr-1 min-w-fit" /> Firebase{" "}
                </p>
              </div>
              <div className="">
                <p className="text-[#bac2de] py-2 flex items-center">
                  <RiRadioButtonFill className="mr-1 min-w-fit" /> Google API{" "}
                </p>
              </div>
              <div className="">
                <p className="text-[#bac2de] py-2 flex items-center">
                  <RiRadioButtonFill className="mr-1 min-w-fit" /> Zillow API{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/#projects"
          className="flex justify-around max-w-[70px] items-center font-bold cursor-pointer underline"
        >
          <IoMdArrowRoundBack className="text-lg" />
          <p>Back</p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default crypto;
