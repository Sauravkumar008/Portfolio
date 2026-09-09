import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 text-slate-700 dark:text-gray-300"
    >
      <div className="space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">About Me</h1>
          <p className="text-slate-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
            Hello, I'm <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Saurav Kumar</span>, 
            an aspiring Full-Stack Developer and current MCA student at Galgotias University[cite: 1]. 
            I focus on building performant, responsive web applications with React and robust, 
            scalable backend systems using Spring Boot and RESTful APIs[cite: 1].
          </p>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
            Education & Academic Background
          </h2>
          <ul className="space-y-3 text-slate-800 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">•</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Master of Computer Applications (MCA)</strong> — Galgotias University, Greater Noida[cite: 1]
                <span className="text-slate-600 dark:text-gray-400 text-sm block">2025 – 2027 (Pursuing)[cite: 1]</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 dark:text-emerald-400 mr-2 font-bold">•</span>
              <div>
                <strong className="text-slate-900 dark:text-white">Bachelor of Computer Applications (BCA)</strong> — Markham College of Commerce (VBU), Hazaribagh[cite: 1]
                <span className="text-slate-600 dark:text-gray-400 text-sm block">2022 – 2025[cite: 1]</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Skills & Expertise */}
        <div>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
            <div className="bg-white dark:bg-[#171717] p-5 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Frontend Development</h3>
              <p className="text-slate-600 dark:text-gray-400">React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive Design, Framer Motion[cite: 1]</p>
            </div>
            <div className="bg-white dark:bg-[#171717] p-5 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Backend & APIs</h3>
              <p className="text-slate-600 dark:text-gray-400">Spring Boot, REST APIs, Java, C[cite: 1]</p>
            </div>
            <div className="bg-white dark:bg-[#171717] p-5 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Databases</h3>
              <p className="text-slate-600 dark:text-gray-400">PostgreSQL, MongoDB, MySQL, Oracle[cite: 1]</p>
            </div>
            <div className="bg-white dark:bg-[#171717] p-5 rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">Developer Tools</h3>
              <p className="text-slate-600 dark:text-gray-400">Git, GitHub, Postman, VS Code, IntelliJ IDEA[cite: 1]</p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <h2 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            Professional Background
          </h2>
          <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
            Fresher actively building full-stack applications. Hands-on experience developing role-based systems 
            like <span className="text-slate-900 dark:text-white font-semibold">Biyoans</span>, working with Spring Boot backend services, 
            RESTful API integrations, and modern frontend architectures[cite: 1].
          </p>
        </div>
      </div>
      <hr className="mt-16 border-slate-200 dark:border-neutral-800" />
    </div>
  );
}

export default About;