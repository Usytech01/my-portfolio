import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //creates a state variable that create a memory to remember whether the menu is open or closed.

  const toggleMenu = () => {  //creating function that will be used to switch menu state e.g ON/OFF
    setIsMenuOpen(!isMenuOpen); // telling react, Whatever the menu is doing now, do the opposite.
  };

  const closeMenu = () => { //This function always closes the menu, no matter what.
    setIsMenuOpen(false);
  };

  // Navigation items array for better maintainability
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Project", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-gray-800 border-b border-white/10">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto flex items-center justify-between py-6 px-6">
          {/* Logo */}
          <Link href="#" onClick={closeMenu}>
            <h1 className="text-white font-bold text-xl">USM<span className="text-gray-400 hover:text-white">A</span>N</h1>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden sm:flex space-x-6 font-semibold">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-white hover:text-gray-400 duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button - Hidden on mobile */}
          <button className="hidden sm:block bg-blue-500 py-2 px-5 rounded-full text-white hover:scale-105 transition">
            Let's Talk
          </button>

          {/* Mobile Hamburger Menu - Visible only on mobile */}
          <button 
            className="sm:hidden text-3xl focus:outline-none"
            onClick={toggleMenu} //when the button is clicked, toggleMenu runs, this slips isMenuOpen b/w true and false
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FiX className="text-yellow-500" /> // Yellow close icon
            ) : (
              <FiMenu className="text-yellow-500" /> // Yellow hamburger icon
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay - Slides in from top */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gray-800 border-t border-white/10"
        >
          <div className="flex flex-col items-center space-y-6 py-6 px-6">
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-white text-lg font-semibold hover:text-gray-400 duration-300 w-full text-center py-2"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Button */}
            <button 
              onClick={closeMenu}
              className="bg-blue-500 py-3 px-8 rounded-full text-white hover:scale-105 transition mt-4"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>
      </motion.nav>
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
