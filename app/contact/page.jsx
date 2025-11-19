"use client";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen py-20 px-6 md:px-16 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red gradient shapes */}
        <div className="absolute -top-24 -right-32 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-700/10 rotate-45 blur-2xl"></div>
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Ready to bring your vision to life? Contact us today and let's discuss how we can transform your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-black text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-lg p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-300">123 Architecture Avenue<br />Design District, DA 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-lg p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-300">+233 (541)-329-311</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-lg p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">rkaddo1409@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 rounded-lg p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Business Hours</h4>
                    <p className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Reach Us On</h4>
              <div className="flex space-x-4">

                {/* Facebook */}
                <a 
                  href="https://facebook.com/RichardKwameAmankwaaAddo(Pastor Ricardo)" target="_blank" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 
                    1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 
                    4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 
                    0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.403 
                    24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/233541329311" target="_blank" 
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M16.002 3.2c-7.062 0-12.8 5.737-12.8 12.8 0 2.257.587 
                    4.451 1.707 6.385L3.2 28.8l6.634-1.707a12.73 12.73 0 0 0 6.168 
                    1.594h.001c7.062 0 12.8-5.737 12.8-12.8s-5.738-12.8-12.8-12.8zm0 
                    23.047h-.001a10.23 10.23 0 0 1-5.215-1.424l-.373-.221-3.94 
                    1.015 1.047-3.843-.243-.395a10.22 10.22 0 0 1-1.59-5.473c0-5.654 
                    4.602-10.256 10.256-10.256S26.256 10.24 26.256 15.894 21.655 26.247 
                    16.002 26.247zm5.893-7.61c-.322-.161-1.907-.94-2.203-1.047-.296-.108-.512-.161-.729.161-.215.322-.835 
                    1.047-1.025 1.261-.19.215-.38.242-.703.081-.322-.161-1.36-.502-2.589-1.602-.957-.854-1.602-1.907-1.79-2.229-.19-.322-.02-.496.142-.657.146-.147.322-.38.483-.57.161-.19.215-.322.322-.537.108-.215.054-.403-.027-.564-.081-.161-.729-1.754-.999-2.403-.263-.63-.53-.544-.729-.554-.188-.01-.403-.01-.619-.01-.215 
                    0-.564.081-.86.403-.296.322-1.129 1.103-1.129 2.69 0 1.588 1.157 3.123 
                    1.318 3.338.161.215 2.28 3.48 5.527 4.873.773.333 1.375.532 1.844.683.773.245 
                    1.476.21 2.033.127.62-.093 1.907-.779 2.178-1.533.27-.754.27-1.401.188-1.533-.081-.132-.295-.215-.616-.376z"/>
                  </svg>
                </a>

                {/* Instagram */}
                {/*<a 
                  href="https://www.instagram.com/your_username/" target="_blank" 
                  className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.013 4.85.07 1.17.054 1.97.24 
                    2.427.403a4.92 4.92 0 0 1 1.75 1.145 4.92 4.92 0 0 1 1.145 1.75c.163.457.349 
                    1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 
                    1.17-.24 1.97-.403 2.427a4.92 4.92 0 0 1-1.145 1.75 4.92 4.92 0 0 
                    1-1.75 1.145c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 0 
                    1-1.75-1.145 4.92 4.92 0 0 1-1.145-1.75c-.163-.457-.349-1.257-.403-2.427C2.176 
                    15.584 2.163 15.204 2.163 12s.013-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 
                    4.92 0 0 1 1.145-1.75A4.92 4.92 0 0 1 5.531 2.636c.457-.163 1.257-.349 
                    2.427-.403C9.224 2.176 9.604 2.163 12 2.163zm0 3.675a6.162 
                    6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm7.406-.88a1.44 
                    1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/>
                  </svg>
                </a> */}

                {/* X (Twitter) 
                <a 
                  href="https://twitter.com/your_username" target="_blank" 
                  className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2h3.308l-7.227 8.26L24 22h-6.557l-5.1-6.77L6.244 
                    22H2.936l7.73-8.835L0 2h6.686l4.627 6.21L18.244 2zm-1.16 
                    17.327h1.833L7.093 4.548H5.145l11.94 14.779z"/>
                  </svg>
                </a>*/}
                {/* Call */}
                <a 
                  href="tel:+233541329311"
                  target="_blank"
                  className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-lg transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2.05 2.05 0 0 1-2.23 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.12 10.86 19.79 19.79 0 0 1 .05 2.23 2.05 2.05 0 0 1 2.05 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.46 8.89a16 16 0 0 0 8.65 8.65l2.25-1.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </a>

              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}