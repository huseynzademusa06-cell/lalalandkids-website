import { globSync } from "glob";
import { readFileSync, writeFileSync } from "fs";

const files = globSync("dist/**/*.html");

for (const file of files) {
  let html = readFileSync(file, "utf-8");
  const charsetTag = '<meta charset="UTF-8">';

  html = html.replace(/<meta\s+charset=["']UTF-8["']\s*\/?>/i, "");

  html = html.replace(/<head>/i, `<head>${charsetTag}`);

  writeFileSync(file, html);
}
