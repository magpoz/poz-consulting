import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { PillLink } from "@/components/pill-link";

const summary = [
  "01 Audit IA",
  "02 Automatisation",
  "03 Développement digital",
  "04 Formation",
  "05 Suivi à la carte",
];

const offers = [
  {
    number: "01",
    title: "Fondation",
    subtitle: "Audit IA",
    price: "sur devis",
    detail: "Restitution en deux semaines.",
    forWho:
      "Dirigeants et indépendants qui sentent qu'il y a du temps à récupérer, sans savoir où.",
    cta: "Demander cet audit",
    paragraphs: [
      "J'étudie votre fonctionnement, les outils que vous utilisez et tout ce qui ralentit votre activité au quotidien. Mon objectif est simple : identifier où vous pouvez gagner en efficacité, retrouver du temps et réaliser des économies.",
      "Puis je vous remets un plan d'action clair : ce qui mérite d'être optimisé, dans quel ordre, le temps et le budget à prévoir, ainsi que les économies réalisables à court et moyen terme.",
      "Nous parcourons ensuite ce document ensemble, lors d'un rendez-vous d'une heure.",
    ],
    deliverables: [
      "La cartographie de vos modes de fonctionnement",
      "Les points de friction classés selon leur impact",
      "Des recommandations priorisées et chiffrées, avec une feuille de route claire",
      "Une heure de restitution commentée",
    ],
  },
  {
    number: "02",
    title: "Mise en œuvre",
    subtitle: "Automatisation",
    price: "sur devis",
    detail: "Par périmètre automatisé.",
    forWho:
      "Structures dont l'équipe passe encore ses journées à recopier des informations.",
    cta: "Parler de mon cas",
    paragraphs: [
      "Une fois les priorités définies, je construis les automatisations qui prennent en charge les tâches répétitives de votre quotidien.",
      "Devis, relances, reporting, saisie d'informations, transferts entre vos logiciels… chaque scénario est conçu pour s'intégrer naturellement à votre façon de travailler, sans bouleverser vos habitudes.",
      "Mon objectif n'est pas de remplacer l'humain, mais de lui rendre du temps pour se concentrer sur ce qui crée réellement de la valeur. Chaque automatisation est documentée, compréhensible et entièrement modulable : vous restez propriétaire de votre fonctionnement.",
    ],
    deliverables: [
      "Des automatisations conçues sur mesure, testées sur vos cas d'usage",
      "Une documentation claire, rédigée en français",
      "Une session de passation avec votre référent",
      "30 jours d'ajustements pour affiner les scénarii selon vos retours",
    ],
  },
  {
    number: "03",
    title: "Construction",
    subtitle: "Développement digital",
    price: "sur devis",
    detail: "Selon le périmètre de l'outil.",
    forWho:
      "Pour celles et ceux qui préfèrent me confier la création de leur site ou leur application sur mesure — faute de temps, de compétences techniques, ou d'appétence pour le sujet.",
    cta: "Décrire mon besoin",
    paragraphs: [
      "Votre site internet ou votre application prend forme à partir de votre besoin réel, avec des points d'étape validés ensemble sur une feuille de route claire. La démarche s'appuie sur votre code de marque (votre image de marque, votre personnalité, votre palette de couleurs) pour construire une charte graphique sur mesure, remise à l'issue de la prestation.",
      "Afin de parfaire cette expérience, si vous le souhaitez, je viens capter quelques images de vous, chez vous, telles que vous êtes vraiment, pour que le site vous ressemble, jusqu'au visage qui incarne déjà votre marque.",
    ],
    deliverables: [
      "Votre site ou votre application en fonctionnement, hébergé",
      "Une feuille de route avec points d'étape validés ensemble",
      "Une charte graphique de marque, définie avec vous",
      "La capacité de le faire évoluer en autonomie, et un mois d'accompagnement après la mise en ligne",
    ],
  },
  {
    number: "04",
    title: "Transmission",
    subtitle: "Formation",
    price: "sur devis",
    detail: "Par jour, jusqu'à 8 participants.",
    forWho:
      "Cabinets, associations et équipes qui utilisent l'IA au hasard et veulent une méthode.",
    cta: "Organiser une journée",
    paragraphs: [
      "Une journée pour que vos équipes comprennent vraiment ce qu'est l'IA générative et les agents conversationnels — au-delà de l'usage superficiel. On aborde les bonnes pratiques, les techniques de rédaction de prompt, et surtout un usage éthique et responsable : ce qu'on peut lui confier, ce qu'on doit vérifier, où poser les limites.",
      "Objectif : cadrer les usages, prévenir le shadow IA (l'usage de l'IA par vos équipes sans que vous en ayez connaissance), et donner à chacun des réflexes solides et responsables.",
    ],
    deliverables: [
      "Une journée animée sur site ou à distance",
      "Une méthode de prompt complète, transmise à vos équipes plutôt que des prompts clés en main",
      "Un cadre d'usage éthique de l'IA, partagé et discuté avec votre équipe",
      "Un mémo de synthèse et un point de suivi à 30 jours",
    ],
  },
  {
    number: "05",
    title: "Extension",
    subtitle: "Suivi à la carte",
    price: "sur devis",
    detail: "À l'heure, à la journée ou au projet ponctuel.",
    forWho: "Si vous avez déjà fait appel à mes services.",
    cta: "Parler d'un besoin ponctuel",
    paragraphs: [
      "Pas d'abonnement, pas d'engagement récurrent : chaque intervention est cadrée et facturée pour ce qu'elle est, quand vous en avez besoin. Vous êtes libre de me contacter pour développer une nouvelle fonctionnalité, corriger un bug complexe, ou obtenir un conseil stratégique sur l'évolution de vos systèmes.",
      "Selon votre besoin, cela prendra la forme d'une intervention ciblée.",
    ],
    deliverables: [
      "Après un brief établi et validé par les parties prenantes, une réponse sous 24 à 48h pour cadrer la prestation et un devis clair avant toute intervention",
      "Une intervention ciblée, sans repartir de zéro",
      "Une interlocutrice privilégiée, qui connaît déjà votre projet",
    ],
  },
];

const faq = [
  {
    q: "Faut-il commencer par l'audit ?",
    a: "Non, mais c'est souvent ce que je recommande. Un audit permet d'éviter de construire une solution avant d'avoir identifié le véritable problème. Il révèle les points de friction, les habitudes qui fonctionnent déjà et les optimisations qui auront le plus d'impact. En revanche, si votre besoin est clairement identifié et que nous partageons le même diagnostic, nous pouvons passer directement à l'action.",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Oui. La confidentialité fait partie intégrante de ma démarche. Avant toute mission, nous définissons précisément quelles informations peuvent être utilisées, lesquelles doivent rester dans votre environnement et quels outils sont adaptés à votre niveau d'exigence. L'objectif est simple : vous permettre de bénéficier de l'intelligence artificielle sans perdre le contrôle de vos données.",
  },
  {
    q: "Et si mon équipe est réticente ?",
    a: "C'est une réaction que je rencontre régulièrement, et je la comprends. L'intelligence artificielle fait évoluer les habitudes de travail à un rythme inédit. Il est naturel que certaines personnes s'interrogent, expriment des réserves ou craignent de perdre leurs repères. Mon rôle n'est pas d'imposer une solution, mais d'accompagner les personnes concernées afin qu'elles en comprennent l'intérêt, se l'approprient et y voient un véritable soutien dans leur quotidien.",
  },
  {
    q: "Les prix sont-ils fermes ?",
    a: "Oui, une fois le périmètre défini. Les tarifs affichés donnent un ordre de grandeur, mais chaque entreprise possède ses propres contraintes et ses propres objectifs. Avant toute intervention, nous définissons précisément le contenu de la mission.",
  },
  {
    q: "Pas sûr de la formule qui vous convient ?",
    a: "C'est justement mon rôle de vous aider à y voir clair. Expliquez-moi simplement votre situation, vos difficultés ou vos objectifs. Je vous orienterai vers la formule la plus adaptée... même si cela signifie vous conseiller d'attendre, de commencer plus modestement, ou de ne rien mettre en place pour le moment.",
  },
];

export default function OffresPage() {
  return (
    <PageShell>
      <Nav active="/offres" />

      <div className="px-6 pt-22 pb-19 sm:px-16">
        <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
          Les offres
        </span>
        <h1 className="mt-6 max-w-[19em] font-serif text-4xl leading-[1.06] tracking-[-0.02em] text-balance sm:text-6xl">
          Cinq formules, annoncées dès le départ.
        </h1>
        <p className="mt-6 max-w-[36em] text-lg leading-[1.85] text-body sm:text-xl">
          Chaque formule est indépendante et complémentaire à la fois. Si
          vous ne savez pas encore par où commencer, je vous conseille la
          Fondation : elle cartographie vos outils et votre fonctionnement
          pour éclairer la suite.
        </p>
      </div>

      <div className="mx-6 flex flex-wrap gap-8 rounded-full bg-sand px-9 py-5 text-[13px] font-medium tracking-[0.16em] text-muted uppercase sm:mx-16">
        {summary.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="px-6 py-21 sm:px-16">
        {offers.map((offer, i) => (
          <div
            key={offer.number}
            className={`grid gap-13 py-14 lg:grid-cols-[0.34fr_0.66fr] ${
              i < offers.length - 1 ? "border-b border-sand" : ""
            }`}
          >
            <div>
              <span className="text-sm font-medium tracking-[0.14em] text-copper">
                {offer.number}
              </span>
              <h2 className="mt-2.5 font-serif text-4xl leading-[1.15]">
                {offer.title}
              </h2>
              <p className="mt-3.5 text-[11px] font-medium tracking-[0.24em] text-sage-deep uppercase">
                {offer.subtitle}
              </p>
              <p className="mt-6 font-serif text-2xl">{offer.price}</p>
              <p className="mt-2 text-[15px] leading-[1.7] text-body">
                {offer.detail}
              </p>
              <p className="mt-6 mb-2 text-[11px] font-medium tracking-[0.24em] text-charcoal uppercase">
                Pour qui
              </p>
              <p className="text-[15px] leading-[1.7] text-body">
                {offer.forWho}
              </p>
              <a
                href="/contact"
                className="mt-6 inline-block border-b border-copper-2 pb-1 font-semibold text-charcoal no-underline hover:border-sage"
              >
                {offer.cta}
              </a>
            </div>
            <div>
              {offer.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`text-lg leading-[1.85] ${idx > 0 ? "mt-4" : ""}`}
                >
                  {p}
                </p>
              ))}
              <p className="mt-8 text-[11px] font-medium tracking-[0.24em] text-sage-deep uppercase">
                Vous recevrez
              </p>
              <div className="mt-3 flex flex-col">
                {offer.deliverables.map((d, idx) => (
                  <span
                    key={idx}
                    className="border-t border-sand-line py-3 text-base leading-[1.6]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <h2 className="mt-4 font-serif text-3xl tracking-[-0.015em]">
          Les questions que l&apos;on me pose avant de signer
        </h2>
        <div className="mt-6 grid gap-x-13 sm:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q} className="border-t border-sand py-7">
              <h3 className="mb-2 font-serif text-xl">{item.q}</h3>
              <p className="text-base leading-[1.8] text-body">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-6 flex flex-wrap items-center justify-between gap-11 rounded-[56px] bg-sand px-15 py-18 sm:mx-16">
        <div>
          <h2 className="font-serif text-4xl leading-[1.15] tracking-[-0.015em]">
            Pas sûr de la formule qui vous convient ?
          </h2>
          <p className="mt-3.5 max-w-[32em] text-lg leading-[1.85] text-muted">
            Envie d&apos;en discuter&nbsp;? Dites-moi où vous en êtes, je vous
            oriente — même si la réponse est « attendez encore un peu ».
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
