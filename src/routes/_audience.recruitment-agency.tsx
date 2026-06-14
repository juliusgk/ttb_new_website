import { createFileRoute } from "@tanstack/react-router";
import { BentoProblem } from "@/components/audience/BentoProblem";
import { ProductsHoverCarousel } from "@/components/audience/ProductsHoverCarousel";
import { ProductSection } from "@/components/audience/ProductSection";
import { getAudiences } from "@/content/audiences";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/_audience/recruitment-agency")({
  head: () => ({
    meta: [
      { title: "For Recruitment Agencies — Transatlantic Talent" },
      {
        name: "description",
        content:
          "White-label US sourcing, compliance partnering, and co-placement for German recruitment agencies.",
      },
      { property: "og:title", content: "Transatlantic Talent — Partner Programs" },
      {
        property: "og:description",
        content: "Partner with us to place American talent in German companies.",
      },
    ],
  }),
  component: AgencyPage,
});

function AgencyPage() {
  const { lang } = useLang();
  const audience = getAudiences(lang).agency;
  return (
    <>
      <BentoProblem {...audience.problem} />
      <ProductsHoverCarousel {...audience.products} />
      {audience.products.items.map((item, i) => (
        <ProductSection key={item.id} item={item} reverse={i % 2 === 1} />
      ))}
    </>
  );
}
