import { motion } from 'framer-motion'

const features = [
  {
    title: 'ATS Resume Optimization',
    body: 'Our AI scans your resume against job descriptions, injects missing keywords naturally, and boosts your ATS score from 61% to 98% overnight.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" className="w-6 h-6">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
        <line x1="4" y1="6" x2="20" y2="6" stroke="#7C3AED" strokeOpacity="0.6" strokeWidth="1" className="animate-scan" />
      </svg>
    ),
  },
  {
    title: 'Profile Maintenance',
    body: 'Keep LinkedIn, GitHub, and all portals in sync. Automated profile refreshes ensure you stay visible to every recruiter, 24/7.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 12a8 8 0 0 1 8-8" strokeLinecap="round" />
        <path d="M20 12a8 8 0 0 1-8 8" strokeLinecap="round" />
        <polyline points="4 8 4 12 8 12" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="20 16 20 12 16 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Onyx Copilot Program',
    body: 'A crystal-clear roadmap from day one: what to build, what to study, who to contact. A job sprint designed around your strengths.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v4" strokeLinecap="round" />
        <path d="M12 17v4" strokeLinecap="round" />
        <path d="M3 12h4" strokeLinecap="round" />
        <path d="M17 12h4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2" fill="#7C3AED" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Offer Readiness',
    body: "Mock interviews, salary negotiation coaching, and offer evaluation — you won't just receive an offer, you'll command the best one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L4 7v6c0 5.5 3.5 10 8 11 4.5-1 8-5.5 8-11V7l-8-5z" />
        <path d="M9 12l2 2 4-4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

const cardVar = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: { duration: 0.5 }
    } 
  }
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 md:py-36 px-8 md:px-16 lg:px-20 bg-[#08080F] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-violet-500 blur-[120px]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-violet-700 blur-[100px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xs text-violet-400 uppercase tracking-widest text-center mb-4"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
        >
          Everything You Need to Land the Job
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-zinc-400 text-center mt-5 mb-20 max-w-xl mx-auto text-base leading-relaxed"
        >
          Four pillars. One platform. Zero friction between you and your next career move.
        </motion.p>

        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVar}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mentor-card rounded-2xl p-8 cursor-pointer transition-all duration-300 
                group hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/20 relative overflow-hidden"
            >
              {/* Card glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center mb-6 
                    group-hover:bg-violet-500/25 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-violet-200 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                  {f.body}
                </p>
              </div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-violet-500/10 blur-2xl opacity-0 group-hover:opacity-100"
                initial={false}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
