/**
 * Modelo de domínio da Floriografia.
 *
 * Estes tipos espelham o modelo de banco descrito em `supabase/migrations`.
 * A camada de conteúdo (`src/content`) implementa esta interface hoje; a
 * migração para Supabase substitui apenas a camada de leitura em
 * `src/lib/content.ts`, sem alterar páginas nem componentes.
 */

export type ContentStatus = "draft" | "review" | "published" | "archived";

/** Campos de SEO presentes em toda entidade publicável. */
export interface Seo {
  title: string;
  description: string;
  /** Caminho local da imagem social (Open Graph). Opcional. */
  image?: string;
}

export interface BaseEntity {
  slug: string;
  name: string;
  status: ContentStatus;
  seo: Seo;
  /** Data da última edição em formato ISO (YYYY-MM-DD). */
  updatedAt: string;
}

/* ------------------------------------------------------------------ */
/* Taxonomias                                                          */
/* ------------------------------------------------------------------ */

export interface Color extends BaseEntity {
  /** Cor hexadecimal usada no cartão e nos gráficos. */
  hex: string;
  /** Texto objetivo sobre o que esta cor costuma comunicar. */
  description: string;
  /** Ressalva cultural/histórica, quando aplicável. */
  caveat?: string;
}

export interface Meaning extends BaseEntity {
  description: string;
  /** Contexto cultural ou tradicional, quando o simbolismo não é universal. */
  caveat?: string;
}

export interface Occasion extends BaseEntity {
  description: string;
  /** Critérios práticos para escolher a flor na ocasião. */
  guidance: string[];
}

export interface Season extends BaseEntity {
  /** Ex.: "dezembro a março (verão no hemisfério sul)". */
  period: string;
  description: string;
}

export interface Aroma extends BaseEntity {
  description: string;
}

export interface Characteristic extends BaseEntity {
  description: string;
  /** Ressalva de segurança ou cultural, quando aplicável. */
  caveat?: string;
}

/* ------------------------------------------------------------------ */
/* Florez                                                              */
/* ------------------------------------------------------------------ */

export type AromaIntensity = "sem-perfume" | "leve" | "moderado" | "intenso";
export type Durability = "curta" | "media" | "longa";

export type CareTopic =
  | "rega"
  | "luz"
  | "substrato"
  | "poda"
  | "temperatura"
  | "fertilizacao"
  | "pragas"
  | "vaso"
  | "manejo";

export interface CareItem {
  topic: CareTopic;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AromaInfo {
  intensity: AromaIntensity;
  /** Slugs de `src/content/taxonomias/aromas.ts`. */
  notes: string[];
}

export interface Flower extends BaseEntity {
  /** Nome popular em português. */
  scientificName: string;
  family: string;
  /** Origem/distribuição natural conhecida. */
  origin: string;
  /** Frase de apresentação usada em cartões e meta description. */
  summary: string;
  /** Parágrafo de abertura da página. */
  intro: string;
  /** Parágrafos descritivos (botânica, cultivo, uso). */
  description: string[];
  /** Simbolismo tradicional, sempre com enquadramento cultural. */
  symbolism: string;
  /** Slugs de `cores`. A primeira cor é a cor principal. */
  colors: string[];
  /** Slugs de `significados`. */
  meanings: string[];
  /** Slugs de `ocasioes`. */
  occasions: string[];
  /** Slugs de `estacoes` — melhor época de floração/oferta. */
  seasons: string[];
  /** Slugs de `caracteristicas`. */
  characteristics: string[];
  aroma: AromaInfo;
  durability: Durability;
  /** Observação honesta sobre conservação, quando houver algo útil a dizer. */
  durationNote?: string;
  /** Altura da planta adulta, quando o valor é conhecido. */
  height?: string;
  care: CareItem[];
  curiosities: string[];
  faqs: FaqItem[];
  /** Slugs de flores realmente relacionadas (mesma família, uso ou simbolismo). */
  relatedFlowers: string[];
}

/* ------------------------------------------------------------------ */
/* Combinações                                                         */
/* ------------------------------------------------------------------ */

export interface Combination extends BaseEntity {
  /** Ex.: ["rosa", "peonia"] — sempre dois ou mais slugs de flores. */
  flowerSlugs: string[];
  description: string;
  /** Quando a combinação funciona bem, em uma frase. */
  tip?: string;
}

/* ------------------------------------------------------------------ */
/* Artigos / guias                                                     */
/* ------------------------------------------------------------------ */

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Article extends BaseEntity {
  /** Título exibido na página (igual ao SEO title quando fizer sentido). */
  title: string;
  excerpt: string;
  sections: ArticleSection[];
  /** Slugs de flores, cores, significados ou ocasiões citados no texto. */
  related: {
    flowers?: string[];
    colors?: string[];
    meanings?: string[];
    occasions?: string[];
    characteristics?: string[];
  };
  faqs?: FaqItem[];
}

/** Tipos de entidade que podem ser alvo de uma FAQ (espelha CHECK no banco). */
export type FaqSubjectType = "flower" | "color" | "meaning" | "occasion" | "article";
