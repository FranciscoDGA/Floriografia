"use client";

import { useMemo, useState } from "react";

import { FlowerCard } from "@/components/flower-card";
import { normalizeText } from "@/lib/content";
import type { Flower } from "@/lib/types";

interface DirectoryColor {
  slug: string;
  name: string;
  hex: string;
}

/**
 * Diretório de flores com filtro local.
 * Todas as flores já vêm renderizadas no HTML: sem JavaScript a lista
 * completa continua visível e utilizável.
 */
export function FlowerDirectory({ flowers, colors }: { flowers: Flower[]; colors: DirectoryColor[] }) {
  const [query, setQuery] = useState("");
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = normalizeText(query);
    return flowers.filter((flower) => {
      if (activeColor && !flower.colors.includes(activeColor)) return false;
      if (!q) return true;
      return normalizeText(`${flower.name} ${flower.scientificName} ${flower.summary}`).includes(q);
    });
  }, [flowers, query, activeColor]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-line bg-white p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <label htmlFor="filtro-flor" className="mb-1.5 block text-sm font-medium text-ink">
              Filtrar flores
            </label>
            <input
              id="filtro-flor"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nome, científico ou descrição"
              className="w-full rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-2/70"
            />
          </div>
          <p className="text-sm text-ink-2" role="status" aria-live="polite">
            {visible.length} {visible.length === 1 ? "flor" : "flores"}
          </p>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-ink">Filtrar por cor principal</legend>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveColor(null)}
              aria-pressed={activeColor === null}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                activeColor === null
                  ? "border-leaf bg-leaf text-white"
                  : "border-line bg-paper text-ink-2 hover:border-leaf/40"
              }`}
            >
              Todas
            </button>
            {colors.map((color) => (
              <button
                key={color.slug}
                type="button"
                onClick={() => setActiveColor((current) => (current === color.slug ? null : color.slug))}
                aria-pressed={activeColor === color.slug}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                  activeColor === color.slug
                    ? "border-leaf bg-leaf text-white"
                    : "border-line bg-paper text-ink-2 hover:border-leaf/40"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="inline-block size-3 rounded-full border border-line"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((flower) => (
            <FlowerCard key={flower.slug} flower={flower} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center">
          <p className="font-display text-lg text-leaf">Nenhuma flor corresponde a esse filtro.</p>
          <p className="mt-2 text-sm text-ink-2">Tente outro termo ou limpe a cor selecionada.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setActiveColor(null);
            }}
            className="mt-4 rounded-full border border-line bg-paper px-4 py-2 text-sm text-leaf hover:border-leaf/40"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}
