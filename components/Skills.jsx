import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { DiMysql, DiScala, DiSpark } from "react-icons/di";
import { SiMicrosoftazure, SiNextdotjs, SiPlotly, SiPostgresql, SiPytest, SiScikitlearn, SiStreamlit, SiTailwindcss, SiTensorflow } from "react-icons/si";
import {GrHadoop} from 'react-icons/gr';

const Skills = () => {
  return (
    <div id="skills" className="w-full md:h-screen px-2 pb-2 pt-40 md:pt-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full px-4">
        <p className="text-xl tracking-widest uppercase text-[#f38ba8]">
          Skills
        </p>
        <h2>My Tech Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaPython size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <DiMysql size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <DiScala size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Scala</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <DiSpark size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Spark</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTensorflow size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tensorflow</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiMicrosoftazure size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Azure</h3>
              </div>
            </div>
          </div>
           <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiStreamlit size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Streamlit</h3>
              </div>
            </div>
          </div>
           <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiPostgresql size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postgresql</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiPlotly size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Plotly</h3>
              </div>
            </div>
          </div>      
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiScikitlearn size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sklearn</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-black rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <GrHadoop size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Hadoop</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
