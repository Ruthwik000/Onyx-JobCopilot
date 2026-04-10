import { motion } from 'motion/react'
import { TestimonialsColumn } from './ui/TestimonialsColumns'

const testimonials = [
  {
    text: "Onyx's ATS optimization took my resume score from 61% to 98% overnight. Got 3 interview calls in the first week itself.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Ravi Shankar Reddy",
    role: "Software Engineer @ Google",
  },
  {
    text: "The mentor sessions were game-changing. My mentor from Stripe literally walked me through the exact questions asked in my final round.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    name: "Lakshmi Prasanna Devi",
    role: "Product Manager @ Flipkart",
  },
  {
    text: "I was applying for 6 months with zero results. After joining Onyx, I had my offer letter in 3 weeks. This platform is absolutely unreal.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Venkata Subrahmanyam",
    role: "SDE-2 @ Amazon",
  },
  {
    text: "The job portal auto-apply feature sent my profile to 50+ companies while I focused on interview prep. Absolute time saver.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
    name: "Sravanthi Kumari",
    role: "Data Scientist @ Microsoft",
  },
  {
    text: "The mock interview circuits are incredibly realistic. My mentor knew exactly what TCS and Infosys ask. Cleared it in first attempt.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Naga Bhaskar Rao",
    role: "DevOps Engineer @ Infosys",
  },
  {
    text: "From zero callbacks to 4 design round calls in 2 weeks. The profile maintenance feature kept my LinkedIn always visible.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    name: "Padmavathi Goud",
    role: "UI/UX Designer @ Swiggy",
  },
  {
    text: "Onyx's copilot program gave me a crystal-clear roadmap — what to build, what to study, who to contact. Landed the job in 28 days.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Krishna Murthy Varma",
    role: "Full Stack Dev @ Zomato",
  },
  {
    text: "Salary went from a ₹8 LPA offer to ₹17 LPA after the negotiation coaching session with my mentor. Worth every single rupee.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Annapurna Sridhar",
    role: "Cloud Architect @ TCS",
  },
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#08080F] py-28 md:py-40 relative">
      <div className="container z-10 mx-auto px-8 md:px-16 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-violet-500/30 bg-violet-500/5 py-2 px-5 rounded-full text-violet-300 text-xs uppercase tracking-[0.2em] font-medium">
              Client Success Stories
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mt-6 text-white text-center leading-tight">
            Trusted by Industry Professionals
          </h2>
          <p className="text-center mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-[520px]">
            Discover how we've helped professionals accelerate their careers and achieve their goals.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
