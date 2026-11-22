import Link from 'next/link';
import { asset } from '@/lib/asset';
import { guideArticlePath, GUIDE_PATH, guideSections } from '@/lib/guide';
import { guideMetadata } from '@/lib/guide/metadata';
import styles from './guide.module.css';

const title = 'Гид покупателя ЖК Mercato';
const description = 'Как выбрать квартиру в сданном ЖК Mercato в Сочи. Планировки, цены, документы, район у Дендрария, инфраструктура и аренда.';

export const metadata = guideMetadata(GUIDE_PATH, title, description);

export default function GuideIndex() {
  return (
    <main className={styles.shell}>
      <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}><Link href="/">Главная</Link><span aria-hidden="true">/</span><span aria-current="page">Гид покупателя</span></nav>
      <div className={styles.intro}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <nav aria-label="Темы гида" className={styles.contents}>
        {guideSections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
      </nav>
      {guideSections.map((section) => (
        <section id={section.id} key={section.id} className={styles.group} aria-labelledby={`heading-${section.id}`}>
          <h2 id={`heading-${section.id}`}>{section.title}</h2>
          <ul className={styles.grid}>
            {section.articles.map((article) => (
              <li key={article.slug}>
                <Link href={guideArticlePath(article.slug)} className={article.image ? styles.card : `${styles.card} ${styles.textCard}`}>
                  {article.image && <img className={article.image.mode === 'plan' ? styles.plan : undefined} src={asset(article.image.path)} alt="" width={420} height={230} loading="lazy" decoding="async" />}
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
