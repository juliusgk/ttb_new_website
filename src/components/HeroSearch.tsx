import { useEffect, useState } from "react";
import { Search } from "lucide-react";

export function HeroSearch({ text }: { text: string }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 35);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative group">
        <div
          aria-hidden
          className="absolute -inset-6 rounded-full bg-brand-sky/30 blur-3xl opacity-70 animate-float"
        />
        <div className="relative flex items-center gap-3 rounded-full bg-white border border-brand-navy/10 pl-6 pr-3 py-3 md:py-4 shadow-[0_30px_80px_-20px_rgba(0,33,65,0.35),0_10px_30px_-10px_rgba(68,168,214,0.4)]">
          <Search className="h-5 w-5 md:h-6 md:w-6 text-brand-navy/60 shrink-0" />
          <p className="flex-1 text-left text-brand-navy text-base md:text-lg leading-snug min-h-[1.5em] truncate-none">
            {typed}
            <span className="inline-block w-[2px] h-[1em] align-middle bg-brand-navy ml-0.5 animate-pulse" />
          </p>
        </div>
      </div>
    </div>
  );
}
