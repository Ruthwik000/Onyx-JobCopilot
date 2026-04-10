export default function HumanCharacter({ isWalking, isSitting }) {
  return (
    <div style={{ position: 'relative', width: '80px', height: '120px' }}>
      {/* Outer glow aura */}
      <div
        style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
          filter: 'blur(12px)',
          pointerEvents: 'none',
          animation: 'charPulse 2.5s ease-in-out infinite',
        }}
      />

      <svg width="80" height="120" viewBox="0 0 80 120" style={{ overflow: 'visible' }}>
        <defs>
          {/* Skin gradient */}
          <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#F5D0C5" />
            <stop offset="100%" stopColor="#D4A99A" />
          </radialGradient>

          {/* Hair gradient */}
          <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2D1B4E" />
            <stop offset="100%" stopColor="#1A0F30" />
          </linearGradient>

          {/* Shirt gradient */}
          <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="60%" stopColor="#6D28D9" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>

          {/* Pants gradient */}
          <linearGradient id="pantsGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#0F0A2A" />
          </linearGradient>

          {/* Shoe gradient */}
          <linearGradient id="shoeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>

          {/* Briefcase gradient */}
          <linearGradient id="briefcaseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Drop Shadow Filter */}
          <filter id="charShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#7C3AED" floodOpacity="0.35" />
          </filter>

          {/* Soft glow filter for head */}
          <filter id="headGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feFlood floodColor="#A78BFA" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {isSitting ? (
          /* ========== SITTING POSE ========== */
          <g>
            {/* Ground shadow */}
            <ellipse cx="40" cy="100" rx="20" ry="4" fill="#7C3AED" opacity="0.15" />

            {/* === LEGS (bent, sitting) === */}
            {/* Left leg — bent at 90 degrees forward */}
            <rect x="26" y="72" width="9" height="14" rx="4.5" fill="url(#pantsGrad)" />
            <rect x="20" y="83" width="14" height="8" rx="4" fill="url(#pantsGrad)" />
            <path d="M18 89 Q18 94, 24 94 L30 94 Q32 94, 32 92 L32 89 Q32 87, 29 87 L21 87 Q18 87, 18 89Z"
              fill="url(#shoeGrad)" stroke="#111827" strokeWidth="0.5" />

            {/* Right leg — bent at 90 degrees forward */}
            <rect x="44" y="72" width="9" height="14" rx="4.5" fill="url(#pantsGrad)" />
            <rect x="44" y="83" width="14" height="8" rx="4" fill="url(#pantsGrad)" />
            <path d="M42 89 Q42 94, 48 94 L54 94 Q56 94, 56 92 L56 89 Q56 87, 53 87 L45 87 Q42 87, 42 89Z"
              fill="url(#shoeGrad)" stroke="#111827" strokeWidth="0.5" />

            {/* === TORSO === */}
            <g filter="url(#charShadow)">
              <path d="M26 42 Q26 38, 30 36 L50 36 Q54 38, 54 42 L54 72 Q54 76, 50 76 L30 76 Q26 76, 26 72Z"
                fill="url(#shirtGrad)" />
              <path d="M35 36 L40 46 L45 36" fill="none" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="44" y="48" width="6" height="5" rx="1" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.6" />
              <rect x="26" y="70" width="28" height="4" rx="1" fill="#1E1B4B" />
              <rect x="37" y="69.5" width="6" height="5" rx="1.5" fill="#A78BFA" opacity="0.6" />
            </g>

            {/* === LEFT ARM (resting on knee) === */}
            <g>
              <rect x="16" y="38" width="10" height="16" rx="5" fill="url(#shirtGrad)" />
              <rect x="14" y="52" width="8" height="14" rx="4" fill="url(#skinGrad)" />
              <circle cx="18" cy="68" r="4" fill="url(#skinGrad)" />
            </g>

            {/* === RIGHT ARM (holding briefcase beside) === */}
            <g>
              <rect x="54" y="38" width="10" height="16" rx="5" fill="url(#shirtGrad)" />
              <rect x="56" y="52" width="8" height="14" rx="4" fill="url(#skinGrad)" />
              <circle cx="60" cy="68" r="4" fill="url(#skinGrad)" />
              {/* Briefcase on ground beside */}
              <rect x="58" y="72" width="16" height="11" rx="3" fill="url(#briefcaseGrad)" stroke="#92400E" strokeWidth="0.5" />
              <rect x="63" y="69" width="6" height="4" rx="2" fill="none" stroke="#92400E" strokeWidth="1.5" />
              <rect x="64" y="74" width="4" height="2.5" rx="1" fill="#FDE68A" />
            </g>

            {/* === NECK === */}
            <rect x="36" y="28" width="8" height="10" rx="3" fill="url(#skinGrad)" />

            {/* === HEAD === */}
            <g filter="url(#headGlow)">
              <ellipse cx="40" cy="15" rx="16" ry="16" fill="url(#hairGrad)" />
              <ellipse cx="40" cy="18" rx="13" ry="14" fill="url(#skinGrad)" />
              <path d="M24 16 Q24 2, 40 2 Q56 2, 56 16 Q56 10, 48 8 Q40 6, 32 8 Q24 10, 24 16Z"
                fill="url(#hairGrad)" />
              <path d="M24 16 Q22 20, 24 24" fill="none" stroke="#1A0F30" strokeWidth="3" strokeLinecap="round" />
              <path d="M56 16 Q58 20, 56 24" fill="none" stroke="#1A0F30" strokeWidth="3" strokeLinecap="round" />

              {/* Eyes — relaxed/looking around */}
              <ellipse cx="34" cy="18" rx="2.5" ry="2.5" fill="white" />
              <circle cx="35" cy="18" r="1.5" fill="#1E1B4B" />
              <circle cx="35.5" cy="17.5" r="0.6" fill="white" />
              <ellipse cx="46" cy="18" rx="2.5" ry="2.5" fill="white" />
              <circle cx="47" cy="18" r="1.5" fill="#1E1B4B" />
              <circle cx="47.5" cy="17.5" r="0.6" fill="white" />

              {/* Eyebrows */}
              <path d="M31 14 Q34 12, 37 14" stroke="#1A0F30" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M43 14 Q46 12, 49 14" stroke="#1A0F30" strokeWidth="1.2" fill="none" strokeLinecap="round" />

              {/* Nose */}
              <path d="M40 20 L39 23 L41 23" fill="none" stroke="#C9A192" strokeWidth="0.8" strokeLinecap="round" />

              {/* Calm smile */}
              <path d="M36 26 Q40 28 44 26" fill="none" stroke="#B8846C" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="31" cy="24" r="2.5" fill="#F9A8A8" opacity="0.3" />
              <circle cx="49" cy="24" r="2.5" fill="#F9A8A8" opacity="0.3" />
            </g>
          </g>
        ) : (
          /* ========== WALKING / STANDING POSE ========== */
          <g>
            {/* Ground shadow */}
            <ellipse cx="40" cy="116" rx="22" ry="5" fill="#7C3AED" opacity="0.2">
              <animate attributeName="rx" values="22;18;22" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.12;0.2" dur="2s" repeatCount="indefinite" />
            </ellipse>

            {/* === LEGS === */}
            <g className={isWalking ? 'leg-left' : ''} style={{ transformOrigin: '33px 72px' }}>
              <rect x="29" y="72" width="9" height="20" rx="4.5" fill="url(#pantsGrad)" />
              <rect x="29" y="89" width="8" height="14" rx="4" fill="url(#pantsGrad)" />
              <path d="M27 101 Q27 106, 33 106 L38 106 Q40 106, 40 104 L40 101 Q40 99, 37 99 L30 99 Q27 99, 27 101Z"
                fill="url(#shoeGrad)" stroke="#111827" strokeWidth="0.5" />
            </g>
            <g className={isWalking ? 'leg-right' : ''} style={{ transformOrigin: '47px 72px' }}>
              <rect x="43" y="72" width="9" height="20" rx="4.5" fill="url(#pantsGrad)" />
              <rect x="43" y="89" width="8" height="14" rx="4" fill="url(#pantsGrad)" />
              <path d="M41 101 Q41 106, 47 106 L52 106 Q54 106, 54 104 L54 101 Q54 99, 51 99 L44 99 Q41 99, 41 101Z"
                fill="url(#shoeGrad)" stroke="#111827" strokeWidth="0.5" />
            </g>

            {/* === TORSO === */}
            <g filter="url(#charShadow)">
              <path d="M26 42 Q26 38, 30 36 L50 36 Q54 38, 54 42 L54 72 Q54 76, 50 76 L30 76 Q26 76, 26 72Z"
                fill="url(#shirtGrad)" />
              <path d="M35 36 L40 46 L45 36" fill="none" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="44" y="48" width="6" height="5" rx="1" fill="none" stroke="#A78BFA" strokeWidth="0.5" opacity="0.6" />
              <rect x="26" y="70" width="28" height="4" rx="1" fill="#1E1B4B" />
              <rect x="37" y="69.5" width="6" height="5" rx="1.5" fill="#A78BFA" opacity="0.6" />
            </g>

            {/* === LEFT ARM (with briefcase) === */}
            <g className={isWalking ? 'arm-left' : ''} style={{ transformOrigin: '26px 40px' }}>
              <rect x="16" y="38" width="10" height="16" rx="5" fill="url(#shirtGrad)" />
              <rect x="17" y="52" width="8" height="12" rx="4" fill="url(#skinGrad)" />
              <circle cx="21" cy="65" r="4" fill="url(#skinGrad)" />
              <rect x="12" y="67" width="18" height="12" rx="3" fill="url(#briefcaseGrad)" stroke="#92400E" strokeWidth="0.5" />
              <rect x="18" y="64" width="6" height="4" rx="2" fill="none" stroke="#92400E" strokeWidth="1.5" />
              <line x1="21" y1="70" x2="21" y2="76" stroke="#78350F" strokeWidth="0.8" />
              <rect x="19" y="69.5" width="4" height="2.5" rx="1" fill="#FDE68A" />
            </g>

            {/* === RIGHT ARM === */}
            <g className={isWalking ? 'arm-right' : ''} style={{ transformOrigin: '54px 40px' }}>
              <rect x="54" y="38" width="10" height="16" rx="5" fill="url(#shirtGrad)" />
              <rect x="55" y="52" width="8" height="12" rx="4" fill="url(#skinGrad)" />
              <circle cx="59" cy="65" r="4" fill="url(#skinGrad)" />
            </g>

            {/* === NECK === */}
            <rect x="36" y="28" width="8" height="10" rx="3" fill="url(#skinGrad)" />

            {/* === HEAD === */}
            <g filter="url(#headGlow)">
              <ellipse cx="40" cy="15" rx="16" ry="16" fill="url(#hairGrad)" />
              <ellipse cx="40" cy="18" rx="13" ry="14" fill="url(#skinGrad)" />
              <path d="M24 16 Q24 2, 40 2 Q56 2, 56 16 Q56 10, 48 8 Q40 6, 32 8 Q24 10, 24 16Z"
                fill="url(#hairGrad)" />
              <path d="M24 16 Q22 20, 24 24" fill="none" stroke="#1A0F30" strokeWidth="3" strokeLinecap="round" />
              <path d="M56 16 Q58 20, 56 24" fill="none" stroke="#1A0F30" strokeWidth="3" strokeLinecap="round" />

              <ellipse cx="34" cy="18" rx="2.5" ry="3" fill="white" />
              <circle cx="34.5" cy="18" r="1.5" fill="#1E1B4B" />
              <circle cx="35" cy="17" r="0.6" fill="white" />
              <ellipse cx="46" cy="18" rx="2.5" ry="3" fill="white" />
              <circle cx="46.5" cy="18" r="1.5" fill="#1E1B4B" />
              <circle cx="47" cy="17" r="0.6" fill="white" />

              <path d="M31 14 Q34 12, 37 14" stroke="#1A0F30" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d="M43 14 Q46 12, 49 14" stroke="#1A0F30" strokeWidth="1.2" fill="none" strokeLinecap="round" />

              <path d="M40 20 L39 23 L41 23" fill="none" stroke="#C9A192" strokeWidth="0.8" strokeLinecap="round" />

              <path d="M35 26 Q40 30 45 26" fill="none" stroke="#B8846C" strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="31" cy="24" r="2.5" fill="#F9A8A8" opacity="0.3" />
              <circle cx="49" cy="24" r="2.5" fill="#F9A8A8" opacity="0.3" />
            </g>
          </g>
        )}


      </svg>
    </div>
  )
}
