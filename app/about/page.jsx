'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function About() {
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Simulate a tiny loading delay for smooth UI
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-[400px] md:h-[500px]"
        >
          {/* Image Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-900 animate-pulse rounded-2xl" />
          )}

          <Image
            src="/hero.png"
            alt="Ricardo Architectural Works"
            fill
            onLoadingComplete={() => setImageLoaded(true)}
            className={`object-cover rounded-2xl shadow-lg shadow-red-900/30 transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            About Ricardo Architecture
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            At <span className="text-white font-semibold">Ricardo Architectural and Construction Works</span>,  
            we don’t just create buildings—we craft spaces that tell stories, spark inspiration, and leave a lasting impression.
          </p>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg mt-3">
            From concept to completion, we guide you through every step, whether it’s a cozy home, a vibrant office, or a bold commercial project.  
            Our goal is to turn your ideas into spaces that feel alive, meaningful, and unforgettable.
          </p>

          {/* Expand Section */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden text-gray-400 leading-relaxed text-base md:text-lg mt-3"
              >
                <p>
                  Over the years, Ricardo Architectural Works has had the privilege of partnering with clients across the region,  
                  transforming visions into remarkable realities and elegant solutions.
                </p>
                <p className="mt-3">
                  Our philosophy is simple: <span className="text-white font-semibold">design should inspire, uplift, and enhance lives.</span>  
                  Every choice we make, from lines and curves to materials, is intentional—so your space isn’t just seen, it’s felt.
                </p>
                <p className="mt-3">
                  Whether it’s a personal sanctuary or a professional landmark, we create spaces that leave a lasting impression and spark joy for years to come.
                </p>
              </motion.div>
            )}
          </AnimatePresence>


          {/* Toggle */}
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md shadow-red-800/40 transition"
          >
            {showMore ? "Show Less" : "Learn More"}
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  )
}
