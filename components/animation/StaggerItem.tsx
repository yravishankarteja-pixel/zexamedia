"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpItem } from "@/components/animation/motion";

export function StaggerItem({
  children,
  className = "",
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div className={className} variants={reduceMotion ? undefined : fadeUpItem}>
      {children}
    </motion.div>
  );
}
