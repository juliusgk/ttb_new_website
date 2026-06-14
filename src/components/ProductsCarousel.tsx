const products = [
  {
    name: "TTB Placement",
    tagline: "Americans → German jobs",
    description:
      "Our flagship service. We place American professionals into German companies — sourcing, matching, interview prep, and offer support.",
    primary: true,
  },
  {
    name: "TTB Consulting",
    tagline: "Advisory for movers & hirers",
    description:
      "We consult Americans navigating a move to Germany, and German businesses building processes to hire foreign talent.",
  },
  {
    name: "TTB Hiring",
    tagline: "Search for businesses",
    description:
      "We run targeted searches to find feasible candidates for German employers with specific role requirements.",
  },
  {
    name: "TTB Partner Desk",
    tagline: "Support for recruiters",
    description:
      "We back other recruiting agencies — supplying transatlantic reach, candidate pipelines, and process support.",
  },
];

export function ProductsCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex gap-6 animate-[product-scroll_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[...products, ...products].map((p, i) => (
          <article
            key={i}
            className={`relative shrink-0 w-[320px] md:w-[380px] rounded-2xl p-7 border transition-shadow ${
              p.primary
                ? "bg-brand-navy text-brand-cream border-brand-navy shadow-[var(--shadow-soft)] ring-2 ring-brand-sky"
                : "bg-white text-brand-navy border-brand-navy/10 shadow-[var(--shadow-soft)]"
            }`}
          >
            {p.primary && (
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-brand-sky text-white mb-4">
                Primary Product
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold mb-1">{p.name}</h3>
            <p
              className={`text-xs uppercase tracking-wide mb-4 font-semibold ${
                p.primary ? "text-brand-sky" : "text-brand-sky"
              }`}
            >
              {p.tagline}
            </p>
            <p
              className={`text-sm leading-relaxed ${
                p.primary ? "text-brand-cream/90" : "text-brand-navy/80"
              }`}
            >
              {p.description}
            </p>
            <svg
              viewBox="124 197 115 98"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-4 right-4 h-10 w-auto opacity-90"
              aria-hidden="true"
            >
              <defs>
                <clipPath id={`archInner-${i}`}>
                  <ellipse cx="180" cy="256" rx="38" ry="25" />
                </clipPath>
              </defs>
              <circle cx="222" cy="214" r="13" fill="#46A4D6" />
              <g clipPath={`url(#archInner-${i})`} fill="#46A4D6">
                <rect x="153" y="226" width="6" height="32" />
                <rect x="170" y="226" width="6" height="32" />
                <rect x="188" y="226" width="6" height="32" />
                <rect x="205" y="226" width="6" height="32" />
              </g>
              <path
                d="M 129 256 A 51 37 0 0 1 231 256 L 218 256 A 38 25 0 0 0 142 256 Z"
                fill={p.primary ? "#F5F1E8" : "#07223B"}
              />
              <rect x="128" y="254" width="105" height="10" fill={p.primary ? "#F5F1E8" : "#07223B"} />
              <rect x="128" y="254" width="7" height="13" fill={p.primary ? "#F5F1E8" : "#07223B"} />
              <rect x="226" y="254" width="7" height="13" fill={p.primary ? "#F5F1E8" : "#07223B"} />
              <path
                d="M 133 263 L 133 291 L 150 291 L 150 277 Q 151 264 179 263 Q 208 264 210 277 L 210 291 L 229 291 L 229 263 Z"
                fill={p.primary ? "#F5F1E8" : "#07223B"}
              />
            </svg>
          </article>
        ))}
      </div>

      <style>{`
        @keyframes product-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
