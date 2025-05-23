import Link from 'next/link'
import { useState } from 'react'

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            MojaBiblioteczka
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition">
              Moje filmy
            </Link>
            <Link href="/stats" className="hover:text-blue-200 transition">
              Statystyki
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded hover:bg-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Moje filmy
            </Link>
            <Link 
              href="/stats" 
              className="block px-3 py-2 rounded hover:bg-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Statystyki
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
