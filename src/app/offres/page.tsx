import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { PillLink } from "@/components/pill-link";

const offers = [
  {
    number: "01",
    title: "Fondation",
    subtitle: "Audit IA",
    price: "sur devis",
    detail: "Restitution en deux semaines.",
    forWho:
      "Dirigeants et indépendants débordés par l'opérationnel, qui soupçonnent des pertes de temps, d'efficacité et d'argent sans pouvoir les chiffrer.",
    cta: "Demander cet audit",
    paragraphs: [
      "J'étudie votre fonctionnement, les outils que vous utilisez et tout ce qui ralentit votre activité au quotidien. Mon objectif est simple : identifier où vous pouvez gagner en efficacité, retrouver du temps et réaliser des économies.",
      "Puis je vous remets un plan d'action clair : ce qui mérite d'être optimisé, dans quel ordre, le temps et le budget à prévoir, ainsi que les économies réalisables à court et moyen terme.",
      "Nous parcourons ensuite ce document ensemble, lors d'un rendez-vous d'une heure.",
    ],
    deliverables: [
      "La cartographie de vos modes de fonctionnement",
      "Les points de friction classés selon leur impact et la détection des tâches chronophages",
      "Des recommandations priorisées et chiffrées, avec un calcul du ROI potentiel et une feuille de route claire pour la mise en œuvre",
      "Une heure de restitution commentée",
    ],
  },
  {
    number: "02",
    title: "Mise en œuvre",
    subtitle: "Implémentation",
    price: "sur devis",
    detail: "Par périmètre automatisé.",
    forWho:
      "Particuliers et toute structure qui ont besoin de gagner du temps, de l'argent et de l'énergie grâce à l'implémentation d'outils IA.",
    cta: "Parler de mon cas",
    paragraphs: [
      "Une fois les priorités définies, je construis les automatisations qui prennent en charge les tâches répétitives de votre quotidien.",
      "Prospection, CRM, devis, relances, reporting, gestion logistique, transferts entre vos logiciels… chaque solution est conçue pour s'intégrer naturellement à votre façon de travailler, avec une expérience fluide. Cela peut prendre la forme d'un assistant IA interne, entraîné sur vos propres documents pour répondre avec vos informations plutôt que des réponses génériques, de l'implémentation de vos processus métier ou encore de chatbots pour améliorer l'expérience de vos clients.",
      "Mon objectif n'est pas de remplacer l'humain mais plutôt de lui rendre du temps pour se concentrer sur ce qui crée réellement de la valeur. Chaque solution est documentée, compréhensible et entièrement modulable : vous restez propriétaire de votre fonctionnement.",
    ],
    deliverables: [
      "Des automatisations conçues sur mesure, testées sur vos cas d'usage",
      "Une documentation claire, rédigée en français",
      "Une session de formation pour utiliser les outils IA",
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
      "Pour celles et ceux qui préfèrent me confier la création de leur site ou leur application sur mesure, faute de temps, de compétences techniques ou d'appétence pour le sujet.",
    cta: "Décrire mon besoin",
    paragraphs: [
      "Votre site internet ou votre application prend forme à partir de votre besoin réel, avec des points d'étape validés ensemble sur une feuille de route claire. La démarche s'appuie sur votre code de marque (votre image de marque, votre personnalité, votre palette de couleurs) pour construire une charte graphique sur mesure, remise à l'issue de la prestation.",
      "Afin de parfaire cette expérience, si vous le souhaitez, je viens capter quelques images de vous, chez vous, telles que vous êtes vraiment, pour que le site vous ressemble, jusqu'au visage qui incarne déjà votre marque. Je peux aussi créer votre avatar : une version stylisée de vous, façonnée à partir de vos photos, que vous utilisez comme bon vous semble : site internet, réseaux sociaux, supports de communication.",
    ],
    deliverables: [
      "Votre site ou votre application en fonctionnement, hébergé",
      "Une feuille de route avec points d'étape validés ensemble",
      "Une charte graphique de marque, définie avec vous",
      "La capacité de le faire évoluer en autonomie et 30 jours d'accompagnement après la mise en ligne",
    ],
  },
  {
    number: "04",
    title: "Transmission",
    subtitle: "Formation",
    price: "sur devis",
    detail: "Par jour, jusqu'à 10 participants, en distanciel.",
    forWho:
      "Particuliers ou toute structure qui souhaite comprendre l'univers de l'IA générative.",
    cta: "Organiser une journée",
    paragraphs: [
      "Une journée pour que vos équipes comprennent vraiment ce qu'est l'IA générative et les agents conversationnels — au-delà de l'usage superficiel. On aborde les bonnes pratiques, les techniques de rédaction de prompt et surtout un usage éthique et responsable : ce qu'on peut lui confier, ce qu'on doit vérifier, où poser les limites.",
      "Objectif : cadrer les usages, prévenir le shadow IA (l'usage de l'IA par les salariés sans approbation de l'Entreprise) et donner à chacun des réflexes solides et responsables.",
    ],
    deliverables: [
      "Une journée animée en distanciel",
      "Une méthode de prompt complète, transmise à vos équipes plutôt que des prompts clés en main",
      "Une documentation sur le cadre d'usage éthique de l'IA",
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
      "Pas d'abonnement, pas d'engagement récurrent : chaque intervention est cadrée et facturée pour ce qu'elle est, quand vous en avez besoin. Vous êtes libre de me contacter pour développer une nouvelle fonctionnalité, corriger un bug complexe ou obtenir un conseil stratégique sur l'évolution de vos systèmes.",
      "Selon votre besoin, cela prendra la forme d'une intervention ciblée.",
    ],
    deliverables: [
      "Après un brief établi et validé par les parties prenantes, une réponse sous 24 à 48h pour cadrer la prestation et un devis clair avant toute intervention",
      "Une intervention ciblée, sans repartir de zéro",
      "Une interlocutrice privilégiée qui connaît déjà votre projet",
    ],
  },
  {
    number: "06",
    title: "Transformation",
    subtitle: "Accompagnement complet",
    price: "sur devis",
    detail: "Après l'audit, sur la durée du projet.",
    forWho:
      "Dirigeants qui, une fois l'audit posé, veulent transformer l'ensemble de leur organisation plutôt qu'un seul pan à la fois.",
    cta: "Envisager l'ensemble",
    paragraphs: [
      "Une fois la Fondation posée, nous choisissons ensemble l'ordre et le rythme des formules qui feront le plus de différence pour construire une organisation fluide et cohérente : implémentation de solutions et agents IA, développement digital, formation.",
      "Chaque formule reste indépendante et possède sa propre force mais combinez-les : leur impact se démultiplie. Ce que l'audit révèle nourrit l'implémentation des solutions ; ce que l'implémentation libère finance la formation. Et ce que la formation transmet pérennise votre productivité, protège vos données et vous rend autonome dans l'usage de l'IA.",
    ],
    deliverables: [
      "Un fil conducteur unique entre les cinq formules, pensé sur mesure",
      "Un rythme adapté à votre réalité, pas un calendrier imposé",
      "Un point d'étape régulier pour ajuster la trajectoire",
      "Un accompagnement qui reste à vos côtés jusqu'à ce que vous soyez autonome",
    ],
  },
];

const faq = [
  {
    q: "Faut-il commencer par l'audit ?",
    a: "Non mais c'est souvent ce que je recommande. Un audit permet d'éviter de construire une solution avant d'avoir identifié le véritable problème. Il révèle les points de friction, les habitudes qui fonctionnent déjà et les optimisations qui auront le plus d'impact. En revanche, si votre besoin est clairement identifié et que nous partageons le même diagnostic, nous pouvons passer directement à l'action.",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Oui. La confidentialité fait partie intégrante de ma démarche. Avant toute mission, nous définissons précisément quelles informations peuvent être utilisées, lesquelles doivent rester dans votre environnement et quels outils sont adaptés à votre niveau d'exigence. L'objectif est simple : vous permettre de bénéficier de l'intelligence artificielle sans perdre le contrôle de vos données et en respectant la RGPD.",
  },
  {
    q: "Et si mon équipe est réticente ?",
    a: "C'est une réaction que je rencontre régulièrement et je la comprends. L'intelligence artificielle fait évoluer les habitudes de travail à un rythme inédit. Il est naturel que certaines personnes s'interrogent, expriment des réserves ou craignent de perdre leurs repères. Mon rôle n'est pas d'imposer une solution mais d'accompagner les personnes concernées afin qu'elles en comprennent l'intérêt, se l'approprient et y voient un véritable soutien dans leur quotidien.",
  },
  {
    q: "Les prix sont-ils fermes ?",
    a: "Oui, une fois le périmètre défini. Chaque formule bénéficie d'un accompagnement sur mesure car aucune entreprise n'a les mêmes contraintes ni les mêmes objectifs. Le prix reflète ce qui est réellement construit pour vous. C'est pourquoi je ne propose pas de tarif générique. Avant toute intervention, nous cadrons ensemble précisément le contenu de la mission et le périmètre d'action dans le devis.",
  },
];

export default function OffresPage() {
  return (
    <PageShell>
      <Nav active="/offres" />

      <div className="px-6 pt-0 pb-4 sm:px-16">
        <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
          Les offres
        </span>
        <h1 className="mt-6 max-w-[19em] font-serif text-2xl leading-[1.06] tracking-[-0.02em] text-balance sm:text-4xl">
          Cinq formules indépendantes. Chacune a sa force.
          <br />
          <span className="text-copper">
            Combinez-les&nbsp;: leur impact se démultiplie.
          </span>
        </h1>
        <p className="mt-6 text-base leading-[1.6] text-body text-justify sm:text-lg">
          Chaque formule est indépendante et complémentaire à la fois. Dans le
          cas où vous souhaitez de la clarté et que vous ne savez pas par quel
          chantier commencer, je vous recommande la formule Fondation&nbsp;:
          un Audit IA cartographie votre fonctionnement et pose des bases
          solides pour choisir, en connaissance de cause, les formules à
          enchaîner.
        </p>
      </div>

      <div className="mx-6 grid grid-cols-1 gap-3 sm:mx-16 sm:grid-cols-3">
        {offers.map((offer) => (
          <a
            key={offer.number}
            href={`#offre-${offer.number}`}
            className="truncate rounded-full bg-sand px-3 py-2.5 text-center text-[10px] font-medium tracking-[0.1em] text-muted uppercase no-underline hover:bg-sand-line sm:px-4 sm:text-[11px] sm:tracking-[0.12em]"
          >
            {offer.number} {offer.subtitle}
          </a>
        ))}
      </div>

      <div className="px-6 pt-0 pb-6 sm:px-16">
        {offers.map((offer, i) => (
          <div
            key={offer.number}
            id={`offre-${offer.number}`}
            className={`grid scroll-mt-10 gap-6 py-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-13 ${
              i < offers.length - 1 ? "border-b border-sand" : ""
            }`}
          >
            <div>
              <span className="text-sm font-medium tracking-[0.14em] text-copper">
                {offer.number}
              </span>
              <h2 className="mt-1.5 font-serif text-4xl leading-[1.15]">
                {offer.title}
              </h2>
              <p className="mt-2.5 inline-block bg-copper/20 px-2 py-0.5 text-sm font-medium tracking-[0.24em] text-charcoal uppercase">
                {offer.subtitle}
              </p>
              <p className="mt-4 font-serif text-2xl">{offer.price}</p>
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
                  className={`text-base leading-[1.6] sm:text-lg ${idx > 0 ? "mt-4" : ""}`}
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

      <div className="mx-6 rounded-[40px] bg-sand px-7 pt-7 pb-4 text-center sm:mx-16 sm:px-10 sm:pt-10 sm:pb-6 sm:text-left">
        <h2 className="font-serif text-4xl leading-[1.15] tracking-[-0.015em]">
          Quelle formule choisir ?
        </h2>
        <p className="mt-3.5 text-base leading-[1.6] text-muted sm:text-lg">
          C&apos;est justement mon rôle de vous aider à y voir clair.
          Expliquez-moi simplement votre situation, vos difficultés ou vos
          objectifs. Je vous orienterai vers la formule la plus adaptée,
          même si cela signifie vous conseiller d&apos;attendre, de commencer
          plus modestement ou de ne rien mettre en place pour le moment.
        </p>
        <div className="mt-4 text-center">
          <PillLink href="/contact" variant="dark">
            Parlons de votre activité
          </PillLink>
        </div>
      </div>

      <div className="h-21" />

      <Footer />
    </PageShell>
  );
}
