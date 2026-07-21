import React from 'react'
import ProjectCard from '../common/ProjectCard'
import { motion } from 'framer-motion';

const Project: React.FC = () => {
  const projects = [
    { 
      image: "/assets/p1.jpg", 
      title: "Digital App UI", 
      description: "A sleek mobile app UI concept with intuitive flows and bold visual design.",
      tags: "Figma • React Native • Design",
      href: "https://edu-learn1.netlify.app/"
    },
    { 
      image: "/assets/p3.png", 
      title: "Social Media Web", 
      description: "Full-featured social platform with real-time interactions and modern feed layout.",
      tags: "Next.js • Tailwind • Supabase",
      href: "https://my-fix1.vercel.app/"
    },
    { 
      image: "/assets/p2.jpg", 
      title: "Admin Dashboard", 
      description: "Data-rich analytics dashboard with charts, tables, and responsive grid layouts.",
      tags: "React • Recharts • TypeScript",
      href: "https://github.com/Usytech01"
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>

          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-slate-200 dark:border-white/10 text-foreground font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            View All Work
          </motion.button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;