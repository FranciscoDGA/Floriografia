import { FlowerCard } from "@/components/flower-card";
import type { Flower } from "@/lib/types";

export function FlowerGrid({ flowers, className = "" }: { flowers: Flower[]; className?: string }) {
  if (flowers.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center text-sm text-ink-2">
        Nenhuma flor publicada nesta categoria por enquanto.
      </div>
    );
  }

  return (
    <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {flowers.map((flower) => (
        <FlowerCard key={flower.slug} flower={flower} />
      ))}
    </div>
  );
}
