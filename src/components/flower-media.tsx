import Image from "next/image";

import { FlowerVisual } from "@/components/flower-visual";
import { flowerPhotos } from "@/lib/imagens";

interface FlowerMediaProps {
  /** Slug da flor — usado para achar a foto licenciada e como semente do fallback. */
  slug: string;
  name: string;
  /** Cores hex (1 a 3) usadas apenas no fallback vetorial. */
  hexes: string[];
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Mídia da flor: fotografia licenciada (Pexels) quando existe em
 * `src/lib/imagens.ts`; caso contrário, a ilustração vetorial autoral.
 * Nunca simula foto — o fallback é um gráfico declaradamente gráfico.
 */
export function FlowerMedia({ slug, name, hexes, className, sizes, priority }: FlowerMediaProps) {
  const photo = flowerPhotos[slug];

  if (!photo) {
    return <FlowerVisual name={name} seed={slug} hexes={hexes} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-paper-2 ${className ?? ""}`}>
      <Image
        src={photo}
        alt={`Foto de ${name}`}
        fill
        sizes={sizes ?? "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
