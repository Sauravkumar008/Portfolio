import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Portfolio() {
  const projectList = [
    {
      id: 1,
      title: "Biyoans - Educational Management System",
      category: "Full-Stack Development (Group Project)",
      description:
        "Built a responsive, role-based dashboard for Admin, Staff, and Students using React and Tailwind CSS. Integrated Spring Boot REST APIs for seamless data flow and managed state using React hooks[cite: 1].",
      tags: ["React.js", "Spring Boot", "REST API", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/SauravKumar7091/biyoans-frontend",
      demo: "https://biyoans-frontend.vercel.app",
      status: "Role-Based RBAC",
    },
    {
      id: 2,
      title: "Weather Application",
      category: "Frontend & API Integration",
      description:
        "Developed a responsive weather dashboard fetching real-time data using the OpenWeather API. Features include city-based search, dynamic weather condition cards, and smooth state updates[cite: 1].",
      tags: ["React.js", "Tailwind CSS", "OpenWeather API", "Axios"],
      github: "https://github.com/SauravKumar7091",
      demo: null,
      status: "Real-time API",
    },
    {
      id: 3,
      title: "Developer Portfolio",
      category: "Frontend / Personal Branding",
      description:
        "A modern, highly responsive portfolio showcasing software engineering projects, academic background, and technical proficiencies with dual-theme aesthetic and smooth scrolling[cite: 1].",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "React Scroll"],
      github: "https://github.com/SauravKumar7091",
      demo: "#",
      status: "Active",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pt-[10vh] text-slate-700 dark:text-gray-300"
    >
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Featured Projects</h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 mb-10 font-normal">
          A showcase of full-stack systems, frontend interfaces, and API integrations I have engineered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map(({ id, title, category, description, tags, github, demo, status }) => (
            <div
              key={id}
              className="bg-white dark:bg-[#171717] border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md dark:shadow-none hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                    {category}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                    {status}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-gray-400 mt-3 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-gray-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-neutral-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100 dark:border-neutral-800">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400 dark:text-neutral-500">
                    Repo Only
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-16 border-slate-200 dark:border-neutral-800" />
    </div>
  );
}

export default Portfolio;