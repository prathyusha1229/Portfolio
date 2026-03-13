import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      // Check if hovering over target sections or interactive elements
      const target = e.target as HTMLElement;
      
      // Target elements where the glow should be HIDDEN
      const isOverRestrictedElement = !!target.closest(
        "#about img, .card-glow, input, textarea"
      );
      
      // Active everywhere EXCEPT those restricted elements
      setActive(!isOverRestrictedElement);
    };
    const leave = () => {
      setVisible(false);
      setActive(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      animate={{ opacity: visible && active ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", damping: 30, stiffness: 150, mass: 0.5 }}
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.03) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
}
