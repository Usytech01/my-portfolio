"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ModernLogoProps {
  className?: string;
}

export const ModernLogo: React.FC<ModernLogoProps> = ({ className }) => {
  return (
    <motion.div
      className={cn("relative flex items-center justify-center group cursor-pointer", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Logo Container */}
      <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-blue-500 via-slate-200 to-purple-500 dark:from-blue-600 dark:via-white/20 dark:to-purple-600 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-500">
        <div className="relative bg-white dark:bg-slate-950 rounded-full overflow-hidden p-1">
          <Image
            src="/assets/usytech-logo.png"
            alt="UsyTech Logo"
            width={40}
            height={40}
            className="h-9 w-9 object-cover rounded-full"
            priority
          />
        </div>
      </div>

      {/* Floating Particle Orbits */}
      <motion.div
        className="absolute w-full h-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
      </motion.div>
      <motion.div
        className="absolute w-full h-full pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      </motion.div>

      {/* Text (Optional/Mobile Friendly) */}
      <span className="ml-3 font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
        Usy<span className="text-blue-500 group-hover:text-slate-900 dark:group-hover:text-white">Tech</span>
      </span>
    </motion.div>
  );
};
