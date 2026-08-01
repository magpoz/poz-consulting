import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Le Mag — POZ Consulting",
};

export default function LeMagPage() {
  return (
    <PageShell>
      <Nav active="/le-mag" />

      <div className="px-6 pt-0 pb-24 sm:px-16">
        <span className="text-[11px] font-medium tracking-[0.3em] text-copper uppercase">
          Le Mag
        </span>
        <h1 className="mt-6 max-w-[18em] font-serif text-4xl leading-[1.06] tracking-[-0.02em] text-balance sm:text-6xl">
          Bientôt disponible.
        </h1>
        <p className="mt-6 max-w-[34em] text-base leading-[1.6] text-body sm:text-lg">
          Actualités IA, tutoriels gratuits et décryptage du lexique de
          l&apos;intelligence artificielle. En cours de construction.
        </p>
      </div>

      <Footer />
    </PageShell>
  );
}
