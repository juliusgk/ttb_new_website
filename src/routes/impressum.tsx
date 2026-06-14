import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Transatlantic Talent Bridge" },
      { name: "description", content: "Legal notice and imprint for Transatlantic Talent Bridge." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  const { t } = useLang();
  return (
    <main className="min-h-screen bg-brand-cream">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <a href="/" className="text-brand-sky font-semibold hover:underline mb-8 inline-block">
          ← {t("Back to home", "Zurück zur Startseite")}
        </a>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-8">
          Impressum
        </h1>

        <div className="space-y-8 text-brand-navy/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-bold text-brand-navy mb-2">
              {t("Information pursuant to § 5 TMG", "Angaben gemäß § 5 TMG")}
            </h2>
            <p>Transatlantic Talent Bridge GmbH</p>
            <p>Musterstraße 1</p>
            <p>{t("10115 Berlin, Germany", "10115 Berlin, Deutschland")}</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-brand-navy mb-2">
              {t("Represented by", "Vertreten durch")}
            </h2>
            <p>
              {t("Managing Director", "Geschäftsführer")}: {t("[Name to be inserted]", "[Name einfügen]")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-brand-navy mb-2">
              {t("Contact", "Kontakt")}
            </h2>
            <p>{t("Email", "E-Mail")}: info@transatlantic-talent-bridge.com</p>
            <p>{t("Phone", "Telefon")}: +49 (0) 30 12345678</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-brand-navy mb-2">
              {t("Commercial Register", "Handelsregister")}
            </h2>
            <p>
              {t("Registered at", "Registergericht")}: Amtsgericht Berlin-Charlottenburg
            </p>
            <p>HRB: {t("[Number to be inserted]", "[Nummer einfügen]")}</p>
            <p>
              {t("VAT ID", "USt-IdNr.")}: DE{t("[Number to be inserted]", "[Nummer einfügen]")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-brand-navy mb-2">
              {t(
                "Responsible for content pursuant to § 55 RStV",
                "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
              )}
            </h2>
            <p>{t("[Name to be inserted]", "[Name einfügen]")}</p>
            <p>Musterstraße 1, 10115 Berlin</p>
          </section>
        </div>
      </div>
    </main>
  );
}
