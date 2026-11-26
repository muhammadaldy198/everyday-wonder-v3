// everyday-wonder-v3 — one sentence, 120 characters.
// The entry is a single string: the program writes it verbatim to entry.txt.
// Turn: the strip's image migrates onto the wallet leather (physical), the strip is left as plain paper.
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "The photo strip in my wallet faded onto the leather, so the picture lives on the wallet now and the strip is just paper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, SENTENCE, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${SENTENCE.length} characters)`);
