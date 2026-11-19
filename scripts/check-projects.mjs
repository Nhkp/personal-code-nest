import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

const readBuild = (file) => readFileSync(new URL(`../dist/${file}`, import.meta.url), "utf8");
const projectRepos = {
  inferencelab: "InferenceLab",
  "chess-openings-agent": "chess-openings-agent",
  "medical-triage-agent": "medical-triage-agent",
  "chatbot-incendie": "chatbot-incendie",
  "checkit-flow": "checkit-flow",
  "credit-scoring-monitoring": "credit-scoring-monitoring",
};

const projectsSection = readBuild("index.html").match(/<section id="projects"[^>]*>([\s\S]*?)<\/section>/)?.[1];
assert.ok(projectsSection, "The home page must prerender the Projects section");
const featured = [...projectsSection.matchAll(/href="https:\/\/github\.com\/Nhkp\/([^"]+)"/g)];
assert.deepEqual(featured.map(([, repo]) => repo), [
  "InferenceLab", "chess-openings-agent", "medical-triage-agent", "rl-agent-training",
]);

const sitemap = readBuild("sitemap.xml");
const llms = readBuild("llms.txt");
assert.equal(readdirSync(new URL("../dist/projects/", import.meta.url)).length, 13);
for (const [slug, repo] of Object.entries(projectRepos)) {
  const canonical = `https://clement-palezis.dev/projects/${slug}`;
  const html = readBuild(`projects/${slug}/index.html`);
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `Missing canonical for ${slug}`);
  assert.ok(html.includes(`href="https://github.com/Nhkp/${repo}"`), `Missing GitHub link for ${slug}`);
  assert.match(html, /<title>[^<]+ \| Clément Palézis<\/title>/, `Missing project title for ${slug}`);
  assert.match(html, /<meta name="description" content="(?!undefined")[^"]+"/, `Missing description for ${slug}`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`) && llms.includes(`${canonical}\n`), `Missing discovery links for ${slug}`);
}
