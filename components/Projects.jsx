import React from "react";
import ProjectItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-4 pt-20 ">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#f38ba8]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve been working on</h2>
        <div className="">
          <ProjectItem
            title="Twitter API V2"
            projectUrl="https://deepnote.com/@timothynn/Read-Data-From-Twitter-ef7770a0-d8a3-46b8-be22-a80a9a3e96fc"
    projectDesc="Project made by python and streamlit"
    projectSkill="Python, TwitterAPI, DeepNote"
          />
          <ProjectItem
            title="House Price Prediction"
            projectUrl="https://github.com/timothynn/HousePricePrediction"
    projectDesc="Melborne House Price Analysis"
    projectSkill="Python, Sklearn"
          />
          <ProjectItem
            title="Covid 19"
            projectUrl="/covid"
    projectDesc="Covid 19 data Analysis"
    projectSkill="Python, Sklearn"
          />
          <ProjectItem
            title="CSV Wrangler"
            projectUrl="https://timothynn-streamlit-example-streamlit-app-ibdsjz.streamlit.app/"
    projectDesc="Project made by python and streamlit"
    projectSkill="Python, Streamlit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
