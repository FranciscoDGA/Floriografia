# Floriografia

Enciclopédia brasileira de flores: significados, cores, aromas, ocasiões, cuidados e combinações — organizada como base de conhecimento (flores ↔ taxonomias ↔ guias), não como lista de artigos soltos.

Site estático, em português do Brasil, sem cadastro, sem anúncios e sem rastreamento de terceiros.

## Stack

- **Next.js 16** (App Router, Turbopack, React Server Components)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens em `src/app/globals.css`)
- Fonts: **Fraunces** (títulos) e **Inter** (texto), via `next/font/google`
- Sem base de dados em produção: o conteúdo é versionado em código (`src/content`) e gerado em `build`

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start          # serve o build
npm run lint       # eslint
npx next typegen   # gera tipos de rota (LayoutProps etc.)
npx tsc --noEmit   # typecheck
```

> A checagem de integridade de conteúdo roda na importação de `src/lib/content.ts`: se algum relacionamento estiver quebrado, **o build falha de propósito**.

## Variáveis de ambiente

Veja `.env.example`:

| Variável | Obrigatória | Efeito |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | Canonical, Open Graph, sitemap e robots |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Opcional | Com ela, `/contato` e `/correcoes` abrem o e-mail do usuário com a mensagem pronta. Sem ela, o formulário valida e **avisa que nada foi enviado** |

## Estrutura

```
src/
  app/            # rotas (listagens, detalhes, institucionais, legais, sitemap, robots)
  components/     # shell, cards, busca, JSON-LD, formulários
  content/        # conteúdo versionado: flores/, artigos/, taxonomias/
  lib/            # types, site, content (queries + integridade), seo, jsonld
```

## Rotas principais

- Descoberta: `/flores`, `/significados`, `/cores`, `/ocasioes`, `/caracteristicas`, `/combinacoes` (+ detalhes com `[slug]`)
- Editorial: `/guias` (+ `[slug]`); `/artigos` **redireciona** para `/guias` (308)
- Utilidade: `/buscar` (noindex), `/qual-flor` (em construção, noindex)
- Institucional: `/sobre`, `/contato`, `/fontes`, `/metodologia`, `/correcoes`
- Transparência: `/politica-editorial`, `/uso-de-ia`, `/afiliados`, `/publicidade`
- Legal: `/politica-de-privacidade`, `/termos-de-uso`, `/cookies`
- SEO técnico: `sitemap.xml`, `robots.txt`, `opengraph-image`, `not-found`, `loading`, `error`

## Conteúdo

- **40 flores**, **10 significados**, **9 cores**, **11 ocasiões**, **9 características**, **10 combinações**, **7 guias**
- Todo conteúdo publicado tem `status`, `seo.title`, `seo.description` e `updatedAt`
- Simbolismo é sempre enquadrado como **tradição cultural**, nunca como fato científico
- Sem fotos reais disponíveis: as cartas de flor usam ilustração SVG determinística (`FlowerVisual`)

## Pendências declaradas

1. Envio real de formulários (canal de e-mail por variável de ambiente / backend)
2. Painel de conteúdo e banco de dados (`/admin` não existe nesta versão)
3. Roteador "Qual Flor?" funcional (hoje é página informativa honesta)
4. Revisão bibliográfica por entrada (`/fontes` declara o estado atual)
5. Imagens reais de flores no lugar da ilustração vetorial
6. Analytics/publicidade: **não instalados por decisão** (nenhum serviço de terceiros carregado)

## Deploy

```bash
npm run build && npm start
```

Na Vercel: defina `NEXT_PUBLIC_SITE_URL` com o domínio final. Nenhuma outra variável é necessária.
