import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import ParticleCanvas from './ParticleCanvas'

function CountUp({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = end / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ── animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay }
  })
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, y: 60 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }
  }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const statItem = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

const barHeights = [50, 75, 40, 90, 65, 80, 55, 70, 95, 60, 85, 45]

export default function HeroSection() {
  const heroChars = '5x Speed.'.split('')
  const sectionRef = useRef(null)

  /* parallax for the browser mockup */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const mockupScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12 lg:px-16 pt-24 pb-16"
      style={{ background: 'linear-gradient(180deg, #08080F 0%, #0B0B1A 40%, #0D0A1F 70%, #08080F 100%)' }}
    >
      {/* ── ambient gradient orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* top-center large glow */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, rgba(79,70,229,0.15) 40%, transparent 70%)'
          }}
        />
        {/* left floating orb */}
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)'
          }}
        />
        {/* right floating orb */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 -right-16 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)'
          }}
        />
        {/* bottom accent glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* ── grid pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* ── particles ── */}
      <ParticleCanvas />

      {/* ── main content ── */}
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] mb-10"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(139,92,246,0.08) 100%)',
            border: '1px solid rgba(139,92,246,0.25)',
            color: '#C4B5FD'
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          The Intelligent Monolith Is Here
        </motion.div>

        {/* heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="text-[clamp(40px,7vw,88px)] font-black leading-[0.95] tracking-[-0.03em] text-white mb-3"
        >
          Land Your Job at
          <br />
          <span className="hero-gradient-text inline-flex mt-1">
            {heroChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.045, duration: 0.45, ease: 'easeOut' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mt-7 mb-12"
        >
          AI-optimized resumes. Auto-applied jobs. Personal mentors.
          <br className="hidden sm:block" />
          From application to offer — on autopilot.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full px-10 py-4 text-base cursor-pointer transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50"
          >
            Accelerate Your Career
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-violet-500/30 text-violet-200 font-semibold rounded-full px-10 py-4 text-base transition-all duration-300 cursor-pointer hover:border-violet-400/50 hover:bg-violet-500/5 hover:text-white"
          >
            Watch Demo ▶
          </motion.button>
        </motion.div>

        {/* ── stats row ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center gap-10 md:gap-16 justify-center mt-16 mb-14 flex-wrap"
        >
          {[
            { end: 98, suffix: '%', label: 'ATS Score' },
            { end: 5, suffix: 'x', label: 'Faster Placement' },
            { end: 2400, suffix: '+', label: 'Students Placed' },
          ].map((s, i) => (
            <motion.div key={i} variants={statItem} className="flex flex-col items-center group">
              <span className="text-3xl md:text-5xl font-extrabold bg-gradient-to-b from-violet-300 to-violet-500 bg-clip-text text-transparent
                group-hover:from-white group-hover:to-violet-300 transition-all duration-500">
                <CountUp end={s.end} suffix={s.suffix} />
              </span>
              <span className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] mt-2 font-medium">{s.label}</span>
            </motion.div>
          ))}
          {/* separators (only visible md+) */}
        </motion.div>

        {/* ── browser mockup ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{ y: mockupY, scale: mockupScale }}
          className="w-full max-w-5xl mx-auto mt-4 rounded-2xl overflow-hidden"
        >
          {/* outer glow wrapper */}
          <div
            className="rounded-2xl p-px"
            style={{
              background: 'linear-gradient(180deg, rgba(139,92,246,0.3) 0%, rgba(124,58,237,0.08) 50%, rgba(79,70,229,0.15) 100%)'
            }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(11,11,26,0.95)', backdropFilter: 'blur(20px)' }}>
              {/* browser chrome */}
              <div className="px-5 py-3.5 flex items-center gap-2.5" style={{ background: 'rgba(15,15,26,0.9)', borderBottom: '1px solid rgba(139,92,246,0.1)' }}>
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                <div
                  className="flex-1 rounded-lg h-7 ml-4 flex items-center px-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-[11px] text-zinc-600 font-medium">🔒 onyx-jobcopilot.ai/dashboard</span>
                </div>
              </div>

              {/* browser body */}
              <div className="p-5 md:p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: 98, suf: '%', label: 'ATS SCORE', accent: '#8B5CF6' },
                    { num: 12, suf: '', label: 'ACTIVE LEADS', accent: '#A78BFA' },
                    { num: 4, suf: '', label: 'INTERVIEWS', accent: '#C4B5FD' },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                      className="rounded-xl p-5 text-center relative overflow-hidden group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(26,26,46,0.8) 0%, rgba(20,20,38,0.9) 100%)',
                        border: '1px solid rgba(139,92,246,0.08)'
                      }}
                    >
                      {/* icon glow */}
                      <div
                        className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: `radial-gradient(circle, ${s.accent}, transparent)` }}
                      />
                      <div className="text-2xl md:text-3xl font-bold relative z-10" style={{ color: s.accent }}>
                        <CountUp end={s.num} suffix={s.suf} />
                      </div>
                      <div className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] mt-2 relative z-10">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* bar chart */}
                <div
                  className="h-36 rounded-xl mt-4 overflow-hidden relative flex items-end gap-2 px-5 pb-4 pt-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26,26,46,0.8) 0%, rgba(20,20,38,0.9) 100%)',
                    border: '1px solid rgba(139,92,246,0.08)'
                  }}
                >
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.07, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #6D28D9, #8B5CF6, #A78BFA)`,
                        transformOrigin: 'bottom',
                        opacity: 0.5 + (h / 100) * 0.5,
                        boxShadow: `0 0 ${h / 5}px rgba(139,92,246,0.2)`
                      }}
                    />
                  ))}
                  <div className="absolute top-3 left-5 text-[10px] text-zinc-500 uppercase tracking-[0.15em] font-medium">Weekly Activity</div>
                  {/* trend line hint */}
                  <div className="absolute top-3 right-5 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    ↑ 24%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* reflection / glow under mockup */}
          <div
            className="mx-auto mt-0 h-32 w-4/5 opacity-30 blur-3xl"
            style={{
              background: 'radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)'
            }}
          />
        </motion.div>
      </div>

      {/* ── scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-zinc-700 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-violet-400"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
