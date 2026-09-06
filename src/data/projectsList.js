import jellyImage from '../assets/images/jelly-preview.jpg';
import prayerFlipImage from '../assets/images/prayer-flip-preview.jpg';
import cloudfireImage from '../assets/images/cloudfire-screenshot.png';
import tideImage from '../assets/images/tide-screenshot.png';
import starshippedImage from '../assets/images/starshipped-screenshot.png';
import auroraImage from '../assets/images/aurora-screenshot.png';
import signalImage from '../assets/images/signal-screenshot.png';
import portfolioImage from '../assets/images/portfolio-appearance-preview.jpg';

const projects = [
  {
    id: 8,
    title: 'Jelly',
    category: 'Interactive playground',
    description:
      'A little joy, a lot of jiggle. Poke, stretch, and bounce a translucent 3D jelly, switch between four flavors, and dial in the squishiness. Built with TypeScript and Three.js, a custom soft-body physics simulation brings the jelly to life with responsive deformation, refraction, and studio lighting. WebGPU rendering falls back to WebGL 2, with touch and keyboard controls and support for reduced motion.',
    image: jellyImage,
    alt: 'Jelly playground with a glossy raspberry jelly and interactive flavor and physics controls',
    live: 'https://jelly.angelrod.dev',
    github: 'https://github.com/nodelabstudio/delicious-jelly',
    techTags: ['Three.js', 'TypeScript', 'WebGPU', 'Vite', 'Cloudflare'],
  },
  {
    id: 1,
    title: 'Prayer Flip',
    category: 'iOS app',
    description:
      'A native Swift devotional app for Christian parents on iPhone and iPad. Its 1,095 illustrated cards pair Scripture with reflection, prayer, and a practical family action. The app uses an on-device architecture: favorites, prayer history, reminders, and God Lock choices stay local, with no accounts or developer-operated backend. Widgets, configurable Prayer Times, and voluntary God Lock focus sessions support a daily rhythm, while Apple-managed subscriptions provide Premium access.',
    image: prayerFlipImage,
    alt: 'Prayer Flip website showcasing God Lock on two iPhones with Solomon the sparrow',
    live: 'https://prayerflip.com',
    appStore: 'https://apps.apple.com/us/app/prayer-flip-family-devotional/id6760314001',
    github: null,
    techTags: ['Swift', 'iOS', 'iPadOS', 'On-device Storage', 'Widgets'],
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
    title: 'Tide: Journal App',
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
    title: 'StarShipped: Fleet Logistics',
    description:
      'A sci-fi fleet logistics sim, originally designed and built in 2018 as a Ruby on Rails app and rebuilt in 2026 on Next.js 16 and React 19 with a holo-terminal design language. Captains commission ships, post cargo runs, and dispatch a fleet across ten planets. Runs play out in real time, with ETAs derived from starmap distances, lazy arrival settlement, credit payouts, and a captain leaderboard. An SVG galaxy starmap tracks live route arcs, the View Transitions API drives hyperspace page warps, and shared links unfurl dynamic Open Graph ship cards. Clerk handles authentication, Neon Postgres with Drizzle ORM the data layer, and Vercel Blob the ship imagery, deployed on Vercel.',
    image: starshippedImage,
    alt: 'Screenshot of StarShipped fleet logistics app',
    live: 'https://star.angelrod.dev',
    github: 'https://github.com/nodelabstudio/starshipped',
    techTags: ['Next.js 16', 'React 19', 'Neon Postgres', 'Drizzle ORM', 'Clerk'],
  },
  {
    id: 5,
    title: 'Aurora: Mood Dashboard',
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
    category: 'Publication, currently paused',
    description:
      'An experiment in agent-led publishing, currently paused with the possibility of a future revival. Signal & Circuit covered the people and systems turning large language models into working software. A custom Hermes agent handled research, drafting, and first-pass production, while I retained editorial judgment, accuracy review, and publication approval. Coverage focused on builder tooling, agent workflows, and the practical realities of running AI products.',
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
      'My personal developer portfolio, built with React 18 and Vite. An Apple-inspired interface brings together system typography, spacious project showcases, a translucent navigation bar, and a tabbed experience timeline. Light, dark, and system appearance options use CSS custom properties, remember your preference, and follow device settings in system mode.',
    image: portfolioImage,
    alt: 'Screenshot of personal developer portfolio site',
    live: 'https://angelrod.dev',
    github: 'https://github.com/nodelabstudio/portfolio/tree/main',
    techTags: ['React 18', 'Vite', 'CSS Variables'],
  },
];

export default projects;
