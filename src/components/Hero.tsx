import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { hero, socials } from "../data/portfolio";
import { scrollToSection } from "../hooks/useSmoothScroll";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = hero.roles[roleIndex];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === currentRole) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % hero.roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        deleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  const socialLinks = [
    { icon: <FiGithub />, href: socials.github },
    { icon: <FiLinkedin />, href: socials.linkedin },
  ];

  // Floating particles data
  const particles = [
    { size: 4, x: "10%", y: "20%", duration: 6, delay: 0 },
    { size: 6, x: "20%", y: "60%", duration: 8, delay: 1 },
    { size: 3, x: "70%", y: "15%", duration: 7, delay: 0.5 },
    { size: 5, x: "80%", y: "70%", duration: 9, delay: 2 },
    { size: 4, x: "40%", y: "80%", duration: 6, delay: 1.5 },
    { size: 7, x: "90%", y: "40%", duration: 10, delay: 0.3 },
    { size: 3, x: "55%", y: "10%", duration: 7, delay: 2.5 },
    { size: 5, x: "30%", y: "45%", duration: 8, delay: 1.8 },
    { size: 4, x: "65%", y: "85%", duration: 6, delay: 0.8 },
    { size: 6, x: "15%", y: "90%", duration: 9, delay: 3 },
    { size: 3, x: "85%", y: "25%", duration: 7, delay: 1.2 },
    { size: 5, x: "50%", y: "55%", duration: 8, delay: 2.2 },
  ];

  return (
    <section
      id="hero"
      className="animated-gradient relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-primary/30"
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute h-[600px] w-[600px] rounded-full border border-primary/10 sm:h-[700px] sm:w-[700px]"
      >
        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary/60" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute h-[450px] w-[450px] rounded-full border border-accent/10 sm:h-[500px] sm:w-[500px]"
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/60" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 text-lg text-gray-400"
        >
          {hero.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {hero.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 h-10 text-xl font-medium text-primary-light sm:text-2xl"
        >
          <span className="cursor-blink">{text}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-10 max-w-xl text-gray-400"
        >
          {hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer rounded-full bg-primary px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer rounded-full border border-primary/50 px-8 py-3 font-semibold text-primary transition-all hover:scale-105 hover:bg-primary/10"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl text-gray-400 transition-colors hover:text-primary"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
