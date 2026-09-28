import Link from "next/link";
import type { ReactNode } from "react";

/** Etiqueta/link pequeno usado em listas cruzadas (cores, significados, ocasiões). */
export function TagLink({
  href,
  children,
  tone = "default",
}: {
  href: string;
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  const tones =
    tone === "accent"
      ? "border-bloom/30 bg-bloom/10 text-bloom hover:bg-bloom/20"
      : "border-line bg-white text-ink-2 hover:border-leaf/40 hover:text-leaf";

  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition ${tones}`}
    >
      {children}
    </Link>
  );
}
