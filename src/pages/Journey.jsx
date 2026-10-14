
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Layers3,
  Rocket,
} from "lucide-react";
import TubesCursor from "../components/TubesCursor";

const journey = [
  {
    year: "2023",
    title: "Started Computer Science",
    description:
      "Began my B.Tech in Computer Science and learned programming fundamentals.",
    icon: GraduationCap,
  },
  {
    year: "2024",
    title: "Entered Web Development",
    description:
      "Learned HTML, CSS, JavaScript and React to build interactive interfaces.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Explored Full-Stack Development",
    description:
      "Started working with Node.js, Express, MongoDB and REST APIs.",
    icon: Layers3,
  },
  {
    year: "2026",
    title: "Building Real-World Projects",
    description:
      "Developing Nestio and GenZVibe while practising DSA in Java.",
    icon: Rocket,
  },
];

export default function Journey() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-10 pt-24 text-white md:px-10 md:pt-28">
      {/* Tube cursor background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <TubesCursor />
      </div>

      {/* Journey content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="mb-2 text-sm font-semibold tracking-widest text-purple-400">
            MY DEVELOPER JOURNEY
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Journey
            </span>{" "}
            So Far.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
            From learning the basics to building full-stack applications,
            every step has helped me grow as a developer.
          </p>
        </motion.div>

        <div className="relative space-y-3">
          <div className="absolute bottom-5 left-5 top-5 w-px bg-gradient-to-b from-indigo-400/70 via-purple-400/50 to-pink-400/20" />

          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-3"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-[#10101a] text-purple-400">
                  <Icon size={19} />
                </div>

                <div className="rounded-xl border border-white/10 bg-transparent p-4 transition-colors hover:border-purple-400/30">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold tracking-widest text-purple-400">
                      {item.year}
                    </span>
                    <span className="text-xs text-gray-500">
                      MILESTONE {index + 1}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold tracking-tight sm:text-xl">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
