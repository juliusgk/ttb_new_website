import type { ProblemTile } from "@/content/audiences";
import { useLang } from "@/i18n/LanguageProvider";

type Props = {
  eyebrow: string;
  headline: string;
  lede: string;
  tiles: ProblemTile[];
};

export function BentoProblem({ eyebrow, headline, lede, tiles }: Props) {
  const { t } = useLang();
  const hero = tiles.find((t) => t.kind === "hero");
  const stats = tiles.filter((t) => t.kind === "stat");
  const quote = tiles.find((t) => t.kind === "quote");
  const context = tiles.find((t) => t.kind === "context");

  return (
    <section className="py-20 md:py-28 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="text-brand-sky font-bold tracking-[0.2em] text-xs uppercase">
            {eyebrow}
          </span>
          <h2
            className="text-4xl md:text-6xl font-black text-brand-navy mt-5 leading-[1.05] max-w-5xl tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            {headline}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-brand-navy/65 max-w-3xl font-light leading-relaxed">
            {lede}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[200px] gap-4">
          {/* Hero stat — 8x2 */}
          {hero && (
            <div className="md:col-span-8 md:row-span-2 relative overflow-hidden rounded-[2rem] bg-brand-navy text-white p-10 md:p-12 flex flex-col justify-between">
              <span className="font-mono text-xs tracking-[0.25em] uppercase text-brand-sky">
                [ {t("Annual Market Vacancy", "Jährliche Marktvakanz")} ]
              </span>
              <div className="relative">
                <div
                  className="absolute -top-16 -left-6 text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter text-brand-sky/10 pointer-events-none select-none"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}
                  aria-hidden
                >
                  {hero.stat}
                </div>
                <div
                  className="relative text-7xl md:text-[9rem] font-black leading-none tracking-tighter text-brand-sky"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}
                >
                  {hero.stat}
                </div>
                <p className="relative mt-6 text-xl md:text-2xl font-light text-white/85 max-w-md">
                  {hero.label}
                </p>
              </div>
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          )}

          {/* Stat tiles — alternate white / sky */}
          {stats.map((s, i) => {
            const sky = i % 2 === 1;
            return (
              <div
                key={i}
                className={`md:col-span-4 md:row-span-1 rounded-[2rem] p-8 flex flex-col justify-between transition-transform hover:-translate-y-1 ${
                  sky
                    ? "bg-brand-sky text-white"
                    : "bg-white text-brand-navy border border-brand-navy/10"
                }`}
              >
                <div
                  className="text-4xl md:text-5xl font-black tracking-tight"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}
                >
                  {s.stat}
                </div>
                <p
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                    sky ? "text-white/85" : "text-brand-navy/55"
                  }`}
                >
                  {s.label}
                </p>
              </div>
            );
          })}

          {/* Quote — 5x1 */}
          {quote && (
            <div className="md:col-span-5 md:row-span-1 rounded-[2rem] bg-white border border-brand-navy/10 p-8 md:p-10 flex items-center">
              <div className="space-y-4">
                <p
                  className="text-xl md:text-2xl text-brand-navy italic leading-snug"
                  style={{ fontFamily: "Fraunces, Georgia, serif" }}
                >
                  “{quote.quote}”
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-sky">
                  — {quote.attribution}
                </p>
              </div>
            </div>
          )}

          {/* Context CTA — 7x1 navy with circular arrow */}
          {context && (
            <div className="md:col-span-7 md:row-span-1 rounded-[2rem] bg-brand-navy p-8 md:p-10 flex items-center justify-between gap-6 text-white">
              <p className="text-base md:text-lg max-w-xl font-medium text-white/90 leading-relaxed">
                {context.body}
              </p>
              {context.ctaLabel && context.ctaHref && (
                <a
                  href={context.ctaHref}
                  aria-label={context.ctaLabel}
                  className="shrink-0 w-16 h-16 rounded-full bg-brand-sky flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
