import React from 'react'

export default function OutlineButton({children}: {children: React.ReactNode;}) {
  return (
    <button className="px-6 rounded-xl font-medium border border-blue-500 text-white transition-all duration-300 hover:bg-gradient-r hover:from-blue-600 hover:to-cyan-500 hover:border-transparent">
        {children}
    </button>
  )
}
