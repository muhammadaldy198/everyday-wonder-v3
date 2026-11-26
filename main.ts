// everyday-wonder-v3 — one sentence, written by the entry program itself.
// The pick: a photo strip that curls so tight it shows only its white edges.
// The turn is about what the strip DOES (it curls), not who is in the photo.
// Everyday Wonder v3 — rebuild: the photo strip curls, the picture backs out.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const PICK =
  "The photo strip in my wallet curled so tight it shows only the white edges, like the picture is backing out of the frame.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
const target = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(target, PICK, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${PICK.length} chars)`);
