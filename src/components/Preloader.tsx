import { motion } from "framer-motion";

interface Props {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-gray-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      onAnimationComplete={onComplete}
    >
      {/* Orbiting ring */}
      <motion.div
        className="absolute h-32 w-32 rounded-full border border-primary/20"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 2, ease: "linear" }, scale: { duration: 1.5, repeat: 1 } }}
      />

      {/* Logo */}
      <div className="relative text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold"
        >
          <span className="text-primary">&lt;</span>
          Dev
          <span className="text-primary"> /&gt;</span>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="mt-6 h-0.5 w-32 overflow-hidden rounded-full bg-surface-lighter">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-xs tracking-widest text-gray-500"
        >
          LOADING
        </motion.p>
      </div>
    </motion.div>
  );
}
