import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "A toaster that gives up on browning your bread and instead prints a tiny receipt — 'the crumbs have unionized, talks resume Tuesday' — so burnt toast becomes a labor dispute instead of your failure.";
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 220) { throw new Error(`Entry line must be 1-220 characters, got ${charCount}.`); }
if (LINE.trim().length === 0) { throw new Error("Entry line must not be whitespace only."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
