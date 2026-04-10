import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How does the ATS optimization work?',
    a: "Our AI scans your resume against job descriptions, identifies missing keywords, and injects them naturally. Supports 40+ ATS systems including Workday, Greenhouse, and Lever. Average score improvement: 61% → 98%.",
  },
  {
    q: 'Who are the mentors?',
    a: 'Active senior professionals at Google, Meta, Stripe, Airbnb, and OpenAI. Minimum 5 years experience, verified hiring-loop participation.',
  },
  {
    q: 'Is the 2x speed claim guaranteed?',
    a: 'Our median user reports first interview within 3 weeks vs 15-week industry average. Results vary by field and engagement level.',
  },
  {
    q: 'What industries do you support?',
    a: 'Software engineering, product management, design, data science, and growth roles at tech-first companies. Finance and healthcare expanding Q3 2025.',
  },
  {
    q: 'How long does a typical sprint last?',
    a: 'Most sprints conclude within 21 days. The fastest placements happen in under 14 days. Your timeline depends on your target role, experience level, and engagement.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No contracts, no lock-in. You can pause or cancel your sprint at any point. We believe in earning your trust every single day.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-28 md:py-40 px-8 md:px-16 lg:px-20 bg-[#08080F]">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-violet-400 uppercase tracking-widest text-center mb-4"
        >
          Got Questions?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-5"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-center text-base leading-relaxed max-w-md mx-auto mb-16"
        >
          Everything you need to know before starting your sprint.
        </motion.p>

        {/* FAQ items */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`mentor-card rounded-2xl overflow-hidden transition-all duration-300
                  ${isOpen ? 'border-violet-500/40 shadow-lg shadow-violet-500/5' : 'border-violet-500/15'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full px-8 py-6 cursor-pointer 
                    hover:bg-violet-500/5 transition-all text-left"
                >
                  <span className="text-base md:text-lg font-medium text-white pr-6 leading-snug">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-4 h-4 text-violet-400"
                    >
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mx-8 border-t border-violet-500/10" />
                      <p className="px-8 pt-5 pb-7 text-sm md:text-base text-zinc-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
