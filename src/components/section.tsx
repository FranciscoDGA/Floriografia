import Link from "next/link";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  /** Texto curto de apoio, opcional. */
  description?: string;
  /** Link "ver tudo" no canto superior da seção. */
  href?: string;
  linkLabel?: string;
  children: ReactNode;
  id?: string;
}

/**
 * Seção padrão das páginas: título semântico, apoio opcional e slot de conteúdo.
 * Mantém ritmo vertical e largura consistentes em todo o site.
 */
export function Section({ title, description, href, linkLabel, children, id }: SectionProps) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="py-10 md:py-14">
      <div className="container-page">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2
              id={id ? `${id}-title` : undefined}
              className="font-display text-2xl font-semibold tracking-tight text-leaf md:text-3xl"
            >
              {title}
            </h2>
            {description && <p className="mt-2 text-ink-2 md:text-lg">{description}</p>}
          </div>
          {href && (
            <Link
              href={href}
              className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-medium text-leaf transition hover:border-leaf hover:bg-white"
            >
              {linkLabel ?? "Ver tudo"}
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
