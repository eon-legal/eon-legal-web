#!/usr/bin/env node
/**
 * One-shot favicon generator. Renders public/favicon.svg into PNG icons
 * at the standard sizes browsers and crawlers expect. Run manually after
 * changing favicon.svg:
 *
 *   node scripts/generate-favicons.mjs
 */
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const SVG = join(process.cwd(), "public", "favicon.svg");
const OUT = join(process.cwd(), "public");

const TARGETS = [
  { name: "icon-16.png", size: 16 },
  { name: "icon-32.png", size: 32 },
  { name: "icon-48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

const svg = await readFile(SVG);

const buffers = {};
for (const { name, size } of TARGETS) {
  const png = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  await writeFile(join(OUT, name), png);
  buffers[size] = png;
  console.log(`wrote public/${name} (${size}x${size}, ${png.length} bytes)`);
}

// Multi-resolution .ico containing 16, 32, 48 — the sizes Google and
// most browsers actually consult for favicon rendering.
const ico = await pngToIco([buffers[16], buffers[32], buffers[48]]);
await writeFile(join(OUT, "favicon.ico"), ico);
console.log(`wrote public/favicon.ico (16/32/48, ${ico.length} bytes)`);
