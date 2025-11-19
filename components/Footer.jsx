import Link from 'next/link'
import { Mail, Facebook,  Phone, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://facebook.com/RichardKwameAmankwaaAddo(Pastor Ricardo)" target="_blank"  
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href="https://wa.me/233541329311"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors duration-300"
            aria-label="Message"
          >
            <MessageCircle size={24} />
          </a>
          <a 
            href="tel:+233541329311" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors duration-300"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
          <a 
            href="mailto:allsanit.amankwaaaddo91@gmail.com" 
            className="hover:text-red-600 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
        
        {/* Navigation Links 
        <div className="flex justify-center space-x-6 text-sm mb-6">
          <Link href="/about" className="hover:text-red-600 transition">About</Link>
          <Link href="/projects" className="hover:text-red-600 transition">Projects</Link>
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </div>*/}
        
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Ricardo Architectural and Construction Works</p>
      </div>
    </footer>
  )
}
