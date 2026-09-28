import { Breadcrumbs } from "@/components/breadcrumbs";
import type { Crumb } from "@/lib/jsonld";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
  /** Texto pequeno acima do título (ex.: "Enciclopédia"). */
  eyebrow?: string;
}

/** Cabeçalho padrão de página interna: breadcrumb + h1 + resumo. */
export function PageHeader({ title, description, breadcrumbs, eyebrow }: PageHeaderProps) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div className="container-page pb-8 pt-6">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-bloom">{eyebrow}</p>
        )}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-leaf md:text-4xl">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-2 md:text-lg">{description}</p>}
      </div>
    </>
  );
}
