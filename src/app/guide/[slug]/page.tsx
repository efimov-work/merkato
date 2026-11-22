import Link from 'next/link';
import { notFound } from 'next/navigation';
import { asset } from '@/lib/asset';
import { guideArticles, guideArticlePath, guideBySlug, GUIDE_PATH } from '@/lib/guide';
import { guideMetadata, guideUrl } from '@/lib/guide/metadata';
import { sources } from '@/lib/guide/types';
import { SITE_NAME, siteUrl } from '@/lib/seo';
import styles from '../guide.module.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = guideBySlug.get(slug);
  if (!article) notFound();

  return guideMetadata(guideArticlePath(slug), article.title, article.description, article.image, 'article');
}

export default async function GuideArticle({ params }: Props) {
  const { slug } = await params;
  const article = guideBySlug.get(slug);
  if (!article) notFound();

  const url = guideUrl(guideArticlePath(slug));
  const image = article.image;
  const credit = image ? sources[image.credit] : null;
  const breadcrumbs = [
    { name: 'Главная', item: siteUrl() },
    { name: 'Гид покупателя', item: guideUrl(GUIDE_PATH) },
    { name: article.title, item: url }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((item, position) => ({ '@type': 'ListItem', position: position + 1, ...item })) },
      {
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        mainEntityOfPage: url,
        inLanguage: 'ru-RU',
        image: image ? `${siteUrl()}${image.path}` : `${siteUrl()}/opengraph-image.jpg`,
        publisher: { '@type': 'Organization', name: SITE_NAME, url: siteUrl() }
      }
    ]
  };

  return (
    <main className={styles.shell}>
      <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}>
        <Link href="/">Главная</Link><span aria-hidden="true">/</span>
        <Link href={GUIDE_PATH}>Гид покупателя</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{article.title}</span>
      </nav>
      <article>
        <header className={styles.intro}>
          <p className={styles.topic}>{article.topic}</p>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
        {image && credit && (
          <figure className={styles.figure}>
            {image.mode === 'plan' ? (
              <a href={asset(image.originalPath ?? image.path)}>
                <img className={styles.plan} src={asset(image.path)} alt={image.alt} width={1050} height={600} fetchPriority="high" />
                <span className={styles.enlarge}>{image.originalPath ? 'Открыть исходную схему целиком' : 'Открыть схему в полном размере'}</span>
              </a>
            ) : <img src={asset(image.path)} alt={image.alt} width={1050} height={600} fetchPriority="high" />}
            <figcaption>
              {image.originalPath && 'Фрагмент исходного плана. '}
              {credit.url.startsWith('/#') ? (
                <Link href={credit.url}>{credit.label}</Link>
              ) : <a href={credit.url}>{credit.label}</a>}
              {'license' in credit && (
                <> · <a href={credit.license.url}>{credit.license.label}</a> · уменьшенный размер</>
              )}
            </figcaption>
          </figure>
        )}
        <div className={styles.articleText}>
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.text.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </section>
          ))}
          <section className={styles.sources}>
            <h2>Источники</h2>
            <ul>
              {article.sources.map((key) => (
                <li key={key}>
                  {sources[key].url.startsWith('/#') ? <Link href={sources[key].url}>{sources[key].label}</Link> : <a href={sources[key].url}>{sources[key].label}</a>}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <aside className={styles.callout} aria-labelledby="guide-request">
        <div>
          <h2 id="guide-request">Подобрать квартиру в Mercato</h2>
          <p>Уточним доступные предложения и поможем сравнить варианты.</p>
        </div>
        <Link className="btn btn--light" href="/#request">Оставить заявку</Link>
      </aside>
      <nav className={styles.related} aria-labelledby="guide-related">
        <h2 id="guide-related">Читайте также</h2>
        <ul>
          {article.related.map((related) => {
            const item = guideBySlug.get(related);
            return item && <li key={related}><Link href={guideArticlePath(related)}>{item.title}</Link></li>;
          })}
        </ul>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
