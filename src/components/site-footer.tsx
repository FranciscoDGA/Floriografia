import Link from "next/link";

import { SITE } from "@/lib/site";

interface FooterColumn {
  title: string;
  links: { href: string; label: string }[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { href: "/gestos", label: "Gestos" },
      { href: "/flores", label: "Flores" },
      { href: "/significados", label: "Significados" },
      { href: "/cores", label: "Cores" },
      { href: "/ocasioes", label: "Ocasiões" },
      { href: "/caracteristicas", label: "Características" },
      { href: "/combinacoes", label: "Combinações" },
      { href: "/guias", label: "Guias" },
      { href: "/qual-flor", label: "Qual Flor?" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { href: "/sobre", label: "Sobre" },
      { href: "/metodologia", label: "Metodologia" },
      { href: "/fontes", label: "Fontes" },
      { href: "/politica-editorial", label: "Política Editorial" },
      { href: "/uso-de-ia", label: "Uso de IA" },
      { href: "/correcoes", label: "Correções" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/politica-de-privacidade", label: "Privacidade" },
      { href: "/termos-de-uso", label: "Termos de Uso" },
      { href: "/cookies", label: "Cookies" },
    ],
  },
  {
    title: "Contato",
    links: [
      { href: "/contato", label: "Contato" },
      { href: "/publicidade", label: "Publicidade e parcerias" },
      { href: "/afiliados", label: "Afiliados" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-leaf text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <p className="font-display text-2xl font-semibold">{SITE.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75">{SITE.tagline}.</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{SITE.description}</p>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={`Links: ${column.title}`}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              {column.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/85 underline-offset-4 transition hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Conteúdo informativo, sem vínculo com comércio de flores.
          </p>
          <p>Significados apresentados como tradição cultural, não como fato universal.</p>
        </div>
      </div>
    </footer>
  );
}
