import type { Lang } from "@/i18n/LanguageProvider";

export type ProblemTile = {
  kind: "hero" | "stat" | "quote" | "context";
  stat?: string;
  label?: string;
  quote?: string;
  attribution?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type ProductItem = {
  id: string;
  title: string;
  image: string;
  hoverText: string;
  section: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
    ctaLabel: string;
    ctaHref: string;
  };
};

export type AudienceContent = {
  slug: "professionals" | "employers" | "agency";
  navLabel: string;
  searchText: string;
  hero: {
    line1: string;
    line2: string;
    highlight: string;
  };
  problem: {
    eyebrow: string;
    headline: string;
    lede: string;
    tiles: ProblemTile[];
  };
  products: {
    eyebrow: string;
    headline: string;
    items: ProductItem[];
  };
};

const placeholderImg =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=70";
const teamImg =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=70";
const handshakeImg =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=70";
const cityImg =
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=70";

const MAIL = "mailto:info@transatlantic-talent-bridge.com";
void placeholderImg;

const audiencesEn: Record<AudienceContent["slug"], AudienceContent> = {
  professionals: {
    slug: "professionals",
    navLabel: "Professionals",
    searchText: "Can I get a job in Germany and if yes, how do I get it and what do I need to do?",
    hero: {
      line1: "Find your",
      line2: "work adventure in",
      highlight: "Germany",
    },
    problem: {
      eyebrow: "The Problem",
      headline: "Germany's Mittelstand can't find tech talent. America has it in abundance.",
      lede: "Thousands of qualified US engineers are open to relocating for stable, meaningful work in Europe — they just don't know where to land.",
      tiles: [
        { kind: "hero", stat: "149k", label: "unfilled tech roles in Germany right now" },
        { kind: "stat", stat: "7.7 mo", label: "average time-to-hire for SMBs" },
        { kind: "stat", stat: "€90B", label: "lost annual SMB revenue from skill gaps" },
        {
          kind: "quote",
          quote: "I wanted a real job in Europe — I just didn't know who to talk to.",
          attribution: "US software engineer",
        },
        {
          kind: "context",
          body: "We bridge the gap: visa, relocation, language, and a German employer who actually wants you.",
          ctaLabel: "How it works",
          ctaHref: "#ebluecard",
        },
      ],
    },
    products: {
      eyebrow: "Our Services",
      headline: "What we offer professionals",
      items: [
        {
          id: "placement",
          title: "Placement",
          image: handshakeImg,
          hoverText:
            "We actively match you with German employers who need your skills — and negotiate on your behalf.",
          section: {
            eyebrow: "Placement",
            headline: "We find you a job in Germany",
            body: "Skip the cold applications. We work with a curated network of German Mittelstand and tech employers actively hiring senior American talent, and we match you to roles that fit your stack, seniority, and life goals.",
            bullets: [
              "Curated shortlist of roles, not job-board spam",
              "We negotiate salary and relocation package",
              "Direct intros to hiring managers",
              "Honest guidance on fit before you commit",
            ],
            ctaLabel: "Start your search",
            ctaHref: MAIL,
          },
        },
        {
          id: "consulting",
          title: "Consulting",
          image: teamImg,
          hoverText:
            "Answers to every question about visas, cost of living, salary expectations, neighbourhoods, and culture.",
          section: {
            eyebrow: "Consulting",
            headline: "Your questions about moving to Germany, answered",
            body: "Before you uproot your life, you need real answers from people who've done it. We offer 1:1 consulting on every aspect of moving to and living in Germany — from visa pathways to which city actually fits your lifestyle.",
            bullets: [
              "Visa and EU Blue Card pathway analysis",
              "Cost-of-living and salary benchmarking",
              "City and neighbourhood guidance",
              "Workplace-culture and language readiness",
            ],
            ctaLabel: "Book a consultation",
            ctaHref: MAIL,
          },
        },
        {
          id: "relocation",
          title: "Relocation Support",
          image: cityImg,
          hoverText:
            "Housing, banking, health insurance, registration — the messy stuff handled from day one.",
          section: {
            eyebrow: "Landing",
            headline: "Relocation without the chaos",
            body: "Apartments, Anmeldung, bank accounts, health insurance, school search — we actively coordinate the practical side so your first months in Germany are about the job, not the bureaucracy.",
            bullets: [
              "Furnished apartment shortlist before you arrive",
              "Banking and tax-ID setup",
              "Public/private health insurance comparison",
              "Family and schooling support",
            ],
            ctaLabel: "Talk to us",
            ctaHref: MAIL,
          },
        },
      ],
    },
  },

  employers: {
    slug: "employers",
    navLabel: "Employers",
    searchText: "How do I find qualified employees and how can I finally fill my long open positions?",
    hero: {
      line1: "German tech vacancies,",
      line2: "filled by",
      highlight: "American talent",
    },
    problem: {
      eyebrow: "The Cost of Waiting",
      headline: "Every month a senior role sits open, your team pays for it.",
      lede: "Postponed launches, lost contracts, burnt-out colleagues. The German talent pool isn't getting deeper — but the Atlantic one is open.",
      tiles: [
        { kind: "hero", stat: "7.7 mo", label: "average time-to-hire for German SMBs" },
        { kind: "stat", stat: "149k", label: "open tech roles competing for the same shortlist" },
        { kind: "stat", stat: "€90B", label: "annual SMB revenue lost to skill gaps" },
        {
          kind: "quote",
          quote: "We had the budget — we just couldn't find the engineer.",
          attribution: "CTO, German Mittelstand",
        },
        {
          kind: "context",
          body: "Open your search to American engineers. We handle sourcing or install long-term systems which allow you to manage your hiring yourself.",
          ctaLabel: "See our services",
          ctaHref: "#sourcing",
        },
      ],
    },
    products: {
      eyebrow: "For Employers",
      headline: "How we fill your roles",
      items: [
        {
          id: "sourcing",
          title: "Sourcing",
          image: teamImg,
          hoverText:
            "A steady pipeline of pre-vetted American engineers actively open to relocating to Germany.",
          section: {
            eyebrow: "Sourcing",
            headline: "We find you talents",
            body: "We maintain an active pipeline of American senior and staff engineers ready to relocate — pre-screened on technical depth, English/German level, and seriousness about the move. You see a shortlist, not a stack of CVs.",
            bullets: [
              "Technical screen before you see the CV",
              "Stack and seniority matched to your spec",
              "Relocation-ready candidates only",
              "Shortlist within 3 weeks",
            ],
            ctaLabel: "Request candidates",
            ctaHref: MAIL,
          },
        },
        {
          id: "systems",
          title: "Consulting & Systems Development",
          image: handshakeImg,
          hoverText:
            "We build the recruitment workflows and ATS setup so your team can hire internationally on its own.",
          section: {
            eyebrow: "Systems",
            headline: "Hire internationally, in-house",
            body: "Don't depend on an agency forever. We design and implement the recruitment systems — ATS configuration, sourcing playbooks, interview loops, visa workflows — so your HR team can run transatlantic hiring confidently on their own.",
            bullets: [
              "ATS and pipeline configuration",
              "International sourcing playbooks",
              "Interview loop and scorecard design",
              "Visa and onboarding workflow documentation",
            ],
            ctaLabel: "Talk to us",
            ctaHref: MAIL,
          },
        },
      ],
    },
  },

  agency: {
    slug: "agency",
    navLabel: "Recruitment Agency",
    searchText: "How do I find qualified employees and how can I finally fill my long open positions?",
    hero: {
      line1: "Partner with us to place",
      line2: "American talent in",
      highlight: "German companies",
    },
    problem: {
      eyebrow: "The Gap",
      headline: "Your German clients need US engineers. You need a transatlantic partner.",
      lede: "Sourcing across the Atlantic is hard: time zones, compliance, candidate vetting, visa logistics. We're the partner desk that handles all of it.",
      tiles: [
        { kind: "hero", stat: "9h", label: "time-zone gap between Berlin and SF" },
        { kind: "stat", stat: "50 states", label: "of compliance complexity, handled" },
        { kind: "stat", stat: "1 contract", label: "between you and the US market" },
        {
          kind: "quote",
          quote: "We win German mandates we used to walk away from.",
          attribution: "Partner agency, Munich",
        },
        {
          kind: "context",
          body: "White-label US sourcing, co-placement, and compliance — branded as your firm or ours.",
          ctaLabel: "See partner programs",
          ctaHref: "#whitelabel",
        },
      ],
    },
    products: {
      eyebrow: "Partner Programs",
      headline: "How we work with agencies",
      items: [
        {
          id: "talent-sourcing",
          title: "Talent Sourcing",
          image: teamImg,
          hoverText:
            "Pre-screened US candidates delivered under your brand or ours — ready for German placement.",
          section: {
            eyebrow: "Talent Sourcing",
            headline: "Your transatlantic sourcing desk",
            body: "Win German mandates that require US sourcing without standing up a US team. We deliver pre-screened American candidates — under your brand or ours — matched to your clients' technical and relocation requirements.",
            bullets: [
              "Sourced and screened in the US",
              "White-label or co-branded delivery",
              "Stack and seniority matched to client spec",
              "Relocation-ready candidates only",
            ],
            ctaLabel: "Partner with us",
            ctaHref: MAIL,
          },
        },
      ],
    },
  },
};

const audiencesDe: Record<AudienceContent["slug"], AudienceContent> = {
  professionals: {
    slug: "professionals",
    navLabel: "Fachkräfte",
    searchText:
      "Kann ich einen Job in Deutschland bekommen, und wenn ja, wie und was muss ich dafür tun?",
    hero: {
      line1: "Finde dein",
      line2: "Berufsabenteuer in",
      highlight: "Deutschland",
    },
    problem: {
      eyebrow: "Das Problem",
      headline: "Der deutsche Mittelstand findet keine Tech-Talente. Amerika hat sie im Überfluss.",
      lede: "Tausende qualifizierter US-Ingenieure sind bereit, für stabile, sinnvolle Arbeit nach Europa zu ziehen — sie wissen nur nicht, wo sie landen sollen.",
      tiles: [
        { kind: "hero", stat: "149k", label: "unbesetzte Tech-Stellen in Deutschland aktuell" },
        { kind: "stat", stat: "7,7 Mon.", label: "durchschnittliche Time-to-Hire im Mittelstand" },
        { kind: "stat", stat: "90 Mrd. €", label: "jährlicher Umsatzverlust durch Fachkräftelücken" },
        {
          kind: "quote",
          quote: "Ich wollte einen echten Job in Europa — ich wusste nur nicht, mit wem ich reden soll.",
          attribution: "US-Softwareentwickler",
        },
        {
          kind: "context",
          body: "Wir schlagen die Brücke: Visum, Umzug, Sprache und ein deutscher Arbeitgeber, der dich wirklich will.",
          ctaLabel: "So funktioniert es",
          ctaHref: "#ebluecard",
        },
      ],
    },
    products: {
      eyebrow: "Unsere Leistungen",
      headline: "Was wir Fachkräften bieten",
      items: [
        {
          id: "placement",
          title: "Vermittlung",
          image: handshakeImg,
          hoverText:
            "Wir matchen dich aktiv mit deutschen Arbeitgebern, die deine Skills brauchen — und verhandeln für dich.",
          section: {
            eyebrow: "Vermittlung",
            headline: "Wir finden dir einen Job in Deutschland",
            body: "Vergiss kalte Bewerbungen. Wir arbeiten mit einem kuratierten Netzwerk aus deutschem Mittelstand und Tech-Arbeitgebern, die aktiv erfahrene US-Talente einstellen, und matchen dich auf Rollen, die zu deinem Stack, deiner Seniorität und deinem Leben passen.",
            bullets: [
              "Kuratierte Auswahl statt Jobbörsen-Flut",
              "Wir verhandeln Gehalt und Relocation-Paket",
              "Direkte Vorstellungen bei Hiring Managern",
              "Ehrliche Einschätzung, bevor du dich festlegst",
            ],
            ctaLabel: "Suche starten",
            ctaHref: MAIL,
          },
        },
        {
          id: "consulting",
          title: "Beratung",
          image: teamImg,
          hoverText:
            "Antworten auf alle Fragen zu Visum, Lebenshaltungskosten, Gehalt, Stadtteilen und Kultur.",
          section: {
            eyebrow: "Beratung",
            headline: "Deine Fragen zum Umzug nach Deutschland, beantwortet",
            body: "Bevor du dein Leben umkrempelst, brauchst du echte Antworten von Menschen, die es gemacht haben. Wir bieten 1:1-Beratung zu jedem Aspekt des Umzugs nach und Lebens in Deutschland — von Visa-Wegen bis zu der Stadt, die wirklich zu dir passt.",
            bullets: [
              "Analyse von Visum und EU Blue Card",
              "Lebenshaltungskosten- und Gehalts-Benchmarking",
              "Stadt- und Stadtteilberatung",
              "Arbeitskultur und Sprach-Readiness",
            ],
            ctaLabel: "Beratung buchen",
            ctaHref: MAIL,
          },
        },
        {
          id: "relocation",
          title: "Relocation-Support",
          image: cityImg,
          hoverText:
            "Wohnung, Bank, Krankenversicherung, Anmeldung — der Papierkram, vom ersten Tag an erledigt.",
          section: {
            eyebrow: "Ankommen",
            headline: "Relocation ohne Chaos",
            body: "Wohnungen, Anmeldung, Konten, Krankenversicherung, Schulsuche — wir koordinieren aktiv die Praxis, damit deine ersten Monate in Deutschland dem Job gehören, nicht der Bürokratie.",
            bullets: [
              "Vorab-Auswahl möblierter Wohnungen",
              "Konto- und Steuer-ID-Setup",
              "Vergleich gesetzlich vs. privat versichert",
              "Familien- und Schul-Support",
            ],
            ctaLabel: "Sprich mit uns",
            ctaHref: MAIL,
          },
        },
      ],
    },
  },

  employers: {
    slug: "employers",
    navLabel: "Arbeitgeber",
    searchText:
      "Wie finde ich qualifizierte Mitarbeiter und wie kann ich endlich meine lange offenen Stellen besetzen?",
    hero: {
      line1: "Deutsche Tech-Vakanzen,",
      line2: "besetzt mit",
      highlight: "US- Talenten",
    },
    problem: {
      eyebrow: "Die Kosten des Wartens",
      headline: "Jeder Monat, in dem eine Senior-Stelle offen bleibt, kostet dein Team.",
      lede: "Verschobene Launches, verlorene Aufträge, ausgebrannte Kollegen. Der deutsche Talentpool wird nicht tiefer — der atlantische ist offen.",
      tiles: [
        { kind: "hero", stat: "7,7 Mon.", label: "durchschnittliche Time-to-Hire im deutschen Mittelstand" },
        { kind: "stat", stat: "149k", label: "offene Tech-Stellen kämpfen um dieselbe Shortlist" },
        { kind: "stat", stat: "90 Mrd. €", label: "jährlicher Umsatzverlust durch Fachkräftelücken" },
        {
          kind: "quote",
          quote: "Wir hatten das Budget — wir fanden nur den Ingenieur nicht.",
          attribution: "CTO, deutscher Mittelstand",
        },
        {
          kind: "context",
          body: "Öffne deine Suche für amerikanische Ingenieure. Wir übernehmen das Sourcing oder bauen langfristige Systeme, mit denen du selbst einstellst.",
          ctaLabel: "Unsere Leistungen",
          ctaHref: "#sourcing",
        },
      ],
    },
    products: {
      eyebrow: "Für Arbeitgeber",
      headline: "Wie wir deine Stellen besetzen",
      items: [
        {
          id: "sourcing",
          title: "Sourcing",
          image: teamImg,
          hoverText:
            "Eine stabile Pipeline vorgeprüfter US-Ingenieure, die aktiv für einen Umzug nach Deutschland offen sind.",
          section: {
            eyebrow: "Sourcing",
            headline: "Wir finden dir Talente",
            body: "Wir pflegen eine aktive Pipeline amerikanischer Senior- und Staff-Engineers, die umzugsbereit sind — vorgeprüft auf technische Tiefe, Englisch-/Deutschniveau und Ernsthaftigkeit des Wechsels. Du bekommst eine Shortlist, keinen CV-Stapel.",
            bullets: [
              "Technische Prüfung, bevor du den CV siehst",
              "Stack und Seniorität passend zu deiner Spec",
              "Nur umzugsbereite Kandidaten",
              "Shortlist innerhalb von 3 Wochen",
            ],
            ctaLabel: "Kandidaten anfragen",
            ctaHref: MAIL,
          },
        },
        {
          id: "systems",
          title: "Beratung & Systementwicklung",
          image: handshakeImg,
          hoverText:
            "Wir bauen die Recruiting-Workflows und das ATS-Setup, damit dein Team international selbst einstellen kann.",
          section: {
            eyebrow: "Systeme",
            headline: "International einstellen, inhouse",
            body: "Verlass dich nicht ewig auf eine Agentur. Wir entwerfen und implementieren die Recruiting-Systeme — ATS-Konfiguration, Sourcing-Playbooks, Interview-Loops, Visa-Workflows — damit dein HR-Team transatlantisches Hiring selbstbewusst selbst fahren kann.",
            bullets: [
              "ATS- und Pipeline-Konfiguration",
              "Internationale Sourcing-Playbooks",
              "Interview-Loop- und Scorecard-Design",
              "Visa- und Onboarding-Dokumentation",
            ],
            ctaLabel: "Sprich mit uns",
            ctaHref: MAIL,
          },
        },
      ],
    },
  },

  agency: {
    slug: "agency",
    navLabel: "Personalagentur",
    searchText:
      "Wie finde ich qualifizierte Mitarbeiter und wie kann ich endlich meine lange offenen Stellen besetzen?",
    hero: {
      line1: "Partnere mit uns, um",
      line2: "amerikanische Talente in",
      highlight: "deutschen Unternehmen",
    },
    problem: {
      eyebrow: "Die Lücke",
      headline: "Deine deutschen Kunden brauchen US-Ingenieure. Du brauchst einen transatlantischen Partner.",
      lede: "Sourcing über den Atlantik ist hart: Zeitzonen, Compliance, Kandidatenprüfung, Visa-Logistik. Wir sind der Partner-Desk, der das alles übernimmt.",
      tiles: [
        { kind: "hero", stat: "9h", label: "Zeitzonen-Differenz zwischen Berlin und SF" },
        { kind: "stat", stat: "50 Staaten", label: "an Compliance-Komplexität, erledigt" },
        { kind: "stat", stat: "1 Vertrag", label: "zwischen dir und dem US-Markt" },
        {
          kind: "quote",
          quote: "Wir gewinnen deutsche Mandate, die wir früher abgelehnt hätten.",
          attribution: "Partner-Agentur, München",
        },
        {
          kind: "context",
          body: "White-Label-US-Sourcing, Co-Placement und Compliance — unter eurer oder unserer Marke.",
          ctaLabel: "Partner-Programme",
          ctaHref: "#whitelabel",
        },
      ],
    },
    products: {
      eyebrow: "Partner-Programme",
      headline: "Wie wir mit Agenturen arbeiten",
      items: [
        {
          id: "talent-sourcing",
          title: "Talent-Sourcing",
          image: teamImg,
          hoverText:
            "Vorgeprüfte US-Kandidaten unter eurer oder unserer Marke — bereit für die deutsche Vermittlung.",
          section: {
            eyebrow: "Talent-Sourcing",
            headline: "Euer transatlantischer Sourcing-Desk",
            body: "Gewinnt deutsche Mandate, die US-Sourcing erfordern, ohne ein US-Team aufzubauen. Wir liefern vorgeprüfte amerikanische Kandidaten — unter eurer oder unserer Marke — passend zu den technischen und Relocation-Anforderungen eurer Kunden.",
            bullets: [
              "In den USA gesourct und geprüft",
              "White-Label oder Co-Branding",
              "Stack und Seniorität nach Kunden-Spec",
              "Nur umzugsbereite Kandidaten",
            ],
            ctaLabel: "Partner werden",
            ctaHref: MAIL,
          },
        },
      ],
    },
  },
};

export function getAudiences(lang: Lang): Record<AudienceContent["slug"], AudienceContent> {
  return lang === "DE" ? audiencesDe : audiencesEn;
}

// Backwards-compat default export (English) for any non-localized consumer.
export const audiences = audiencesEn;
