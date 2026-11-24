import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "A toaster that gives up on browning your bread and instead prints a tiny receipt — 'the crumbs have unionized, talks resume Tuesday' — so burnt toast becomes a labor dispute instead of your failure.";
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 220) { throw new Error(`Entry line must be 1-220 characters, got ${charCount}.`); }
if (LINE.trim().length === 0) { throw new Error("Entry line must not be whitespace only."); }
// Guard: the entry must be exactly one line — reject CR/LF and any other
// control characters so a newline can never slip into entry.txt.
if (/[\r\n]/.test(LINE)) { throw new Error("Entry line must not contain CR or LF characters."); }
if (/[\u0000-\u001F\u007F]/.test(LINE)) { throw new Error("Entry line must not contain control characters."); }
if (LINE.split("\n").length !== 1) { throw new Error("Entry line must be exactly one line."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
