// Last Text at One Percent — dying phone's final text message.
// Writes exactly one text to /output/entry.txt (gate: 1-200 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "1% left. This is my last text. Delete my search history, tell the charger I never loved it, and please stop pressing me at 3am. Goodbye, thumbs.";

const chars = [...entry].length;
if (chars < 1 || chars > 200) throw new Error(`gate: ${chars} chars, need 1-200`);
if (!entry.trim()) throw new Error("gate: entry is only whitespace");
if (entry.includes("\n")) throw new Error("gate: entry must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${[...entry].length} chars`);
