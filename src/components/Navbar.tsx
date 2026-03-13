import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, resumeUrl } from "../data/portfolio";
import { scrollToSection } from "../hooks/useSmoothScroll";
import { useTheme } from "../hooks/useTheme";

interface Props {
  onResumeClick: () => void;
}

export default function Navbar({ onResumeClick }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero", 0)}
          className="cursor-pointer text-xl font-bold tracking-tight"
        >
          <span className="text-primary">&lt;</span>
          Dev
          <span className="text-primary"> /&gt;</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => scrollToSection(link.to)}
                className="cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            </li>
          ))}
            
          <li>
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-primary-light cursor-pointer"
            >
              <FiDownload /> Resume
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => {
                      scrollToSection(link.to);
                      setOpen(false);
                    }}
                    className="cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onResumeClick();
                    setOpen(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white cursor-pointer"
                >
                  <FiDownload /> Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
