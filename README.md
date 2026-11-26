# kothar-site

The product page for [Kothar](https://github.com/ilien-dev/kothar), live at **https://kothar.ilien.dev**,
in English (`/`) and Spanish (`/es/`), with a light and a dark theme.

Built with Astro, served as static assets by a Cloudflare Worker. Every push to `main` builds and
deploys through Cloudflare Workers Builds. The Kothar repository keeps this one as the `site`
submodule.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

## Deploy

Pushing to `main` deploys. To deploy by hand: `npm run deploy` (needs `wrangler login`).

## Content

All copy lives in `src/i18n.ts` and follows Kothar's `README.md` and `README.es.md`: change the README
first, then the site. Icons in `public/` come from Kothar's `assets/brand/web/`; the passes in
"Before you see it" are the real iterations in Kothar's `.kothar/concepts/b-steps/`. Fonts (Space
Grotesk, Inter, JetBrains Mono) are bundled from Fontsource under the SIL Open Font License.
