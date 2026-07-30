import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { PillLink } from "@/components/pill-link";

const heroParagraphs = [
  "Je suis née à une époque où Internet n'existait pas encore dans nos foyers. J'ai grandi avec son arrivée, j'ai travaillé avec son évolution et, aujourd'hui, j'accompagne les entreprises dans la révolution suivante : celle de l'intelligence artificielle.",
  "J'ai déjà vu une technologie transformer durablement notre manière de communiquer, de travailler et de collaborer. Et j'ai observé ce qui faisait la différence : ce n'étaient pas forcément les plus experts, mais celles et ceux qui prenaient le temps de comprendre, d'expérimenter et de s'adapter au changement.",
  "Avant de me consacrer aux solutions numériques et à l'intelligence artificielle, j'ai passé plus de dix ans à accompagner des entreprises dans leur communication digitale chez Cision. Mon métier consistait déjà à analyser leurs besoins, comprendre leurs objectifs, identifier les bons interlocuteurs et définir la stratégie la plus pertinente pour que chaque message atteigne sa cible, au bon moment.",
  "Avec le recul, je réalise que mon métier n'a jamais vraiment changé. J'ai toujours cherché à comprendre avant d'agir, à relier les informations entre elles, à simplifier ce qui semblait complexe et à concevoir des solutions utiles, concrètes et adaptées à chaque situation.",
  "Diagnostiquée TSA et TDAH à l'âge de 40 ans, j'ai enfin compris pourquoi j'avais toujours eu besoin de structure, de logique et de clarté pour donner le meilleur de moi-même. Cette façon de penser, longtemps perçue comme différente, est devenue une véritable force. Elle me permet d'analyser une situation dans son ensemble, d'identifier rapidement les points de friction et de construire des solutions cohérentes, durables et faciles à s'approprier.",
  "C'est sans doute pour cette raison que l'intelligence artificielle est rapidement devenue une alliée. Non pas parce qu'elle pense à ma place, mais parce qu'elle m'aide à structurer les idées, à automatiser les tâches répétitives et à consacrer davantage de temps à ce qui crée réellement de la valeur : la réflexion, l'écoute, la stratégie et la créativité.",
  "J'aime voir l'intelligence artificielle comme un maître d'œuvre. Elle exécute, coordonne et accélère. Moi, je reste l'architecte. J'observe, je conçois, je fais des choix et je veille à ce que chaque solution réponde aux besoins réels de celles et ceux qui l'utiliseront. Une technologie, aussi performante soit-elle, n'a de valeur que lorsqu'elle est pensée pour les humains.",
  "Aujourd'hui, je conçois des solutions numériques comme j'ai toujours accompagné mes clients : en écoutant avant de proposer, en simplifiant avant d'automatiser et en construisant des outils qui s'adaptent aux femmes et aux hommes qui les utiliseront, jamais l'inverse.",
  "De l'écoute, de l'anticipation, du calme et de l'authenticité : voilà ce que vous trouverez en travaillant avec moi.",
];

const enBref = [
  "Magaly Pozza, fondatrice de POZ Consulting",
  "Basée en Île-de-France, déplacements possibles partout en France (frais de déplacement facturés)",
  "Audit, automatisation, formation, développement d'outils",
];

const hotellerieParagraphs = [
  "Avant Cision, il y a eu sept ans d'hôtellerie — entre la France, l'Allemagne et le Royaume-Uni. Ce que ce métier m'a appris ne m'a plus jamais quittée : toujours améliorer l'expérience client, quel que soit le sujet.",
  "C'est se souvenir qu'un client régulier prend son thé, pas son café, au petit-déjeuner. C'est, un vol retardé, proposer une assiette gardée au chaud ou un taxi avant même qu'on ait eu à le demander. Ces attentions-là, minuscules et décisives, sont devenues un réflexe : anticiper ce dont quelqu'un a besoin avant qu'il ait eu à le formuler.",
  "C'est exactement ce que je fais aujourd'hui avec la Fondation : cartographier un quotidien professionnel comme j'apprenais autrefois les habitudes d'un client — pour proposer, avant qu'on me le demande, ce qui va vraiment aider.",
];

const hotellerieAppris = [
  "L'attention aux détails que personne ne demande",
  "Le calme face à un client stressé, frustré, parfois en colère",
  "Composer avec la barrière de la langue, sans jamais perdre le client de vue",
  "Une gourmandise jamais éteinte : un CAP Pâtisserie décroché en 2014, en parallèle de Cision",
];

const doolipawAppris = [
  "Concevoir un produit de bout en bout, pas seulement le conseiller",
  "Tenir la maintenance dans le temps, avec de vrais utilisateurs",
  "Savoir ce que coûte chaque décision technique",
];

export default function AProposPage() {
  return (
    <PageShell>
      <Nav active="/a-propos" />

      <div className="px-6 pt-22 pb-19 sm:px-16">
        <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
          À propos
        </span>
        <h1 className="mt-6 max-w-[20em] font-serif text-4xl leading-[1.08] tracking-[-0.02em] text-balance sm:text-6xl">
          J&apos;ai vu naître Internet. J&apos;accompagne aujourd&apos;hui{" "}
          <em className="text-copper not-italic italic">l&apos;arrivée de l&apos;IA</em>.
        </h1>
        <div className="mt-8 max-w-[42em] space-y-5 text-lg leading-[1.85] text-body">
          {heroParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-13 max-w-[26em] rounded-[44px] bg-cream-warm p-10">
          <p className="text-[10px] font-medium tracking-[0.28em] text-copper uppercase">
            En bref
          </p>
          <div className="mt-3.5 flex flex-col">
            {enBref.map((item, i) => (
              <span
                key={item}
                className={`border-t border-sand-line py-3 text-base leading-[1.6] ${
                  i === enBref.length - 1 ? "border-b" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 rounded-[200px_60px_200px_60px] bg-charcoal px-15 py-18 text-cream sm:mx-16">
        <p className="max-w-[30em] font-serif text-[34px] leading-[1.45] text-balance italic">
          « Avancer. C&apos;est mon mantra, dans tous les domaines&nbsp;:
          seule, en binôme, en équipe, ensemble. Peu importe les obstacles,
          le mouvement reste essentiel. »
        </p>
        <p className="mt-7 text-[10px] font-medium tracking-[0.28em] text-copper-2 uppercase">
          Magaly Pozza
        </p>
      </div>

      <div className="grid gap-14 px-6 py-21 sm:px-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <span className="text-[11px] font-medium tracking-[0.24em] text-sage-deep uppercase">
            Ce que l&apos;hôtellerie m&apos;a appris
          </span>
          <div className="mt-4 space-y-4 text-lg leading-[1.85] text-body">
            {hotellerieParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="rounded-[44px] bg-cream-warm p-10">
          <p className="text-[10px] font-medium tracking-[0.28em] text-copper uppercase">
            Ce que j&apos;y ai gardé
          </p>
          <div className="mt-3.5 flex flex-col">
            {hotellerieAppris.map((item, i) => (
              <span
                key={item}
                className={`border-t border-sand-line py-3 text-base leading-[1.6] ${
                  i === hotellerieAppris.length - 1 ? "border-b" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-14 px-6 pt-3 pb-21 sm:px-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <span className="text-[11px] font-medium tracking-[0.24em] text-sage-deep uppercase">
            Ce que je construis aussi
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.15]">
            Doolipaw, mon application de gestion de budget pour les animaux
            de compagnie
          </h2>
          <p className="mt-4.5 text-lg leading-[1.85] text-body">
            Je l&apos;ai imaginée, construite, mise en ligne moi-même et j&apos;en
            assure la maintenance. Mon expérience sur la conception de mon
            propre produit me permet de vous orienter, de vous conseiller
            quand je vous propose de construire un outil et surtout de vous
            expliquer ce que coûte chaque décision technique.
          </p>
          <a
            href="https://doolipaw.com"
            className="mt-6 inline-block border-b border-copper-2 pb-1 font-semibold text-charcoal no-underline hover:border-sage"
          >
            Voir doolipaw.com
          </a>
        </div>
        <div className="rounded-[44px] bg-cream-warm p-10">
          <p className="text-[10px] font-medium tracking-[0.28em] text-copper uppercase">
            Ce que j&apos;y ai appris
          </p>
          <div className="mt-3.5 flex flex-col">
            {doolipawAppris.map((item, i) => (
              <span
                key={item}
                className={`border-t border-sand-line py-3 text-base leading-[1.6] ${
                  i === doolipawAppris.length - 1 ? "border-b" : ""
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 flex flex-wrap items-center justify-between gap-11 rounded-[56px] bg-sand px-15 py-18 sm:mx-16">
        <div>
          <h2 className="font-serif text-4xl leading-[1.15] tracking-[-0.015em]">
            Le plus simple, c&apos;est de se parler.
          </h2>
          <p className="mt-3.5 max-w-[32em] text-lg leading-[1.85] text-muted">
            Trente minutes, sans engagement, pour explorer ce que l&apos;on
            peut construire ensemble.
          </p>
        </div>
        <PillLink href="/contact" variant="dark">
          Faisons connaissance
        </PillLink>
      </div>

      <div className="h-21" />

      <Footer />
    </PageShell>
  );
}
