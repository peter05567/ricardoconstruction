'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-black text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Section */}
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Crafting Bold <span className="text-red-600">Architectural</span> Spaces
          </h1>
          <p className="text-gray-300 mb-8">
            At Ricardo Architectural and Construction Works, we design and build innovative structures 
            that blend art, functionality, and sustainability.
          </p>
          <Link href="/projects">
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Projects
            </motion.button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/logo.png"
            alt="Modern Architecture"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
