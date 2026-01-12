import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-4">
        <h1 className="text-lg font-semibold">Best In What We Do</h1>
        <p className="mt-2 text-sm">© {new Date().getFullYear()}. All rights reserved.</p>
        <div className="mt-4 flex gap-4">
          <Link href="#" className='text-gray-400 hover:text-white'>Privacy Policy</Link>
          <Link href="#" className='text-gray-400 hover:text-white'>Terms of Service</Link>
          <Link href="#" className='text-gray-400 hover:text-white'>Contact Us</Link>
        </div>
      </div>
    </footer>
)
}
