













import React from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TubesCursor from "../components/TubesCursor";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiDotnet,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const headingStyle =
  "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400";

const skills = [
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-500",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "text-blue-500",
  },
  {
    name: "C",
    icon: SiC,
    color: "text-blue-400",
  },
//   {
//     name: "ASP.NET",
//     icon: SiDotnet,
//     color: "text-purple-400",
//   },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-400",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-400",
  },
];

const projects = [
  {
    title: "GenZVibe",
    description:
      "A full-stack e-commerce platform with authentication, product management, cart, orders and secure Razorpay payment integration.",
    tech: "MERN Stack",
    live: "https://genzvibe.onrender.com/",
    github: "https://github.com/singhshivamraj/GenZVibe",
    liveText: "Live Demo",
  },
  {
    title: "Nestio",
    description:
      "A full-stack property listing platform where users can explore, create, edit and review property listings with authentication and maps.",
    tech: "Node.js • Express • MongoDB • EJS",
    live: "https://nestio-1.onrender.com/listings",
    github: "https://github.com/singhshivamraj/Nestio",
    liveText: "Live Demo",
  },
  {
    title: "Weather App",
    description:
      "A weather application that fetches real-time weather information through an API and displays it through a clean and simple interface.",
    tech: "JavaScript • API • HTML • CSS",
    github: "https://github.com/singhshivamraj/Weatherapp",
  },
  {
    title: "Todo App",
    description:
      "A task management application built to practice frontend logic, state handling and interactive user experiences.",
    tech: "JavaScript • HTML • CSS",
    github: "https://github.com/singhshivamraj/To-Do-List",
  },
  {
    title: "Portfolio",
    description:
      "A modern developer portfolio created to showcase my skills, projects, development process and journey as a developer.",
    tech: "React • Tailwind CSS • Framer Motion",
    github: "#",
  },
];

function AboutDetails() {
  
  return (
    <>
    <section className="relative min-h-screen w-full bg-black text-white px-5 sm:px-6 md:px-12 pt-24 pb-10 sm:pt-28 sm:pb-14 overflow-hidden">

      {/* Tubes Cursor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <TubesCursor />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Back */}
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12"
        >
          <span>←</span>
          <span>Back to About</span>
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            About Me
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            I BUILD
            <br />
            <span className={headingStyle}>
              DIGITAL EXPERIENCES.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed">
            I'm a Computer Science student and full-stack developer who
            enjoys turning ideas into practical digital experiences. I focus
            on building clean interfaces, reliable backend systems and
            applications that solve real problems.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 sm:mt-20"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            Education
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black ${headingStyle}`}
          >
            MY ACADEMIC JOURNEY
          </h2>

          <div className="mt-6 sm:mt-8 p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Bachelor of Technology — Computer Science
                </h3>

                <p className="text-gray-400 mt-2 text-lg">
                  Subharti University, Meerut
                </p>
              </div>

              <div className="text-indigo-400 font-semibold">
                2023 — 2027
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 sm:mt-20"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            Skills
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black ${headingStyle}`}
          >
            MY TECH STACK
          </h2>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-gray-300 hover:text-white hover:border-indigo-500/50 transition-all"
                >
                  <Icon className={`text-xl ${skill.color}`} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 sm:mt-20"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            What I Do
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black ${headingStyle}`}
          >
            HOW I BUILD
          </h2>

          <div className="mt-6 sm:mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">

            {/* Frontend */}
            <div className="p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h3 className={`text-2xl font-bold ${headingStyle}`}>
                Frontend
              </h3>

              <p className="text-gray-400 leading-relaxed mt-3 sm:mt-4">
                I build responsive and interactive interfaces using React,
                JavaScript, Tailwind CSS and modern frontend practices.
              </p>
            </div>

            {/* Backend */}
            <div className="p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h3 className={`text-2xl font-bold ${headingStyle}`}>
                Backend
              </h3>

              <p className="text-gray-400 leading-relaxed mt-3 sm:mt-4">
                I create REST APIs, authentication systems, database
                integrations and backend functionality using Node.js,
                Express and MongoDB.
              </p>
            </div>

            {/* Problem Solving */}
            <div className="p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h3 className={`text-2xl font-bold ${headingStyle}`}>
                Problem Solving
              </h3>

              <p className="text-gray-400 leading-relaxed mt-3 sm:mt-4">
                I practice DSA in Java and focus on breaking problems into
                smaller parts to build simple and reliable solutions.
              </p>
            </div>

          </div>
        </motion.div>

        {/* DSA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 sm:mt-20"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            Problem Solving
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black ${headingStyle}`}
          >
            DSA & CODING
          </h2>

          <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4 sm:gap-6">

            <div className="p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <p className={`text-5xl font-black ${headingStyle}`}>
                100+
              </p>

              <h3 className="text-2xl font-bold mt-3 sm:mt-4">
                DSA Problems
              </h3>

              <p className="text-gray-400 mt-2 sm:mt-3 leading-relaxed">
                Solved while practicing problem solving and strengthening
                core programming concepts using Java.
              </p>
            </div>

            <div className="p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <h3 className={`text-2xl font-bold ${headingStyle}`}>
                LeetCode Practice
              </h3>

              <p className="text-gray-400 mt-3 sm:mt-4 leading-relaxed">
                Regularly practicing coding problems involving arrays,
                strings, searching, sorting, patterns and fundamental
                problem-solving techniques.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 sm:mt-20"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            Selected Work
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black ${headingStyle}`}
          >
            PROJECTS I'VE BUILT
          </h2>

          <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-4 sm:gap-6">

            {projects.map((project) => (
              <div
                key={project.title}
                className="p-5 sm:p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-indigo-500/30 transition-all"
              >
                <h3 className={`text-2xl font-bold ${headingStyle}`}>
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-3 sm:mt-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-indigo-400 text-sm font-semibold mt-4">
                  {project.tech}
                </p>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-4">

                  {project.live && (
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noreferrer"
                      reloadDocument
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      <span>Live Demo</span>
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </Link>
                  )}

                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noreferrer"
                    reloadDocument
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-gray-300 text-sm font-semibold hover:text-white hover:border-white/30 transition-all"
                  >
                    <span>GitHub</span>
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 sm:mt-20 pb-2"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3 sm:mb-4">
            Connect
          </p>

          <h2
            className={`text-4xl md:text-5xl font-black ${headingStyle}`}
          >
            LET'S CONNECT.
          </h2>

          <div className="mt-6 flex items-center gap-4">

            {/* GitHub */}
            <Link
              to= "https://github.com/singhshivamraj"
              target="_blank"
              rel="noreferrer"
              reloadDocument
              aria-label="GitHub"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <FaGithub className="text-2xl text-white" />
            </Link>

            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/shivam-raj-0148592a5"
              target="_blank"
              rel="noreferrer"
              reloadDocument
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-2xl text-[#0A66C2]" />
            </Link>

            {/* Instagram */}
            <Link
              to="https://www.instagram.com/shivamm.63/"
              target="_blank"
              rel="noreferrer"
              reloadDocument
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaInstagram className="text-2xl text-[#E4405F]" />
            </Link>

            {/* Email */}
            <Link
             to="https://mail.google.com/mail/?view=cm&fs=1&to=shivamraj6436@gmail.com"
              reloadDocument
              aria-label="Email"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaEnvelope className="text-2xl text-[#EA4335]" />
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
 <Footer />
    </>
  );
}

export default AboutDetails;