import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Fixa a raiz do projeto para o Turbopack não subir até a pasta do usuário.
  turbopack: { root: rootDir },
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // Caminho editorial antigo: um único destino para guias/artigos.
      { source: "/artigos", destination: "/guias", permanent: true },
      { source: "/artigos/:slug", destination: "/guias/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
