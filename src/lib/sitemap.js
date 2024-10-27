export function generateSiteMap() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crivellitraslochi.ch'
  
    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${siteUrl}</loc>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>${siteUrl}/traslochi-sgomberi</loc>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
        </url>
        <url>
          <loc>${siteUrl}/depositi</loc>
          <changefreq>monthly</changefreq>
          <priority>0.9</priority>
        </url>
        <url>
          <loc>${siteUrl}/contatti</loc>
          <changefreq>yearly</changefreq>
          <priority>0.7</priority>
        </url>
        <url>
          <loc>${siteUrl}/blog</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
        <url>
          <loc>${siteUrl}/blog/guida-trasloco</loc>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
        <url>
          <loc>${siteUrl}/blog/consigli-organizzazione</loc>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      </urlset>`
  }