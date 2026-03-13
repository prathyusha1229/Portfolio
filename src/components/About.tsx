import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { about } from "../data/portfolio";
import profilePic from "../assets/pic.jpg";

export default function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="About Me" subtitle="A quick glimpse into who I am" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-30 blur-lg" />
              <img
                src={profilePic}
                alt="Profile"
                className="relative h-72 w-72 rounded-2xl object-cover shadow-xl sm:h-80 sm:w-80"
              />
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {about.bio.map((para, i) => (
              <p key={i} className="mb-4 leading-relaxed text-gray-300">
                {para}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-surface-lighter bg-surface-light p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
