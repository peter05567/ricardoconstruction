'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function About() {
  const [showMore, setShowMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [ceoImageLoaded, setCeoImageLoaded] = useState(false)

  // Simulate loading effect
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
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-16 py-20"
    >

      {/* ----------------------- ABOUT SECTION ----------------------- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Main Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full h-[400px] md:h-[500px]"
        >

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

        {/* Right: About Content */}
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
            we don’t just create buildings—we craft spaces that tell stories, spark inspiration,
            and leave a lasting impression.
          </p>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg mt-3">
            From concept to completion, we guide you through every step, whether it’s a cozy home,
            a vibrant office, or a bold commercial project.
          </p>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden text-gray-400 leading-relaxed text-base md:text-lg mt-3"
              >
                <p>
                  Over the years, Ricardo Architectural Works has partnered with clients across the region,
                  turning visions into remarkable realities and elegant solutions.
                </p>
                <p className="mt-3">
                  Our philosophy is simple:
                  <span className="text-white font-semibold"> design should inspire, uplift, and enhance life.</span>
                </p>
                <p className="mt-3">
                  Whether it's a personal sanctuary or a professional landmark,
                  we create spaces that leave a lasting impression.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

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

      {/* ----------------------- CEO SECTION ----------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mt-24 bg-black/40 border border-red-900/40 rounded-2xl p-10 backdrop-blur-md shadow-lg shadow-red-900/20"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">

        {/* CEO Image */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-red-600 shadow-red-900/40 shadow-xl flex-shrink-0">
          {!ceoImageLoaded && (
            <div className="absolute inset-0 animate-pulse rounded-full bg-gray-200" />
          )}

          <Image
            src="/ceo.jpeg"
            alt="CEO Portrait"
            fill
            onLoadingComplete={() => setCeoImageLoaded(true)}
            className={`object-cover transition-opacity duration-500 ${
              ceoImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="(max-width: 768px) 12rem, (max-width: 1024px) 14rem, 16rem"
          />
        </div>

          {/* CEO Bio */}
        <div className="space-y-3">
          <h3 className="text-3xl font-bold text-red-500">
            Richard Kwame Amankwaah Addo
          </h3>
          <p className="text-gray-400 text-lg italic">CEO & Lead Architect</p>

          <p className="text-gray-300 leading-relaxed">
            With a passion for modern architectural innovation, Ricardo leads the company with
            a commitment to excellence, precision, and creative problem-solving.
          </p>

          <p className="text-gray-400">
            His vision combines bold creativity with functional design, making him one of the
            most forward-thinking architects in the region. He also works as a Mapper at the
            Electricity Company of Ghana, Abuakwa Agogo, bringing precision and technical expertise
            to the field.
          </p>
        </div>
        
        </div>
      </motion.div>
    </motion.section>
  )
}
