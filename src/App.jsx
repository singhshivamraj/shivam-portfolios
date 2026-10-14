












import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import TubesCursor from "./components/TubesCursor";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AboutDetails from "./pages/AboutDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./components/Skills";
import Journey from "./pages/Journey";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);

    const timer = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />

      <TubesCursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/details" element={<AboutDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/process" element={<Process />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
    </div>
  );
}

export default App;
