"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Framer Motion wrapper that fades and slides children up when scrolled into view. Triggers once. */
interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds for sequential items. @default 0 */
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
