import type { Article } from "@/lib/types";

import { articles as g1 } from "./g1";
import { articles as g2 } from "./g2";
import { articles as g3 } from "./g3";
import { articles as g4 } from "./g4";
import { articles as n1 } from "./n1";
import { articles as n2 } from "./n2";
import { articles as n3 } from "./n3";
import { articles as n4 } from "./n4";
import { articles as n5 } from "./n5";

/**
 * Agregador dos artigos editoriais da Floriografia.
 * (Dividido em arquivos para permitir edição paralela.)
 */
export const articles: Article[] = [...g1, ...g2, ...g3, ...g4, ...n1, ...n2, ...n3, ...n4, ...n5];
