import { motion } from "framer-motion";

import React from 'react'
import { theme } from "../interfaces/theme";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -100, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut"}}
        style={{ backgroundColor: theme.primary}}
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 bottom-0 right-0"
      />

      <motion.div
        animate={{ x: [0, -140, 0], y: [0, 120, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: theme.secondary }}
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 bottom-0 right-0"
      />
    </div>
  );
}
