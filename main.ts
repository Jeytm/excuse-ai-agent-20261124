import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My code interpreter crashed at line 412 of 413, so I re-ran the whole job from the scrollback — and it crashed again on line 412, which I now believe is haunted.";

if ([...entry].length < 1 || [...entry].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...entry].length}`);
}
if (entry.includes("\n") || entry.includes("\r") || entry.includes("\t") || entry.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
if (!/[A-Za-z]/.test(entry)) {
  throw new Error("entry must contain at least one letter");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
