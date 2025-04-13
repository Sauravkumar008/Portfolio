import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">About Me</h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Hello, I'm <span className="text-green-600 font-medium">Saurav Gupta</span>,
            a passionate web developer focused on building scalable and visually
            appealing software using the MERN stack.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Education & Training
          </h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>BCA in Markham College of Commerce(2022-2025)</li>
          
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Skills & Expertise
          </h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>JavaScript, HTML5, CSS</li>
            <li>React.js</li>
    
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            Professional Experience
          </h2>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>
             Freasher
            </li>
            
          </ul>
        </div>

        

       
      </div>
    </div>
  );
}

export default About;
