/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");

function stringLiterals(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '"') {
      let j = i + 1;
      let buf = "";
      while (j < src.length) {
        const d = src[j];
        if (d === "\\") { buf += src[j + 1]; j += 2; continue; }
        if (d === '"') break;
        buf += d;
        j++;
      }
      out.push(buf);
      i = j + 1;
      continue;
    }
    i++;
  }
  return out;
}

const files = process.argv.slice(2);
if (!files.length) {
  console.error("uso: node scripts/count-words.js <arquivo.ts> [arquivo.ts ...]");
  process.exit(1);
}
let total = 0;
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  const words = stringLiterals(src)
    .filter((s) => !/^[a-z0-9-]+$/.test(s) || s.split("-").length > 3)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  total += words;
  console.log(`${words}\t${f}`);
}
console.log(`${total}\tTOTAL`);
