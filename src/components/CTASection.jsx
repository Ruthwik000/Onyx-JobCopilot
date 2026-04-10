import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-40 px-8 md:px-16 lg:px-20 bg-[#08080F] overflow-hidden text-center">
      {/* Floating orbs */}
      <div className="absolute -left-32 top-0 w-96 h-96 rounded-full bg-violet-500/6 blur-3xl"
        style={{ animation: 'float 6s ease-in-out infinite alternate' }} />
      <div className="absolute -right-32 bottom-0 w-80 h-80 rounded-full bg-violet-700/8 blur-3xl"
        style={{ animation: 'float 8s ease-in-out infinite alternate' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 border border-violet-500/40 bg-violet-500/8 
            rounded-full px-5 py-2 text-xs text-violet-300 uppercase tracking-widest mb-8"
        >
          ✦ 2,400+ Students Placed This Month
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
        >
          Ready for the next step?{' '}
          <br className="hidden sm:block" />
          <span className="shimmer-text">Join Onyx today.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mt-6 max-w-lg mx-auto leading-relaxed"
        >
          The market is moving faster than ever. Don't just watch — participate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold uppercase 
              tracking-wide rounded-full px-12 py-4 text-sm transition-all duration-300 
              shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50 cursor-pointer"
          >
            Start Your Sprint
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-violet-500/30 text-violet-200 font-semibold uppercase tracking-wide 
              rounded-full px-12 py-4 text-sm hover:border-violet-400/50 hover:bg-violet-500/5 
              hover:text-white transition-all duration-300 cursor-pointer"
          >
            Talk to Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
