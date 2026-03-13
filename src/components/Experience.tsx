import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-surface py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative mb-12 pl-12 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12 md:text-left"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-1 h-4 w-4 rounded-full border-2 border-primary bg-gray-950 ${
                    isLeft
                      ? "left-2.5 md:left-auto md:-right-2"
                      : "left-2.5 md:-left-2"
                  }`}
                />

                <div className="card-glow rounded-2xl border border-surface-lighter bg-surface-light p-6 text-left transition-all">
                  <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{exp.role}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <ul className="mt-3 space-y-2">
                    {exp.description.map((line, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed text-gray-300"
                      >
                        <span className="mr-2 text-primary">▹</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface px-3 py-1 text-xs text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
