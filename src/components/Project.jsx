





















import { memo, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import TubesCursor from "./TubesCursor";
import { Link } from "react-router-dom";

// ==========================================
// PROJECT CARD
// ==========================================
const ProjectCard = memo(({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const rectRef = useRef(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const glowBackground = useMotionTemplate`radial-gradient(ellipse at ${mouseX}% ${mouseY}%, ${project.c1}60, ${project.c2}40, transparent 70%)`;

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        colorIndex: i % 3,
      })),
    []
  );

  const updateRect = () => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    if (!rectRef.current) updateRect();

    const rect = rectRef.current;
    if (!rect || !rect.width || !rect.height) return;

    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseEnter = () => {
    updateRect();
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
    rectRef.current = null;
    setIsHovered(false);
  };

  const externalLinks = [
    {
      I: Github,
      c: project.c1,
      url: project.githubUrl,
      label: `${project.title} GitHub repository`,
    },
    {
      I: ExternalLink,
      c: project.c2,
      url: project.liveUrl,
      label: `${project.title} live demo`,
    },
  ].filter(({ url }) => Boolean(url));

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: Math.min(index, 3) * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative h-[min(440px,64vh)] w-[300px] shrink-0 md:h-[min(540px,68vh)] md:w-[380px]"
    >
      {/* OUTER GLOW */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[50px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: glowBackground, filter: "blur(60px)" }}
        animate={{ scale: isHovered ? [1, 1.08, 1] : 1 }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* MAIN CARD */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[38px]"
        style={{
          background: `linear-gradient(135deg, ${project.c1}12, ${project.c2}08, black)`,
          boxShadow: isHovered
            ? `0 30px 80px -30px ${project.c1}80, 0 0 50px ${project.c2}40, inset 0 2px 0 rgba(255,255,255,0.15)`
            : "0 25px 50px -12px rgba(0,0,0,0.8)",
        }}
      >
        {/* ROTATING BORDER */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[38px]"
          style={{
            background: `conic-gradient(from 0deg, ${project.c1}60, ${project.c2}60, ${project.c3}60, ${project.c1}60)`,
            padding: "2px",
            WebkitMaskImage:
              "linear-gradient(black, black), linear-gradient(black, black)",
            WebkitMaskClip: "padding-box, border-box",
            WebkitMaskComposite: "xor",
          }}
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-[2px] rounded-[36px] bg-black" />
        </motion.div>

        {/* CARD CONTENT */}
        <div className="absolute inset-[2px] flex flex-col overflow-hidden rounded-[36px] backdrop-blur-xl">
          {/* BACKGROUND GRADIENTS */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(at 30% 20%, ${project.c1}60, transparent 40%), radial-gradient(at 70% 80%, ${project.c2}60, transparent 40%), radial-gradient(at 50% 50%, ${project.c3}50, transparent 50%)`,
            }}
            animate={{ opacity: isHovered ? [0.5, 0.7, 0.5] : 0.3 }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* IMAGE AREA */}
          <div className="relative min-h-[110px] flex-1 overflow-hidden">
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-8 h-32 w-32 rounded-full opacity-40 blur-3xl"
              style={{ background: project.c1 }}
              animate={{
                y: isHovered ? [0, -15, 0] : 0,
                x: isHovered ? [0, 10, 0] : 0,
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-8 h-40 w-40 rounded-full opacity-30 blur-3xl"
              style={{ background: project.c2 }}
              animate={{
                y: isHovered ? [0, 15, 0] : 0,
                x: isHovered ? [0, -10, 0] : 0,
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* PROJECT IMAGE */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none relative h-full w-full"
              animate={{ scale: isHovered ? 1.08 : 1 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.img})`,
                  filter: isHovered
                    ? "brightness(1.15) saturate(1.3)"
                    : "brightness(0.75)",
                }}
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${project.c1}15 30%, black 100%)`,
                }}
              />

              {isHovered && (
                <motion.div
                  className="pointer-events-none absolute inset-x-0 top-0 h-2"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.c3}, transparent)`,
                    boxShadow: `0 0 30px ${project.c3}`,
                  }}
                  animate={{ y: ["0%", "4000%"] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}
            </motion.div>

            {/* TAGS */}
            <div
              className="pointer-events-none absolute left-5 top-5 z-10 flex gap-2"
              aria-label="Technologies"
            >
              {project.tags.slice(0, 2).map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-widest backdrop-blur-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${project.c1}30, ${project.c2}20)`,
                    border: `1px solid ${project.c1}50`,
                    color: project.c1,
                    boxShadow: `0 4px 15px ${project.c1}40`,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* PROJECT NUMBER */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full text-base font-black backdrop-blur-2xl"
              style={{
                background: `linear-gradient(135deg, ${project.c1}40, ${project.c2}30)`,
                border: `2px solid ${project.c1}60`,
                color: project.c1,
                boxShadow: isHovered
                  ? `0 0 40px ${project.c1}80`
                  : `0 4px 15px ${project.c1}40`,
              }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.25 }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>
          </div>

          {/* CARD BOTTOM */}
          <div className="relative z-20 flex shrink-0 flex-col gap-3 p-4 md:p-6">
            <div>
              <motion.div
                className="mb-2 flex items-center gap-2"
                animate={{ opacity: isHovered ? 1 : 0.5 }}
              >
                <div
                  className="h-[2px] w-8"
                  style={{
                    background: `linear-gradient(90deg, ${project.c1}, transparent)`,
                  }}
                />
                <span
                  className="text-[9px] font-bold uppercase tracking-widest"
                  style={{ color: project.c2 }}
                >
                  {project.cat}
                </span>
              </motion.div>

              {/* TITLE */}
              <h3 className="mb-1 text-2xl font-black leading-none text-white md:mb-2 md:text-4xl">
                {project.title.split(" ").map((word, i) => (
                  <span key={i} className="mr-2 inline-block">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={`${i}-${j}`}
                        className="inline-block"
                        whileHover={{
                          y: -4,
                          color: project.c1,
                          textShadow: `0 0 20px ${project.c1}`,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h3>

              {/* DESCRIPTION */}
              <motion.p
                className="text-xs leading-relaxed text-gray-400"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                {project.desc}
              </motion.p>
            </div>

            {/* BOTTOM ACTIONS */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                {externalLinks.map(({ I, c, url, label }, i) => (
                  <motion.a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{
                      scale: 1.1,
                      rotate: i === 0 ? -5 : 5,
                      y: -3,
                    }}
                    className="relative z-30 flex h-9 w-9 shrink-0 items-center justify-center rounded-full backdrop-blur-xl"
                    style={{
                      background: `${c}20`,
                      border: `1px solid ${c}40`,
                      boxShadow: `0 4px 15px ${c}30`,
                    }}
                  >
                    <I size={14} style={{ color: c }} />
                  </motion.a>
                ))}
              </div>

              {/* VIEW LINK */}
              <Link
                to={`/projects/${project.slug}`}
                aria-label={`View ${project.title} project details`}
                className="relative z-30 inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-wider transition-shadow duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                style={{
                  background: `linear-gradient(135deg, ${project.c1}, ${project.c2}, ${project.c3})`,
                  backgroundSize: "200% 200%",
                  boxShadow: `0 8px 25px ${project.c1}60`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 40px ${project.c1}70`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 25px ${project.c1}60`;
                }}
              >
                <span className="font-black text-white">View</span>
                <ArrowRight size={14} className="text-white" />
              </Link>
            </div>
          </div>

          {/* HOVER PARTICLES */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
            {isHovered &&
              particles.map((particle) => {
                const particleColor = [
                  project.c1,
                  project.c2,
                  project.c3,
                ][particle.colorIndex];

                return (
                  <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                      width: 3,
                      height: 3,
                      background: particleColor,
                      boxShadow: `0 0 15px ${particleColor}`,
                      top: particle.top,
                      left: particle.left,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0],
                      y: [0, -80],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: particle.id * 0.1,
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// ==========================================
// PREMIUM TITLE
// ==========================================
const PremiumTitle = ({ text }) => (
  <div className="flex flex-col items-center px-4 py-4">
    <div className="relative inline-block overflow-hidden px-10">
      <motion.h2
        className="relative z-10 text-center text-4xl font-[1000] italic uppercase tracking-tighter md:text-5xl"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 20%, #818cf8 60%, #4f46e5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </motion.h2>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0.5,
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
          skewX: "-20deg",
        }}
      />
    </div>

    <motion.div
      aria-hidden="true"
      className="mt-4 h-[2px] rounded-full"
      style={{
        background:
          "linear-gradient(90deg, transparent, #3b82f6, #a855f7, #ec4899, transparent)",
        backgroundSize: "200% 100%",
      }}
      animate={{
        width: ["0%", "85%", "0%"],
        backgroundPosition: ["0% 0%", "200% 0%"],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// ==========================================
// PROJECT DATA
// ==========================================
const projects = [
  {
    title: "GenZVibe",
    slug: "genzvibe",
    cat: "Full-Stack E-Commerce",
    tags: ["React", "Node.js", "MongoDB"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    desc: "A full-stack shopping platform with secure Razorpay payment verification.",
    liveUrl: "https://genzvibe.onrender.com/",
    githubUrl: "https://github.com/singhshivamraj/GenZVibe",
    c1: "#00d4ff",
    c2: "#0066ff",
    c3: "#00ffff",
  },
  {
    title: "Nestio",
    slug: "nestio",
    cat: "Real Estate",
    tags: ["Node.js", "Express", "MongoDB"],
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    desc: "A full-stack property listing platform inspired by Airbnb.",
    liveUrl: "https://nestio-1.onrender.com/listings",
    githubUrl: "https://github.com/singhshivamraj/Nestio",
    c1: "#a855f7",
    c2: "#ec4899",
    c3: "#f472b6",
  },
  {
    title: "Weather App",
    slug: "weather-app",
    cat: "Weather Application",
    tags: ["React", "JavaScript", "Weather API"],
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
    desc: "Search any location for real-time weather updates.",
    liveUrl: "https://euphonious-froyo-cb6cea.netlify.app/",
    githubUrl: "https://github.com/singhshivamraj/Weatherapp",
    c1: "#fbbf24",
    c2: "#f59e0b",
    c3: "#fde047",
  },
  {
    title: "To-Do List",
    slug: "todo-app",
    cat: "Productivity App",
    tags: ["JavaScript", "HTML", "CSS"],
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    desc: "A simple task management app to organize and track daily tasks.",
    liveUrl: "https://vocal-salmiakki-256db2.netlify.app/",
    githubUrl: "https://github.com/singhshivamraj/To-Do-List",
    c1: "#10b981",
    c2: "#14b8a6",
    c3: "#34d399",
  },
  {
    title: "Quantum AI",
    slug: "quantum-ai",
    cat: "ML Engine",
    tags: ["Python", "AI"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    desc: "ML framework",
    c1: "#6366f1",
    c2: "#8b5cf6",
    c3: "#a78bfa",
  },
  {
    title: "Stellar UI",
    slug: "stellar-ui",
    cat: "Design",
    tags: ["Figma", "React"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    desc: "Component library",
    c1: "#f43f5e",
    c2: "#ec4899",
    c3: "#fb7185",
  },
];

// ==========================================
// PROJECTS SECTION
// ==========================================
const Projects = () => {
  const targetRef = useRef(null);
  const rowRef = useRef(null);
  const maxXRef = useRef(0);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const measure = () => {
      maxXRef.current = Math.max(
        0,
        row.scrollWidth - window.innerWidth
      );
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(row);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, (v) => {
    const t = Math.min(1, Math.max(0, (v - 0.05) / 0.9));
    return -t * maxXRef.current;
  });

  const x = useSpring(rawX, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
    restDelta: 0.5,
  });

  return (
    <section
      ref={targetRef}
      className="relative w-full bg-black"
      style={{ height: "450vh" }}
    >
      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <TubesCursor />
      </div>

      {/* PINNED STAGE */}
      <div
        className="sticky top-0 z-10 flex h-screen w-full flex-col pt-20 md:pt-28"
        style={{ overflowX: "clip" }}
      >
        <div className="shrink-0">
          <PremiumTitle text="MY PROJECTS" />
        </div>

        <div className="flex min-h-0 flex-1 items-center">
          <motion.div
            ref={rowRef}
            style={{ x }}
            className="flex w-max shrink-0 gap-6 px-10 will-change-transform md:px-32"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}

            <div
              aria-hidden="true"
              className="pointer-events-none flex w-[320px] shrink-0 flex-col items-center justify-center"
            >
              <div className="text-8xl font-black uppercase italic text-white/5">
                End
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
