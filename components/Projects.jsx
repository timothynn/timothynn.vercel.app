import React from "react";
import ProjectItem from "./ProjectsItem";
import propertyImg from "../public/assets/projects/2852498.jpg";
import cryptoImg from "../public/assets/projects/7257118.jpg";
import virusImg from "../public/assets/projects/project3.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-4 pt-20 ">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#f38ba8]">
          Projects
        </p>
        <h2 className="py-4">What am working on - WIP</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="https://deepnote.com/@timothynn/Read-Data-From-Twitter-ef7770a0-d8a3-46b8-be22-a80a9a3e96fc"
          />
          <ProjectItem
            title="Crypto app"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Covid 19"
            backgroundImg={virusImg}
            projectUrl="/covid"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
