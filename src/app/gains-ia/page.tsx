import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Calculer vos Gains IA — POZ Consulting",
};

export default function GainsIaPage() {
  return (
    <PageShell>
      <Nav active="/gains-ia" />

      <div className="px-6 pt-0 pb-24 sm:px-16">
        <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
          Calculer vos Gains IA
        </span>
        <h1 className="mt-6 max-w-[18em] font-serif text-4xl leading-[1.06] tracking-[-0.02em] text-balance sm:text-6xl">
          Bientôt disponible.
        </h1>
        <p className="mt-6 max-w-[34em] text-lg leading-[1.85] text-body sm:text-xl">
          Un simulateur pour estimer le temps et l&apos;argent que l&apos;IA
          peut vous faire gagner. En cours de construction.
        </p>
      </div>

      <Footer />
    </PageShell>
  );
}
