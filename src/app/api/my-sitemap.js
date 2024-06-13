const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

const pages = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/leadgen', changefreq: 'monthly', priority: 1.0 },
  { url: '/impressum', changefreq: 'yearly', priority: 0.6 },
  { url: '/karriere', changefreq: 'yearly', priority: 0.6 },
  { url: '/pv-anlagen', changefreq: 'monthly', priority: 0.8 },
  { url: '/stromspeicher', changefreq: 'monthly', priority: 0.8 },
  { url: '/wallbox', changefreq: 'monthly', priority: 0.8 },
  { url: '/uber-uns', changefreq: 'monthly', priority: 0.5 },
  { url: '/thank-you', changefreq: 'yearly', priority: 0.1 },
];

async function generateSitemap() {
  const stream = new SitemapStream({
    hostname: 'https://work-set.eu',
    cacheTime: 600000,
  });
  const xml = await streamToPromise(Readable.from(pages).pipe(stream)).then(
    data => data.toString(),
  );

  fs.writeFileSync('public/sitemap.xml', xml);
}

generateSitemap().catch(console.error);
