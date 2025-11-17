'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px]"
        >
          <Image
            src="/hero.png"
            alt="Ricardo Architectural Works"
            fill
            className="object-cover rounded-2xl shadow-lg shadow-red-900/30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            About Ricardo Architecture
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            At <span className="text-white font-semibold">Ricardo Architectural and Construction Works</span>,
            we turn ideas into timeless designs. Our team of experienced architects and engineers
            delivers innovative, functional, and sustainable spaces that inspire modern living.
          </p>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            From concept to completion, we handle residential, commercial, and industrial projects
            with precision and passion. Every detail reflects our dedication to quality, aesthetics,
            and excellence.
          </p>

          {/* Animated Expand Section */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden text-gray-400 leading-relaxed text-base md:text-lg"
              >
                <p>
                  Over the years, Ricardo Architecture has worked with clients across the region,
                  creating modern spaces that blend creativity with functionality. We specialize in
                  residential designs, corporate offices, and urban planning—focusing on sustainable
                  materials and efficient use of space.
                </p>
                <p className="mt-3">
                  Our philosophy is simple: design should inspire. Whether it’s a minimalist home
                  or a large commercial complex, our goal is to make every project a lasting
                  statement of innovation and craftsmanship.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md shadow-red-800/40 transition"
          >
            {showMore ? 'Show Less' : 'Learn More'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
