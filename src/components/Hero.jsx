













import React, { useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Mail,
  ArrowRight
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion
} from 'framer-motion';

import shivamimg from '../assets/shivam.jpeg';
import TubesCursor from './TubesCursor';
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Project = lazy(() => import('./Project'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

const Hero = () => {

  const reduceMotion = useReducedMotion();

  // Mouse position without React state (starts at the screen centre so cards don't jump on load)
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  // Spring smoothing: the cards glide after the cursor instead of snapping
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

  // First floating card movement
  const card1X = useTransform(smoothX, (x) => (x - window.innerWidth / 2) * 0.05);
  const card1Y = useTransform(smoothY, (y) => (y - window.innerHeight / 2) * 0.05);

  // Second floating card movement
  const card2X = useTransform(smoothX, (x) => (x - window.innerWidth / 2) * -0.03);
  const card2Y = useTransform(smoothY, (y) => (y - window.innerHeight / 2) * -0.03);

  useEffect(() => {
    // Cursor effect only makes sense on devices with a mouse
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasMouse || reduceMotion) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, reduceMotion]);


  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  // Smooth ease-out slide instead of a bouncy spring
  const itemVars = {
    initial: {
      y: reduceMotion ? 0 : 40,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };


  return (
    <div className="relative">

      {/* <TubesCursor /> */}

      <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden px-5 sm:px-8 md:px-14 lg:px-20 py-16 sm:py-20 lg:py-0 z-10 bg-transparent">

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          <motion.div
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="flex flex-col space-y-5 sm:space-y-6 min-w-0"
          >

            <motion.div
              variants={itemVars}
              className="flex items-center gap-3"
            >
              <span className="h-[1px] w-8 sm:w-12 bg-indigo-500"></span>

              <span className="text-indigo-400 font-mono tracking-widest text-xs sm:text-sm uppercase">
                FULL-STACK DEVELOPER
                
              </span>
            </motion.div>


            <motion.h1
              variants={itemVars}
              className="text-4xl min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] sm:leading-[0.9] tracking-tighter break-words"
            >
              BUILDING <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                - DIGITAL PRODUCTS
              </span>
            </motion.h1>


            <motion.p
              variants={itemVars}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-md leading-relaxed font-light"
            >
              I'm
              <span className="text-white font-medium">
                {" "}Shivam  
              </span>
                 ! A full-stack developer building end-to-end 

              <span className="text-white font-medium">
                {" "}web applications using MERN. 
              </span>
            </motion.p>


            <motion.div
              variants={itemVars}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4"
            >

             <motion.div
  whileHover={{
    scale: 1.05,
    boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300, damping: 22 }}
  className="rounded-full"
>
  <Link
    to="/about/details"
    className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-indigo-600 text-white rounded-full font-bold flex items-center gap-2 group transition-colors"
  >
    Explore My Work
    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</motion.div>


              <div className="flex items-center gap-4">

               {[
  {
    name: "Instagram",
    Icon: Instagram,
    link: "https://www.instagram.com/shivamm.63/"
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/shivam-raj-0148592a5"
  },
  {
    name: "Email",
    Icon: Mail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=shivamraj6436@gmail.com"
  }
].map(({ name, Icon, link }) => (
  <motion.a
    key={name}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={name}
    title={name}
    whileHover={{ y: -5, color: "#818cf8" }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="text-gray-500 p-1"
  >
    <Icon size={20} />
  </motion.a>
))}

              </div>

            </motion.div>

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative flex justify-center items-center"
          >

            {/* UI Design floating card */}

            <motion.div
              style={{
                x: card1X,
                y: card1Y
              }}
              className="absolute top-10 md:-right-2 xl:-right-10 z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hidden md:block will-change-transform"
            >

              <p className="text-white text-xs font-bold uppercase tracking-tighter">
               MERN STACK
              </p>

              <div className="h-1 w-12 bg-indigo-500 mt-2 rounded-full" />

            </motion.div>


            {/* Rating floating card */}

            <motion.div
              style={{
                x: card2X,
                y: card2Y
              }}
              className="absolute bottom-20 md:-left-2 xl:-left-10 z-20 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hidden md:block will-change-transform"
            >

              <div className="flex gap-1 mb-2">

                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className="w-1 h-1 rounded-full bg-yellow-400"
                  />
                ))}

              </div>

              <p className="text-white text-xs">
                "BUILT TO SHIP"
              </p>

            </motion.div>


            {/* Profile image */}

            <div className="relative w-full max-w-[250px] min-[400px]:max-w-[290px] sm:max-w-[340px] lg:max-w-[450px] aspect-[3/4] sm:aspect-[9/11]">

              {/* Reveal curtain: scaleY is GPU-accelerated, much smoother than animating height */}
              <motion.div
                className="absolute inset-0 bg-indigo-600 z-10 origin-top will-change-transform"
                initial={{
                  scaleY: 1
                }}
                animate={{
                  scaleY: 0
                }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.76, 0, 0.24, 1]
                }}
              />


              <motion.div
                style={{
                  borderRadius:
                    "30% 70% 70% 30% / 30% 30% 70% 70%"
                }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        borderRadius: [
                          "30% 70% 70% 30% / 30% 30% 70% 70%",
                          "50% 50% 33% 67% / 55% 27% 73% 45%",
                          "30% 70% 70% 30% / 30% 30% 70% 70%"
                        ]
                      }
                }
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full overflow-hidden border-2 border-white/20"
              >

                {/* CSS only animates the grayscale filter, so it never fights Framer's scale */}
                <motion.img
                  whileHover={{
                    scale: 1.08
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  src={shivamimg}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 active:grayscale-0 transition-[filter] duration-700 will-change-transform"
                />

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

<Suspense fallback={<div className="min-h-screen bg-transparent" />}>
  <About />
  <Skills />
  <Project />
  <Education />
  <Contact />
  <Footer />
</Suspense>
    </div>
  );
};

export default Hero;