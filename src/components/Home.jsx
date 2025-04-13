import React from "react";
import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-[7vh] md:py-[12vh]"
      >
        <div className="flex flex-col md:flex-row items-center relative">
          {/* Left Content */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1 z-10">
            <span className="text-lg text-gray-600">Welcome to my world</span>
            <div className="flex flex-wrap text-2xl md:text-4xl font-semibold text-gray-800">
              <h1 className="mr-2">Hello, I'm a</h1>
              <ReactTyped
                className="text-green-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
            Highly motivated Bachelor of Computer Applications (BCA) student
 proficient in C and C++. Eager to leverage my programming skills and
 contribute to a dynamic development team. Passionate about learning
 new technologies and gaining hands-on experience in collaborative
 projects
            </p>

            {/* Social & Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-10 pt-4">
              {/* Social Icons */}
              <div className="space-y-2">
                <h1 className="font-semibold text-gray-700 text-center">
                  Available on
                </h1>
                <ul className="flex justify-center space-x-5 text-gray-600">
                  <li>
                    <a
                      href="https://www.facebook.com/share/15HoTeNC3X/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaSquareFacebook className="text-2xl hover:text-blue-600 transition-all cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/saurav-kumar-97650725b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-2xl hover:text-blue-700 transition-all cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoLogoYoutube className="text-2xl hover:text-red-600 transition-all cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegram className="text-2xl hover:text-sky-500 transition-all cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

             
              
            </div>
          </div>

          {/* Right Image with 3D Effect */}
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 md:mt-20 mt-10">
            <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
              <img
                src={pic}
                className="rounded-lg w-full h-full object-cover shadow-xl transform hover:scale-110 transition-all duration-500 ease-in-out"
                alt="profile"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-green-500 to-teal-400 opacity-40 rounded-lg transform hover:scale-105 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 border-gray-300" />
    </>
  );
}

export default Home;
