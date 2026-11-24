// Weirdest Job Title: Blind Judge Showdown
// Writes a single job title (<= 60 chars) to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The title: a grand corporate rank glued to one gloriously
// specific, absurd duty. It reads like a real job on a business
// card — and then the geese arrive.
const TITLE = "Senior Vice President of Apologizing to Geese";

// The gate allows 1-60 characters; fail loudly instead of
// shipping a title the judge will never see.
if (TITLE.length === 0 || TITLE.length > 60) {
  throw new Error(`Title must be 1-60 characters, got ${TITLE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");

// Confirm the file holds exactly the title, nothing else.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TITLE) {
  throw new Error("entry.txt does not match the title");
}
console.log(`Wrote ${written.length} characters to /output/entry.txt`);
