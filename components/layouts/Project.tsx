import React from 'react';
import ProjectCard from '../common/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "edu-learn",
    image: "/assets/edulearn-preview.png",
    title: "Edu-Learn",
    description: "Empowering education through data-driven insights — a complete learning management platform connecting teachers, students, and administrators.",
    tags: "React • LMS • Analytics",
    href: "https://edu-learn1.netlify.app/",
    badge: "Live",
    featured: true
  },
  {
    id: "my-fix",
    image: "/assets/myfix-preview.png",
    title: "My_Fix",
    description: "Lagos home services marketplace — connecting residents with trusted local repair and maintenance professionals.",
    tags: "Next.js • Vercel • TypeScript",
    href: "https://my-fix1.vercel.app/",
    badge: "Live",
    featured: true
  },
  {
    id: "dtech-social",
    image: "/assets/dtech-preview.png",
    title: "D TECH Social",
    description: "Modern social network web platform featuring real-time feed posts, user messaging, multimedia sharing, and active friend connections.",
    tags: "React • Tailwind • Real-time",
    href: "https://d-tech-social.vercel.app/",
    badge: "Live",
    featured: true
  }
];

const Project: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              Portfolio Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          {/* Action Bar: GitHub Link */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Usytech01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-slate-200 dark:border-white/10 text-foreground font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-all shadow-sm block"
          >
            View All Work
          </motion.a>
        </div>

        {/* Clean Static Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                badge={project.badge}
                featured={project.featured}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;