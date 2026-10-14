








import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeInOut,
} from "framer-motion";
import resumePDF from "../assets/resume1.0.pdf";
import TubesCursor from "./TubesCursor";
import javascriptCert from "../assets/hackerrank.jpg";
import  webDevelopmentCert from "../assets/w3.png";
import softwareTestingCert from "../assets/softwaretesting.png";
import roboticsCert from "../assets/robotics.png";
// false = piche wala (page ka) TubesCursor dikhega, Education apna Tubes nahi lagayega.
// Agar piche kuch bhi na dikhe to true kar do.
const OWN_TUBES = false;

// Education ko Projects jaisa seamless rakhne ke liye:
const SHOW_BOX_BORDER = false; // bada rounded border
const SHOW_BG_GRID = false; // grid lines + orbiting ring

const THEMES = [
  {
    accent: "#818cf8",
    rgb: "129, 140, 248",
    border: "rgba(129, 140, 248, 0.3)",
  },
  {
    accent: "#a78bfa",
    rgb: "167, 139, 250",
    border: "rgba(167, 139, 250, 0.3)",
  },
  {
    accent: "#f472b6",
    rgb: "244, 114, 182",
    border: "rgba(244, 114, 182, 0.3)",
  },
];

/* Har card kab andar aata hai (scroll progress 0 -> 1) */
const ENTER = [
  [0, 0.001], // card 0: shuru se visible
  [0.18, 0.45], // card 1
  [0.55, 0.82], // card 2
];

/* ---------------------------------------------------
   HOVER ROW
--------------------------------------------------- */
const HoverRow = ({
  year,
  head,
  body,
  accent,
  isCert,
  certImg,
  certIssuer,
  certLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative isolate mb-4 flex items-center gap-6 overflow-hidden rounded-2xl border border-white/5 p-6 transition-all duration-500"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(90deg, #818cf8, #a78bfa, #f472b6)",
        }}
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {isCert && (
        <div className="z-10 h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10">
          {certImg && !imgFailed ? (
            <a
              href={certLink || certImg}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${head} certificate`}
              className="block h-full w-full"
            >
              <img
                src={certImg}
                alt={`${head} certificate`}
                onError={() => setImgFailed(true)}
                className={`h-full w-full cursor-pointer object-cover transition-all duration-500 ${
                  isHovered ? "grayscale-0" : "grayscale"
                }`}
              />
            </a>
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-2xl font-black text-white"
              style={{
                background: `linear-gradient(135deg, ${accent}, #f472b6)`,
              }}
            >
              {head?.[0]}
            </div>
          )}
        </div>
      )}


      <div className="relative z-10 flex w-full flex-col">
        <span
          className="mb-1 font-mono text-[10px] uppercase tracking-widest transition-colors duration-500"
          style={{ color: isHovered ? "rgba(255,255,255,0.8)" : accent }}
        >
          {year || certIssuer}
        </span>
        <h4
          className={`text-xl font-bold uppercase italic text-white transition-all duration-500 md:text-2xl ${
            isHovered ? "translate-x-2" : ""
          }`}
        >
          {head}
        </h4>
        <p
          className={`mt-1 text-sm transition-colors duration-500 ${
            isHovered ? "text-white/70" : "text-white/40"
          }`}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
};

/* ---------------------------------------------------
   STACK CARD (ab sticky nahi, stage ke andar absolute)
--------------------------------------------------- */
const StackCard = ({ children, index, progress, title, theme }) => {
  const T = THEMES[theme];
  const enter = ENTER[index];
  const nextEnter = ENTER[index + 1] || [0.999, 1];
  const ease = { ease: easeInOut };

  // Neeche se upar aata hai
  // FIX: card 0 hamesha 0 par rehta hai (pehle 105vh se shuru hota tha = chhupa rehta tha)
  const y = useTransform(
    progress,
    enter,
    index === 0 ? ["0vh", "0vh"] : ["105vh", "0vh"],
    ease,
  );

  // Agla card aaye to ye thoda chhota + dim hota hai
  const scale = useTransform(progress, nextEnter, [1, 0.93], ease);
  const fade = useTransform(progress, nextEnter, [1, 0], ease);
  const pointer = useTransform(fade, (v) => (v < 0.05 ? "none" : "auto"));

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity: fade,
        pointerEvents: pointer,
        zIndex: index + 1,
        transformOrigin: "50% 0%",
      }}
      className="absolute inset-x-0 bottom-4 top-24 px-4 will-change-transform md:top-28"
    >
      <div className="relative mx-auto h-full w-full max-w-7xl">
        <div
          className="relative h-full w-full overflow-hidden border"
          style={{
            background: "transparent",
            borderRadius: "2.5rem",
            borderColor: SHOW_BOX_BORDER ? T.border : "transparent",
          }}
        >
          {/* BACKGROUND */}
          {SHOW_BG_GRID && (
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(${T.rgb}, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(${T.rgb}, 0.2) 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                  animation: "grid-move 10s linear infinite",
                }}
              />
              <div
                className="absolute left-[85%] top-1/2 h-80 w-80 rounded-full border border-dashed border-white/20"
                style={{ animation: "rotate-ring 20s linear infinite" }}
              >
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-500 shadow-[0_0_10px_#F472B6]" />
              </div>
            </div>
          )}

          {/* CONTENT */}
          <div className="relative z-10 flex h-full flex-col p-6 md:p-12">
            <div className="mb-6 border-b border-white/10 pb-5 md:mb-8 md:pb-6">
              <h3
                className="inline-block text-4xl font-black uppercase italic leading-none tracking-tighter md:text-5xl"
                style={{
                  background:
                    "linear-gradient(90deg, #818cf8 0%, #a78bfa 50%, #f472b6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {title}
              </h3>
              <div className="mt-4 h-1 w-20" style={{ background: T.accent }} />
            </div>

            <div className="no-scrollbar min-h-0 flex-grow overflow-y-auto pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------------------------------------------
   EDUCATION
--------------------------------------------------- */
const Education = () => {
  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
    restDelta: 0.0005,
  });

  const [dlState, setDlState] = useState("idle");
  const circ = 2 * Math.PI * 16;

  const handleDL = () => {
    if (dlState !== "idle") return;
    setDlState("loading");

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumePDF;
      link.download = "Shivam_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDlState("done");
    }, 2200);

    setTimeout(() => setDlState("idle"), 4200);
  };

  return (
    <section className="relative bg-transparent">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes rotate-ring { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        @keyframes grid-move { from { background-position: 0 0; } to { background-position: 50px 50px; } }
      `}</style>

      {/* Optional apna Tubes (default off: piche wala Tubes dikhe) */}
      {OWN_TUBES && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <TubesCursor />
        </div>
      )}

      {/* Projects aur Education ke beech chhota gap (line nahi) */}
      {/* <div aria-hidden className="h-[1vh]" /> */}

      {/* Scroll track */}
      <div ref={trackRef} className="relative z-10" style={{ height: "400vh" }}>
        {/* Pinned stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* CARD 0: ACADEMICS */}
          <StackCard index={0} progress={progress} title="Academics" theme={0}>
            <div className="grid gap-2">
              {[
                {
                  year: "2023 – 2027",
                  head: "B.Tech — Computer Science & Engineering",
                  body: "Swami Vivekanand Subharti University, Meerut",
                },
                {
                  year: "2019 – 2021",
                  head: "Senior Secondary (Class XII)",
                  body: "Science Stream • 72.32%",
                },
                {
                  year: "2018 – 2019",
                  head: "Secondary Education (Class X)",
                  body: "65.54%",
                },
              ].map((item, i) => (
                <HoverRow key={i} {...item} accent={THEMES[0].accent} />
              ))}
            </div>
          </StackCard>

          {/* CARD 1: CERTIFICATES */}
          <StackCard
            index={1}
            progress={progress}
            title="Certificates"
            theme={1}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  head: "JavaScript",
                  certIssuer: "HackerRank",
                  certImg: javascriptCert,
                   certLink: "https://www.hackerrank.com/certificates/8361d8587127",
                  body: "JavaScript Programming Fundamentals",
                },
                {
                  head: "Web Development",
                  certIssuer: "freeCodeCamp",
                  certImg: webDevelopmentCert,
                   certLink: "https://freecodecamp.org/certification/shivam63/responsive-web-design",
                  body: "Web Development Concepts and Practices",
                },
                {
                  head: "Software Testing",
                  certIssuer: "NPTEL",
                  certImg: softwareTestingCert,
                   certLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS113S56340033810856133",
                  body: "Software Testing Principles and Techniques",
                },
                {
                  head: "Experimental Robotics",
                  certIssuer: "NPTEL",
                  certImg: roboticsCert,
                   certLink: "https://nptel.ac.in/noc/E_Certificate/NPTEL24GE31S106200061630717536",
                  body: "Experimental Robotics Concepts",
                },
              ].map((cert, i) => (
                <HoverRow key={i} {...cert} isCert accent={THEMES[1].accent} />
              ))}
            </div>
          </StackCard>

          {/* CARD 2: RESUME */}
          <StackCard index={2} progress={progress} title="Resume" theme={2}>
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h4 className="mb-2 text-3xl font-black uppercase italic text-white">
                MY RESUME
              </h4>
              <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 md:mb-12">
                Software Developer
              </p>

              <motion.button
                onClick={handleDL}
                whileHover={dlState === "idle" ? { scale: 1.05 } : {}}
                whileTap={dlState === "idle" ? { scale: 0.95 } : {}}
                className="relative overflow-hidden rounded-full border border-white/20 text-[11px] font-black uppercase italic"
                style={{
                  padding: "1.2rem 4rem",
                  background:
                    dlState === "done"
                      ? "#F59E0B"
                      : "linear-gradient(90deg, #818cf8, #a78bfa, #f472b6)",
                  color: "#fff",
                  letterSpacing: "0.2em",
                  minWidth: 260,
                }}
              >
                {dlState === "loading" && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black">
                    <svg width="36" height="36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2"
                      />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeDasharray={circ}
                        strokeDashoffset={circ}
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 2.2, ease: "linear" }}
                        transform="rotate(-90 18 18)"
                      />
                    </svg>
                  </span>
                )}
                {dlState === "done"
                  ? "✓ Acquired"
                  : dlState === "loading"
                    ? ""
                    : "Get PDF Version"}
              </motion.button>

              <div className="mt-10 flex gap-10 md:mt-12 md:gap-12">
                {[
                  { v: "8+", l: "Projects" },
                  { v: "14+", l: "Tools" },
                  { v: "100+", l: "DSA Problems" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black italic text-amber-500">
                      {s.v}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </StackCard>
        </div>
      </div>

      <div className="h-[10vh]" />
    </section>
  );
};

export default Education;
