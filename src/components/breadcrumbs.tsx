import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, type Crumb } from "@/lib/jsonld";

/**
 * Breadcrumbs com JSON-LD BreadcrumbList.
 * O primeiro item é sempre a home.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Início", path: "/" }, ...items];

  return (
    <nav aria-label="Navegação estrutural" className="container-page pt-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-2">
        {all.map((item, index) => {
          const last = index === all.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              )}
              {last ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-bloom hover:underline underline-offset-4">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </nav>
  );
}
