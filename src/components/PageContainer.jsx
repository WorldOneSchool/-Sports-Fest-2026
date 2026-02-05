import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PageContainer({ children }) {
  const shouldReduceMotion = useReducedMotion();

  const transition = { duration: shouldReduceMotion ? 0 : 0.30, ease: "easeInOut" };

  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0, transition }}
      exit={{ opacity: 0, x: -8, transition }}
    >
      {children}
    </motion.div>
  );
}