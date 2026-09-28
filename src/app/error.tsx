"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // O erro é reportado automaticamente pelo Next.js no console do servidor.
    console.error(error);
  }, [error]);

  return (
    <div className="container-page max-w-2xl py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bloom">Erro</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-leaf md:text-4xl">
        Algo deu errado ao carregar esta página.
      </h1>
      <p className="mt-4 leading-relaxed text-ink-2">
        Não é culpa sua. Você pode tentar novamente — se o problema continuar, o endereço pode estar com um
        erro.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-leaf px-6 py-3 text-sm font-medium text-white hover:bg-leaf-2"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-full border border-line bg-white px-6 py-3 text-sm text-leaf hover:border-leaf/40"
        >
          Voltar ao início
        </Link>
      </div>
      {error.digest && <p className="mt-6 text-xs text-ink-2">Código: {error.digest}</p>}
    </div>
  );
}
