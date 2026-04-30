import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'src/assets/images');
const APP_URL = process.env.APP_URL || 'http://localhost:5173/';

const VIEWPORTS = [
  { name: 'portfolio-desktop', width: 1440, height: 900 },
  { name: 'portfolio-mobile', width: 440, height: 900 },
];

async function waitForServer(url, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Dev server not reachable at ${url}`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await waitForServer(APP_URL);

  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await page.goto(APP_URL, { waitUntil: 'networkidle' });

    // Scroll through the full page to trigger IntersectionObserver fade-ins
    await page.evaluate(async () => {
      const total = document.body.scrollHeight;
      const step = window.innerHeight * 0.6;
      for (let y = 0; y <= total; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
      // Belt-and-suspenders: force any unfired fade-ins to visible
      const css = document.createElement('style');
      css.textContent =
        '.fade-in{opacity:1 !important;transform:none !important;}';
      document.head.appendChild(css);
    });
    await page.waitForTimeout(500);

    const path = resolve(OUT_DIR, `${vp.name}.png`);
    await page.screenshot({ path, fullPage: true });
    console.log(`wrote ${path}`);
    await context.close();
  }
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
