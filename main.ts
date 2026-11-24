// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// One line, 112 characters, ASCII only. The joke: a real auto-reply opening
// ("Your email has been received") is subverted by an escalating physical
// fate for the email — received, printed, folded into a paper plane, stuck
// in a tree. Concrete scene, genuine surprise turn, deadpan delivery, no
// standard OOO cliche (no beach, no inbox-zero, no "back soon", no "your
// email is important to me").
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office. Your email has been received, printed, folded into a paper plane, and is now stuck in a tree.";

// Fail closed on the gate: 1-140 characters, one line, ASCII only.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 140 ||
  ENTRY.includes("\n") ||
  /[^\x00-\x7F]/.test(ENTRY)
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
