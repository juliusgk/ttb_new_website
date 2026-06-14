import type { ProductItem } from "@/content/audiences";
import { useLang } from "@/i18n/LanguageProvider";

export function ProductHoverCard({ item, index }: { item: ProductItem; index: number }) {
  const { t } = useLang();
  return (
    <a
      href={`#${item.id}`}
      className="group relative block overflow-hidden rounded-[2.5rem] bg-brand-navy h-[520px] md:h-[600px] focus:outline-none focus:ring-2 focus:ring-brand-sky"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"
        aria-hidden
      />

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-brand-sky mb-3 block">
          {String(index + 1).padStart(2, "0")} / {t("Service", "Leistung")}
        </span>
        <h3
          className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight"
          style={{ fontFamily: "Fraunces, Georgia, serif" }}
        >
          {item.title}
        </h3>
        <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 ease-in-out">
          <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed">
            {item.hoverText}
          </p>
        </div>
        <div className="mt-6 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-brand-sky group-hover:border-brand-sky transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
