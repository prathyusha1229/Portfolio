import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { socials, hero } from "../data/portfolio";
import { scrollToSection } from "../hooks/useSmoothScroll";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialIcons = [
    { icon: <FiGithub />, href: socials.github },
    { icon: <FiLinkedin />, href: socials.linkedin },
  ];

  return (
    <footer className="border-t border-surface-lighter bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-gray-500">
          © {year} {hero.name}. Built with React, TypeScript & Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          {socialIcons.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-primary"
            >
              {s.icon}
            </a>
          ))}

          <button
            onClick={() => scrollToSection("hero", 0)}
            className="ml-2 cursor-pointer rounded-full border border-surface-lighter p-2 text-gray-500 transition-all hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
