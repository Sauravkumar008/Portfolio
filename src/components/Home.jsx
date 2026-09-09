import React from "react";
import pic from "../../public/photo.avif";
import { Link } from "react-scroll";
import { FiDownload, FiArrowRight } from "react-icons/fi";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaReact, FaJava } from "react-icons/fa6";
import { SiSpringboot, SiPostgresql, SiMongodb } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-[8vh] md:py-[13vh]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
          {/* Left Content */}
          <div className="md:w-7/12 space-y-6 order-2 md:order-1 z-10">
            <span className="text-xs md:text-sm font-mono tracking-wider uppercase font-semibold text-emerald-600 dark:text-emerald-400">
              Welcome to my portfolio
            </span>

            <div className="flex flex-wrap text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              <h1 className="mr-3">Hello, I'm a</h1>
              <ReactTyped
                className="text-emerald-600 dark:text-emerald-400"
                strings={[
                  "Full-Stack Developer",
                  "React Developer",
                  "Spring Boot Developer",
                ]}
                typeSpeed={45}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-base text-slate-700 dark:text-gray-300 leading-relaxed text-justify max-w-xl">
              Aspiring Full-Stack Developer and MCA student at Galgotias University, skilled
              in building responsive web applications using React, JavaScript, REST APIs, and
              Spring Boot[cite: 1]. Experienced in backend integration, SQL databases, and developing
              scalable, role-based applications[cite: 1].
            </p>

            {/* High Impact Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Saurav_CV.pdf"
                download="Saurav_Kumar_CV.pdf"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Download Resume</span>
                <FiDownload className="text-base" />
              </a>

              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-neutral-700 hover:border-emerald-500 bg-white dark:bg-[#171717] text-slate-800 dark:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let's Connect</span>
                <FiArrowRight className="text-base" />
              </Link>
            </div>

            {/* Social & Tech Stack */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-200 dark:border-white/10">
              {/* Social Icons */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-600 dark:text-gray-400">
                  Connect
                </h2>
                <ul className="flex items-center space-x-4 text-slate-700 dark:text-gray-300">
                  <li>
                    <a
                      href="https://github.com/SauravKumar7091"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500 shadow-sm transition-all duration-200"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/saurav-kumar-97650725b"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 shadow-sm transition-all duration-200"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:sauravku7091@gmail.com"
                      aria-label="Email"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-500 shadow-sm transition-all duration-200"
                    >
                      <MdEmail className="text-xl" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Core Stack Icons */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-600 dark:text-gray-400">
                  Core Stack
                </h2>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="React.js">
                    <FaReact className="text-xl text-cyan-500" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="Spring Boot">
                    <SiSpringboot className="text-xl text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="Java">
                    <FaJava className="text-xl text-amber-600 dark:text-amber-500" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="PostgreSQL">
                    <SiPostgresql className="text-xl text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center shadow-sm hover:scale-110 transition-transform" title="MongoDB">
                    <SiMongodb className="text-xl text-emerald-700 dark:text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Card */}
          <div className="md:w-5/12 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group w-[270px] h-[350px] sm:w-[310px] sm:h-[400px] md:w-[350px] md:h-[450px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/25 via-teal-500/20 to-cyan-500/25 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition duration-500"></div>

              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-300 dark:border-white/15 bg-white dark:bg-[#10141e]/90 p-2.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <img
                  src={pic}
                  className="rounded-[1.5rem] w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 ease-out"
                  alt="Saurav Kumar"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-[1.5rem] pointer-events-none"></div>

                <div className="absolute bottom-5 left-5 right-5 bg-white/95 dark:bg-[#0b0e17]/85 backdrop-blur-md border border-slate-200 dark:border-white/10 py-2.5 px-3.5 rounded-xl flex items-center justify-between shadow-xl">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-gray-200">Open to Roles</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    MCA '27
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-neutral-800" />
    </>
  );
}

export default Home;