import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiStar } from "react-icons/hi";
import SectionTitle from "./ui/SectionTitle";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Projects"
          subtitle="A selection of things I've built"
        />

        {/* Cards grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`card-glow group relative overflow-hidden rounded-2xl border bg-surface-light transition-all duration-300 hover:-translate-y-2 ${
                  project.featured 
                    ? "border-primary/50 shadow-[0_0_20px_rgba(99,102,241,0.15)]" 
                    : "border-surface-lighter"
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                    <HiStar /> Featured
                  </div>
                )}

                {/* Info */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-surface px-2.5 py-1 text-[11px] font-semibold text-gray-400 border border-surface-lighter group-hover:border-primary/30 group-hover:text-primary-light transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between mt-auto">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all hover:gap-3"
                      >
                        Explore Project <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
