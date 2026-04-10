import { motion } from 'framer-motion'

const mentors = [
  {
    name: 'Marcus Chen',
    role: 'Sr. Engineering Lead @ Google',
    body: 'Distributed systems expert. 200+ engineers mentored through FAANG interview loops.',
    avatar: 'https://images.media.io/ai-images/tech-professional-avatar.png',
  },
  
  {
    name: 'Elena Rodriguez',
    role: 'Principal PM @ Airbnb',
    body: 'Portfolio storytelling guru. Helps PMs craft narratives that land top-tier roles.',
    avatar: 'https://imgs.search.brave.com/KIdelLEZZnsLYfY5IOJw76jDlZwHNusCAdieCkasj9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVkaWEuaW8v/YWktaW1hZ2VzL3Rl/Y2gtY2FzdWFsLW1h/bGUtYXZhdGFyLnBu/Zw',
  },
  {
    name: 'Jordan Smith',
    role: 'Design Director @ Meta',
    body: 'Design systems architect. Guides designers from junior to staff-level portfolios.',
    avatar: 'https://imgs.search.brave.com/zdAnNN2j_U-beiv-Oz7TbiMZfbSsZWuyrtLorH9Mkp4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvZ2VuZXJhdGUt/YS1yZWFsaXN0aWMt/YWktYXZhdGFyLW9m/LWEtcHJvZmVzc2lv/bmFsLXdvbWFuLWlu/LWZvdG9yLmpwZw',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Talent @ Stripe',
    body: 'Salary negotiation expert. Average uplift: 35% above initial offer.',
    avatar: 'https://imgs.search.brave.com/MTKOxnLyg8sN7IzkGVTehrpFWu3U5IKe_Ffwqlk2ZfY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVkaWEuaW8v/YWktaW1hZ2VzL2Ny/ZWF0aXZlLXByb2Zl/c3Npb25hbC1mZW1h/bGUtYXZhdGFyLnBu/Zw',
  },
]

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
const cardVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function MentorSection() {
  return (
    <section id="mentors" className="py-28 md:py-40 px-8 md:px-16 lg:px-20 bg-[#08080F]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 max-w-7xl mx-auto items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-4">Mentorship</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Personal Mentor Support
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mt-5">
            Real professionals. Real experience. Your mentors are active engineers, PMs, and designers at
            the world's best companies — not career coaches who've never shipped a product.
          </p>

          {/* Feature rows */}
          {[
            { title: '1:1 Strategy Sessions', sub: 'Weekly deep-dives on your job search, resume, and pipeline.' },
            { title: 'Mock Interview Circuits', sub: 'System design, behavioral, and coding rounds with real feedback.' },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-4 mt-8">
              <div className="w-9 h-9 rounded-full bg-violet-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path d="M6 10l3 3 5-6" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">{f.title}</h4>
                <p className="text-sm text-zinc-400 mt-1">{f.sub}</p>
              </div>
            </div>
          ))}

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 flex items-center gap-4 px-10 py-4 rounded-full
              bg-white/5 border border-white/10 backdrop-blur-md
              cursor-pointer hover:bg-violet-500/10 hover:border-violet-500/30 
              transition-all duration-300 group"
          >
            <span className="text-lg font-semibold text-violet-400 group-hover:text-violet-300 transition-colors">
              Schedule a Consultation
            </span>
            <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 flex-shrink-0">
              <rect x="2" y="3" width="16" height="14" rx="2" stroke="#A78BFA" strokeWidth="1.5" />
              <line x1="2" y1="7" x2="18" y2="7" stroke="#A78BFA" strokeWidth="1.5" />
              <circle cx="7" cy="11" r="1" fill="#A78BFA" />
            </svg>
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {mentors.map((m, i) => (
            <motion.div
              key={i}
              variants={cardVar}
              whileHover={{ y: -4 }}
              className="mentor-card rounded-2xl p-6 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={m.avatar} 
                  alt={m.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 
                    ring-2 ring-violet-500/40 group-hover:ring-violet-500/70 transition-all duration-300"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{m.name}</h4>
                  <p className="text-xs text-violet-400 mt-0.5">{m.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 text-xs text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
                Available
              </div>
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
