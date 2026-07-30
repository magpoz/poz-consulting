import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "./contact-form";

export const metadata = {
  title: "Contact — POZ Consulting",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Nav active="/contact" />

      <div className="px-6 pt-22 pb-18 sm:px-16">
        <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
          Contact
        </span>
        <h1 className="mt-6 max-w-[18em] font-serif text-4xl leading-[1.06] tracking-[-0.02em] text-balance sm:text-6xl">
          Racontez-moi ce qui vous prend du temps.
        </h1>
        <p className="mt-6 max-w-[34em] text-lg leading-[1.85] text-body sm:text-xl">
          Vous n&apos;avez rien à préparer. Un message ou trente minutes au
          téléphone suffisent pour que je vous oriente sur ce que l&apos;IA
          peut y changer.
        </p>
      </div>

      <div className="mx-6 mb-21 grid gap-16 rounded-[56px] bg-cream-warm px-15 py-16 sm:mx-16 lg:grid-cols-[1.12fr_0.88fr]">
        <ContactForm />

        <div className="flex flex-col">
          <div className="rounded-[44px] bg-cream p-10">
            <h2 className="mb-2.5 font-serif text-[27px]">
              Ou réserver directement
            </h2>
            <p className="text-base leading-[1.8] text-body">
              Trente minutes en visio, sans engagement. Choisissez le
              créneau qui vous arrange.
            </p>
            <a
              href="#"
              className="mt-5.5 inline-block rounded-full bg-sage px-6 py-3.5 font-semibold text-forest no-underline hover:bg-sage-hover"
            >
              Voir mes disponibilités
            </a>
          </div>
          <div className="pt-8.5">
            <h2 className="mb-3.5 font-serif text-2xl">Mes coordonnées</h2>
            <div className="flex flex-col">
              <span className="border-t border-sand-border-2 py-3 text-base leading-[1.6]">
                contact@poz-consulting.fr
              </span>
              <span className="border-t border-sand-border-2 py-3 text-base leading-[1.6]">
                +33 (0)0 00 00 00 00
              </span>
              <span className="border-t border-b border-sand-border-2 py-3 text-base leading-[1.6]">
                Basée en Île-de-France, déplacements possibles partout en
                France (frais de déplacement facturés).
              </span>
            </div>
          </div>
          <div className="pt-7.5">
            <h2 className="mb-2.5 font-serif text-2xl">Avant notre appel</h2>
            <p className="text-base leading-[1.85] text-muted">
              Rien à préparer. Si vous en avez sous la main, la liste des
              tâches qui vous pèsent le plus rendra l&apos;échange plus
              concret.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </PageShell>
  );
}
