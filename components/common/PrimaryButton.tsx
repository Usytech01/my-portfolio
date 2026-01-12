import { motion, rgba } from "framer-motion";

import React from 'react'

export default function PrimaryButton({children,}: {children: React.ReactNode;}) {
  return (
    <motion.button
        whileHover={{scale: 1.05, boxShadow: "0 0 30px rgba(124, 50, 237, 0.6)",}}
        whileTap={{ scale: 0.95 }}
        className="px-8, py-3 rounded-xl font-semibold text-white bg-gradient-r from-purpl-600 to-cyan-500 transition-all duration-300 "
    >
        {children}
    </motion.button>
  )
}
