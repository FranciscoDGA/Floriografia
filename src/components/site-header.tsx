"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { NAV_ITEMS } from "@/lib/site";

/** Cabeçalho responsivo. É o único componente client do shell — o resto da página é servido. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-leaf"
          aria-label="Floriografia — página inicial"
        >
          Floriografia
          <span aria-hidden="true" className="ml-2 hidden text-xs font-normal uppercase tracking-[0.2em] text-ink-2 sm:inline">
            a linguagem das flores
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  active ? "bg-leaf/10 font-medium text-leaf" : "text-ink-2 hover:bg-white hover:text-leaf"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/buscar"
            className="rounded-full border border-line bg-white px-3 py-2 text-sm text-ink-2 transition hover:border-leaf/40 hover:text-leaf"
          >
            Buscar
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="rounded-full border border-line bg-white px-3 py-2 text-sm text-ink lg:hidden"
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navegação principal (celular)"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <ul className="container-page grid gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}
                className="block rounded-lg px-3 py-2.5 text-base text-ink hover:bg-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/qual-flor"
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base text-ink hover:bg-white"
            >
              Qual Flor?
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
