import './globals.css'
import Navbar from '../components/Navabar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Ricardo Architectural and Construction Works',
  description: 'Designing spaces that inspire – architecture and construction excellence.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
