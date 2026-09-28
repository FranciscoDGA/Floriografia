/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Baixa fotos licenciadas da API do Pexels para o acervo da Floriografia.
 *
 * Uso:
 *   node scripts/fetch-pexels.js                 # baixa o que falta
 *   node scripts/fetch-pexels.js --redo          # baixa tudo de novo
 *   node scripts/fetch-pexels.js --only rosa,tulipa
 *
 * Gera:
 *   public/images/{flores,gestos}/*.jpg, public/images/hero.jpg
 *   src/lib/imagens.ts        (mapa slug -> /images/...)
 *   docs/imagens.md           (autoria, link e licença de cada arquivo)
 */
const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public", "images");
const API = "https://api.pexels.com/v1/search";

function loadKey() {
  const env = process.env.PEXELS_API_KEY;
  if (env) return env.trim();
  try {
    const raw = fs.readFileSync(path.join(ROOT, ".env.local"), "utf8");
    const m = raw.match(/^\s*PEXELS_API_KEY\s*=\s*(\S+)/m);
    if (m) return m[1];
  } catch { /* sem .env.local */ }
  throw new Error("PEXELS_API_KEY nao encontrada (.env.local ou ambiente)");
}

const FLORES = {
  rosa: "red rose flower", tulipa: "tulip flowers", girassol: "sunflower",
  orquidea: "orchid flower", lirio: "lily flower", margarida: "daisy flower",
  cravo: "carnation flower", lavanda: "lavender flowers", jasmim: "jasmine flower",
  violeta: "violet flower", azaleia: "azalea flower", hortensia: "hydrangea flower",
  peonia: "peony flower", iris: "iris flower", astromelia: "alstroemeria flower",
  camelia: "camellia flower", dalia: "dahlia flower", begonia: "begonia flower",
  geranio: "geranium flower", ranunculo: "ranunculus flower", hibisco: "hibiscus flower",
  magnolia: "magnolia flower", jacinto: "hyacinth flower", narciso: "daffodil flower",
  "lirio-da-paz": "peace lily plant", freesia: "freesia flower", anturio: "anthurium flower",
  strelitzia: "bird of paradise flower", buganvilha: "bougainvillea flowers",
  amapola: "poppy flower", "dente-de-leao": "dandelion flower",
  "gloria-da-manha": "morning glory flower", passiflora: "passion flower",
  "flor-de-lotus": "lotus flower", gardenia: "gardenia flower",
  plumeria: "plumeria flower", cerejeira: "cherry blossom branch",
  trevo: "clover flowers", ipe: "yellow tabebuia tree flower",
  "vitoria-regia": "giant water lily",
};

const GESTOS = {
  conquistar: "romantic flower gift hands",
  declarar: "red rose bouquet",
  "pedir-desculpas": "white flower bouquet",
  reatar: "flowers and handwritten letter",
  "pedir-a-mao": "white bridal bouquet",
  "sem-ocasiao": "flower bouquet on wooden table",
};

const EXTRAS = { hero: "romantic flowers and letter on table" };

function get(url, key) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { Authorization: key, "User-Agent": "FloriografiaBuild/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          res.resume();
          return resolve(get(res.headers.location, key));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          if (res.statusCode !== 200) {
            return reject(new Error(`HTTP ${res.statusCode} em ${url}: ${buf.toString("utf8").slice(0, 200)}`));
          }
          const ct = res.headers["content-type"] || "";
          if (ct.includes("json")) {
            try { resolve(JSON.parse(buf.toString("utf8"))); } catch (e) { reject(e); }
          } else {
            resolve(buf);
          }
        });
      })
      .on("error", reject);
  });
}

async function search(query, key) {
  const url = `${API}?query=${encodeURIComponent(query)}&per_page=8&orientation=landscape`;
  const data = await get(url, key);
  if (!data.photos || !data.photos.length) throw new Error(`sem resultados para "${query}"`);
  return data.photos;
}

function saveJpeg(abs, buf) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, buf);
  return buf.length;
}

const esc = (s) => String(s).replace(/\|/g, "\\|");

async function main() {
  const args = process.argv.slice(2);
  const redo = args.includes("--redo");
  const onlyArg = args.find((a) => a.startsWith("--only"));
  const only = onlyArg
    ? new Set((onlyArg.includes("=") ? onlyArg.split("=")[1] : args[args.indexOf(onlyArg) + 1]).split(","))
    : null;

  const key = loadKey();
  const manifest = [];

  const targets = [
    ...Object.entries(FLORES).map(([slug, q]) => ({ slug, q, dir: "flores", label: slug })),
    ...Object.entries(GESTOS).map(([slug, q]) => ({ slug, q, dir: "gestos", label: slug })),
    ...Object.entries(EXTRAS).map(([slug, q]) => ({ slug, q, dir: "", label: slug })),
  ];

  for (const t of targets) {
    if (only && !only.has(t.label)) continue;
    const rel = t.dir ? `/images/${t.dir}/${t.slug}.jpg` : `/images/${t.slug}.jpg`;
    const abs = path.join(ROOT, "public", rel.replace(/^\//, ""));
    if (!redo && fs.existsSync(abs)) {
      console.log(`pulado (existe): ${rel}`);
      continue;
    }
    try {
      const photos = await search(t.q, key);
      const photo = photos[0];
      const src = photo.src.large2x || photo.src.large || photo.src.original;
      const buf = await get(src, key);
      const bytes = saveJpeg(abs, buf);
      manifest.push({
        rel, query: t.q, group: t.dir || "geral",
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
        pageUrl: photo.url,
        license: "Pexels License (uso comercial gratuito, sem exigência de atribuição)",
        bytes,
      });
      console.log(`ok ${rel} <- "${t.q}" (${photo.photographer}) ${(bytes / 1024).toFixed(0)}KB`);
      await new Promise((r) => setTimeout(r, 250));
    } catch (e) {
      console.log(`FALHOU ${rel} <- "${t.q}": ${e.message}`);
    }
  }

  // mapa TS com todos os arquivos existentes
  const map = { flores: {}, gestos: {}, hero: null };
  const readDir = (d) => {
    const abs = path.join(PUBLIC, d);
    if (!fs.existsSync(abs)) return {};
    const out = {};
    for (const f of fs.readdirSync(abs)) if (f.endsWith(".jpg")) out[f.replace(/\.jpg$/, "")] = `/images/${d}/${f}`;
    return out;
  };
  map.flores = readDir("flores");
  map.gestos = readDir("gestos");
  map.hero = fs.existsSync(path.join(PUBLIC, "hero.jpg")) ? "/images/hero.jpg" : null;

  const ts = `/* Gerado por scripts/fetch-pexels.js — não editar à mão. */

/** Fotos licenciadas (Pexels) por slug de flor. */
export const flowerPhotos: Record<string, string> = {
${Object.entries(map.flores).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n")}
};

/** Fotos licenciadas (Pexels) por gesto. */
export const gestoPhotos: Record<string, string> = {
${Object.entries(map.gestos).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n")}
};

/** Foto de abertura (hero) do site, quando disponível. */
export const heroPhoto: string | null = ${map.hero ? JSON.stringify(map.hero) : "null"};
`;
  fs.writeFileSync(path.join(ROOT, "src", "lib", "imagens.ts"), ts, "utf8");
  console.log(`imagens.ts gerado: ${Object.keys(map.flores).length} flores, ${Object.keys(map.gestos).length} gestos, hero=${map.hero}`);

  // registro de licença
  const docPath = path.join(ROOT, "docs", "imagens.md");
  fs.mkdirSync(path.dirname(docPath), { recursive: true });
  const now = new Date().toISOString().slice(0, 10);
  const header = `# Registro de imagens

Todas as fotografias deste projeto vêm da **API do Pexels** e estão sob a
[Pexels License](https://www.pexels.com/license/): uso comercial gratuito,
sem exigência de atribuição (atribuímos mesmo assim, por respeito ao autor).

Consulta, autor e link da foto original são registrados abaixo. Arquivos em
\`public/images/\`. Quando uma foto não existe, a página usa a ilustração
vetorial autoral (\`FlowerVisual\`) — nunca uma foto simulada.

Última execução de \`scripts/fetch-pexels.js\`: **${now}**.

`;
  if (!fs.existsSync(docPath)) fs.writeFileSync(docPath, header, "utf8");
  if (manifest.length) {
    const rows = manifest.map((m) => `| \`${m.rel}\` | ${m.group} | ${esc(m.query)} | [${esc(m.photographer)}](${m.photographerUrl}) | [foto](${m.pageUrl}) | ${esc(m.license)} |`);
    const table = `| Arquivo | Grupo | Busca (Pexels) | Fotógrafo | Página da foto | Licença |\n|---|---|---|---|---|---|\n${rows.join("\n")}\n`;
    fs.appendFileSync(docPath, `## Baixadas em ${now}\n\n${table}\n`, "utf8");
  } else {
    console.log("nada novo baixado (manifest vazio) — docs/imagens.md mantido");
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
