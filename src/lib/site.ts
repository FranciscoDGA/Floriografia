/**
 * Configuração central do site.
 *
 * `NEXT_PUBLIC_SITE_URL` é usada para canonical, sitemap e Open Graph.
 * Em produção defina a URL definitiva na Vercel.
 */
const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const SITE = {
  name: "Floriografia",
  tagline: "A linguagem antiga do amor",
  description:
    "A flor certa para cada gesto: conquistar, pedir desculpas, declarar, reatar ou presenteá-la sem motivo. Significado das flores, buquês e ideias de presente à moda antiga — com romance e intenção.",
  /** Normalizada, sem barra final. */
  url: (envUrl || "https://floriografia.vercel.app").replace(/\/+$/, ""),
  locale: "pt_BR",
  language: "pt-BR",
  author: "Floriografia",
  /**
   * E-mail de contato/efeito. Vazio = o formulário avisa que o canal ainda
   * não está publicado (nada é inventado nem enviado).
   * Configure com NEXT_PUBLIC_CONTACT_EMAIL.
   */
  contactEmail: (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "").trim(),
} as const;

/** Monta uma URL absoluta a partir de um caminho. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const NAV_ITEMS = [
  { href: "/gestos", label: "Gestos" },
  { href: "/flores", label: "Flores" },
  { href: "/significados", label: "Significados" },
  { href: "/ocasioes", label: "Ocasiões" },
  { href: "/cores", label: "Cores" },
  { href: "/combinacoes", label: "Combinações" },
  { href: "/guias", label: "Guias" },
] as const;
