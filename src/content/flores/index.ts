import type { Flower } from "@/lib/types";
import { flowersF1 } from "./f1";
import { flowersF2 } from "./f2";
import { flowersF3 } from "./f3";
import { flowersF4 } from "./f4";

/**
 * Acervo publicado de flores.
 * Organizado em lotes apenas para legibilidade — o acervo é uma lista única.
 */
export const flowers: Flower[] = [...flowersF1, ...flowersF2, ...flowersF3, ...flowersF4];
