import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, roasting my own agent: it asks permission to ask permission.
const line =
  "My agent asks my permission to ask me for permission — the only decision it ever makes alone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Exactly the line, no trailing newline: the gate counts 1-200 chars.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
