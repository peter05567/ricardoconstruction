'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  // Animation Variants
  const menuVariants = {
    hidden: { y: '-100%' },
    visible: {
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: { y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  // Reusable NavLink component with animated underline
  const NavLink = ({ href, children, onClick }) => {
    const isActive = pathname === href
    
    return (
      <motion.div variants={linkVariants}>
        <Link
          href={href}
          onClick={onClick}
          className="relative group transition"
        >
          <span className={`transition ${isActive ? 'text-red-600' : 'text-white group-hover:text-red-600'}`}>
            {children}
          </span>
          {/* Underline - always visible for active page */}
          <span className={`absolute left-0 bottom-[-4px] h-[2px] bg-red-600 transition-all duration-300 ${
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          }`}></span>
        </Link>
      </motion.div>
    )
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Ricardo Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Ricardo Architecture
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white hover:text-red-600 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim Background */}
            <motion.div
              key="overlay-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Slide + Staggered Menu */}
            <motion.div
              key="overlay-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center space-y-8 text-lg font-medium"
            >
              <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
              <NavLink href="/about" onClick={toggleMenu}>About</NavLink>
              <NavLink href="/projects" onClick={toggleMenu}>Projects</NavLink>
              <NavLink href="/services" onClick={toggleMenu}>Services</NavLink>
              <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>

              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-white hover:text-red-600 transition"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
