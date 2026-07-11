"use client";

import { motion, useReducedMotion } from "framer-motion";
import { transitionBase } from "@/components/animation/motion";

const variants = {
  "fade-up": { opacity: 0, y: 24 },
  "fade-in": { opacity: 0 },
  "fade-left": { opacity: 0, x: 30 },
  "fade-right": { opacity: 0, x: -30 },
  "scale-in": { opacity: 0, scale: 0.97 },
  "soft-drop": { opacity: 0, y: -18, filter: "blur(8px)" },
  "soft-zoom": { opacity: 0, scale: 0.92, filter: "blur(10px)" },
};

type RevealVariant = keyof typeof variants;

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}>) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : variants[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ ...transitionBase, duration: 0.62, delay }}
    >
      {children}
    </motion.div>
  );
}
