import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from '../common/ProjectCard';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
    featured: true
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
    featured: true
  }
];

const Project: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sync scroll position to calculate active dot index
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    
    // Calculate index based on card width (480 + 24 gap)
    const cardWidth = 480 + 24;
    const newIndex = Math.min(
      Math.round(scrollLeft / cardWidth),
      projects.length - 1
    );
    setActiveIndex(newIndex);
  };

  // Smooth scroll left / right
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 480 + 24; // Card width + gap
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  // Scroll to a specific card index
  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const scrollAmount = (480 + 24) * index;
    carouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  // Auto-scroll loop — pauses when hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      
      // If reached near the end, loop back to start
      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        setActiveIndex(0);
      } else {
        scroll('right');
      }
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

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

          {/* Action Bar: Controls + GitHub Link */}
          <div className="flex items-center gap-3">
            {/* Horizontal Scroll Arrows */}
            <div className="flex items-center gap-2 mr-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll Left"
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-foreground hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm active:scale-95"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll Right"
                className="p-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-foreground hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white hover:border-blue-500 transition-all duration-300 shadow-sm active:scale-95"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* View All Work Direct Link */}
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
        </div>

        {/* ─────────────────────────────────────────────
            NATURAL HORIZONTAL SCROLL CAROUSEL
            (Next card peeks out + stops on hover)
        ───────────────────────────────────────────── */}
        <div
          className="relative group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrollable Container with Snap and Peek Cue */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[86vw] sm:w-[440px] lg:w-[480px] shrink-0 snap-start h-auto"
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
              </div>
            ))}

            {/* End Peek Spacer for clean right margin */}
            <div className="w-12 shrink-0" />
          </div>

          {/* Carousel Footer & Status Indicator */}
          <div className="flex justify-between items-center mt-6">
            {/* Pagination Pill Dots */}
            <div className="flex items-center gap-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Scroll to ${proj.title}`}
                  className="p-1 focus:outline-none"
                >
                  {idx === activeIndex ? (
                    <motion.div
                      layoutId="activeDot"
                      className="w-8 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md shadow-blue-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <div className="w-2.5 h-2.5 bg-slate-300 dark:bg-white/20 hover:bg-blue-400 rounded-full transition-colors duration-300" />
                  )}
                </button>
              ))}
            </div>

            {/* Helper Status Cue */}
            <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-2">
              {isPaused ? (
                <span className="inline-flex items-center gap-1.5 text-amber-500 dark:text-amber-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Paused on hover
                </span>
              ) : (
                <span className="hidden sm:inline">Flick horizontally or use arrows to navigate</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;