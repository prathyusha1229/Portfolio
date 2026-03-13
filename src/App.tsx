import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import Resume from "./components/Resume";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <CursorGlow />
      
      <AnimatePresence>
        {showResume && <Resume onClose={() => setShowResume(false)} />}
      </AnimatePresence>
      
      <div>
        <Navbar onResumeClick={() => setShowResume(true)} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
