# Portfolio Site

![Portfolio — desktop](./src/assets/images/portfolio-desktop.png 'Screenshot of portfolio homepage at desktop width')
![Portfolio — mobile](./src/assets/images/portfolio-mobile.png 'Screenshot of portfolio homepage at mobile width')

angelrod.dev is a personal developer portfolio built with React and Vite. It features a dark editorial design, smooth scroll navigation, and a single-page narrative layout.

## Sections

- **Hero** - Typography-driven intro with animated CTAs
- **About** - Bio with profile photo and categorized tech toolkit
- **Experience** - Tabbed layout for work history
- **AI Work** - Sub-block case studies covering agent frameworks, automation pipelines, and Claude Code tooling
- **Projects** - Featured project showcases with tech tags and live/source links
- **Contact** - Inline section with mailto CTA and social links

## Tech Stack

- React 18
- Vite
- CSS custom properties for theming
- Google Fonts (Playfair Display, Inter, JetBrains Mono)
- Intersection Observer for scroll-spy and animations
- react-icons

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Screenshots

Re-capture the README screenshots after content changes:

```bash
# In one terminal
npm run dev

# In another
node scripts/screenshot.mjs
```

Outputs land in `src/assets/images/portfolio-desktop.png` and `portfolio-mobile.png`. Override the URL with `APP_URL=http://localhost:3000/` if your dev server runs on a different port.
