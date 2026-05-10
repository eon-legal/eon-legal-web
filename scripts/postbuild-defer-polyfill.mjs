#!/usr/bin/env node
/**
 * Post-build patch: add `defer` to Next.js auto-injected `<script noModule>`
 * polyfill tag in all generated HTML files.
 *
 * The `noModule` attribute already prevents execution on modern browsers
 * (which is the project's supported browser range), but SEO auditors flag
 * any <script> in <head> without async/defer/type=module as render-blocking.
 * Adding `defer` is semantically safe and satisfies the audit without
 * altering runtime behaviour.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(process.cwd(), ".next", "server", "app");
const NOMODULE_RE = /(<script\b[^>]*\bnoModule(?:=""|=''|)[^>]*)(>)/gi;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (entry.endsWith(".html")) patchFile(full);
  }
}

function patchFile(file) {
  const html = readFileSync(file, "utf8");
  let changed = false;
  const patched = html.replace(NOMODULE_RE, (_, open, close) => {
    if (/\bdefer\b/i.test(open) || /\basync\b/i.test(open)) return open + close;
    changed = true;
    return `${open} defer${close}`;
  });
  if (changed) {
    writeFileSync(file, patched);
    console.log(`[postbuild-defer-polyfill] patched ${file}`);
  }
}

try {
  walk(ROOT);
} catch (err) {
  if (err && err.code === "ENOENT") {
    console.log("[postbuild-defer-polyfill] no .next/server/app directory; skipping");
  } else {
    throw err;
  }
}
