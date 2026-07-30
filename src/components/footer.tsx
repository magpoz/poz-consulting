import Link from "next/link";

export function Footer() {
  return (
    <div className="flex flex-wrap justify-between gap-5 bg-sand px-6 py-8 text-[13px] text-muted sm:px-16">
      <span>POZ Consulting · Architecte de solutions IA et No-Code</span>
      <span className="flex gap-6">
        <a href="mailto:contact@poz-consulting.fr" className="text-petrol-2 no-underline">
          contact@poz-consulting.fr
        </a>
        <Link href="/offres" className="text-petrol-2 no-underline">
          Offres
        </Link>
        <Link href="/a-propos" className="text-petrol-2 no-underline">
          À propos
        </Link>
        <a href="https://doolipaw.com" className="text-petrol-2 no-underline">
          doolipaw.com
        </a>
      </span>
    </div>
  );
}
