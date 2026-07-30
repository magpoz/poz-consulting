import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { PillLink } from "@/components/pill-link";
import Link from "next/link";

const tools = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Make",
  "Notion",
  "Airtable",
  "GitHub Copilot",
  "Lovable",
  "v0 (Vercel)",
];

const offers = [
  {
    number: "01",
    title: "Fondation — Audit IA",
    description:
      "Je cartographie votre quotidien tel qu'il est vraiment, et je vous rends des priorités chiffrées.",
  },
  {
    number: "02",
    title: "Mise en œuvre — Automatisation",
    description:
      "Devis, relances, reporting : j'automatise ce qui vous prend vos soirées.",
  },
  {
    number: "03",
    title: "Construction — Développement digital",
    description: "Votre outil sur mesure, conçu pour tourner sans moi.",
  },
  {
    number: "04",
    title: "Transmission — Formation",
    description:
      "Une journée avec votre équipe, sur vos propres cas — pas des exercices.",
  },
];

const cards = [
  {
    eyebrow: "01 · Le regard",
    title: "Comprendre avant d'outiller",
    body: "Avant d'être optimisé, votre fonctionnement de travail s'observe en détail.",
  },
  {
    eyebrow: "02 · Le geste",
    title: "Construire ce qui tient",
    body: "Documenté, lisible, personnalisé. Vous restez propriétaire de votre fonctionnement.",
  },
  {
    eyebrow: "03 · La transmission",
    title: "Vous rendre autonome",
    body: "Mon travail est réussi le jour où vous saurez maîtriser les solutions que je vous ai transmises.",
  },
];

export default function AccueilPage() {
  return (
    <PageShell>
      <Nav active="/" />

      <div className="grid gap-16 px-6 pt-14 pb-20 sm:px-16 sm:pt-24 sm:pb-24 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
        <div>
          <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
            Architecte de solutions IA et No-Code
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.03] tracking-[-0.02em] text-balance sm:text-7xl">
            Vous sentez que votre activité mérite des fondations plus{" "}
            <em className="text-copper not-italic italic">solides</em> que ce
            qu&apos;elle a aujourd&apos;hui&nbsp;?
          </h1>
          <p className="mt-8 max-w-[30em] text-lg leading-[1.85] text-body sm:text-xl">
            Je regarde d&apos;abord ce qui tient déjà, puis je construis avec
            vous l&apos;organisation où vous retrouverez enfin de
            l&apos;air — claire, fiable, faite pour durer.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-7">
            <PillLink href="/contact">Faisons connaissance</PillLink>
            <Link
              href="/offres"
              className="border-b border-copper-2 pb-1 font-medium text-charcoal no-underline hover:border-sage"
            >
              Découvrir mes offres
            </Link>
          </div>
        </div>
        <div className="rounded-[150px_150px_40px_150px] bg-cream-warm p-11">
          <p className="font-serif text-2xl leading-[1.5] text-balance italic">
            « Je ne vous aide pas seulement à bâtir&nbsp;: je reste à vos
            côtés jusqu&apos;à ce que mes solutions deviennent vos
            solutions. »
          </p>
          <p className="mt-5 text-[10px] font-medium tracking-[0.28em] text-copper uppercase">
            Magaly Pozza
          </p>
        </div>
      </div>

      <div className="mx-6 flex items-center overflow-hidden rounded-full bg-sand sm:mx-16">
        <span className="shrink-0 py-4.5 pr-8 pl-9 text-[10px] font-medium tracking-[0.28em] text-muted uppercase">
          Ce que je mobilise
        </span>
        <span className="flex flex-wrap gap-7 py-4.5 pr-7 text-sm text-muted">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </span>
      </div>

      <div className="grid gap-16 px-6 py-22 sm:px-16 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
        <div>
          <span className="text-[11px] font-medium tracking-[0.28em] text-copper uppercase">
            Plusieurs façons de travailler ensemble
          </span>
          <h2 className="mt-5 font-serif text-4xl leading-[1.12] tracking-[-0.015em] text-balance">
            On peut commencer petit. On peut bâtir grand aussi.
          </h2>
          <p className="mt-6 max-w-[24em] text-lg leading-[1.85] text-body">
            Chaque étape se tient seule. Prises ensemble, elles ne posent pas
            seulement des fondations&nbsp;: elles bâtissent une activité
            pensée pour durer.
          </p>
        </div>
        <div className="flex flex-col">
          {offers.map((offer, i) => (
            <Link
              key={offer.number}
              href="/offres"
              className={`grid grid-cols-[auto_1fr] items-baseline gap-7 border-t border-sand py-6 no-underline text-charcoal hover:border-sage ${
                i === offers.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="text-sm font-medium tracking-[0.14em] text-copper">
                {offer.number}
              </span>
              <span className="flex flex-col gap-2">
                <span className="font-serif text-2xl">{offer.title}</span>
                <span className="text-[15px] leading-[1.7] text-body">
                  {offer.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-8 bg-sand px-6 py-21 sm:grid-cols-3 sm:px-16">
        {cards.map((card) => (
          <div key={card.title} className="rounded-[40px] bg-cream-warm p-9">
            <span className="text-[11px] font-medium tracking-[0.26em] text-petrol uppercase">
              {card.eyebrow}
            </span>
            <h3 className="mt-3.5 mb-2.5 font-serif text-[27px]">
              {card.title}
            </h3>
            <p className="text-base leading-[1.8] text-muted">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-11 px-6 py-22 sm:px-16">
        <div>
          <h2 className="font-serif text-4xl leading-[1.15] tracking-[-0.015em]">
            Commençons par en discuter
          </h2>
          <p className="mt-3.5 max-w-[32em] text-lg leading-[1.85] text-body">
            Trente minutes, sans engagement. Vous me racontez votre quotidien
            tel qu&apos;il est vraiment. Que vous ayez besoin d&apos;y voir
            clair, d&apos;alléger votre charge mentale, de faire construire un
            outil qui vous ressemble ou de former votre équipe, je vous
            oriente sur la formule la plus adaptée pour vous — sans jamais
            remplacer votre savoir-faire, ni compromettre vos données.
          </p>
        </div>
        <PillLink href="/contact">Faisons connaissance</PillLink>
      </div>

      <Footer />
    </PageShell>
  );
}
