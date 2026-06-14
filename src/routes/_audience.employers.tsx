import { createFileRoute } from "@tanstack/react-router";
import { BentoProblem } from "@/components/audience/BentoProblem";
import { ProductsHoverCarousel } from "@/components/audience/ProductsHoverCarousel";
import { ProductSection } from "@/components/audience/ProductSection";
import { getAudiences } from "@/content/audiences";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/_audience/employers")({
  head: () => ({
    meta: [
      { title: "For Employers — Transatlantic Talent" },
      {
        name: "description",
        content:
          "Senior American engineers, ready for your Mittelstand team. Sourcing, visa sponsorship, and onboarding handled end-to-end.",
      },
      { property: "og:title", content: "Transatlantic Talent — For Employers" },
      {
        property: "og:description",
        content: "Hire pre-vetted senior American engineers for your German company.",
      },
    ],
  }),
  component: EmployersPage,
});

function EmployersPage() {
  const { lang } = useLang();
  const audience = getAudiences(lang).employers;
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
