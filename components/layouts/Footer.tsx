import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ModernLogo } from '../ui/modern-logo'

export const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-xl border-t border-slate-200 dark:border-white/5 py-12 transition-all duration-500 relative z-20">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="mb-4">
              <ModernLogo />
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm max-w-xs">
              Crafting premium digital experiences with precision and passion.
            </p>
          </div>


          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/#home" className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium'>Home</Link>
            <Link href="/#about" className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium'>About</Link>
            <Link href="/#projects" className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium'>Projects</Link>
            <Link href="/#contact" className='text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors text-sm font-medium'>Contact</Link>
          </div>

          <p className="text-slate-500 dark:text-slate-500 text-xs">
            © {new Date().getFullYear()} Usman O. Dio. All rights reserved.
          </p>


        </div>
      </div>
    </footer>
  )
}
