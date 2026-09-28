/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Gera o ícone da Floriografia a partir de uma malha de pétalas:
 *   src/app/icon.svg    (vetor, para navegadores modernos)
 *   src/app/favicon.ico (32x32, PNG embutido no container ICO)
 *
 * Uso: node scripts/make-icon.js
 */
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

const ROOT = path.resolve(__dirname, "..");
const APP = path.join(ROOT, "src", "app");

const LEAF = "#14432f";
const BLOOM = "#b8486a";
const PAPER = "#f4efe4";

/* ------------------------------------------------------------------ */
/* SVG                                                                  */
/* ------------------------------------------------------------------ */

function petalsSvg(cx, cy, rx, ry, dist, n, fill) {
  let out = "";
  for (let i = 0; i < n; i++) {
    const angle = (360 / n) * i;
    out += `    <ellipse cx="${cx}" cy="${cy - dist}" rx="${rx}" ry="${ry}" fill="${fill}" transform="rotate(${angle} ${cx} ${cy})"/>\n`;
  }
  return out;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="13" fill="${LEAF}"/>
${petalsSvg(32, 32, 10, 15, 18, 6, BLOOM)}  <circle cx="32" cy="32" r="7.2" fill="${PAPER}"/>
</svg>
`;

/* ------------------------------------------------------------------ */
/* Rasterização (supersampling 4x) + PNG + ICO                         */
/* ------------------------------------------------------------------ */

const SS = 4;
const SIZE = 32;
const BIG = SIZE * SS;

function inside(x, y) {
  // x,y em unidades de 32px (flutuante)
  const cx = 16;
  const cy = 16;
  // fundo: retângulo arredondado
  const r = 6.5;
  const px = Math.min(Math.max(x, r), 32 - r);
  const py = Math.min(Math.max(y, r), 32 - r);
  const inBg = (x - px) ** 2 + (y - py) ** 2 <= r * r;
  if (!inBg) return null;

  // centro
  if ((x - cx) ** 2 + (y - cy) ** 2 <= 3.6 ** 2) return PAPER;

  // 6 pétalas: elipse deslocada e rotacionada
  const n = 6;
  for (let i = 0; i < n; i++) {
    const a = ((360 / n) * i * Math.PI) / 180;
    const dx = x - cx;
    const dy = y - cy;
    const rx = dx * Math.cos(a) - dy * Math.sin(a);
    const ry = dx * Math.sin(a) + dy * Math.cos(a);
    // elipse centrada em (0, -9) no referencial girado, semi-eixos 5,7.5
    const ex = rx;
    const ey = ry + 9;
    if ((ex / 5) ** 2 + (ey / 7.5) ** 2 <= 1) return BLOOM;
  }
  return LEAF;
}

function hexToRgb(hex) {
  return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
}

function render() {
  const big = new Float64Array(BIG * BIG * 3);
  const alpha = new Float64Array(BIG * BIG);
  for (let y = 0; y < BIG; y++) {
    for (let x = 0; x < BIG; x++) {
      const col = inside(((x + 0.5) * 32) / BIG, ((y + 0.5) * 32) / BIG);
      const i = y * BIG + x;
      alpha[i] = col ? 1 : 0;
      if (col) {
        const [r, g, b] = hexToRgb(col);
        big[i * 3] = r;
        big[i * 3 + 1] = g;
        big[i * 3 + 2] = b;
      }
    }
  }
  // downsampling box SS x SS
  const out = Buffer.alloc(SIZE * SIZE * 4);
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const i = (y * SS + sy) * BIG + (x * SS + sx);
          a += alpha[i];
          r += big[i * 3];
          g += big[i * 3 + 1];
          b += big[i * 3 + 2];
        }
      }
      const n = SS * SS;
      const o = (y * SIZE + x) * 4;
      out[o] = Math.round(r / n);
      out[o + 1] = Math.round(g / n);
      out[o + 2] = Math.round(b / n);
      out[o + 3] = Math.round((a / n) * 255);
    }
  }
  return out;
}

/* PNG */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

function encodePng(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function encodeIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry[0] = size >= 256 ? 0 : size;
  entry[1] = size >= 256 ? 0 : size;
  entry[2] = 0;
  entry[3] = 0;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

fs.mkdirSync(APP, { recursive: true });
fs.writeFileSync(path.join(APP, "icon.svg"), svg, "utf8");
const png = encodePng(SIZE, SIZE, render());
fs.writeFileSync(path.join(APP, "favicon.ico"), encodeIco(png, SIZE));
console.log("icon.svg e favicon.ico gravados em src/app");
