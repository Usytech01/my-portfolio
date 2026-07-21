import React, { useState, useEffect } from 'react';
import ProjectCard from '../common/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiGrid, FiSliders } from 'react-icons/fi';

const projects = [
  {
    id: "edu-learn",
    image: "/assets/edulearn-preview.png",
    title: "Edu-Learn",
    description: "Empowering education through data-driven insights — a complete learning management platform connecting teachers, students, and administrators.",
    tags: "React • LMS • Analytics",
    href: "https://edu-learn1.netlify.app/",
    badge: "Live",
    category: "Web Apps",
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
    category: "Marketplace",
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
    category: "Web Apps",
    featured: true
  },
  {
    id: "digital-app-ui",
    image: "/assets/p1.jpg",
    title: "Digital Mobile App UI",
    description: "A sleek mobile application UI concept with intuitive user flows, micro-interactions, and modern visual design system.",
    tags: "Figma • React Native • UI/UX",
    href: "https://edu-learn1.netlify.app/",
    badge: "UI/UX",
    category: "UI/UX",
    featured: false
  },
  {
    id: "admin-dashboard",
    image: "/assets/p2.jpg",
    title: "Analytics & Admin Hub",
    description: "Data-rich analytics dashboard featuring interactive charts, metric tracking widgets, and responsive grid layouts.",
    tags: "React • Recharts • TypeScript",
    href: "https://my-fix1.vercel.app/",
    badge: "SaaS",
    category: "Web Apps",
    featured: false
  }
];

const categories = ["All", "Featured", "Web Apps", "Marketplace", "UI/UX"];

const Project: React.FC = () => {
  const [showAllMode, setShowAllMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = right, -1 = left
  const [isPaused, setIsPaused] = useState(false);

  const featuredProjects = projects.filter(p => p.featured);

  // Auto-play carousel timer when in carousel mode and not paused
  useEffect(() => {
    if (showAllMode || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, showAllMode, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return project.featured;
    return project.category === activeCategory;
  });

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

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
              {showAllMode ? "All" : "Featured"} <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>

          {/* Action Bar: Controls + View All Toggle */}
          <div className="flex items-center gap-3">
            {/* Carousel Navigation Arrows (Visible in Carousel Mode) */}
            {!showAllMode && (
              <div className="flex items-center gap-2 mr-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Project"
                  className="p-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-foreground hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm active:scale-95"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Project"
                  className="p-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md text-foreground hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm active:scale-95"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            )}

            {/* View All Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAllMode(!showAllMode)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-foreground font-semibold hover:border-blue-500/50 hover:bg-blue-500/5 transition-all shadow-sm"
            >
              {showAllMode ? (
                <>
                  <FiSliders className="text-blue-500" />
                  Show Carousel View
                </>
              ) : (
                <>
                  <FiGrid className="text-blue-500" />
                  View All Work ({projects.length})
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            MODE A: CAROUSEL VIEW WITH ANIMATION
        ───────────────────────────────────────────── */}
        {!showAllMode ? (
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Desktop Grid Layout in Carousel Mode (Shows 3 Cards with Main Highlighted) */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
              {featuredProjects.map((project, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1.02 : 0.98,
                      y: isActive ? -6 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-full transition-all duration-500 ${
                      isActive ? "ring-2 ring-blue-500/50 rounded-3xl" : "opacity-85 hover:opacity-100"
                    }`}
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
                );
              })}
            </div>

            {/* Mobile / Tablet Animated Slide Carousel */}
            <div className="lg:hidden relative overflow-hidden rounded-3xl p-1">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <ProjectCard
                    image={featuredProjects[currentIndex].image}
                    title={featuredProjects[currentIndex].title}
                    description={featuredProjects[currentIndex].description}
                    tags={featuredProjects[currentIndex].tags}
                    href={featuredProjects[currentIndex].href}
                    badge={featuredProjects[currentIndex].badge}
                    featured={featuredProjects[currentIndex].featured}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Pagination Indicator Dots */}
            <div className="flex justify-center items-center gap-3 mt-10">
              {featuredProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative p-2 focus:outline-none"
                >
                  {idx === currentIndex ? (
                    <motion.div
                      layoutId="activeDot"
                      className="w-8 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <div className="w-2.5 h-2.5 bg-slate-300 dark:bg-white/20 hover:bg-blue-400 rounded-full transition-colors duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ─────────────────────────────────────────────
              MODE B: EXPANDED ALL PROJECTS GRID WITH FILTERS
          ───────────────────────────────────────────── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Filtered Projects */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
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
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Project;