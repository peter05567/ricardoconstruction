'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const allProjects = [
    {
      id: 1,
      title: 'Modern Urban Villa',
      description: 'A luxury residence combining modern design with natural materials.',
      image: '/project.png',
      category: 'Residential',
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      description: 'Sleek glass structure reflecting innovation and sophistication.',
      image: '/corporate.png',
      category: 'Commercial',
    },
    {
      id: 3,
      title: 'Cultural Pavilion',
      description: 'A bold architectural statement celebrating community and art.',
      image: '/project.png',
      category: 'Public',
    },
    {
      id: 4,
      title: 'Seaside Resort',
      description: 'Elegant retreat inspired by waves, light, and coastal textures.',
      image: '/project.png',
      category: 'Hospitality',
    },
    {
      id: 5,
      title: 'Transformer',
      description: 'Dynamic workspace designed to foster creativity and collaboration.',
      image: '/wiring.jpg',
      category: 'Wiring',
    },
    {
      id: 6,
      title: 'Skyline Tower',
      description: 'High-rise marvel defining modern city living with striking geometry.',
      image: '/wiring.jpg',
      category: 'Residential',
    },
  ];

  // Simulate loading with skeleton screens
  useEffect(() => {
    // Faster loading for better UX - start with skeleton, then load content
    const timer = setTimeout(() => {
      setProjects(allProjects);
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer);
  }, []);

  // Loading skeleton component
  const ProjectSkeleton = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-2xl bg-gray-800 animate-pulse"
    >
      <div className="w-full h-[300px] bg-gray-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
        <div className="flex items-center justify-between mb-2">
          <div className="w-2/3 h-6 bg-gray-600 rounded"></div>
          <div className="w-16 h-5 bg-gray-600 rounded-full"></div>
        </div>
        <div className="w-full h-4 bg-gray-600 rounded mb-2"></div>
        <div className="w-2/3 h-4 bg-gray-600 rounded"></div>
        <div className="mt-4 w-24 h-10 bg-gray-600 rounded-lg"></div>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      {/* Activity Indicator */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200 flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <span className="text-sm font-medium text-gray-700">Loading projects...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Our Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore some of our signature works — where innovation, functionality, and beauty meet.
        </p>
      </motion.div>

      {/* Grid of Projects */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeletons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <ProjectSkeleton key={index} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg shadow-red-900/20"
              >
                {/* Project Image */}
                <motion.div 
                  className="overflow-hidden"
                  whileHover="hover"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[300px]"
                    variants={{
                      hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Default State - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Hover Overlay 
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-red-500"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 text-sm mt-2 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex items-center justify-between mt-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm font-medium"
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </motion.div>
                */}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
