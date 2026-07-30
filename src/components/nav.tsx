import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/offres", label: "Offres" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Nav({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-10 px-6 pt-9 pb-7 sm:px-16">
      <Link href="/" className="flex flex-col gap-1 no-underline">
        <span className="font-serif text-2xl tracking-[0.02em] text-charcoal">
          POZ<em className="text-copper not-italic italic">{" "}Consulting</em>
        </span>
        <span className="text-[9px] font-medium tracking-[0.26em] text-muted-2">
          ARCHITECTE DE SOLUTIONS IA ET NO-CODE
        </span>
      </Link>
      <div className="flex flex-wrap items-center gap-8 text-sm font-medium">
        {links.map((link) => {
          const isActive = link.href === active;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 no-underline ${
                isActive ? "text-charcoal" : "text-muted-2 hover:text-charcoal"
              }`}
            >
              {isActive && (
                <span className="h-[5px] w-[5px] rounded-full bg-copper-2" />
              )}
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="rounded-full bg-sage px-5 py-2.5 font-semibold text-forest no-underline hover:bg-sage-hover"
        >
          Faisons connaissance
        </Link>
      </div>
    </div>
  );
}
