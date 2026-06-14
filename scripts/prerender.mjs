import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync } from "node:fs";
import { join } from "node:path";

const routes = ["/", "/employers", "/recruitment-agency", "/impressum"];
const outDir = "_site";

async function main() {
  // The Nitro cloudflare-module build outputs to .output/server/index.mjs
  const serverPath = ".output/server/index.mjs";
  if (!existsSync(serverPath)) {
    throw new Error(`Server entry not found at ${serverPath}`);
  }

  const worker = await import(`../${serverPath}`);
  // Cloudflare Worker modules export default { fetch }
  const handler = worker.default?.default ?? worker.default;

  if (!handler?.fetch) {
    throw new Error("Could not find fetch handler in worker module");
  }

  mkdirSync(outDir, { recursive: true });

  // Copy all static files from .output/public (client JS/CSS + public/ assets)
  if (existsSync(".output/public")) {
    cpSync(".output/public", outDir, { recursive: true });
    console.log("Copied static files from .output/public");
  }

  // Prerender each route
  for (const route of routes) {
    const url = `http://localhost${route}`;
    console.log(`Prerendering ${route}...`);
    try {
      const request = new Request(url);
      const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };
      const response = await handler.fetch(request, {}, ctx);
      const html = await response.text();

      if (response.status >= 200 && response.status < 400) {
        const dir = join(outDir, route === "/" ? "" : route);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, "index.html"), html);
        console.log(`  ✓ ${route} (${html.length} bytes, status ${response.status})`);
      } else {
        console.log(`  ✗ ${route} returned ${response.status}`);
        console.log(`    Body: ${html.substring(0, 200)}`);
      }
    } catch (err) {
      console.error(`  ✗ ${route} failed:`, err.message);
    }
  }

  // Copy root index.html as 404 fallback
  try {
    const indexHtml = readFileSync(join(outDir, "index.html"), "utf8");
    writeFileSync(join(outDir, "404.html"), indexHtml);
    console.log("Created 404.html fallback");
  } catch {}

  // GitHub Pages config
  writeFileSync(join(outDir, "CNAME"), "transatlantic-talent-bridge.com\n");
  writeFileSync(join(outDir, ".nojekyll"), "");

  console.log("Done!");
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
