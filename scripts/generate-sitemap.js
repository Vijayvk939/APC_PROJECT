import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load config from sitemap.config.js
let config;
try {
  const configPath = resolve(__dirname, '../sitemap.config.js');
  const configModule = await import('file://' + configPath);
  config = configModule.default || configModule;
} catch (error) {
  console.warn('⚠️  Could not load sitemap.config.js, using default config:', error.message);
  // Fallback to default config
  config = {
    siteUrl: 'https://agapepentecostalchurch.com',
    generateRobotsTxt: true,
  };
}

// Define your routes
const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  {
    url: '/books',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: config.siteUrl });
  const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: route.lastmod,
    });
  });

  sitemap.end();

  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated successfully at public/sitemap.xml');

  // Generate robots.txt if enabled
  if (config.generateRobotsTxt) {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

    const robotsWriteStream = createWriteStream(resolve('./public/robots.txt'));
    robotsWriteStream.write(robotsTxt);
    robotsWriteStream.end();
    console.log('✅ robots.txt generated successfully at public/robots.txt');
  }
}

generateSitemap().catch((error) => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});

