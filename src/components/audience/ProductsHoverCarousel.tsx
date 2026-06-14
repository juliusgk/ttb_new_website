import type { ProductItem } from "@/content/audiences";
import { ProductHoverCard } from "./ProductHoverCard";
import { useLang } from "@/i18n/LanguageProvider";

type Props = {
  eyebrow: string;
  headline: string;
  items: ProductItem[];
};

export function ProductsHoverCarousel({ eyebrow, headline, items }: Props) {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-28 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-brand-sky font-bold tracking-[0.2em] text-xs uppercase">
              {eyebrow}
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-brand-navy mt-4 tracking-tight"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              {headline}
            </h2>
          </div>
          <p className="text-brand-navy/55 font-medium text-sm md:max-w-xs">
            {t(
              "Hover any tile for a preview, or click through for the full story.",
              "Bewege die Maus über eine Kachel für eine Vorschau, oder klicke für die ganze Geschichte.",
            )}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-6 ${
            items.length === 1
              ? "md:grid-cols-1 md:max-w-2xl"
              : items.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
          }`}
        >
          {items.map((item, i) => (
            <ProductHoverCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
