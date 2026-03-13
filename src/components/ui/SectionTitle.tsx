import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl font-bold sm:text-4xl">
        <span className="text-primary">&lt;</span>
        {title}
        <span className="text-primary"> /&gt;</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-gray-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}
