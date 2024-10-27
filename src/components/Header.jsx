// File: src/components/Header.jsx
import Link from 'next/link'
import { useState } from 'react'

// Update Header.jsx - Make sure navigation links are visible
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Crivelli Traslochi
            </Link>
            
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/traslochi-sgomberi" className="text-gray-600 hover:text-blue-600">
                Traslochi e Sgomberi
              </Link>
              <Link href="/depositi" className="text-gray-600 hover:text-blue-600">
                Depositi
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/contatti" className="text-gray-600 hover:text-blue-600">
                Contatti
              </Link>
            </div>
          </div>
  
          {/* Mobile menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
            <div className="flex flex-col space-y-4">
              <Link href="/traslochi-sgomberi" className="text-gray-600 hover:text-blue-600">
                Traslochi e Sgomberi
              </Link>
              <Link href="/depositi" className="text-gray-600 hover:text-blue-600">
                Depositi
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/contatti" className="text-gray-600 hover:text-blue-600">
                Contatti
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }