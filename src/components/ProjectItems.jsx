import React from "react";

const ProjectItems = ({ img, title, tech }) => {
  return (
    <div className="flex relative items-center justify-center h-auto w-full shadow-lg shadow-blue-400 rounded-xl group hover:bg-gradient-to-r from-gray-500 to-[#001b5e]">
      <img
        src={img}
        alt="/"
        width={"400px"}
        height={"300px"}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-gray-400 text-2xl font-bold tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-gray-400">Build-On : {tech}</p>
        <div className="flex justify-evenly">
          <a href="/" className="pr-3 ">
            <p className="text-center p-3 rounded-lg bg-gray-400 text-gray-800 font-bold cursor-pointer text-lg">
              More Info
            </p>
          </a>
          <a href="/">
            <p className="text-center p-3 rounded-lg bg-gray-400 text-gray-800 font-bold cursor-pointer text-lg">
              Live Demo
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
