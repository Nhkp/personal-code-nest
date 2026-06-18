import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const serverEntry = path.join(distDir, "server", "entry-server.js");
const templatePath = path.join(distDir, "index.html");

const { render, seoPages, getCanonicalUrl, getPreviewImage } = await import(serverEntry);
const template = await fs.readFile(templatePath, "utf8");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const jsonForHtml = (value) => JSON.stringify(value, null, 6).replaceAll("</script", "<\\/script");

const upsertMetaName = (html, name, content) => {
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`);
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
};

const upsertMetaProperty = (html, property, content) => {
  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  const pattern = new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`);
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `    ${tag}\n  </head>`);
};

const updateHead = (html, page) => {
  const canonical = getCanonicalUrl(page.path);
  const image = getPreviewImage();
  let output = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<link\s+rel=["']canonical["'][^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(
      /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n      ${jsonForHtml(page.jsonLd)}\n    </script>`,
    );

  output = upsertMetaName(output, "description", page.description);
  output = upsertMetaName(output, "twitter:title", page.title);
  output = upsertMetaName(output, "twitter:description", page.description);
  output = upsertMetaName(output, "twitter:image", image);
  output = upsertMetaProperty(output, "og:title", page.title);
  output = upsertMetaProperty(output, "og:description", page.description);
  output = upsertMetaProperty(output, "og:url", canonical);
  output = upsertMetaProperty(output, "og:image", image);

  return output;
};

const outputPathForRoute = (route) =>
  route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route.slice(1), "index.html");

for (const page of seoPages) {
  const appHtml = render(page.path);
  const html = updateHead(template, page).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const outputPath = outputPathForRoute(page.path);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html);
}

await fs.rm(path.join(distDir, "server"), { recursive: true, force: true });
