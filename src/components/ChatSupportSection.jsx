import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  { type: 'ai', text: "Good morning! I've analyzed 47 new openings matching your profile. Ready to review your top matches?" },
  { type: 'user', text: "Yes! Any roles at top-tier companies?" },
  { type: 'ai', text: "Absolutely. I found 3 strong matches at Google, OpenAI, and Stripe. All align with your ML background." },
  { type: 'alert', label: 'REAL-TIME ALERT', match: 'New Match: AI Researcher @ OpenAI', score: '92% Match Score' },
]

export default function ChatSupportSection() {
  const [visible, setVisible] = useState([])

  useEffect(() => {
    let timers = []
    const show = () => {
      setVisible([])
      messages.forEach((_, i) => {
        timers.push(setTimeout(() => {
          setVisible(prev => [...prev, i])
        }, (i + 1) * 1200))
      })
      timers.push(setTimeout(show, 9000))
    }
    show()
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section className="py-28 md:py-40 px-8 md:px-16 lg:px-20 bg-[#08080F]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 max-w-7xl mx-auto items-center">
        {/* LEFT — Phone mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="w-74 rounded-[40px] overflow-hidden border-5 border-white/10 bg-[#0F0F1A] shadow-2xl shadow-violet-900/30">
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                OM
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Onyx Mentor</p>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: 'pulseDot 2s ease-in-out infinite' }} />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-4 min-h-[400px]">
              <AnimatePresence>
                {messages.map((msg, i) => {
                  if (!visible.includes(i)) return null

                  if (msg.type === 'ai') {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-[85%] self-start bg-[#1A1A2E] rounded-[18px_18px_18px_4px] p-3 text-xs text-zinc-300 leading-relaxed"
                      >
                        {msg.text}
                      </motion.div>
                    )
                  }

                  if (msg.type === 'user') {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-[85%] self-end bg-violet-600 rounded-[18px_18px_4px_18px] p-3 text-xs text-white"
                      >
                        {msg.text}
                      </motion.div>
                    )
                  }

                  if (msg.type === 'alert') {
                    return (
                      <motion.div
                        key={i}
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="bg-[#1A1A2E] rounded-xl p-3 border border-violet-500/20 flex items-start gap-2"
                      >
                        <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 mt-0.5 flex-shrink-0">
                          <path d="M8 1l1 5h5l-4 3 1.5 5L8 11l-3.5 3L6 9 2 6h5l1-5z" fill="#A78BFA" />
                        </svg>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-violet-400">{msg.label}</p>
                          <p className="text-xs font-bold text-white mt-0.5">{msg.match}</p>
                          <p className="text-[10px] text-violet-400 mt-0.5">{msg.score}</p>
                        </div>
                      </motion.div>
                    )
                  }
                  return null
                })}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="border-t border-white/5 p-3 flex items-center gap-2">
              <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-xs text-zinc-400">
                Type a message...
              </div>
              <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                  <path d="M2 8h12M10 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs text-violet-400 uppercase tracking-widest mb-4">Always Available</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Always-on Support.<br />In your pocket.
          </h2>
          <p className="text-zinc-400 text-lg mt-5 leading-relaxed">
            Real-time job alerts, instant mentor chat, and AI-powered recommendations — 
            all in one seamless interface that works as hard as you do.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" className="w-7 h-7">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="text-sm font-semibold text-violet-400 mt-3">Instant Alerts</h4>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                Get notified the moment a high-match role appears. No more refreshing job boards.
              </p>
            </div>
            <div>
              <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5" className="w-7 h-7">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="text-sm font-semibold text-violet-400 mt-3">Direct Mentor Access</h4>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                Chat directly with your mentor anytime. No scheduling, no wait times.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
