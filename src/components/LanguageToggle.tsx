import { useLang, type Lang } from "@/i18n/LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center bg-white/10 border border-brand-navy/10 rounded-full p-1">
        {(["EN", "DE"] as const).map((l: Lang) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors ${
              lang === l
                ? "bg-brand-navy text-brand-cream"
                : "text-brand-navy/70 hover:text-brand-navy"
            }`}
            aria-pressed={lang === l}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
