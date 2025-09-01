#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://psicologaraquelrodrigues.com.br';
const ROUTES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: '/sobre', priority: '0.8', changefreq: 'monthly' },
  { path: '/servicos', priority: '0.8', changefreq: 'monthly' },
  { path: '/contato', priority: '0.7', changefreq: 'monthly' }
];

const today = new Date().toISOString().split('T')[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(route => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const publicDir = path.join(process.cwd(), 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

try {
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log('✅ Sitemap atualizado com sucesso!');
  console.log(`📅 Data de atualização: ${today}`);
  console.log(`📍 Arquivo: ${sitemapPath}`);
} catch (error) {
  console.error('❌ Erro ao atualizar sitemap:', error.message);
  process.exit(1);
}
