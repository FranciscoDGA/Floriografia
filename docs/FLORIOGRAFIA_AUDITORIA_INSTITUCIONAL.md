# Auditoria — Floriografia (versão atual)

**Data:** 27 de setembro de 2026
**Escopo:** fundação, modelo de conteúdo, páginas de descoberta, páginas institucionais/legais/editoriais, navegação e SEO técnico.
**Método:** verificação executada por script — `npx next typegen`, `npx tsc --noEmit`, `npm run lint`, `npm run build` e varredura HTTP do build de produção.

---

## 1. Resultado das verificações

| Verificação | Resultado |
| --- | --- |
| `npx tsc --noEmit` | 0 erros |
| `npm run lint` (eslint + regras Next/React Hooks) | 0 erros, 0 avisos |
| `npm run build` | sucesso — **124 páginas geradas**; apenas `/buscar` é dinâmica (todas as demais estáticas/SSG) |
| `sitemap.xml` | **117 URLs** (todas as páginas publicadas; `/buscar` excluída) |
| `robots.txt` | `Allow: /` + `Disallow: /buscar` + sitemap absoluto |
| Varredura de links internos | **120 páginas visitadas, 0 links quebrados** (único redirect: `/artigos` → `/guias`, 308) |
| Páginas de amostra testadas | `/`, `/flores/rosa`, `/flores/inexistente`, `/significados/amor`, `/cores/vermelho`, `/ocasioes/dia-das-maes`, `/caracteristicas/toxica`, `/combinacoes/rosa-e-peonia`, `/guias/o-que-e-floriografia`, `/buscar?q=amor`, `/qual-flor`, 13 institucionais/legais, `/sitemap.xml`, `/robots.txt`, `/opengraph-image` |

Conferências específicas realizadas: `canonical` presente, `og:title` presente, JSON-LD `FAQPage` + `BreadcrumbList` na página de flor, `<h1>` único, `lang="pt-BR"`, skip-link `#conteudo`, `<header>`/`<footer>` no shell, `robots: noindex` em `/buscar`, `/contato`, `/correcoes` e `/qual-flor`.

**Não verificado nesta rodada:** QA visual em navegador real (screenshots), Lighthouse/Core Web Vitals, auditoria automatizada de acessibilidade (axe) e testes E2E. Itens listados na seção 5.

---

## 2. Checklist por área

### 2.1 Fundação e stack — IMPLEMENTADO

| Item | Status |
| --- | --- |
| Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind v4 | IMPLEMENTADO |
| `src/` + alias `@/*` + scripts `dev/build/start/lint` | IMPLEMENTADO |
| Consulta da documentação versionada em `node_modules/next/dist/docs/` (`params` como `Promise`, `LayoutProps` via typegen) | IMPLEMENTADO |
| `turbopack.root` fixado na raiz do projeto (evita subir até a pasta do usuário) | IMPLEMENTADO |
| `redirects` de `/artigos` e `/artigos/:slug` para `/guias` (308) | IMPLEMENTADO |
| Variáveis de ambiente documentadas (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_CONTACT_EMAIL`) + `.env.example` | IMPLEMENTADO |

### 2.2 Modelo de dados e conteúdo — IMPLEMENTADO

| Item | Status |
| --- | --- |
| Modelo de domínio (`src/lib/types.ts`): `Flower`, `Color`, `Meaning`, `Occasion`, `Characteristic`, `Combination`, `Article`, SEO, FAQ, cuidados | IMPLEMENTADO |
| 40 flores completas (identificação, cores, significados, ocasiões, estações, características, aroma, durabilidade, cuidados, curiosidades, FAQ, relacionadas) | IMPLEMENTADO |
| 10 significados, 9 cores, 11 ocasiões, 9 características, 4 estações, 6 aromas, 10 combinações, 7 guias | IMPLEMENTADO |
| Integridade referencial validada **na importação do módulo** (build quebra com slug quebrado) | IMPLEMENTADO |
| Todo conteúdo publicado com `status`, `seo.title`, `seo.description`, `updatedAt` | IMPLEMENTADO |
| Simbolismo sempre enquadrado como tradição cultural, com `caveat` onde aplicável | IMPLEMENTADO |
| Nenhum dado institucional inventado (CNPJ, equipe, endereço, prêmios, certificações) | IMPLEMENTADO |
| Painel de conteúdo / banco de dados (Supabase, `/admin`) | **PENDENTE** |
| Revisão bibliográfica por entrada (declaração explícita em `/fontes`) | **PENDENTE** |

### 2.3 Shell, navegação e design — IMPLEMENTADO

| Item | Status |
| --- | --- |
| Cabeçalho com nav principal (7 itens), busca, menu mobile acessível (`aria-expanded`, fecha ao navegar) | IMPLEMENTADO |
| Rodapé com colunas Explorar / Sobre / Legal / Contato + aviso de transparência | IMPLEMENTADO |
| Design system em `@theme` (paper/ink/leaf/bloom/line/focus), Fraunces + Inter, containers editoriais, foco visível global, `prefers-reduced-motion` | IMPLEMENTADO |
| Pular para o conteúdo (`#conteudo`) | IMPLEMENTADO |
| 404 com a frase exigida **"Esta flor ainda não foi encontrada."** + busca + links (Flores, Significados, Ocasiões, Início) + sugestões | IMPLEMENTADO |
| Estados `loading.tsx` e `error.tsx` (cliente, com reset) | IMPLEMENTADO |
| Fotos reais de flores | **NÃO IMPLEMENTADO** (sem asset real disponível; substituído por ilustração SVG determinística `FlowerVisual`) |

### 2.4 Páginas de descoberta — IMPLEMENTADO

| Item | Status |
| --- | --- |
| Home conforme estrutura do PRD: hero com busca + exemplos, números do acervo, flores em destaque, significados, ocasiões, cores, guias, teaser do Qual Flor? | IMPLEMENTADO |
| `/flores` com **filtros locais** (texto + cor), progressivos (sem JS a lista completa aparece) | IMPLEMENTADO |
| Detalhe de flor com índice lateral fixo, seções (identificação, cores, significado, aroma/durabilidade, época, cuidados, ocasiões, características, combinações, curiosidades, FAQ, relacionadas) | IMPLEMENTADO |
| Detalhes de significado, cor, ocasião, característica e combinação com flores relacionadas | IMPLEMENTADO |
| Cards, chips e navegação cruzada entre todas as entidades (nenhum beco sem saída) | IMPLEMENTADO |
| Filtros por parâmetro de URL (`?cor=`, `?significado=`) compartilháveis | **PENDENTE** |

### 2.5 Conteúdo editorial — PARCIAL

| Item | Status |
| --- | --- |
| `/guias` + 7 guias completos (seções, listas, relacionados, FAQ, data de atualização) | IMPLEMENTADO |
| `/artigos` e `/artigos/:slug` redirecionam para `/guias` (sem conteúdo duplicado) | IMPLEMENTADO |
| Busca `/buscar?q=` com índice de todas as entidades, sem acento/caixa, agrupado por tipo, `noindex`, funciona sem JS | IMPLEMENTADO |

### 2.6 Páginas institucionais — PARCIAL

| Item | Status |
| --- | --- |
| `/sobre` (o que é / não é, organização por entidades, princípios, números reais do acervo) | IMPLEMENTADO |
| `/fontes` (categorias de referência reais, sem citação falsa, declaração do que está pendente) | IMPLEMENTADO |
| `/metodologia` (pipeline, critérios, limite do conteúdo, **o que ainda não existe**) | IMPLEMENTADO |
| `/correcoes` (política + formulário + o que acontece depois) | IMPLEMENTADO |
| `/contato` (formulário com assunto, validação e aviso honesto) | **PARCIAL** — validação local funciona; **envio depende de `NEXT_PUBLIC_CONTACT_EMAIL`** (mailto) ou de backend futuro. Sem canal publicado, o formulário **diz que nada foi enviado** |
| Formulário anti-spam (honeypot + tempo mínimo + validação) | **PARCIAL** — só client-side; validação no servidor é PENDENTE |
| Endereço de e-mail público/telefone/WhatsApp no rodapé | **PENDENTE** (não inventado deliberadamente) |

### 2.7 Transparência e legais — IMPLEMENTADO

| Item | Status |
| --- | --- |
| `/politica-editorial` (independência, separação conteúdo/publicidade, sem conteúdo pago disfarçado, correção sem atrito) | IMPLEMENTADO |
| `/uso-de-ia` (o que a IA faz, o que não faz, limites, responsabilidade) | IMPLEMENTADO |
| `/afiliados` (declara **"nenhum link de afiliado publicado"** + regras futuras) | IMPLEMENTADO |
| `/publicidade` (declara **"nenhum anúncio publicado"** + regras futuras) | IMPLEMENTADO |
| `/politica-de-privacidade` (o que é coletado de fato, LGPD, direitos, identificação do responsável **marcada como pendente** por não existir) | IMPLEMENTADO |
| `/termos-de-uso` (8 cláusulas + foro pendente declarado) | IMPLEMENTADO |
| `/cookies` (5 categorias, todas inativas, razão da ausência de banner) | IMPLEMENTADO |

### 2.8 SEO técnico — IMPLEMENTADO

| Item | Status |
| --- | --- |
| Título/descrição únicos por página, template `%s \| Floriografia` | IMPLEMENTADO |
| Canonical absoluto + `metadataBase` | IMPLEMENTADO |
| Open Graph + Twitter Card (com imagem social gerada por `opengraph-image.tsx`) | IMPLEMENTADO |
| `robots` por página (`noindex` em busca, contato, correções, qual-flor) | IMPLEMENTADO |
| `sitemap.xml` só com conteúdo publicado; busca fora | IMPLEMENTADO |
| `robots.txt` com sitemap absoluto | IMPLEMENTADO |
| JSON-LD: `WebSite` + `SearchAction`, `BreadcrumbList`, `FAQPage`, `Article`, `ItemList` | IMPLEMENTADO |
| Data de atualização visível nos guias | IMPLEMENTADO |
| URLs canônicas para `/artigos` (redirect) — sem duplicidade | IMPLEMENTADO |

### 2.9 Acessibilidade (parcial, sem ferramenta) — PARCIAL

| Item | Status |
| --- | --- |
| Landmarks (`header`/`nav`/`main`/`footer`/`aside`), skip-link, `aria-current`, `aria-expanded`, `aria-live` nos contadores de resultado, foco visível, contraste alto por construção | IMPLEMENTADO |
| Auditoria automatizada (axe/Lighthouse) e teste com leitor de tela | **PENDENTE** |

---

## 3. Declarações honestas de estado (o que o site **não** faz)

1. **Não envia formulários** sem `NEXT_PUBLIC_CONTACT_EMAIL` — e o próprio formulário declara isso na tela.
2. **Não existe `/admin`** nem CMS nem banco de dados em produção.
3. **O "Qual Flor?" não recomenda nada** — é uma página que descreve o roteiro futuro.
4. **Não há analytics, pixel, publicidade ou afiliados** instalados.
5. **Não há fotos reais**; as cartas usam ilustração SVG.
6. **Não há bibliografia anexada por entrada** — declarado em `/fontes`.
7. **Não há números institucionais inventados** (visitas, depoimentos, equipe, prêmios, endereços, CNPJ).

---

## 4. Pendências recomendadas (ordem sugerida)

1. Publicar o canal de e-mail (`NEXT_PUBLIC_CONTACT_EMAIL`) e mover validação de formulário para servidor (Server Action + rate limit).
2. Imagens reais (ou ilustração autoral de maior qualidade) com `width/height` e `alt` descritivo.
3. Revisão bibliográfica das 40 flores + anexar fontes nas entradas e em `/fontes`.
4. CMS/banco (Supabase) + migração de `src/content`, mantendo `content.ts` como camada de leitura.
5. Filtros compartilháveis por query string em `/flores`.
6. Roteador "Qual Flor?" funcional (mantendo a página honesta enquanto não existe).
7. Auditoria: Lighthouse (perf/a11y/SEO), axe, teste com leitor de tela e E2E (Playwright).
8. Pipeline editorial com revisão humana registrada e histórico público de correções.

---

## 5. Como homologar manualmente

```bash
npm install
npx next typegen && npx tsc --noEmit
npm run lint
npm run build && npm start
```

1. `http://localhost:3000/` — hero, busca, 8 flores, categorias, guias, CTA Qual Flor?.
2. `/flores` — filtre por texto e por cor; com JS desabilitado a lista completa aparece.
3. `/flores/rosa` — índice lateral com âncoras, FAQ, JSON-LD, flores relacionadas.
4. `/flores/nao-existe` — 404 com a frase "Esta flor ainda não foi encontrada." + busca + 4 links.
5. `/artigos` e `/artigos/o-que-e-floriografia` — redirecionam (308) para `/guias` e `/guias/<slug>`.
6. `/buscar?q=amor` — resultados agrupados por tipo; `view-source` deve mostrar `noindex`.
7. `/contato` e `/correcoes` — submeter vazio (erros), submeter rápido (anti-spam), submeter válido (aviso de que nada foi enviado, sem canal configurado).
8. `/qual-flor` — página "em construção", `noindex`.
9. `/sitemap.xml` (117 URLs) e `/robots.txt`.
10. Navegue por todos os links do rodapé: nenhum deve cair em 404.
