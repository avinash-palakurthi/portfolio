import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { BsInfoCircle } from "react-icons/bs";
const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-white font-bold"
      />
      {nav ? (
        <div className="fixed z-20 flex flex-col items-center justify-center w-full h-screen bg-white/90">
          <a
            href="#main"
            className="flex justify-center w-[75%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2
            p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />

            <span className="pl-4">Home</span>
          </a>
          <a
            href="#About"
            className="flex justify-center w-[75%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2
            p-4 hover:scale-110 ease-in duration-200"
          >
            <BsInfoCircle size={20} />

            <span className="pl-4">About</span>
          </a>
          <a
            href="#Projects"
            className="flex justify-center w-[75%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2
            p-4 hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />

            <span className="pl-4">Projects</span>
          </a>
          <a
            href="#Resume"
            className="flex justify-center w-[75%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2
            p-4 hover:scale-110 ease-in duration-200"
          >
            <ImProfile size={20} />

            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#Contact"
            className="flex justify-center w-[75%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-500 m-2
            p-4 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />

            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 rounded-full cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#About"
            className="bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 rounded-full cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsInfoCircle size={20} />
          </a>

          <a
            href="#Projects"
            className="bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 rounded-full cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>

          <a
            href="#Resume"
            className="bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 rounded-full cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <ImProfile size={20} />
          </a>
          <a
            href="#Contact"
            className="bg-gray-100 shadow-lg shadow-gray-400 m-2 p-4 rounded-full cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
