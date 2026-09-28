import Image from "next/image";

import { gestoPhotos } from "@/lib/imagens";

/**
 * Foto do gesto (licenciada, Pexels) quando existe em `src/lib/imagens.ts`.
 * Sem foto, renderiza nada — o cartão continua sóbrio, sem ilustração simulada.
 */
export function GestoMedia({
  slug,
  alt,
  className,
  sizes,
  priority,
}: {
  slug: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const photo = gestoPhotos[slug];
  if (!photo) return null;

  return (
    <div className={`relative overflow-hidden bg-paper-2 ${className ?? ""}`}>
      <Image
        src={photo}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
