import React from "react";
import ProjectItems from "./ProjectItems";
import weather from "../assets/weather.jpg";
import blog from "../assets/blog.jpg";
import netflix from "../assets/netflix.jpg";
import ecommerce from "../assets/e-commerce.jpg";

const Projects = () => {
  return (
    // max-w-[1040px]
    <div id="projects" className="w-full m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-blue-400">Projects</h1>
      <p className="text-center py-8 text-gray-400 text-3xl">
        As a web developer i am sharing these projects what I've worked on.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems img={weather} title="Weather App" tech="ReactJs" />
        <ProjectItems img={blog} title="Blog App" tech="MERN Stack" />
        <ProjectItems img={netflix} title="Netflix App" tech="ReactJs" />
        <ProjectItems img={ecommerce} title="Ecommerce App" tech="MERN Stack" />
      </div>
    </div>
  );
};

export default Projects;
