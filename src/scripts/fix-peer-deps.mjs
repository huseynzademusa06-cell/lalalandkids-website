import { readFileSync, writeFileSync, existsSync } from "fs";
import { globSync } from "glob";

function widen(range) {
  return range.includes("19") ? range : `${range} || ^19.0.0`;
}

const pkgFiles = globSync("node_modules/**/react-helmet-async/package.json", {
  ignore: "**/node_modules/**/node_modules/**/node_modules/**",
});
for (const file of pkgFiles) {
  const pkg = JSON.parse(readFileSync(file, "utf-8"));
  if (pkg.peerDependencies?.react) {
    pkg.peerDependencies.react = widen(pkg.peerDependencies.react);
    writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
    console.log(`Patched package.json: ${file}`);
  }
}

const lockPath = "node_modules/.package-lock.json";
if (existsSync(lockPath)) {
  const lock = JSON.parse(readFileSync(lockPath, "utf-8"));
  let changed = false;
  for (const [key, entry] of Object.entries(lock.packages || {})) {
    if (key.endsWith("react-helmet-async") && entry.peerDependencies?.react) {
      entry.peerDependencies.react = widen(entry.peerDependencies.react);
      changed = true;
      console.log(`Patched lockfile entry: ${key}`);
    }
  }
  if (changed) writeFileSync(lockPath, JSON.stringify(lock, null, 2) + "\n");
}
