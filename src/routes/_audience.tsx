import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { ChevronDown, ArrowRight } from "lucide-react";
import { HeroSearch } from "@/components/HeroSearch";
import { LanguageToggle } from "@/components/LanguageToggle";
import { GetStartedDialog } from "@/components/GetStartedDialog";
import logoAsset from "@/assets/logo-full.svg.asset.json";
import heroVideo from "@/assets/hero-office.mp4.asset.json";
import { getAudiences, type AudienceContent } from "@/content/audiences";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/_audience")({
  component: AudienceLayout,
});

function CenterMenu() {
  const { t } = useLang();
  const linkBase =
    "px-6 py-2.5 rounded-full text-sm font-semibold text-brand-navy transition-colors";
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur border border-brand-navy/10 rounded-full p-1.5 shadow-[var(--shadow-soft)]">
        <Link
          to="/"
          activeOptions={{ exact: true }}
          activeProps={{ className: "bg-brand-navy !text-brand-cream" }}
          className={`${linkBase} hover:bg-brand-navy hover:text-brand-cream`}
        >
          {t("Professionals", "Fachkräfte")}
        </Link>
        <Link
          to="/employers"
          activeProps={{ className: "bg-brand-sky !text-white" }}
          className={`${linkBase} hover:bg-brand-sky hover:text-white`}
        >
          {t("Employers", "Arbeitgeber")}
        </Link>
        <Link
          to="/recruitment-agency"
          activeProps={{ className: "bg-brand-sky !text-white" }}
          className={`${linkBase} hover:bg-brand-sky hover:text-white`}
        >
          {t("Recruitment Agency", "Personalagentur")}
        </Link>
      </div>
    </nav>
  );
}

function useActiveAudience(): AudienceContent {
  const { lang } = useLang();
  const matches = useChildMatches();
  const path = matches[matches.length - 1]?.pathname ?? "/";
  const all = getAudiences(lang);
  if (path.startsWith("/employers")) return all.employers;
  if (path.startsWith("/recruitment-agency")) return all.agency;
  return all.professionals;
}

function AudienceLayout() {
  const audience = useActiveAudience();
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-brand-cream">
      <a
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center h-[52px]"
        aria-label="Transatlantic Talent Bridge — Home"
      >
        <img src={logoAsset.url} alt="Transatlantic Talent Bridge" className="h-12 md:h-14 w-auto" />
      </a>
      <CenterMenu />
      <LanguageToggle />

      {/* Hero shell — shared across all audience routes */}
      <section className="relative z-10 min-h-screen">
        <div className="relative min-h-screen flex flex-col justify-center rounded-b-[50px] overflow-hidden">
          <video
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-70 rounded-b-[50px]"
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <h1
              key={audience.slug}
              className="text-center text-brand-navy text-6xl md:text-[5.5rem] leading-[1.05] tracking-[-0.03em] font-normal animate-[fadeUp_500ms_ease-out] whitespace-pre-line"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {audience.hero.line1}
              {"\n"}
              {audience.hero.line2}{" "}
              <span className="text-brand-sky font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                {audience.hero.highlight}
              </span>
            </h1>

            <div className="mt-8 flex justify-center">
              <GetStartedDialog
                trigger={
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-navy text-white text-base font-semibold shadow-[var(--shadow-soft)] hover:bg-brand-sky transition-colors"
                  >
                    {t("Get started", "Loslegen")}
                    <ArrowRight size={18} />
                  </button>
                }
              />
            </div>

            <div className="mt-12 md:mt-16">
              <HeroSearch key={`${audience.slug}-${audience.searchText}`} text={audience.searchText} />
            </div>
          </div>

          <a
            href="#audience-content"
            className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-sky text-white text-sm font-semibold shadow-[var(--shadow-soft)] hover:bg-white hover:text-brand-navy transition-colors z-10"
          >
            <ChevronDown size={18} />
            {t("Our Services", "Unsere Leistungen")}
          </a>
        </div>
      </section>

      {/* Audience-specific content fades in */}
      <div
        id="audience-content"
        key={audience.slug}
        className="animate-[fadeUp_500ms_ease-out]"
      >
        <Outlet />
      </div>

      <footer className="py-10 px-6 text-center text-sm text-brand-navy/60">
        <div className="flex items-center justify-center gap-6 mb-3 flex-wrap">
          <a href="/impressum" className="hover:text-brand-navy transition-colors">
            Impressum
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-navy transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Transatlantic Talent ·{" "}
          {t("Built for the Atlantic corridor", "Gebaut für den atlantischen Korridor")}
        </p>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
