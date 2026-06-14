import { useLang } from "@/i18n/LanguageProvider";

type Tier = {
  name: string;
  eyebrow: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export function PricingSection() {
  const { t } = useLang();

  const tiers: Tier[] = [
    {
      name: t("Placement", "Vermittlung"),
      eyebrow: t("01 / Placement", "01 / Vermittlung"),
      price: t("Free", "$0"),
      priceNote: t("Commission-based", "Provisionsbasiert"),
      description: t(
        "Zero cost to you. We're paid by the German employer when you sign.",
        "Für dich kostenlos. Wir werden vom deutschen Arbeitgeber bezahlt, wenn du unterschreibst.",
      ),
      features: [
        t("Curated role shortlist", "Kuratierte Stellen-Shortlist"),
        t("Salary negotiation", "Gehaltsverhandlung"),
        t("Direct intros to hiring managers", "Direkte Vorstellungen bei Hiring Managern"),
      ],
      highlight: true,
    },
    {
      name: t("Consulting", "Beratung"),
      eyebrow: t("02 / Consulting", "02 / Beratung"),
      price: "$50",
      priceNote: t("per session · first session free", "pro Session · erste Session gratis"),
      description: t(
        "1:1 guidance on visas, cost of living, neighbourhoods, and culture.",
        "1:1-Beratung zu Visum, Lebenshaltungskosten, Stadtteilen und Kultur.",
      ),
      features: [
        t("15-minute intro call, free", "15-minütiges Kennenlerngespräch, gratis"),
        t("Visa & Blue Card pathway analysis", "Visum- & Blue-Card-Analyse"),
        t("City and salary benchmarking", "Stadt- und Gehalts-Benchmarking"),
      ],
    },
    {
      name: t("Relocation", "Relocation"),
      eyebrow: t("03 / Relocation", "03 / Relocation"),
      price: t("Custom", "Custom"),
      priceNote: t("Scoped to your move", "Passend zu deinem Umzug"),
      description: t(
        "Housing, banking, insurance, registration — coordinated end-to-end.",
        "Wohnen, Bank, Versicherung, Anmeldung — von A bis Z koordiniert.",
      ),
      features: [
        t("Furnished apartment shortlist", "Auswahl möblierter Wohnungen"),
        t("Banking & tax-ID setup", "Konto- & Steuer-ID-Setup"),
        t("Family and schooling support", "Familien- und Schul-Support"),
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <span className="text-brand-sky font-bold tracking-[0.2em] text-xs uppercase">
            {t("Pricing", "Preise")}
          </span>
          <h2
            className="text-brand-navy font-black text-4xl md:text-5xl mt-4 tracking-tight"
            style={{ fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("Simple, transparent pricing.", "Einfache, transparente Preise.")}
          </h2>
          <p className="text-brand-navy/65 text-base md:text-lg mt-4 font-medium">
            {t(
              "Pay for what you use. Most professionals never pay us a cent — our placement service is funded by the hiring employer.",
              "Zahle nur für das, was du nutzt. Die meisten Fachkräfte zahlen uns keinen Cent — unsere Vermittlung wird vom einstellenden Arbeitgeber bezahlt.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => {
            const isHighlight = tier.highlight;
            return (
              <div
                key={tier.name}
                className={`rounded-[2rem] p-8 md:p-10 flex flex-col relative overflow-hidden ${
                  isHighlight
                    ? "bg-brand-navy text-white"
                    : "bg-white text-brand-navy border border-brand-navy/10"
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-sky/30 blur-3xl" />
                )}
                <div className="relative">
                  <span
                    className={`block text-xs font-bold tracking-[0.2em] uppercase ${
                      isHighlight ? "text-brand-sky" : "text-brand-sky"
                    }`}
                  >
                    {tier.eyebrow}
                  </span>
                  <h3
                    className="font-black text-2xl md:text-3xl mt-4 tracking-tight"
                    style={{ fontFamily: "Fraunces, Georgia, serif" }}
                  >
                    {tier.name}
                  </h3>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={`text-5xl md:text-6xl font-black tracking-tight ${
                        isHighlight ? "text-brand-sky" : "text-brand-navy"
                      }`}
                      style={{ fontFamily: "Fraunces, Georgia, serif" }}
                    >
                      {tier.price}
                    </span>
                  </div>
                  {tier.priceNote && (
                    <p
                      className={`mt-2 text-sm font-semibold ${
                        isHighlight ? "text-white/70" : "text-brand-navy/60"
                      }`}
                    >
                      {tier.priceNote}
                    </p>
                  )}
                  <p
                    className={`mt-6 text-sm md:text-base font-medium ${
                      isHighlight ? "text-white/80" : "text-brand-navy/75"
                    }`}
                  >
                    {tier.description}
                  </p>

                  <ul className="mt-8 space-y-3 relative">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm font-medium">
                        <span
                          className={`mt-1.5 w-2 h-2 flex-shrink-0 ${
                            isHighlight ? "bg-brand-sky" : "bg-brand-navy"
                          }`}
                        />
                        <span className={isHighlight ? "text-white/90" : "text-brand-navy/85"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
