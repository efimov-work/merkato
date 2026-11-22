import Link from 'next/link';
import Footer from '@/components/Footer';
import { asset } from '@/lib/asset';
import { CONTACTS } from '@/lib/content';
import { GUIDE_PATH } from '@/lib/guide';
import styles from './guide.module.css';

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo} aria-label="Mercato, главная">
            <img src={asset('/logo.webp')} width={34} height={32} alt="" />
            <span>Mercato</span>
          </Link>
          <nav aria-label="Основная навигация">
            <Link href="/">Главная</Link>
            <Link href={GUIDE_PATH} aria-current="location">Гид покупателя</Link>
          </nav>
          <a className={styles.headerPhone} href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
        </div>
      </header>
      {children}
      <Footer />
    </>
  );
}
