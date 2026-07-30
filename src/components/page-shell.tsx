import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[1080px] px-4 py-8 sm:py-12">
      <div className="overflow-hidden rounded-[40px] bg-cream text-charcoal shadow-[0_18px_48px_rgba(58,64,61,0.14)]">
        {children}
      </div>
    </div>
  );
}
