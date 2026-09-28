interface FlowerVisualProps {
  name: string;
  /** Cores hex da flor (1 a 3). */
  hexes: string[];
  /** Semente visual — use o slug para o mesmo resultado sempre. */
  seed: string;
  className?: string;
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Ilustração vetorial determinística usada enquanto não há fotografias
 * licenciadas no acervo de mídia. Não simula foto real: é um gráfico autoral.
 */
export function FlowerVisual({ name, hexes, seed, className }: FlowerVisualProps) {
  const hash = hashString(seed);
  const petals = [6, 8, 10][hash % 3];
  const innerPetals = [5, 6, 8][(hash >> 3) % 3];
  const rotation = (hash >> 5) % 360;
  const primary = hexes[0] ?? "#C0486A";
  const secondary = hexes[1] ?? hexes[0] ?? "#E8879E";
  const center = hexes[2] ?? "#E9B44C";
  const id = `fv-${seed.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={`Ilustração gráfica de ${name}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`${id}-bg`} cx="50%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1ebdf" />
        </radialGradient>
        <radialGradient id={`${id}-petal`} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor={secondary} />
          <stop offset="100%" stopColor={primary} />
        </radialGradient>
      </defs>

      <rect width="200" height="200" fill={`url(#${id}-bg)`} />
      <circle cx="100" cy="100" r="74" fill="none" stroke="#e3ddd0" strokeWidth="1.5" />

      <g transform={`rotate(${rotation} 100 100)`}>
        {Array.from({ length: petals }).map((_, i) => (
          <ellipse
            key={`outer-${i}`}
            cx="100"
            cy="52"
            rx="26"
            ry="46"
            transform={`rotate(${(360 / petals) * i} 100 100)`}
            fill={`url(#${id}-petal)`}
            opacity="0.92"
          />
        ))}
      </g>

      <g transform={`rotate(${(rotation + 180) % 360} 100 100)`}>
        {Array.from({ length: innerPetals }).map((_, i) => (
          <ellipse
            key={`inner-${i}`}
            cx="100"
            cy="74"
            rx="15"
            ry="26"
            transform={`rotate(${(360 / innerPetals) * i} 100 100)`}
            fill={secondary}
            opacity="0.75"
          />
        ))}
      </g>

      <circle cx="100" cy="100" r="17" fill={center} />
      <circle cx="100" cy="100" r="17" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2" />
    </svg>
  );
}
