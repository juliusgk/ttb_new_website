export function KeyboardEarthAnimation() {
  return (
    <div className="w-full max-w-4xl mx-auto animate-float">
      <svg viewBox="0 0 800 520" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor stand */}
        <rect x="370" y="380" width="60" height="30" rx="4" fill="var(--color-brand-navy)" opacity="0.85" />
        <rect x="320" y="405" width="160" height="10" rx="4" fill="var(--color-brand-navy)" opacity="0.85" />

        {/* Screen bezel */}
        <rect x="80" y="40" width="640" height="360" rx="18" fill="var(--color-brand-navy)" />
        <rect x="96" y="56" width="608" height="328" rx="10" fill="#0a2f55" />

        {/* Earth/Map background */}
        <defs>
          <radialGradient id="earthGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1a4d7a" />
            <stop offset="100%" stopColor="#001a35" />
          </radialGradient>
          <clipPath id="screenClip">
            <rect x="96" y="56" width="608" height="328" rx="10" />
          </clipPath>
        </defs>

        <g clipPath="url(#screenClip)">
          <rect x="96" y="56" width="608" height="328" fill="url(#earthGrad)" />

          {/* Simplified continents */}
          <g fill="var(--color-brand-sky)" opacity="0.35">
            {/* North America */}
            <path d="M150 130 Q180 110 220 120 L260 135 Q280 160 270 200 L240 240 Q210 250 180 230 L150 200 Q140 165 150 130 Z" />
            {/* South America */}
            <path d="M250 270 Q270 265 285 285 L290 330 Q280 360 265 355 L255 320 Q248 295 250 270 Z" />
            {/* Europe */}
            <path d="M395 130 Q420 120 445 135 L455 155 Q445 175 425 175 L400 165 Q390 145 395 130 Z" />
            {/* Africa */}
            <path d="M410 190 Q440 185 460 215 L455 280 Q435 320 415 310 L405 270 Q400 225 410 190 Z" />
            {/* Asia */}
            <path d="M470 120 Q540 105 600 130 L620 170 Q600 200 560 200 L500 185 Q470 160 470 120 Z" />
            {/* Australia */}
            <path d="M580 280 Q620 275 640 295 L630 320 Q605 325 585 315 Q575 300 580 280 Z" />
          </g>

          {/* Latitude/longitude grid */}
          <g stroke="var(--color-brand-sky)" strokeWidth="0.5" opacity="0.15" fill="none">
            <ellipse cx="400" cy="220" rx="280" ry="140" />
            <ellipse cx="400" cy="220" rx="280" ry="90" />
            <ellipse cx="400" cy="220" rx="280" ry="40" />
            <line x1="400" y1="80" x2="400" y2="360" />
            <line x1="120" y1="220" x2="680" y2="220" />
          </g>

          {/* Dotted connection line USA -> Germany */}
          <path
            d="M205 175 Q310 80 425 145"
            fill="none"
            stroke="var(--color-brand-sky)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-dash"
          />

          {/* USA pin */}
          <g>
            <circle cx="205" cy="175" r="14" fill="var(--color-brand-sky)" opacity="0.3" className="animate-pulse-dot" />
            <circle cx="205" cy="175" r="6" fill="var(--color-brand-sky)" />
            <circle cx="205" cy="175" r="2.5" fill="white" />
            <text x="205" y="205" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Montserrat">USA</text>
          </g>

          {/* Germany pin */}
          <g>
            <circle cx="425" cy="145" r="14" fill="var(--color-brand-sky)" opacity="0.3" className="animate-pulse-dot" />
            <circle cx="425" cy="145" r="6" fill="var(--color-brand-sky)" />
            <circle cx="425" cy="145" r="2.5" fill="white" />
            <text x="425" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Montserrat">GERMANY</text>
          </g>

          {/* Left button: Professionals */}
          <g className="cursor-pointer">
            <rect x="130" y="320" width="170" height="44" rx="22" fill="var(--color-brand-sky)" />
            <text x="215" y="347" textAnchor="middle" fill="var(--color-brand-navy)" fontSize="14" fontWeight="700" fontFamily="Montserrat" letterSpacing="0.5">
              PROFESSIONALS
            </text>
          </g>

          {/* Right button: Employers */}
          <g className="cursor-pointer">
            <rect x="500" y="320" width="170" height="44" rx="22" fill="white" />
            <text x="585" y="347" textAnchor="middle" fill="var(--color-brand-navy)" fontSize="14" fontWeight="700" fontFamily="Montserrat" letterSpacing="0.5">
              EMPLOYERS
            </text>
          </g>
        </g>

        {/* Keyboard */}
        <g>
          <rect x="40" y="420" width="720" height="80" rx="14" fill="var(--color-brand-navy)" />
          <rect x="50" y="430" width="700" height="60" rx="10" fill="#0a2f55" />
          {/* Keys */}
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={`k1-${i}`} x={60 + i * 50} y={438} width={42} height={14} rx={3} fill="var(--color-brand-cream)" opacity="0.85" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={`k2-${i}`} x={70 + i * 50} y={458} width={42} height={14} rx={3} fill="var(--color-brand-cream)" opacity="0.75" />
          ))}
          <rect x="220" y="478" width="360" height="10" rx="3" fill="var(--color-brand-cream)" opacity="0.85" />
        </g>
      </svg>

      {/* Caption below animation */}
      <p className="text-center mt-6 text-sm md:text-base text-brand-navy/80">
        Reach out with any request and our email is{" "}
        <a
          href="mailto:hello@transatlantictalent.com"
          className="font-semibold text-brand-sky underline underline-offset-4 decoration-2 hover:text-brand-navy transition-colors"
        >
          hello@transatlantictalent.com
        </a>
      </p>
    </div>
  );
}
