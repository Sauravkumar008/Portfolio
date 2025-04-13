import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#0f0f0f]/80 border-b border-neutral-700 rounded-b-3xl">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center space-x-3">
           
            <div>
              <h1 className="font-bold text-lg text-white">
                Saurav Kumar<span className="text-green-400 text-xl"></span>
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Web Developer</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="cursor-pointer text-sm text-gray-300 hover:text-white transition-transform duration-200 hover:scale-105"
              >
                {text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white" onClick={() => setMenu(!menu)}>
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#0f0f0f] border-t border-neutral-700 py-10 rounded-b-3xl">
            <ul className="flex flex-col items-center space-y-6 text-white text-lg">
              {navItems.map(({ id, text }) => (
                <li key={id} onClick={() => setMenu(false)}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="cursor-pointer hover:text-green-400 transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
