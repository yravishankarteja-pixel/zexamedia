"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/components/animation/motion";

export function StaggerContainer({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}
