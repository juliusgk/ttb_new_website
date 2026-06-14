import { createFileRoute } from "@tanstack/react-router";
import { BentoProblem } from "@/components/audience/BentoProblem";
import { ProductsHoverCarousel } from "@/components/audience/ProductsHoverCarousel";
import { ProductSection } from "@/components/audience/ProductSection";
import { PricingSection } from "@/components/audience/PricingSection";
import { LinkedInCarousel } from "@/components/LinkedInCarousel";
import { getAudiences } from "@/content/audiences";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/_audience/")({
  head: () => ({
    meta: [
      { title: "Transatlantic Talent — American professionals for German jobs" },
      {
        name: "description",
        content:
          "Matching opportunity with demand. We connect American professionals with German employers — visa, relocation, and culture support included.",
      },
      { property: "og:title", content: "Transatlantic Talent — For Professionals" },
      {
        property: "og:description",
        content: "American professionals for German jobs. Matching opportunity with demand.",
      },
    ],
  }),
  component: ProfessionalsPage,
});

function ProfessionalsPage() {
  const { lang, t } = useLang();
  const audience = getAudiences(lang).professionals;
  return (
    <>
      <BentoProblem {...audience.problem} />
      <ProductsHoverCarousel {...audience.products} />
      {audience.products.items.map((item, i) => (
        <ProductSection key={item.id} item={item} reverse={i % 2 === 1} />
      ))}

      <PricingSection />

      <section className="py-20 md:py-28 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto bg-brand-navy rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
          <svg
            className="absolute top-8 right-8 w-12 h-12 text-brand-sky opacity-20"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <div className="mb-10">
            <span className="text-brand-sky font-bold tracking-[0.2em] text-xs uppercase">
              {t("From our LinkedIn", "Von unserem LinkedIn")}
            </span>
            <h2
              className="text-white font-black text-4xl md:text-5xl mt-4 italic tracking-tight"
              style={{ fontFamily: "Fraunces, Georgia, serif" }}
            >
              {t("The Conversation", "Die Gespräche")}
            </h2>
            <p className="text-white/55 text-sm mt-2 font-medium">
              {t(
                "Stories from both sides of the Atlantic",
                "Geschichten von beiden Seiten des Atlantiks",
              )}
            </p>
          </div>
          <LinkedInCarousel />
        </div>
      </section>
    </>
  );
}
