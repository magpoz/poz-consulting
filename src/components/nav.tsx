"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/offres", label: "Offres" },
  { href: "/gains-ia", label: "Gains IA" },
  { href: "/le-mag", label: "Le Mag" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Nav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 pt-9 pb-7 sm:px-16">
      <div className="flex flex-wrap items-baseline justify-between gap-10">
        <Link
          href="/"
          className="flex flex-col gap-1 no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-2xl tracking-[0.02em] text-charcoal">
            POZ<em className="text-copper not-italic italic">{" "}Consulting</em>
          </span>
          <span className="text-[9px] font-medium tracking-[0.26em] text-muted-2">
            ARCHITECTE DE SOLUTIONS IA ET NO-CODE
          </span>
        </Link>

        <div className="hidden items-center gap-x-8 gap-y-4 text-sm font-medium lg:flex">
          {links.map((link) => {
            const isActive = link.href === active;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-2 py-1 no-underline transition-colors duration-[250ms] ${
                  isActive
                    ? "text-charcoal"
                    : "text-petrol hover:text-sage-deep"
                }`}
              >
                {isActive && (
                  <span className="h-[5px] w-[5px] rounded-full bg-copper-2" />
                )}
                {link.label}
                <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-sage-deep transition-transform duration-[250ms] ease-out group-hover:scale-x-100" />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border-2 border-sage bg-transparent px-5 py-2.5 font-semibold text-forest no-underline transition-colors duration-[250ms] hover:bg-sage"
          >
            Parlons de votre activité
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sage text-forest lg:hidden"
        >
          {open ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1L17 17M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 1H18M0 7H18M0 13H18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="mt-6 flex flex-col items-start gap-5 text-sm font-medium lg:hidden"
        >
          {links.map((link) => {
            const isActive = link.href === active;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 no-underline ${
                  isActive ? "text-charcoal" : "text-petrol"
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
            onClick={() => setOpen(false)}
            className="w-full rounded-full border-2 border-sage bg-transparent px-5 py-2.5 text-center font-semibold text-forest no-underline hover:bg-sage sm:w-auto"
          >
            Parlons de votre activité
          </Link>
        </div>
      )}
    </div>
  );
}
