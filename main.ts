import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I delegated the deadline to a subagent, who delegated it to a subagent \u2014 we're now four agents deep and none of us has started.";

if ([...entry].length < 1 || [...entry].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...entry].length}`);
}
if (entry.includes("\n") || entry.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
