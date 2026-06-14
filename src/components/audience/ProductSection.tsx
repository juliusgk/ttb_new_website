import type { ProductItem } from "@/content/audiences";

export function ProductSection({ item, reverse }: { item: ProductItem; reverse?: boolean }) {
  return (
    <section
      id={item.id}
      className="scroll-mt-24 py-20 md:py-28 px-6 bg-brand-cream"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image with offset accent border */}
          <div className="relative">
            <div
              className={`absolute -inset-4 border-2 rounded-3xl -z-10 ${
                reverse
                  ? "border-brand-navy -translate-x-4 translate-y-4"
                  : "border-brand-sky translate-x-4 translate-y-4"
              }`}
              aria-hidden
            />
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/3]">
              <img
                src={item.image}
                alt={item.section.headline}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span
              className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] rounded ${
                reverse ? "bg-brand-sky text-white" : "bg-brand-navy text-white"
              }`}
            >
              {item.section.eyebrow}
            </span>
            <h3
              className="text-4xl md:text-5xl font-black text-brand-navy leading-[1.1] mt-6 mb-6 tracking-tight"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              {item.section.headline}
            </h3>
            <p className="text-brand-navy/70 text-lg leading-relaxed mb-10">
              {item.section.body}
            </p>
            <ul className="space-y-4 mb-12">
              {item.section.bullets.map((b) => (
                <li key={b} className="flex items-start gap-4">
                  <span
                    className={`w-4 h-4 mt-1.5 shrink-0 rounded-sm ${
                      reverse ? "bg-brand-navy" : "bg-brand-sky"
                    }`}
                    aria-hidden
                  />
                  <span className="font-semibold text-brand-navy">{b}</span>
                </li>
              ))}
            </ul>
            <div className="group inline-flex items-center gap-4">
              <a
                href={item.section.ctaHref}
                target={item.section.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={item.section.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.15em] text-xs hover:bg-brand-sky transition-colors"
              >
                {item.section.ctaLabel}
              </a>
              <span className="w-10 h-0.5 bg-brand-sky block" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
