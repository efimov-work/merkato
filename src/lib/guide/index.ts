import type { Article } from './types';
import { purchase } from './purchase';
import { layouts } from './layouts';
import { location } from './location';
import { complex } from './complex';
import { rental } from './rental';

export const GUIDE_PATH = '/guide';

export const guideSections = [
  { id: 'pokupka', title: 'Покупка и документы', articles: purchase },
  { id: 'planirovki', title: 'Квартиры и планировки', articles: layouts },
  { id: 'raion', title: 'Район и маршруты', articles: location },
  { id: 'kompleks', title: 'Территория и инфраструктура', articles: complex },
  { id: 'arenda', title: 'Аренда и расчёты', articles: rental }
];

export const guideArticles = guideSections.flatMap(({ title, articles }) =>
  articles.map((article: Article) => ({ ...article, topic: title }))
);

export const guideBySlug = new Map(guideArticles.map((article) => [article.slug, article]));

export function guideArticlePath(slug: string) {
  return `${GUIDE_PATH}/${slug}`;
}
