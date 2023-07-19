import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const front = "React";

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover  "
        src="https://images.unsplash.com/photo-1597839219216-a773cb2473e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="image"
      />
      {/* className="bg-white/50 w-full h-screen absolute top-0 left-0" */}
      <div className=" w-full h-screen absolute top-0 left-0">
        <div className="max-w-[760px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center  ">
          <h1 className="lg:text-7xl  sm:text-5xl text-6xl font-semibold text-gray-500">
            I'm Avinash
          </h1>

          <h2 className="sm:text-3xl flex lg:text-3xl pt-4 text-gray-500">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `I'm A Self Taught ${front} Developer !`,
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "With Decent Knowledge In Backend !",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex  gap-7 pt-6 w-full max-w-[200px]">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// https://images.pexels.com/photos/5951883/pexels-photo-5951883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

// https://images.pexels.com/photos/1102912/pexels-photo-1102912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
