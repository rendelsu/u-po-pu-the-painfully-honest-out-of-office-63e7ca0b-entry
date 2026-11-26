import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const line = "Thank you for your message; I'm away and not secretly checking email, so it will wait unread until I return as someone who has actually slept.";
const outputFile = join(outDir, "entry.txt");
writeFileSync(outputFile, line + "\n");
chmodSync(outputFile, 0o644);
