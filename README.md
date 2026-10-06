# Elite Jersey

React + Vite + Tailwind CSS storefront landing page.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploy

- **Vercel:** import the repo; settings are auto-detected (`vercel.json` included).
- **Netlify:** import the repo; `netlify.toml` sets build command `npm run build` and publish dir `dist`.

## Editing content

- Products: `src/data/products.js`
- Sections: `src/components/`
- Colors and fonts: `tailwind.config.js`
- Brand name and page title: `index.html`, `Header.jsx`, `Footer.jsx`
