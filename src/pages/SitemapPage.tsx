import { useEffect, useState } from 'react';
import { generateSitemap } from '../utils/generateSitemap';

export function SitemapPage() {
  const [sitemap, setSitemap] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSitemap() {
      try {
        const sitemapContent = await generateSitemap();
        setSitemap(sitemapContent);
      } catch (error) {
        console.error('Error generating sitemap:', error);
      }
    }

    fetchSitemap();
  }, []);

  if (!sitemap) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
}
