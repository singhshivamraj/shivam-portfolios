
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeInOut,
} from "framer-motion";
import { Link } from "react-router-dom";
import shivamimg from "../assets/shivam_3.jpeg";
import TubesCursor from "./TubesCursor";

/* ---------- helper: desktop / mobile detect ----------
   Side-by-side layout needs real width, so it starts at 1024px.
   Phones AND tablets use the stacked layout (image on top, text below). */
const useIsDesktop = () => {
  const query = "(min-width: 1024px)";
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : true
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
};

const PremiumTitle = ({ text }) => (
  <div className="flex flex-col items-center px-4">
    <div className="relative inline-block overflow-hidden px-6 sm:px-10">
      <motion.h2
        className="relative z-10 text-center text-3xl font-black italic uppercase tracking-tighter min-[400px]:text-4xl md:text-6xl"
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
      className="mt-2 h-[2px] rounded-full"
      style={{
        background:
          "linear-gradient(90deg, transparent, #3b82f6, #a855f7, #ec4899, transparent)",
        backgroundSize: "200% 100%",
      }}
      animate={{
        width: ["0%", "85%", "0%"],
        backgroundPosition: ["0% 0%", "200% 0%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

const About = () => {
  // IMPORTANT: ref ab "track" par hai (sirf sticky wale hisse par),
  // poore section par nahi. Isse progress 0 -> 1 exactly tab chalta hai
  // jab tak screen pin hai.
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const isDesktop = useIsDesktop();
  const [spacer, setSpacer] = useState(0);

  // Next section (Skills) agar negative margin se upar chadhta hai,
  // to uska exact overlap measure karke utna hi khaali spacer de dete hain.
  useEffect(() => {
    const sec = sectionRef.current;
    const next = sec?.nextElementSibling;
    if (!sec || !next) return;

    const measure = () => {
      const gap =
        next.getBoundingClientRect().top - sec.getBoundingClientRect().bottom;
      setSpacer(Math.max(0, Math.ceil(-gap)) + 24);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(sec);
    ro.observe(next);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Smooth + no jitter on fast scroll up/down
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
    restDelta: 0.0005,
  });

  const ease = { ease: easeInOut };

  /* ---------------- IMAGE ---------------- */
  // Desktop: center se left ki taraf. Phone/tablet: center se upar + chhoti.
  // vw / svh units use kiye hain taaki har screen size par proportional rahe
  // (svh = phone ke browser bar ke saath bhi sahi height).
  const imgX = useTransform(
    p,
    [0, 0.5],
    ["0vw", isDesktop ? "-23vw" : "0vw"],
    ease
  );

  const imgScale = useTransform(
    p,
    isDesktop ? [0, 0.15] : [0, 0.5],
    isDesktop ? [0.92, 1] : [1, 0.7],
    ease
  );

  /* ---------------- TEXT ---------------- */
  const contentX = useTransform(
    p,
    [0.3, 0.7],
    [isDesktop ? "10vw" : "0vw", "0vw"],
    ease
  );

  const contentY = useTransform(
    p,
    [0.3, 0.7],
    [isDesktop ? "0svh" : "4svh", "0svh"],
    ease
  );

  const contentOpacity = useTransform(p, [0.35, 0.65], [0, 1]);

  // Jab text hidden ho tab link clickable na ho
  const contentPointer = useTransform(contentOpacity, (v) =>
    v > 0.6 ? "auto" : "none"
  );

  /* Phone/tablet: image stage ke top par rehti hai (pt-10 = 2.5rem) aur 0.7 tak chhoti hoti hai
     (top edge fixed). Image height = min(420px, 40svh), isliye scaled height = min(294px, 28svh).
     Text ka top = 2.5rem + scaled height + gap. Har phone par gap same, beech mein khaali jagah nahi. */
  const stackedTextTop = "calc(2.5rem + min(294px, 28svh) + 1.25rem)";

  return (
    <section ref={sectionRef} className="relative w-full -mt-24 bg-black">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <TubesCursor />
      </div>

      {/* Heading (normal scroll). Fixed 22vh hata diya, ab sirf navbar ke neeche utni hi jagah jitni zaroori hai */}
      <div className="relative z-10 flex w-full flex-col items-center justify-end pb-3 pt-3 sm:pt-8 lg:pt-24">
        <PremiumTitle text="ABOUT ME" />
      </div>

      {/* Scroll track: iski height = kitna scroll animation ke liye milega.
          Phone par chhota track, taaki bekaar scroll na ho. */}
      <div ref={trackRef} className="relative z-10 -mt-10 h-[190svh] sm:-mt-12 lg:mt-0 lg:h-[230svh]">
        {/* Sticky stage */}
        <div className="sticky top-0 h-[calc(4rem_+_2.5rem_+_min(294px,28svh)_+_1.25rem_+_15.5rem_+_1.5rem)] max-h-[100svh] w-full overflow-hidden sm:h-[calc(5rem_+_2.5rem_+_min(294px,28svh)_+_1.25rem_+_20rem_+_1.5rem)] lg:h-[100svh]">
          {/* Content area: fixed navbar ke neeche se shuru hota hai */}
<div className="absolute inset-x-0 bottom-0 top-12 flex items-start justify-center pt-6 sm:top-12 lg:top-4 lg:items-center lg:pt-0">
            {/* Profile image */}
            <motion.div
              style={{ x: imgX, scale: imgScale, originY: isDesktop ? 0.5 : 0 }}
              className="group pointer-events-auto relative z-20 shrink-0 will-change-transform"
            >
              <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl transition-all duration-500 group-hover:blur-2xl" />

              <div className="relative aspect-[23/30] h-[min(420px,40svh)] lg:h-[min(600px,70svh)]">
                <div className="absolute -inset-4 rounded-[32px] border border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-xl" />

                <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-[2px] overflow-hidden rounded-3xl bg-black">
                    <img
                      src={shivamimg}
                      alt="Shivam"
                      className="h-full w-full object-cover object-[center_10%] brightness-90 grayscale transition-[filter,transform] duration-700 group-hover:scale-110 group-hover:grayscale-0 active:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                  </div>
                </div>

                <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 shadow-[0_10px_40px_rgba(99,102,241,0.4)] backdrop-blur-sm">
                  <span className="text-xs font-bold uppercase tracking-widest text-white">
                    FULL-STACK DEVELOPER
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text content.
                Outer div = sirf position (tailwind translate yahan safe hai).
                Inner motion.div = sirf animation (framer ka transform alag rahe). */}
            <div
              style={isDesktop ? undefined : { top: stackedTextTop }}
              className="pointer-events-none absolute inset-x-0 z-30 mx-auto max-w-xl px-5 sm:px-8 lg:inset-x-auto lg:left-[52%] lg:top-1/2 lg:mx-0 lg:w-[42vw] lg:max-w-2xl lg:-translate-y-1/2 lg:px-0"
            >
              <motion.div
                style={{
                  x: contentX,
                  y: contentY,
                  opacity: contentOpacity,
                  pointerEvents: contentPointer,
                }}
                className="space-y-3 will-change-transform sm:space-y-4 lg:space-y-8"
              >
                <div className="relative">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.6)] sm:w-24" />
                  <div className="absolute inset-0 h-[2px] w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md sm:w-24" />
                </div>

                <h3 className="text-[clamp(1.5rem,7.2vw,2.5rem)] font-black leading-[1.05] tracking-tighter text-white lg:text-[clamp(2.25rem,4vw,4rem)]">
                  I BUILD
                  <br />

                  <span className="relative mt-1 inline-block sm:mt-2 lg:mt-4">
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent blur-lg">
                      DIGITAL PRODUCTS
                    </span>

                    <span className="relative bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      DIGITAL PRODUCTS
                    </span>
                  </span>
                </h3>

                <div className="group/text relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover/text:opacity-100" />

                  <p className="relative max-w-md text-sm font-light leading-relaxed text-gray-300 min-[400px]:text-base sm:text-lg lg:text-xl xl:text-2xl">
                    I build full-stack web applications using the{" "}
                    <span className="relative inline-block font-semibold text-white">
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-sm" />
                      <span className="relative">MERN stack</span>
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500" />
                    </span>{" "}
                    to create responsive interfaces and reliable backend systems.
                  </p>
                </div>

                <Link to="/about/details" className="inline-block">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="group/btn relative mt-1 inline-flex cursor-pointer items-center gap-4 sm:mt-2 lg:mt-6"
                  >
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/50 to-purple-500/50 opacity-0 blur-lg transition-opacity duration-300 group-hover/btn:opacity-100" />

                    <div className="relative flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 shadow-[0_10px_40px_rgba(99,102,241,0.3)] transition-all group-hover/btn:shadow-[0_10px_60px_rgba(99,102,241,0.5)] sm:gap-4 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
                      <span className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
                        Discover My Journey
                      </span>

                      <svg
                        className="h-4 w-4 text-white transition-transform duration-300 group-hover/btn:translate-x-2 sm:h-5 sm:w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Auto spacer: next section ka overlap yahan girega, stage par nahi */}
      <div aria-hidden className="relative z-0" style={{ height: spacer }} />
    </section>
  );
};

export default About;