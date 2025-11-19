"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);

  const allServices = [
        {
      title: "Electrical and Engineering Works",
      description:
        "Expertise in electrical installations, maintenance, and engineering solutions for safe, house wiring and efficient operations.",
      icon: "🔌",
    },
    {
      title: "Architectural Design",
      description:
        "We craft modern, functional, and visually striking designs that align with your vision and environment.",
      icon: "🏛️",
    },
    {
      title: "Construction & Engineering",
      description:
        "From foundation to finishing, we handle projects with precision and structural integrity.",
      icon: "🧱",
    },

    {
      title: "Project Management",
      description:
        "End-to-end supervision ensuring timely delivery, quality workmanship, and budget efficiency.",
      icon: "📋",
    },
  ];

  // Simulate loading with skeleton screens
  useEffect(() => {
    // Faster loading for better UX - start with skeleton, then load content
    const timer = setTimeout(() => {
      setServices(allServices);
      setIsLoading(false);
    }, 800); // Reduced to 0.8 seconds for faster loading

    return () => clearTimeout(timer);
  }, []);

  // Loading skeleton component
  const ServiceSkeleton = ({ index }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-gray-100 rounded-2xl p-8 flex flex-col items-center animate-pulse"
    >
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
      <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="w-full h-4 bg-gray-300 rounded mb-1"></div>
      <div className="w-full h-4 bg-gray-300 rounded"></div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 bg-white overflow-hidden">
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
              <span className="text-sm font-medium text-gray-700">Loading services...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red gradient shapes */}
        <div className="absolute -top-24 -left-32 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-700/10 rotate-45 blur-2xl"></div>
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl font-bold text-red-600 mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At <span className="font-semibold text-black">Ricardo Architectural and Construction Works</span>,
          we combine creativity, engineering, and craftsmanship to deliver spaces that inspire and endure.
        </p>
      </motion.div>

      {/* Loading State */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
          >
            {[0, 1, 2, 3].map((index) => (
              <ServiceSkeleton key={index} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 } 
                }}
                className="bg-black text-white rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl hover:bg-red-600 transition-all duration-300 cursor-pointer"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
