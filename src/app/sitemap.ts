import type { MetadataRoute } from 'next';
import { guideArticlePath, guideArticles, GUIDE_PATH } from '@/lib/guide';
import { guideUrl } from '@/lib/guide/metadata';
import { NOINDEX, pageImages, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const BUILT_AT = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  if (NOINDEX) return [];

  return [
    {
      url: siteUrl(),
      lastModified: BUILT_AT,
      changeFrequency: 'monthly',
      priority: 1,
      images: [...pageImages().map((p) => p.url), `${siteUrl()}/opengraph-image.jpg`, `${siteUrl()}/logo.png`]
    },
    { url: guideUrl(GUIDE_PATH) },
    ...guideArticles.map((article) => ({
      url: guideUrl(guideArticlePath(article.slug)),
      images: article.image ? [`${siteUrl()}${article.image.path}`] : undefined
    }))
  ];
}
