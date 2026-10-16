import { asset, BASE_PATH } from './asset';
import { AMENITIES, COMPLEX, CONTACTS, FEATURES, GALLERY, INFRA, OBJECT_PHOTOS, PLANS } from './content';

export const DEFAULT_SITE_URL = 'http://localhost:3000';

export const SITE_NAME = 'Mercato';

export const YANDEX_VERIFICATION = process.env.YANDEX_VERIFICATION || undefined;
export const GOOGLE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || undefined;

export const NOINDEX = process.env.SITE_NOINDEX === '1';

export const TITLE = 'ЖК Mercato в Сочи: квартиры у моря с доходом от аренды';
export const DESCRIPTION =
  'Готовые квартиры в сданном ЖК премиум-класса Mercato в центре Сочи, напротив Дендрария. Бассейн, паркинг, управляющая компания. Расчёт доходности за 1 день.';

export const KEYWORDS = [
  'ЖК Mercato',
  'ЖК Меркато Сочи',
  'купить квартиру в Сочи',
  'квартиры в Сочи у моря',
  'квартира в Сочи для инвестиций',
  'квартира в Сочи для сдачи в аренду',
  'доходная недвижимость Сочи',
  'сданный дом в Сочи',
  'квартиры в Хостинском районе Сочи',
  'новостройки Сочи премиум-класса'
];

export const CLEAN_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'yclid',
  'ysclid',
  'gclid',
  'fbclid',
  'from',
  'etext'
];

export function siteOrigin(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function siteUrl(): string {
  return `${siteOrigin()}${BASE_PATH}`;
}

export const HERO_ALT = 'Три корпуса ЖК Mercato в Сочи на фоне моря и гор';

export function pageImages(): { url: string; caption: string }[] {
  const url = siteOrigin();
  return [
    { img: asset('/assets/hero.webp'), alt: HERO_ALT },
    { img: asset('/assets/market-bypass.webp'), alt: 'Обход Адлера, визуализация новой автодороги' },
    ...Object.values(OBJECT_PHOTOS),
    ...INFRA,
    ...GALLERY,
    ...PLANS
  ].map((p) => ({ url: `${url}${p.img}`, caption: p.alt }));
}

export function buildJsonLd(): Record<string, unknown> {
  const url = siteUrl();
  const site = `${url}/#website`;
  const page = `${url}/#webpage`;
  const complex = `${url}/#complex`;
  const telephone = CONTACTS.phoneHref.replace('tel:', '');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': site,
        url,
        name: SITE_NAME,
        alternateName: `ЖК ${COMPLEX.nameRu}`,
        inLanguage: 'ru-RU'
      },
      {
        '@type': 'WebPage',
        '@id': page,
        url,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'ru-RU',
        isPartOf: { '@id': site },
        about: { '@id': complex },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${url}/opengraph-image.jpg` }
      },
      {
        '@type': 'ApartmentComplex',
        '@id': complex,
        name: `ЖК ${COMPLEX.name}`,
        alternateName: `ЖК ${COMPLEX.nameRu}`,
        description: DESCRIPTION,
        url,
        telephone,
        logo: { '@type': 'ImageObject', '@id': `${url}/#logo`, url: `${url}/logo.png`, contentUrl: `${url}/logo.png`, width: 1000, height: 1000, caption: SITE_NAME },
        image: [
          `${url}/opengraph-image.jpg`,
          ...pageImages().map((p) => ({ '@type': 'ImageObject', url: p.url, contentUrl: p.url, caption: p.caption }))
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: COMPLEX.country,
          addressRegion: COMPLEX.region,
          addressLocality: COMPLEX.locality,
          streetAddress: COMPLEX.street
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone,
          contactType: 'sales',
          areaServed: 'RU',
          availableLanguage: 'ru'
        },
        amenityFeature: [...FEATURES, ...INFRA.slice(1).map((i) => i.title), ...AMENITIES].map((name) => ({
          '@type': 'LocationFeatureSpecification',
          name,
          value: true
        }))
      }
    ]
  };
}
