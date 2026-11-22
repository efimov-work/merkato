import type { Metadata } from 'next';
import { SITE_NAME, siteUrl } from '@/lib/seo';
import type { GuideImage } from './types';

export function guideUrl(path: string) {
  return `${siteUrl()}${path}${process.env.STATIC_EXPORT === '1' ? '/' : ''}`;
}

export function guideMetadata(path: string, title: string, description: string, image?: GuideImage, type: 'website' | 'article' = 'website'): Metadata {
  const url = guideUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const images = image ? [{ url: `${siteUrl()}${image.path}`, alt: image.alt }] : [{ url: `${siteUrl()}/opengraph-image.jpg` }];

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    keywords: null,
    openGraph: { type, url, title: fullTitle, description, locale: 'ru_RU', siteName: SITE_NAME, images },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images }
  };
}
