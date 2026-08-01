import harborImage from '../assets/images/harbor-screenshot.png';
import cloudfireImage from '../assets/images/cloudfire-screenshot.png';
import tideImage from '../assets/images/tide-screenshot.png';
import starshippedImage from '../assets/images/starshipped-screenshot.png';
import auroraImage from '../assets/images/aurora-screenshot.png';
import signalImage from '../assets/images/signal-screenshot.png';
import portfolioImage from '../assets/images/portfolio-screenshot.png';

const projects = [
  {
    id: 1,
    title: 'Harbor & Cross',
    description:
      'A marketing site for Harbor & Cross, a daily devotional iOS app built for Christian fathers. Designed to drive App Store installs and establish a clear brand presence, the site is built on Next.js 15 with the App Router and a static export, written in TypeScript, and styled with Tailwind CSS. Framer Motion handles the animation work, including a custom flip-card devotional preview, responsive phone mockups, and a content-driven newsletter pipeline. Deployed on Vercel under a custom domain at harborandcross.com.',
    image: harborImage,
    alt: 'Screenshot of Harbor & Cross marketing site',
    live: 'https://harborandcross.com',
    github: null,
    techTags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
  {
    id: 2,
    title: 'Cloudfire Image Generation',
    description:
      "An AI image-generation studio that lets users compare thirteen image models from Cloudflare Workers AI and Google Gemini side by side. Built on FastAPI with a custom pastel design system pairing Fraunces and Plus Jakarta Sans, the app includes session-based authentication with bcrypt, CSRF protection, rate limiting, password reset over SMTP, and a gallery with favorites, tags, and shareable public links. Images are stored on Cloudinary's CDN, with PostgreSQL hosted on Railway and Cloudflare fronting the application for SSL, caching, and DDoS protection.",
    image: cloudfireImage,
    alt: 'Screenshot of Cloudfire AI image generation studio',
    live: 'https://cloudfire.one',
    github: 'https://github.com/nodelabstudio/cloudfire-image-generator',
    techTags: ['FastAPI', 'PostgreSQL', 'Cloudinary', 'Cloudflare', 'Railway'],
  },
  {
    id: 3,
    title: 'Tide — Journal App',
    description:
      'A daily reflection app built around an iOS 26 Liquid Glass UI. Built on Next.js 15, it features AI-generated journaling prompts, weekly pattern synthesis, and per-entry reframing through Groq. The data layer runs on Supabase and Upstash, hosted on Vercel behind Cloudflare DNS.',
    image: tideImage,
    alt: 'Screenshot of Tide journaling app interface',
    live: 'https://tide.angelrod.dev',
    github: 'https://github.com/nodelabstudio/tide-ai-app-journal',
    techTags: ['Next.js 15', 'Supabase', 'Upstash', 'Groq', 'Vercel'],
  },
  {
    id: 4,
    title: 'StarShipped — Fleet Logistics',
    description:
      'Star Wars fleet logistics for the Outer Rim. Originally designed and built in 2018 as a Ruby on Rails app, rebuilt in 2026 on Next.js 16 and React 19 with a holo-terminal design language. Captains commission ships, post cargo runs, and dispatch a fleet across ten planets — runs play out in real time, with ETAs derived from starmap distances, lazy arrival settlement, credit payouts, and a captain leaderboard. An SVG galaxy starmap tracks live route arcs, the View Transitions API drives hyperspace page warps, and shared links unfurl dynamic Open Graph ship cards. Clerk handles authentication, Neon Postgres with Drizzle ORM the data layer, and Vercel Blob the ship imagery, deployed on Vercel.',
    image: starshippedImage,
    alt: 'Screenshot of StarShipped fleet logistics app',
    live: 'https://star.angelrod.dev',
    github: 'https://github.com/nodelabstudio/starshipped',
    techTags: ['Next.js 16', 'React 19', 'Neon Postgres', 'Drizzle ORM', 'Clerk'],
  },
  {
    id: 5,
    title: 'Aurora — Mood Dashboard',
    description:
      "An ambient weather dashboard that pulls live conditions for the user's location, selects a cinematic sky photo matched to the current weather and time of day, and asks an LLM to write a fifty-to-seventy-word literary paragraph about the scene. Built on Next.js 15 and React 19, the interface layers glassmorphism panels with GSAP-driven parallax over OpenWeatherMap data. A Groq-to-OpenRouter LLM fallback chain handles model availability, and an Upstash Redis cache with a sliding-window rate limiter manages traffic. Hosted on Vercel, fronted by Cloudflare for SSL, caching, and DNS.",
    image: auroraImage,
    alt: 'Screenshot of Aurora mood weather dashboard',
    live: 'https://aurora.angelrod.dev',
    github: 'https://github.com/nodelabstudio/aurora-mood-dashboard',
    techTags: ['Next.js 15', 'React 19', 'GSAP', 'Groq', 'Upstash'],
  },
  {
    id: 6,
    title: 'Signal & Circuit',
    description:
      'An AI-powered publication covering the people and systems turning large language models into real, working software. Operated as an experiment in agent-led publishing: research, drafting, and first-pass production are handled by a custom Hermes agent with a dedicated writer profile, while editorial judgment, accuracy review, and final approval remain with me. Coverage spans builder tooling, agent workflows, release shifts, and the operational realities that surface once AI products meet daily production use. The editorial stance is practitioner-first — no empty hype, no rewritten press releases, no manufactured certainty.',
    image: signalImage,
    alt: 'Screenshot of Signal & Circuit AI publication',
    live: 'https://signalcircuit.cloud',
    github: 'https://github.com/nodelabstudio/signal-n-circuit-publication',
    techTags: ['AI Publishing', 'Hermes Agent', 'Editorial'],
  },
  {
    id: 7,
    title: 'Portfolio',
    description:
      'My personal developer portfolio, built as a single-page editorial site with a warm-minimalism design language and synced light and dark theming. Built on React 18 and Vite, the site leans on a typography-driven hero, scroll-spy navigation powered by the Intersection Observer API, an interactive filterable project grid, and a tabbed experience timeline. Theming is handled entirely through CSS custom properties, allowing instant theme switches without component re-renders.',
    image: portfolioImage,
    alt: 'Screenshot of personal developer portfolio site',
    live: 'https://angelrod.dev',
    github: 'https://github.com/nodelabstudio/portfolio/tree/main',
    techTags: ['React 18', 'Vite', 'CSS Variables'],
  },
];

export default projects;
