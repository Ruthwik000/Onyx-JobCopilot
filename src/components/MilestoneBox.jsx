import { motion } from 'framer-motion'

const boxIcons = [
  // ATS Resume
  <svg key="ats" viewBox="0 0 32 32" className="w-6 h-6">
    <rect x="6" y="2" width="20" height="26" rx="3" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
    <line x1="10" y1="10" x2="22" y2="10" stroke="#A78BFA" strokeWidth="1.5" />
    <line x1="10" y1="14" x2="22" y2="14" stroke="#A78BFA" strokeWidth="1.5" />
    <line x1="10" y1="18" x2="18" y2="18" stroke="#A78BFA" strokeWidth="1.5" />
    <line x1="6" y1="0" x2="26" y2="0" stroke="#7C3AED" strokeWidth="2" strokeOpacity="0.9">
      <animateTransform attributeName="transform" type="translate" values="0,4; 0,24; 0,4" dur="2s" repeatCount="indefinite" />
    </line>
    <rect x="6" y="0" width="20" height="3" fill="#7C3AED" opacity="0.15">
      <animateTransform attributeName="transform" type="translate" values="0,4; 0,24; 0,4" dur="2s" repeatCount="indefinite" />
    </rect>
  </svg>,
  // Job Portals
  <svg key="portals" viewBox="0 0 32 32" className="w-6 h-6">
    <rect x="3" y="3" width="11" height="11" rx="3" fill="#7C3AED" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" begin="0s" repeatCount="indefinite" />
    </rect>
    <rect x="18" y="3" width="11" height="11" rx="3" fill="#8B5CF6" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" begin="0.3s" repeatCount="indefinite" />
    </rect>
    <rect x="3" y="18" width="11" height="11" rx="3" fill="#6D28D9" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" begin="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="18" y="18" width="11" height="11" rx="3" fill="#A78BFA" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" begin="0.9s" repeatCount="indefinite" />
    </rect>
    <text x="6" y="12" fontSize="7" fill="white" fontWeight="bold">W</text>
    <text x="21" y="12" fontSize="7" fill="white" fontWeight="bold">L</text>
    <text x="6" y="27" fontSize="7" fill="white" fontWeight="bold">N</text>
    <text x="21" y="27" fontSize="7" fill="white" fontWeight="bold">I</text>
  </svg>,
  // Interview Calls
  <svg key="calls" viewBox="0 0 32 32" className="w-6 h-6">
    <rect x="8" y="3" width="14" height="22" rx="3" fill="none" stroke="#A78BFA" strokeWidth="1.5" />
    <circle cx="15" cy="22" r="1.5" fill="#A78BFA" />
    <line x1="12" y1="6" x2="18" y2="6" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M 24 10 Q 27 14 24 18" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round">
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0s" repeatCount="indefinite" />
    </path>
    <path d="M 26 8 Q 31 14 26 20" fill="none" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round">
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </path>
    <path d="M 28 6 Q 34 14 28 22" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round">
      <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </path>
  </svg>,
  // Students Placed
  <svg key="placed" viewBox="0 0 32 32" className="w-6 h-6">
    <defs>
      <linearGradient id="charGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <circle cx="16" cy="9" r="5" fill="url(#charGrad2)" />
    <path d="M8 28 Q8 20 16 20 Q24 20 24 28" fill="url(#charGrad2)" />
    <rect x="8" y="1" width="16" height="6" rx="3" fill="#22C55E">
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
    </rect>
    <text x="10.5" y="5.5" fontSize="4" fill="white" fontWeight="bold">HIRED</text>
    <circle cx="5" cy="5" r="1.5" fill="#F59E0B">
      <animateMotion dur="2s" repeatCount="indefinite" path="M 0 0 L -8 -8" />
      <animate attributeName="opacity" values="1;0" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="27" cy="5" r="1.5" fill="#EF4444">
      <animateMotion dur="2s" repeatCount="indefinite" begin="0.5s" path="M 0 0 L 8 -8" />
      <animate attributeName="opacity" values="1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="16" cy="3" r="1.5" fill="#A78BFA">
      <animateMotion dur="2s" repeatCount="indefinite" begin="0.25s" path="M 0 0 L 0 -10" />
      <animate attributeName="opacity" values="1;0" dur="2s" begin="0.25s" repeatCount="indefinite" />
    </circle>
  </svg>,
]

export default function MilestoneBox({ number, title, subtitle, tag, isActive, position, index }) {
  return (
    <motion.div
      initial={{ borderColor: 'rgba(124,58,237,0.2)', boxShadow: 'none', scale: 1 }}
      animate={isActive ? {
        borderColor: 'rgba(124,58,237,0.8)',
        boxShadow: '0 0 40px rgba(124,58,237,0.4)',
        scale: [1, 1.06, 1],
      } : {
        borderColor: 'rgba(124,58,237,0.2)',
        boxShadow: '0 0 0px rgba(124,58,237,0)',
        scale: 1,
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mentor-card rounded-2xl p-5 cursor-default relative"
      style={position ? { position: 'absolute', left: position, top: 0, width: '176px' } : {}}
    >
      {/* Ghost number */}
      <span className="absolute top-2 right-3 text-5xl font-black text-violet-500/10 select-none leading-none">
        {number}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-violet-500/15 flex items-center justify-center mb-3 relative overflow-hidden">
        {boxIcons[index]}
      </div>

      {/* Title */}
      <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>
      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{subtitle}</p>

      {/* Tag */}
      <span className="inline-block mt-3 px-2 py-0.5 rounded-full text-[10px] font-semibold 
        bg-violet-500/20 text-violet-300 border border-violet-500/30">
        {tag}
      </span>
    </motion.div>
  )
}
