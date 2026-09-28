import Link from "next/link";

interface CategoryCardProps {
  href: string;
  title: string;
  description?: string;
  count?: number;
  /** Cor de destaque (uso em cores) ou tom de apoio. */
  hex?: string;
  /** Rótulo do contador, ex.: "flores". */
  countLabel?: string;
}

/**
 * Cartão genérico para taxonomias (cores, significados, ocasiões, características).
 * Mantém o mesmo ritmo visual dos cartões de flor nas listagens.
 */
export function CategoryCard({ href, title, description, count, hex, countLabel }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-leaf/40 hover:shadow-[0_10px_30px_-18px_rgba(20,67,47,0.55)]"
    >
      {hex && (
        <span
          aria-hidden="true"
          className="block h-10 w-10 rounded-full border border-line"
          style={{ backgroundColor: hex }}
        />
      )}
      <h3 className="font-display text-lg font-semibold text-leaf group-hover:text-bloom">{title}</h3>
      {description && <p className="text-sm leading-relaxed text-ink-2">{description}</p>}
      {typeof count === "number" && (
        <span className="mt-auto pt-1 text-xs font-medium uppercase tracking-wide text-ink-2/80">
          {count} {countLabel ?? "itens"}
        </span>
      )}
    </Link>
  );
}
