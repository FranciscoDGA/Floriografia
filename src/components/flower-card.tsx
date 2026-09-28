import Link from "next/link";

import { FlowerVisual } from "@/components/flower-visual";
import { getColor } from "@/lib/content";
import type { Flower } from "@/lib/types";

/**
 * Cartão de flor usado em listagens, páginas de categoria e relacionados.
 * É um link inteiro (card clicável) com foco visível e descrição real da espécie.
 */
export function FlowerCard({ flower, showColors = true }: { flower: Flower; showColors?: boolean }) {
  const hexes = flower.colors
    .map((slug) => getColor(slug)?.hex)
    .filter((hex): hex is string => Boolean(hex));

  return (
    <Link
      href={`/flores/${flower.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-leaf/40 hover:shadow-[0_10px_30px_-18px_rgba(20,67,47,0.55)]"
    >
      <FlowerVisual
        name={flower.name}
        seed={flower.slug}
        hexes={hexes}
        className="aspect-[4/3] w-full"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-leaf group-hover:text-bloom">
            {flower.name}
          </h3>
          {showColors && hexes.length > 0 && (
            <span className="flex items-center gap-1" aria-hidden="true">
              {hexes.slice(0, 3).map((hex) => (
                <span
                  key={hex}
                  className="inline-block size-3 rounded-full border border-line"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-ink-2">{flower.summary}</p>
        <p className="mt-auto pt-1 font-serif text-xs italic text-ink-2/80">{flower.scientificName}</p>
      </div>
    </Link>
  );
}
