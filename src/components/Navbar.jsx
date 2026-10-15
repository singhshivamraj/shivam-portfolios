

























import React, { useState, useRef, useEffect } from "react";
import { Linkedin, Instagram, Mail, Menu, Github, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

// --- MAIN NAV COMPONENT ---
export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Mouse tracking for 3D parallax effect on navbar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 25,
    stiffness: 150,
    mass: 0.1,
  };

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Mouse offset is measured from the navbar centre, so these ranges don't depend on window size
  const rotateX = useTransform(smoothY, [-300, 300], [1, -1]);
  const rotateY = useTransform(smoothX, [-600, 600], [-1, 1]);

  const handleMouseMove = (e) => {
    if (!navbarRef.current) return;

    const { left, top, width, height } =
      navbarRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - (left + width / 2));
    mouseY.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Lock page scroll while the mobile menu is open, close it with Escape,
  // and close it automatically if the screen grows to desktop size.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);
    const mq = window.matchMedia("(min-width: 1280px)");
    const onResize = (e) => e.matches && setIsMobileMenuOpen(false);

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Journey", path: "/journey" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    {
      name: "email",
      Icon: Mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=shivamraj6436@gmail.com",
    },
    {
      name: "linkedin",
      Icon: Linkedin,
      link: "https://www.linkedin.com/in/shivam-raj-0148592a5",
    },
    {
      name: "instagram",
      Icon: Instagram,
      link: "https://www.instagram.com/shivamm.63/",
    },
    {
      name: "github",
      Icon: Github,
      link: "https://github.com/singhshivamraj",
    },
  ];

  const magneticVariants = {
    initial: { x: 0, y: 0 },
    hover: {
      x: [0, -5, 5, -3, 3, 0],
      y: [0, -5, 5, -3, 3, 0],
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const renderSocials = (wrapperClass) => (
    <div className={wrapperClass}>
      {socialIcons.map(({ name, Icon, link }) => (
        <motion.a
          key={name}
          href={link}
          target={name === "email" ? undefined : "_blank"}
          rel={name === "email" ? undefined : "noopener noreferrer"}
          aria-label={name}
          variants={magneticVariants}
          whileHover="hover"
          whileTap={{ scale: 0.8 }}
          className="w-10 h-10 border border-indigo-400/20 rounded-xl flex items-center justify-center transition-all bg-indigo-900/30 hover:bg-indigo-700/50 group relative overflow-hidden"
        >
          <motion.div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

          <Icon className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors relative z-10" />
        </motion.a>
      ))}
    </div>
  );

  return (
    <>
      <motion.nav
        ref={navbarRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
        }}
        className="fixed top-0 w-full h-16 sm:h-20 px-4 sm:px-8 xl:px-[60px] flex items-center justify-between gap-3 z-[100]
                   bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-3xl border-b border-white/10
                   shadow-lg shadow-indigo-500/10 transition-shadow duration-300
                   hover:shadow-indigo-500/20"
      >
        {/* --- GLOWING BORDER EFFECT --- */}
        <motion.div
          className="absolute inset-0 rounded-full animate-pulse-slow pointer-events-none"
          style={{
            border: "1px solid",
            borderColor: "rgba(99, 102, 241, 0.3)",
            mask: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            maskComposite: "exclude",
            padding: 0.5,
            zIndex: -1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* LEFT SIDE - Logo */}
        <motion.div
          className="shrink-0 text-2xl min-[400px]:text-3xl md:text-[40px] font-black tracking-tighter uppercase cursor-pointer relative
                     bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-500
                     bg-clip-text text-transparent"
          onHoverStart={() => setHoveredLink("Logo")}
          onHoverEnd={() => setHoveredLink(null)}
        >
          {"SHIVAM".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 0 }}
              animate={
                hoveredLink === "Logo"
                  ? {
                      y: [0, -8, 0],
                      transition: {
                        duration: 0.4,
                        delay: i * 0.06,
                        ease: "easeInOut",
                      },
                    }
                  : { y: 0 }
              }
              className="inline-block relative"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* CENTER - Navigation Links (desktop, 1280px and up) */}
        <div className="hidden xl:flex gap-2 relative p-1 rounded-full border border-white/10 shadow-inner shadow-white/5 bg-white/5">
          {navLinks.map(({ name, path }) => (
            <motion.div
              key={name}
              onMouseEnter={() => setHoveredLink(name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative block px-4 py-2 text-[15px] font-medium transition-colors duration-300 rounded-full
                  ${
                    name === "Home" || hoveredLink === name
                      ? "text-white"
                      : "text-gray-400"
                  }
                  hover:!text-white after:absolute after:inset-0 after:rounded-full
                  after:scale-0 after:bg-white/10 after:opacity-0
                  after:transition-all after:duration-300
                  hover:after:scale-100 hover:after:opacity-100`}
              >
                {/* Dynamic Glowing Indicator */}
                {hoveredLink === name && (
                  <motion.div
                    layoutId="nav-glow-indicator"
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full -z-10 opacity-70"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    exit={{ opacity: 0.5, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE - Social icons (tablet and up) + mobile menu button */}
        <div className="flex items-center gap-3">
          {renderSocials("hidden md:flex gap-3")}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            className="xl:hidden text-white p-2.5 rounded-md bg-white/10 transition-colors hover:bg-white/20"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE SIDE DRAWER
          Nav ke bahar render hota hai (nav mein backdrop-blur aur 3D transform hai,
          jisse "fixed" child sirf nav ke andar simat jaata). */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark backdrop: bahar tap karne par menu band */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm xl:hidden"
            />

            {/* Side drawer (right se khulta hai) */}
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80 || info.velocity.x > 500) {
                  setIsMobileMenuOpen(false);
                }
              }}
              className="fixed right-0 top-0 z-[110] flex h-[100dvh] w-[80%] max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-[#0b0b14] px-6 pb-8 pt-5 shadow-2xl xl:hidden"
            >
              {/* Drawer header */}
              <div className="mb-6 flex items-center justify-between">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-500 bg-clip-text text-2xl font-black uppercase tracking-tighter text-transparent">
                  SHIVAM
                </span>

                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col">
                {navLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-white/5 py-3.5 text-lg font-semibold text-gray-300 transition-colors hover:text-indigo-400"
                  >
                    {name}
                  </Link>
                ))}
              </nav>

              {/* Social icons (neeche) */}
              {renderSocials("mt-auto flex gap-3 pt-8 md:hidden")}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}