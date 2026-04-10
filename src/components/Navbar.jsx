import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Features', 'How It Works', 'Mentors', 'Testimonials', 'FAQ']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 
          bg-[#08080F]/85 backdrop-blur-2xl border-b border-violet-500/15 transition-shadow duration-300
          ${scrolled ? 'shadow-2xl shadow-black/50' : ''}`}
      >
        {/* Logo */}
        <a href="#" className="font-extrabold text-white text-lg flex items-center gap-1 flex-shrink-0">
          <span className="text-violet-400">●</span> Onyx JobCopilot
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 mx-auto">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm text-zinc-400 hover:text-white transition-all relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 h-0.5 bg-violet-500 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <a 
            href="#" 
            className="text-zinc-400 hover:text-white text-sm font-medium transition-colors px-4 py-2"
          >
            Login
          </a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-violet-500/40 bg-[#1A1A2E]/50 backdrop-blur-sm text-violet-300 
              hover:text-violet-200 hover:border-violet-400/60 hover:bg-[#1A1A2E]/70 
              text-sm font-semibold rounded-full px-8 py-3 transition-all duration-300 
              shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] 
              cursor-pointer"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-auto text-white w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        >
          <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }} className="w-6 h-0.5 bg-white block" />
          <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-6 h-0.5 bg-white block" />
          <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }} className="w-6 h-0.5 bg-white block" />
        </button>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#08080F]/98 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl text-white font-semibold hover:text-violet-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-violet-500/40 bg-[#1A1A2E]/50 backdrop-blur-sm text-violet-300 
                hover:text-violet-200 hover:border-violet-400/60 hover:bg-[#1A1A2E]/70 
                font-semibold rounded-full px-10 py-3.5 mt-4 cursor-pointer transition-all duration-300
                shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
