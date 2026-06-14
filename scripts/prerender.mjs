import { readFileSync, writeFileSync, mkdirSync, cpSync } from "node:fs";
import { join } from "node:path";

const routes = ["/", "/employers", "/recruitment-agency", "/impressum"];
const outDir = "_site";

async function main() {
  // Import the built Cloudflare Worker module
  const worker = await import("../dist/server/server.js");
  const handler = worker.default?.default ?? worker.default;

  mkdirSync(outDir, { recursive: true });

  // Copy client assets
  cpSync("dist/client/assets", join(outDir, "assets"), { recursive: true });

  // Prerender each route
  for (const route of routes) {
    const url = `http://localhost${route}`;
    console.log(`Prerendering ${route}...`);
    try {
      const request = new Request(url);
      const response = await handler.fetch(request, {}, { waitUntil: () => {} });
      const html = await response.text();

      if (response.status === 200) {
        const dir = join(outDir, route === "/" ? "" : route);
        mkdirSync(dir, { recursive: true });
        writeFileSync(join(dir, "index.html"), html);
        console.log(`  ✓ ${route} (${html.length} bytes)`);
      } else {
        console.log(`  ✗ ${route} returned ${response.status}`);
      }
    } catch (err) {
      console.error(`  ✗ ${route} failed:`, err.message);
    }
  }

  // Copy root index.html as 404 fallback
  try {
    const indexHtml = readFileSync(join(outDir, "index.html"), "utf8");
    writeFileSync(join(outDir, "404.html"), indexHtml);
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
