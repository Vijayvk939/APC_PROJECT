import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync, existsSync } from 'fs';
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

  // Write to public folder (Vite will copy it to dist during build)
  // Also write to dist if it exists (for postbuild step)
  const publicPath = resolve('./public/sitemap.xml');
  const distPath = resolve('./dist/sitemap.xml');
  
  writeFileSync(publicPath, sitemapXml);
  
  // Only write to dist if dist folder exists (postbuild scenario)
  try {
    const { existsSync } = await import('fs');
    if (existsSync(resolve('./dist'))) {
      writeFileSync(distPath, sitemapXml);
      console.log('✅ Sitemap generated successfully at public/sitemap.xml and dist/sitemap.xml');
    } else {
      console.log('✅ Sitemap generated successfully at public/sitemap.xml (will be copied to dist during build)');
    }
  } catch {
    writeFileSync(publicPath, sitemapXml);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  }

  // Generate robots.txt if enabled
  if (config.generateRobotsTxt) {
    const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;

    writeFileSync(resolve('./public/robots.txt'), robotsTxt);
    
    // Only write to dist if dist folder exists (postbuild scenario)
    if (existsSync(resolve('./dist'))) {
      writeFileSync(resolve('./dist/robots.txt'), robotsTxt);
      console.log('✅ robots.txt generated successfully at public/robots.txt and dist/robots.txt');
    } else {
      console.log('✅ robots.txt generated successfully at public/robots.txt (will be copied to dist during build)');
    }
  }
}

generateSitemap().catch((error) => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});

