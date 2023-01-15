import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const ProjectsItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-[#a6e3a1] to-[#94e2d5]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        width=""
        height=""
      />
      <div className="hidden items-center  justify-center group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">React JS</p>
        <Link href={projectUrl} className="flex justify-center items-center">
          <div className="flex justify-between bg-[#181825] py-3 px-4 rounded-lg font-bold text-lg cursor-pointer text-[#cdd6f4]">
            <p className="w-40 items-center text-center">More Info</p>
            <BsArrowRightCircle
              size={30}
              className="text-[#94e2d5] hover:scale-105"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsItem;
