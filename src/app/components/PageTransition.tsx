import { motion } from "motion/react";
import { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for luxury feel
      }}
    >
      {children}
    </motion.div>
  );
}
