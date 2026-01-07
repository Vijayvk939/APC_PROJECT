import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
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
  // Generate sitemap XML content
  const sitemap = new SitemapStream({ hostname: config.siteUrl });
  
  routes.forEach((route) => {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: route.lastmod,
    });
  });

  sitemap.end();

  // streamToPromise returns the XML string
  const sitemapXml = await streamToPromise(sitemap);

  // Write to dist folder (for deployment) and public folder (for next build)
  const distPath = resolve('./dist/sitemap.xml');
  const publicPath = resolve('./public/sitemap.xml');
  
  writeFileSync(distPath, sitemapXml);
  writeFileSync(publicPath, sitemapXml);

  console.log('✅ Sitemap generated successfully at dist/sitemap.xml and public/sitemap.xml');

  // Generate robots.txt if enabled
  if (config.generateRobotsTxt) {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

    writeFileSync(resolve('./dist/robots.txt'), robotsTxt);
    writeFileSync(resolve('./public/robots.txt'), robotsTxt);
    
    console.log('✅ robots.txt generated successfully at dist/robots.txt and public/robots.txt');
  }
}

generateSitemap().catch((error) => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});

