# Green Galaxy

A minimal personal website built with [Astro](https://astro.build). It includes a home page, about page, resume, contact form, responsive styling, SEO metadata, and sitemap support.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── social/
├── src
│   ├── components
│   ├── content
│   ├── data
│   ├── layouts
│   └── pages
└── package.json
```

Update the profile content in `src/data/` and `src/content/pages/about.mdx`.

For the contact form, set one of these public environment variables:

- `PUBLIC_FORM_ACTION` for a custom form endpoint
- `PUBLIC_FORMSPREE_ID` to use Formspree

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro check`              |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
