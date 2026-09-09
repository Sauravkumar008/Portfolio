import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0f0f0f] border-t border-neutral-800 py-12 text-gray-300">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Brand / Role */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-white tracking-wide">
                Saurav Kumar<span className="text-green-400">.</span>
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Full-Stack Developer | MCA, Galgotias University
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
             {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
  <Link
    key={item}
    to={item}
    smooth={true}
    duration={500}
    offset={-70}
    className="cursor-pointer hover:text-emerald-500 transition-colors"
  >
    {item}
  </Link>
))}
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/SauravKumar7091"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurav-kumar-97650725b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-200"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="mailto:sauravku7091@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition duration-200"
              >
                <FiMail size={24} />
              </a>
              <a
                href="https://www.instagram.com/sanatanii.saurav?igsh=Y2NieG8ybjFucGhv"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition duration-200"
              >
                <FaInstagram size={24} />
              </a>
            </div>

            {/* Footer Bottom Text */}
            <div className="border-t border-neutral-800 w-full pt-6 text-center">
              <p className="text-xs text-gray-500">
                &copy; {currentYear} Saurav Kumar. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;