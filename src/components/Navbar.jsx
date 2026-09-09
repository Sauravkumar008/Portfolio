import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-[#0b0e14]/80 border-b border-gray-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="font-bold text-lg text-gray-900 dark:text-white">
              Saurav Kumar<span className="text-emerald-500 text-xl"></span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">Full-Stack Developer</p>
          </div>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="text-emerald-500 font-semibold"
                className="cursor-pointer text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-white transition-colors duration-200"
              >
                {text}
              </Link>
            ))}

            {/* Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-[#151b28] text-gray-700 dark:text-yellow-400 hover:scale-110 transition-all cursor-pointer"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-gray-100 dark:bg-[#151b28] text-gray-700 dark:text-yellow-400 cursor-pointer"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <div className="text-gray-900 dark:text-white cursor-pointer" onClick={() => setMenu(!menu)}>
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#0b0e14] border-t border-gray-200 dark:border-neutral-800 py-8 shadow-lg transition-colors">
            <ul className="flex flex-col items-center space-y-5 text-gray-800 dark:text-white text-base">
              {navItems.map(({ id, text }) => (
                <li key={id} onClick={() => setMenu(false)}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer hover:text-emerald-500 transition-colors"
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