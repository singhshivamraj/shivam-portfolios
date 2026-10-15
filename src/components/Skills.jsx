
// import React from "react";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import TubesCursor from "./TubesCursor";

// import {
//   SiJavascript,
//   SiReact,
//   SiNodedotjs,
//   SiMongodb,
//   SiTailwindcss,
//   SiRedux,
//   SiMysql,
//   SiExpress,
// } from "react-icons/si";

// import {
//   FaJava,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   HiOutlineCode,
//   HiOutlineBriefcase,
//   HiOutlineLightningBolt,
//   HiOutlineGlobe,
// } from "react-icons/hi";

// const row1 = [
//   { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
//   { name: "React", icon: <SiReact />, color: "#61DAFB" },
//   { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
//   { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
//   { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
//   { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
// ];

// const row2 = [
//   { name: "Java", icon: <FaJava />, color: "#F89820" },
//   { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
//   { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
//   { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
//   { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
//   { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
// ];
// const StatItem = ({ end, label, suffix = "", icon, iconColor }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.8,
//   });

//   return (
//     <div
//       ref={ref}
//       className="relative group flex flex-col items-center justify-center px-4 md:px-10 md:border-r md:border-white/5 md:last:border-r-0"
//     >
//       <div
//         className="absolute inset-0 blur-[50px] rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
//         style={{ backgroundColor: iconColor }}
//       />

//       <div className="relative z-10 flex flex-col items-center">
//         <div
//           className="text-3xl md:text-4xl mb-2 sm:mb-3 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[10deg]"
//           style={{
//             color: iconColor,
//             filter: `drop-shadow(0 0 10px ${iconColor}88)`,
//           }}
//         >
//           {icon}
//         </div>

//         <div className="text-4xl md:text-6xl font-[1000] italic tracking-tighter flex items-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
//           {inView ? <CountUp end={end} duration={4} delay={0.2} /> : "0"}
//           <span className="text-white/40 ml-1 text-2xl md:text-3xl group-hover:text-white transition-colors">
//             {suffix}
//           </span>
//         </div>

//         <div className="mt-1.5 sm:mt-2 flex flex-col items-center w-full">
//           <span className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors">
//             {label}
//           </span>

//           <motion.div
//             initial={{ width: 0 }}
//             animate={inView ? { width: "60%" } : { width: 0 }}
//             transition={{ duration: 1.5, delay: 0.5 }}
//             className="h-[2px] mt-2"
//             style={{ backgroundColor: iconColor }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const SkillCard = ({ skill }) => (
//   <div className="flex-shrink-0 w-44 h-32 md:w-64 md:h-40 mx-5 relative group">
//     <div className="relative w-full h-full bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 shadow-2xl">
//       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

//       <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-3">
//         <div
//           className="text-5xl md:text-6xl transition-all duration-500 group-hover:drop-shadow-[0_0_25px_var(--glow)]"
//           style={{
//             color: skill.color,
//             "--glow": skill.color,
//           }}
//         >
//           {skill.icon}
//         </div>

//         <span className="text-white font-black text-sm md:text-lg tracking-tighter uppercase italic opacity-30 group-hover:opacity-100 transition-all">
//           {skill.name}
//         </span>
//       </div>
//     </div>
//   </div>
// );

// const Skills = () => {
//   return (
//      <section  className="relative w-full bg-black">
//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <TubesCursor />
//       </div>

//       {/* Skills content */}
//       <div className="relative z-10 w-full flex items-center justify-center">
//         {/* Frame border + shadow + big rounded corners only from 640px up; on phones there are no side lines */}
//         <div className="relative w-full max-w-[1400px] bg-transparent rounded-none sm:rounded-[5rem] pt-3 pb-8 sm:py-12 md:py-16 overflow-hidden sm:shadow-2xl sm:border sm:border-white/5">
//           {/* MAGIC BORDER */}
//           <motion.div
//             animate={{
//               borderColor: ["#6366f1", "#a855f7", "#ec4899", "#6366f1"],
//               boxShadow: [
//                 "0 0 20px rgba(99, 102, 241, 0.1)",
//                 "0 0 40px rgba(168, 85, 247, 0.2)",
//                 "0 0 20px rgba(236, 72, 153, 0.1)",
//                 "0 0 20px rgba(99, 102, 241, 0.1)",
//               ],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="absolute inset-0 hidden sm:block rounded-[5rem] border-2 pointer-events-none z-30"
//           />

//           {/* HEADER */}
//           <div className="text-center mb-4 sm:mb-6 md:mb-10 relative z-40">
//             <motion.h2
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-[26px] min-[400px]:text-3xl sm:text-4xl md:text-6xl font-[1000] tracking-tighter uppercase italic flex flex-col items-center justify-center leading-none"
//             >
//               <span className="text-[9px] font-mono tracking-[0.8em] text-white/20 mb-2 block uppercase font-normal">
//                 Technical Engine
//               </span>

//               <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-400 to-purple-600 bg-[size:200%] animate-gradient-flow">
//                 TECHNICAL TOOLKIT

//                 <motion.span
//                   animate={{
//                     opacity: [0, 0, 1, 0, 0],
//                     x: ["-100%", "200%"],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     repeatDelay: 1,
//                   }}
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] pointer-events-none"
//                 />
//               </span>
//             </motion.h2>
//           </div>

//           {/* SKILL TRACKS */}
//           <div className="flex flex-col gap-1 sm:gap-4 relative z-20">
//             <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-black/10 to-transparent z-30 pointer-events-none" />

//             <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-black/10 to-transparent z-30 pointer-events-none" />

//             <div className="flex overflow-hidden py-1 sm:py-2">
//               <motion.div
//                 animate={{ x: [0, -2000] }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="flex whitespace-nowrap"
//               >
//                 {[...row1, ...row1, ...row1].map((skill, i) => (
//                   <SkillCard key={i} skill={skill} />
//                 ))}
//               </motion.div>
//             </div>

//             <div className="flex overflow-hidden py-1 sm:py-2">
//               <motion.div
//                 animate={{ x: [-2000, 0] }}
//                 transition={{
//                   duration: 35,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="flex whitespace-nowrap"
//               >
//                 {[...row2, ...row2, ...row2].map((skill, i) => (
//                   <SkillCard key={i} skill={skill} />
//                 ))}
//               </motion.div>
//             </div>
//           </div>

//           {/* STATS */}
//           <div className="relative z-40 w-full mt-6 pt-6 sm:mt-10 sm:pt-8 md:mt-14 md:pt-10 border-t border-white/5 bg-gradient-to-t from-white/[0.01] to-transparent">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-10">
//               <StatItem
//                 icon={<HiOutlineBriefcase />}
//                 iconColor="#60A5FA"
//                 end={8}
//                 label="Projects Completed"
//                 suffix="+"
//               />

//               <StatItem
//                 icon={<HiOutlineLightningBolt />}
//                 iconColor="#FACC15"
//                 end={2}
//                 label="Live Apps."
//                 suffix="+"
//               />

//               <StatItem
//                 icon={<HiOutlineGlobe />}
//                 iconColor="#4ADE80"
//                 end={12}
//                 label="Tech Mastered"
//                 suffix="★"
//               />

//               <StatItem
//                 icon={<HiOutlineCode />}
//                 iconColor="#F87171"
//                 end={100}
//                 label="LeetCode Solved"
//                 suffix="+"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes gradient-flow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         .animate-gradient-flow {
//           animation: gradient-flow 6s ease infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;






















import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TubesCursor from "./TubesCursor";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiExpress,
} from "react-icons/si";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  HiOutlineCode,
  HiOutlineBriefcase,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
} from "react-icons/hi";

const row1 = [
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
];

const row2 = [
  { name: "Java", icon: <FaJava />, color: "#F89820" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Redux Toolkit", icon: <SiRedux />, color: "#764ABC" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
];
const StatItem = ({ end, label, suffix = "", icon, iconColor }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      className="relative group flex flex-col items-center justify-center px-4 md:px-10 md:border-r md:border-white/5 md:last:border-r-0"
    >
      <div
        className="absolute inset-0 blur-[50px] rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: iconColor }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="text-3xl md:text-4xl mb-2 sm:mb-3 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[10deg]"
          style={{
            color: iconColor,
            filter: `drop-shadow(0 0 10px ${iconColor}88)`,
          }}
        >
          {icon}
        </div>

        <div className="text-4xl md:text-6xl font-[1000] italic tracking-tighter flex items-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          {inView ? <CountUp end={end} duration={4} delay={0.2} /> : "0"}
          <span className="text-white/40 ml-1 text-2xl md:text-3xl group-hover:text-white transition-colors">
            {suffix}
          </span>
        </div>

        <div className="mt-1.5 sm:mt-2 flex flex-col items-center w-full">
          <span className="text-center text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/20 group-hover:text-white/60 transition-colors">
            {label}
          </span>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "60%" } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[2px] mt-2"
            style={{ backgroundColor: iconColor }}
          />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => (
  <div className="flex-shrink-0 w-32 h-24 sm:w-44 sm:h-32 md:w-64 md:h-40 mx-2.5 sm:mx-5 relative group">
    <div className="relative w-full h-full bg-white/[0.03] backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div
          className="text-4xl sm:text-5xl md:text-6xl transition-all duration-500 group-hover:drop-shadow-[0_0_25px_var(--glow)]"
          style={{
            color: skill.color,
            "--glow": skill.color,
          }}
        >
          {skill.icon}
        </div>

        <span className="text-white font-black text-xs sm:text-sm md:text-lg tracking-tighter uppercase italic opacity-30 group-hover:opacity-100 transition-all">
          {skill.name}
        </span>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
     <section  className="relative w-full bg-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <TubesCursor />
      </div>

      {/* Skills content */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {/* Frame border + shadow + big rounded corners only from 640px up; on phones there are no side lines */}
        <div className="relative w-full max-w-[1400px] bg-transparent rounded-none sm:rounded-[5rem] pt-0 pb-8 sm:py-12 md:py-16 overflow-hidden sm:shadow-2xl sm:border sm:border-white/5">
          {/* MAGIC BORDER */}
          <motion.div
            animate={{
              borderColor: ["#6366f1", "#a855f7", "#ec4899", "#6366f1"],
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.1)",
                "0 0 40px rgba(168, 85, 247, 0.2)",
                "0 0 20px rgba(236, 72, 153, 0.1)",
                "0 0 20px rgba(99, 102, 241, 0.1)",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 hidden sm:block rounded-[5rem] border-2 pointer-events-none z-30"
          />

          {/* HEADER */}
          <div className="text-center mb-4 sm:mb-6 md:mb-10 relative z-40">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[26px] min-[400px]:text-3xl sm:text-4xl md:text-6xl font-[1000] tracking-tighter uppercase italic flex flex-col items-center justify-center leading-none"
            >
              <span className="text-[9px] font-mono tracking-[0.8em] text-white/20 mb-2 block uppercase font-normal">
                Technical Engine
              </span>

              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-400 to-purple-600 bg-[size:200%] animate-gradient-flow">
                TECHNICAL TOOLKIT

                <motion.span
                  animate={{
                    opacity: [0, 0, 1, 0, 0],
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg] pointer-events-none"
                />
              </span>
            </motion.h2>
          </div>

          {/* SKILL TRACKS */}
          <div className="flex flex-col gap-3 sm:gap-4 relative z-20">
            <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-black/10 to-transparent z-30 pointer-events-none" />

            <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-black/10 to-transparent z-30 pointer-events-none" />

            <div className="flex overflow-hidden py-1 sm:py-2">
              <motion.div
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max whitespace-nowrap"
              >
                {[...row1, ...row1, ...row1].map((skill, i) => (
                  <SkillCard key={i} skill={skill} />
                ))}
              </motion.div>
            </div>

            <div className="flex overflow-hidden py-1 sm:py-2">
              <motion.div
                animate={{ x: ["-33.333%", "0%"] }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max whitespace-nowrap"
              >
                {[...row2, ...row2, ...row2].map((skill, i) => (
                  <SkillCard key={i} skill={skill} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* STATS */}
          <div className="relative z-40 w-full mt-6 pt-6 sm:mt-10 sm:pt-8 md:mt-14 md:pt-10 border-t border-white/5 bg-gradient-to-t from-white/[0.01] to-transparent">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-10">
              <StatItem
                icon={<HiOutlineBriefcase />}
                iconColor="#60A5FA"
                end={8}
                label="Projects Completed"
                suffix="+"
              />

              <StatItem
                icon={<HiOutlineLightningBolt />}
                iconColor="#FACC15"
                end={2}
                label="Live Apps."
                suffix="+"
              />

              <StatItem
                icon={<HiOutlineGlobe />}
                iconColor="#4ADE80"
                end={12}
                label="Tech Mastered"
                suffix="★"
              />

              <StatItem
                icon={<HiOutlineCode />}
                iconColor="#F87171"
                end={100}
                label="LeetCode Solved"
                suffix="+"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;