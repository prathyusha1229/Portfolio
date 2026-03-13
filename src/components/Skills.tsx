import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import SkillIcon from "./ui/SkillIcon";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with on a daily basis"
        />

        <div className="grid gap-12 md:grid-cols-3">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
            >
              <h3 className="mb-6 text-center text-lg font-semibold text-primary-light">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SkillIcon
                          name={skill.icon}
                          className="text-sm text-primary"
                        />
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-light">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
