import Link from "next/link";
import type { ReactNode } from "react";

export function PillLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark";
}) {
  const styles =
    variant === "primary"
      ? "bg-sage text-forest hover:bg-sage-hover"
      : "bg-charcoal text-cream hover:bg-charcoal-hover";
  return (
    <Link
      href={href}
      className={`inline-block whitespace-nowrap rounded-full px-7 py-4 font-semibold no-underline ${styles}`}
    >
      {children}
    </Link>
  );
}
