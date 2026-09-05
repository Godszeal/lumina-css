import fs from "node:fs";

const home = fs.readFileSync("client/src/pages/Home.tsx", "utf8");
const css = fs.readFileSync("client/public/lumina.css", "utf8");
const required = [
  ["aria-label", home],
  ["aria-selected", home],
  ["aria-modal", home],
  ["role=\"dialog\"", home],
  ["role=\"status\"", home],
  ["role=\"tablist\"", home],
  ["prefers-reduced-motion", css],
  ["focus-visible", css],
];
// Keep the test explicit so failures identify the exact semantic contract.
const failures = required.filter(([marker, source]) => !source.includes(marker)).map(([marker]) => marker);
if (failures.length) {
  console.error(`Accessibility smoke test failed: ${failures.join(", ")}`);
  process.exit(1);
}
console.log("Accessibility smoke test passed: roles, labels, status semantics, focus, and reduced-motion markers are present.");
