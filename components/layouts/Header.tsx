import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';
import Image from 'next/image';
import { ModernLogo } from '../ui/modern-logo';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { href: "/#home", label: "Home", id: 'home' },
    { href: "/#about", label: "About", id: 'about' },
    { href: "/#projects", label: "Projects", id: 'projects' },
    { href: "/#services", label: "Services", id: 'services' },
    { href: "/#contact", label: "Contact", id: 'contact' },
  ];

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" onClick={closeMenu}>
            <div className="flex items-center">
              <ModernLogo />
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30" 
                    : "text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-500/5 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <AnimatedThemeToggler 
              variant="circle"
              className="p-2.5 rounded-full glass border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300"
            />
            {/* Desktop Button */}
            <Link 
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
            >
              Let's Talk
            </Link>
          </div>


          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-2xl text-slate-900 dark:text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-6 right-6 bg-white/80 dark:bg-[#1a1a2e]/90 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={`text-lg font-semibold py-2 px-4 rounded-xl transition-colors ${
                      activeSection === item.id ? "bg-blue-500 text-white" : "text-slate-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="#contact"
                  onClick={closeMenu}
                  className="bg-blue-500 text-center py-4 rounded-xl text-white font-bold"
                >
                  Let's Talk
                </Link>
                <div className="flex justify-center pt-4 border-t border-white/10">
                  <AnimatedThemeToggler 
                    variant="circle"
                    className="p-3 rounded-full glass border border-white/10 text-white"
                  />
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header;


// import React from 'react'
// import { motion } from "framer-motion";
// import { navItems } from '../interfaces';
// import Link from 'next/link';


// const Header: React.FC = () => {
//   return (
//     <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-800 border-b border-white/10">
//         <motion.nav
//             initial={{y: -80, opacity: 0}}
//             animate={{y: 0, opacity: 1}}
//             transition={{ duration:0.6 }}
//             className=''
//         >
//             <div className=" mx-auto flex items-center justify-between py-6 px-6 ">
//                 <Link href="#"><h1 className="text-white font-bold text-xl ">USM<span className="text-gray-400 hover:text-white">A</span>N</h1></Link>
//                 <nav className="space-x-6 font-semibold">
//                     <Link href="/" className="hover:text-gray-400 duration-300">Home</Link>
//                     <Link href="/gallery" className="hover:text-gray-400 duration-300">Gallery</Link>
//                     <Link href="/about" className="hover:text-gray-400 duration-300">About</Link>
//                     <Link href="/contact" className="hover:text-gray-400 duration-300">Contact</Link>
//                 </nav>
//             <button className="hidden md:block bg-blue-500 py-2 px-5 rounded-full text-white hover:scale-105 transition">Let's Talk</button>
//             </div>
//         </motion.nav>
//     </header>
//   )
// }

// export default Header;
