
































import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import TubesCursor from "../components/TubesCursor";

// These descriptions are written as project concepts because the supplied
// project cards do not confirm that all listed features are implemented.
const projectData = {
  "cyber-sphere": {
    title: "Cyber Sphere",
    category: "AI PLATFORM",
    description:
      "An AI-focused security platform concept exploring threat monitoring, security insights, and a modern interface for understanding digital risks.",
    overview:
      "Cyber Sphere is presented as an AI and cybersecurity-focused project concept. This page describes its intended direction without claiming that monitoring or AI features have already been implemented.",
    goal:
      "Create a clear interface concept for exploring digital risks and presenting security-related insights in an accessible way.",
    tech: ["React", "AI", "JavaScript"],
    focus: [
      { title: "Security insights", text: "A place to present security-related information in a clear, structured interface." },
      { title: "AI-focused experience", text: "An interface direction centered on AI-assisted security workflows." },
      { title: "Information layout", text: "Organized sections intended to make complex technical information easier to scan." },
    ],
    highlights: [
      { title: "Interface direction", text: "A visual direction focused on cybersecurity and AI-related information." },
      { title: "Project technologies", text: "The stack shown here is taken from the associated project card." },
    ],
  },
 
"nestio": {
  title: "Nestio",
  category: "PROPERTY LISTING PLATFORM",
  description:
    "A full-stack property listing platform inspired by Airbnb, built to help users explore properties, create listings, and share reviews.",
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "EJS",
    "Bootstrap",
    "Passport.js",
    "Cloudinary",
  ],
  overview:
    "Nestio is a full-stack property listing application built with Express.js, MongoDB, Mongoose, and EJS. It supports property listings, user authentication, reviews, image uploads, search, and category-based browsing.",
  goal:
    "Build a property-listing experience with listing management, authentication, reviews, search, and map-based property exploration.",
  focus: [
    {
      title: "Property Listings",
      text: "Users can explore property listings and manage listing details.",
    },
    {
      title: "Authentication & Reviews",
      text: "Passport.js authentication and a review workflow support user interactions.",
    },
    {
      title: "Search & Maps",
      text: "Search, category filters, and map integration help users explore listings.",
    },
  ],
  highlights: [
    {
      title: "Image Uploads",
      text: "Multer and Cloudinary handle listing image uploads and storage.",
    },
    {
      title: "Full-stack Architecture",
      text: "Express.js, MongoDB, Mongoose, and EJS work together to power the application.",
    },
  ],
},

"weather-app": {
  title: "Weather App",
  category: "WEATHER APPLICATION",
  description:
    "A weather app that displays weather information for a searched location.",
  tech: ["React", "JavaScript", "Weather API"],
  liveUrl: "https://euphonious-froyo-cb6cea.netlify.app/",
  githubUrl: "https://github.com/singhshivamraj/Weatherapp",
  overview:
    "A weather application that lets users search for a location and view its weather information.",
  goal:
    "Build a simple and user-friendly interface for checking weather information by location.",
  focus: [
    {
      title: "Location Search",
      text: "Search for a location to view its weather information.",
    },
    {
      title: "Weather Information",
      text: "Display weather details for the searched location.",
    },
    {
      title: "User Interface",
      text: "Keep weather information easy to find and understand.",
    },
  ],
  highlights: [
    {
      title: "Live Deployment",
      text: "The application is available online for users to explore.",
    },
    {
      title: "GitHub Repository",
      text: "The source code is available for review.",
    },
  ],
},
"genzvibe": {
  title: "GenZVibe",
  category: "FULL-STACK E-COMMERCE",
  description:
    "A full-stack e-commerce platform with product browsing, user authentication, and secure Razorpay payment verification.",
  tech: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Cloudinary",
    "Razorpay",
  ],
  liveUrl: "YOUR_GENZVIBE_LIVE_URL",
  githubUrl: "https://github.com/singhshivamraj/GenZVibe",
  overview:
    "GenZVibe is a full-stack shopping application built with the MERN stack. It brings together product management, authentication, and payment processing in one platform.",
  goal:
    "Build an end-to-end shopping experience with a backend that verifies Razorpay payment signatures before creating an order.",
  focus: [
    {
      title: "Product Management",
      text: "A backend API supports product listing and management.",
    },
    {
      title: "Authentication",
      text: "User authentication uses JWT-based authorization.",
    },
    {
      title: "Payment Verification",
      text: "The backend verifies the Razorpay payment signature before creating an order.",
    },
  ],
  highlights: [
    {
      title: "Razorpay Integration",
      text: "Payment verification is handled on the backend before order creation.",
    },
    {
      title: "Full-Stack Architecture",
      text: "React, Express.js, and MongoDB work together to power the shopping experience.",
    },
  ],
},
"todo-app": {
  title: "To-Do List",
  category: "PRODUCTIVITY APP",
  description:
    "A task management app that helps users organize and track their daily tasks.",
  tech: ["JavaScript", "HTML", "CSS"],
  liveUrl: "https://vocal-salmiakki-256db2.netlify.app/",
  githubUrl: "https://github.com/singhshivamraj/To-Do-List",
  overview:
    "To-Do List is a productivity application designed to make everyday task management simple and organized.",
  goal:
    "Create a straightforward interface for managing daily tasks and keeping track of work.",
  focus: [
    {
      title: "Task Management",
      text: "Organize daily tasks in one convenient place.",
    },
    {
      title: "Simple Interface",
      text: "Keep the task management experience clear and easy to use.",
    },
    {
      title: "Productivity",
      text: "Help users keep track of their tasks and daily activities.",
    },
  ],
  highlights: [
    {
      title: "Live Deployment",
      text: "The application is available online to explore.",
    },
    {
      title: "Open Source",
      text: "The source code is available on GitHub.",
    },
  ],
},


  "quantum-ai": {
    title: "Quantum AI",
    category: "ML ENGINE",
    description:
      "A machine-learning project concept focused on exploring AI workflows, model-related information, and a clear interface for presenting results.",
    overview:
      "Quantum AI is presented as a machine-learning concept. Model training, inference, and integrations are not represented as completed unless they are implemented in the project itself.",
    goal:
      "Explore a clear way to present AI workflow information and model-related results.",
    tech: ["Python", "AI", "Machine Learning"],
    focus: [
      { title: "AI workflows", text: "A proposed structure for presenting steps in an AI-related workflow." },
      { title: "Model information", text: "A place to organize model details and related information." },
      { title: "Results presentation", text: "A readable interface direction for showing outputs and summaries." },
    ],
    highlights: [
      { title: "Workflow clarity", text: "The concept emphasizes a clear path from inputs to presented results." },
      { title: "Project technologies", text: "The stack shown here is taken from the associated project card." },
    ],
  },
  "stellar-ui": {
    title: "Stellar UI",
    category: "DESIGN SYSTEM",
    description:
      "A UI component library concept focused on reusable interface elements, consistent styling, and combining design ideas with React components.",
    overview:
      "Stellar UI is presented as a design-system and component-library concept. These details describe its intended purpose and do not claim that a published package or complete component library already exists.",
    goal:
      "Explore reusable interface patterns and consistent styling that can support a cohesive user experience.",
    tech: ["Figma", "React", "UI Design"],
    focus: [
      { title: "Reusable components", text: "A concept built around repeatable interface patterns." },
      { title: "Visual consistency", text: "A shared visual direction for spacing, color, and component behavior." },
      { title: "Design to UI", text: "A direction for connecting design decisions with React-based interfaces." },
    ],
    highlights: [
      { title: "Consistency", text: "The concept centers on predictable, reusable UI patterns." },
      { title: "Project technologies", text: "The stack shown here is taken from the associated project card." },
    ],
  },
};

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectData[slug];

  if (!project) {
    return (
      <section className="min-h-screen bg-transparent px-6 pt-32 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-black md:text-5xl">Project not found</h1>
          <p className="mt-4 text-gray-400">This project URL does not match a project in the details list.</p>
          <Link to="/projects" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition hover:bg-white/10">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent pb-10 pt-24 text-white md:pt-28">
      <div className="pointer-events-none absolute inset-0 z-0"><TubesCursor /></div>
      <div className="relative z-10">
        <div className="px-6 md:px-12 lg:px-16">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
            <ArrowLeft size={17} /><span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </div>

        <div className="px-6 pb-6 pt-8 md:px-12 md:pt-12 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-purple-400">{project.category}</p>
              <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{project.title}</span>
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">{project.description}</p>
            </motion.div>
          </div>
        </div>

        <Section>
          <SectionTitle title="PROJECT OVERVIEW" />
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <p className="text-base leading-relaxed text-gray-300 md:text-lg">{project.overview}</p>
            <div className="grid grid-cols-2 gap-3">
              <InfoCard icon={<Code2 size={20} />} title="Category" text={project.category} />
              <InfoCard icon={<Layers3 size={20} />} title="Focus" text={project.tech.slice(0, 2).join(" + ")} />
              <InfoCard icon={<Server size={20} />} title="Project type" text="Portfolio project" />
              <InfoCard icon={<Database size={20} />} title="Details" text="Project overview" />
            </div>
          </div>
        </Section>

        <Section>
          <SectionTitle title="PROJECT GOAL" />
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-gray-300 md:text-lg">{project.goal}</p>
        </Section>

        <Section>
          <SectionTitle title="PROJECT FOCUS" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.focus.map((item, index) => (
              <FeatureCard key={item.title} icon={index === 0 ? <ShieldCheck size={21} /> : index === 1 ? <Workflow size={21} /> : <Layers3 size={21} />} title={item.title} text={item.text} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle title="IMPLEMENTATION HIGHLIGHTS" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.highlights.map((item) => (
              <DetailCard key={item.title} icon={<CheckCircle2 size={21} />} title={item.title} text={item.text} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle title="TECH STACK" />
          <div className="mt-6 flex flex-wrap gap-2.5">
            {project.tech.map((tech, index) => (
              <motion.div key={tech} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
                {tech}
              </motion.div>
            ))}
          </div>
        </Section>

        <div className="px-6 py-12 md:px-12 md:py-16 lg:px-16">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs tracking-[0.3em] text-gray-500 md:text-sm">PROJECT DETAILS</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{project.title}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
                More Projects <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

function Section({ children }) {
  return <div className="px-6 py-8 md:px-12 md:py-12 lg:px-16"><div className="mx-auto max-w-6xl">{children}</div></div>;
}

function SectionTitle({ title }) {
  return <h2 className="text-3xl font-black tracking-tight md:text-5xl"><span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</span></h2>;
}

function InfoCard({ icon, title, text }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="mb-3 text-purple-400">{icon}</div><h3 className="text-base font-semibold">{title}</h3><p className="mt-1 text-sm text-gray-500">{text}</p></div>;
}

function FeatureCard({ icon, title, text }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400">{icon}</div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-500">{text}</p></div>;
}

function DetailCard({ icon, title, text }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-400">{icon}</div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-500 md:text-base">{text}</p></div>;
}

export default ProjectDetails;















