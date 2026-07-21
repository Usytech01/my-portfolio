import { motion } from 'framer-motion'
import React from 'react'
import { FiLayout, FiCode, FiCheckCircle } from 'react-icons/fi'

export const About = () => {
  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Years Experience", value: "3+" },
    { label: "Happy Clients", value: "20+" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column: Text Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                Building <span className="text-gradient">Premium</span> Digital <br/> Experiences
              </h2>
              
              <div className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8">
                <p>
                  I am a UI/UX Designer and Full-stack Developer dedicated to building premium digital experiences. 
                  I create tools for people who value <span className="text-foreground font-medium">speed, beauty, and reliability</span> — 
                  crafting digital products that are as <span className="text-blue-600 dark:text-blue-400 font-medium">intuitive as they are powerful</span>.
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  See More.. <span className="text-lg">→</span>
                </button>
              </div>


              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 shadow-md dark:shadow-none">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-[10px] text-slate-700 dark:text-slate-400 uppercase tracking-widest font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>


          {/* Right Column: Expertise Cards */}
          <div className="space-y-6">
            <motion.div 
              variants={itemVariants}
              className="bg-white/90 dark:bg-[#0f172a]/80 backdrop-blur-xl p-8 rounded-[2rem] relative group border border-slate-200 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500 shadow-md dark:shadow-none"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <FiLayout size={120} className="text-blue-600 dark:text-blue-500" />
              </div>
              
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <FiLayout size={24} className="text-blue-600 dark:text-blue-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Design Expertise</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 font-normal">Research-backed UI/UX, wireframing, and interactive prototyping.</p>
              
              <ul className="space-y-3">
                {['User Research', 'Visual Identity', 'Prototyping'].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <FiCheckCircle className="text-blue-600 dark:text-blue-500" /> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white/90 dark:bg-[#0f172a]/80 backdrop-blur-xl p-8 rounded-[2rem] relative group border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-all duration-500 shadow-md dark:shadow-none"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <FiCode size={120} className="text-purple-600 dark:text-purple-500" />
              </div>

              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <FiCode size={24} className="text-purple-600 dark:text-purple-500" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Development Expertise</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 font-normal">Full-stack architecture using React, Next.js, and specialized styling with Tailwind CSS.</p>

              <ul className="space-y-3">
                {['Next.js / React', 'Node.js', 'Tailwind CSS'].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-200 font-medium">
                    <FiCheckCircle className="text-purple-600 dark:text-purple-500" /> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

