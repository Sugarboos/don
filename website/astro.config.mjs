// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages: set SITE_URL + BASE_PATH in CI (see .github/workflows/deploy-github-pages.yml)
const site = process.env.SITE_URL || undefined;
const base = (process.env.BASE_PATH || "/").replace(/\/?$/, "") || "/";

// https://astro.build/config
export default defineConfig({
	...(site ? { site } : {}),
	base: base === "/" ? undefined : base,
});
