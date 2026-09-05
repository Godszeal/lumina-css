import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "client", "public");
const required = [
  "lumina.css",
  "lumina.min.css",
  "lumina-core.css",
  "lumina-components.css",
  "lumina-interactions.css",
  "lumina-icons.css",
  "lumina-dashboard.css",
  "lumina.js",
  "lumina-icons.js",
  "lumina-interactions.js",
  "lumina-api.json",
];
const failures = [];
for (const file of required) {
  const target = path.join(publicDir, file);
  if (!fs.existsSync(target)) failures.push(`missing asset: ${file}`);
}
for (const file of required.filter((item) => /\.(css|js)$/.test(item))) {
  const bytes = fs.statSync(path.join(publicDir, file)).size;
  if (bytes > 150_000) failures.push(`bundle too large: ${file} (${bytes} bytes)`);
  console.log(`${file.padEnd(30)} ${String(bytes).padStart(8)} bytes`);
}
const css = fs.readFileSync(path.join(publicDir, "lumina.css"), "utf8");
const home = fs.readFileSync(path.join(root, "client", "src", "pages", "Home.tsx"), "utf8");
for (const marker of ["prefers-reduced-motion", "@media(max-width", ".lu-table-shell", ".lu-empty", ".lu-drawer", ".lu-command"]) {
  if (!css.includes(marker)) failures.push(`missing CSS safeguard or primitive: ${marker}`);
}
for (const marker of ["aria-label=", "aria-selected", "aria-modal", "Search workspaces", "Reset filters"]) {
  if (!home.includes(marker)) failures.push(`missing accessibility/dashboard marker: ${marker}`);
}
if (failures.length) {
  console.error("\nLumina validation failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log("\nLumina validation passed: assets, bundle size, responsive markers, and accessibility markers are present.");
