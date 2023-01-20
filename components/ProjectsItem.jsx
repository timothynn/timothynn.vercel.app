import React from "react";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

const ProjectsItem = ({ title, projectUrl, projectDesc, projectSkill }) => {
 

  return (
    <div className="">
    
      
    <div className="shadow-lg shadow-black rounded-xl px-4 pt-10 pb-4 mt-4 ">
          <h3 className="text-[#f38ba8]  text-2xl pb-2">{title}</h3>
          <p>{projectDesc}</p> 
          <p className="pt-2 "> <span className="font-bold"> Tools: </span> {projectSkill}</p> 
          <Link href={projectUrl} className="flex text-[#74c7ec] items-center max-w-[120px] ease-in duration-200 hover:scale-105 justify-between pt-10">
            View Project
            <BsArrowRightCircle />
          </Link>
    </div>  
    </div>
  );
};

export default ProjectsItem;
