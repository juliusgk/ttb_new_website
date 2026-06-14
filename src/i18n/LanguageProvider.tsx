import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "EN" | "DE";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, de: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "ttb-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("EN");

  // Hydrate from localStorage on mount (client only).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "EN" || stored === "DE") setLangState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect on <html lang="...">
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "DE" ? "de" : "en";
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((en: string, de: string) => (lang === "DE" ? de : en), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback for SSR / outside provider — returns EN.
    return {
      lang: "EN",
      setLang: () => {},
      t: (en) => en,
    };
  }
  return ctx;
}
