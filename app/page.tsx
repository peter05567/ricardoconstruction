"use client";
import Hero from "../components/Hero"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Meter Fixing',
      description: 'Installation and configuration of an electrical meter to ensure safe and accurate power distribution.',
      image: '/meter.jpeg',
      category: 'Electrical',
    },
    {
      id: 2,
      title: 'House Plan',
      description: 'Professional architectural drawing showing layout, dimensions, and structural planning for a residential building.',
      image: '/arcdraw.jpeg',
      category: 'Architecture',
    },
    {
      id: 3,
      title: 'Uncompleted Building Work',
      description: 'Ongoing construction project showing blockwork, reinforcement, and structural development.',
      image: '/uncompleted.jpeg',
      category: 'Construction',
    },
  ];

  const services = [
    {
      icon: "🏛️",
      title: "Architectural Design",
      description: "Innovative designs that blend aesthetics with functionality."
    },
    {
      icon: "🧱",
      title: "Construction",
      description: "Precision construction with quality materials and expert craftsmanship."
    },
    {
      icon: "🛋️",
      title: "Interior Design",
      description: "Transforming spaces with elegant and practical interior solutions."
    },
    {
      icon: "📋",
      title: "Project Management",
      description: "End-to-end supervision ensuring timely delivery and budget efficiency."
    }
  ];

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-32 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-700/5 rotate-45 blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Crafting <span className="text-red-600">Exceptional</span> Spaces
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              With over a decade of experience in architectural design and construction, our team brings visionary ideas 
              to life through precision engineering, creative planning, and an unwavering passion for excellence. We don't just build structures—we create environments that inspire and endure.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/about">
              <button className="bg-black hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Discover Our Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Our <span className="text-red-600">Core Services</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              From concept to completion, we offer comprehensive architectural and construction solutions tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#1E1E1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-700/5 rotate-45 blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Explore our portfolio of exceptional architectural and construction projects that showcase our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

                {/* Overlay */}
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
                    className="text-gray-300 text-sm mt-2"
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
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm font-medium"
                    >
                      View Project
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              What Our <span className="text-red-600">Clients Say</span>
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content: "Ricardo Architectural transformed our dream home into reality. Their attention to detail and innovative design solutions exceeded our expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                content: "Professional, reliable, and creative. They delivered our commercial project on time and within budget. Highly recommend their services.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Property Developer",
                content: "Outstanding architectural vision combined with practical construction expertise. They consistently deliver exceptional results.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Dream?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether it's residential, commercial, or industrial, we have the expertise and passion to turn your vision into an inspiring reality. Let's create something extraordinary together.
            </p>
            <Link href="/contact">
              <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
