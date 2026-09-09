import React from "react";
import { 
  FaJava, 
  FaReact, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase,
  FaTerminal
} from "react-icons/fa6";
import { 
  SiSpringboot, 
  SiJavascript, 
  SiMongodb, 
  SiTailwindcss, 
  SiPostman 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

function Experiance() {
  const skillCategories = [
    {
      category: "Programming Languages",
      description: "Core syntax, algorithmic logic, and OOP foundations.",
      skills: [
        { name: "Java", icon: <FaJava className="text-amber-500" />, level: "Core Java & OOP" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: "ES6+ Modern JS" },
        { name: "C Language", icon: <FaTerminal className="text-blue-500" />, level: "Procedural Logic" },
      ],
    },
    {
      category: "Backend & Systems",
      description: "Server architecture, enterprise business logic, and APIs.",
      skills: [
        { name: "Java Backend", icon: <FaJava className="text-amber-500" />, level: "Enterprise Logic" },
        { name: "Spring Boot", icon: <SiSpringboot className="text-emerald-500" />, level: "REST APIs & MVC" },
        { name: "REST APIs", icon: <SiPostman className="text-orange-500" />, level: "Endpoints & Postman" },
      ],
    },
    {
      category: "Databases",
      description: "Relational schema design, SQL querying, and NoSQL storage.",
      skills: [
        { name: "PostgreSQL", icon: <FaDatabase className="text-sky-500" />, level: "Relational DB" },
        { name: "MySQL", icon: <FaDatabase className="text-blue-600" />, level: "RDBMS & Queries" },
        { name: "Oracle", icon: <FaDatabase className="text-rose-600" />, level: "SQL / PL-SQL" },
        { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" />, level: "NoSQL Collections" },
      ],
    },
    {
      category: "Frontend & UI",
      description: "Client-side applications, responsive styling, and modern UI.",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Hooks & SPA" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Utility-first CSS" },
        { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-orange-500" />, level: "Semantic Layouts" },
      ],
    },
    {
      category: "Developer Tools",
      description: "Version control workflows, API testing, and code editors.",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-rose-500" />, level: "Version Control" },
        { name: "Postman", icon: <SiPostman className="text-orange-500" />, level: "API Testing" },
        { name: "VS Code", icon: <VscCode className="text-blue-500" />, level: "Code Editor" },
      ],
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pt-[10vh] text-slate-700 dark:text-gray-300"
    >
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Skills & Technical Proficiencies
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 mb-10 font-normal">
          A structured breakdown of my programming fundamentals, server architecture, and database engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#151922] border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 pb-3 border-b border-slate-100 dark:border-neutral-800">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center space-x-3 p-2.5 rounded-xl bg-slate-50 dark:bg-[#0d1017] border border-slate-200 dark:border-neutral-800"
                    >
                      <div className="text-2xl shrink-0">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-gray-400 font-mono">
                          {skill.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-16 border-slate-200 dark:border-neutral-800" />
    </div>
  );
}

export default Experiance;