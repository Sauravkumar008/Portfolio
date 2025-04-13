import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";


function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pt-[10vh]"
    >
      <div>
        <h1 className="text-4xl font-semibold text-gray-900 mb-5">Experience</h1>
        <p className="text-lg text-gray-700 mb-8">
          I have more than 1 years of experience working with the following
          technologies.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="group flex flex-col items-center justify-center border-2 border-gray-200 rounded-xl shadow-md p-4 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-full border-2 border-gray-200 group-hover:scale-105 transition-all duration-300">
                <img
                  src={logo}
                  className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                  alt={name}
                />
              </div>
              <div className="mt-4 text-lg font-medium text-gray-800 group-hover:text-gray-900 transition duration-300">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
