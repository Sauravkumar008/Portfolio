import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-black py-16">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mb-8">
              <a
                href="https://www.facebook.com/share/15HoTeNC3X/"
                className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/sanatanii.saurav?igsh=Y2NieG8ybjFucGhv"
                className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurav-kumar-97650725b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition duration-300"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 text-center">
              <p className="text-sm text-gray-400 font-semibold">
                &copy; 2025 Saurav Gupta. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
