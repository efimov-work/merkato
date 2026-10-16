'use client';

import { useEffect, useRef, useState } from 'react';
import { asset } from '@/lib/asset';
import { CONTACTS, NAV } from '@/lib/content';
import { FD } from '@/lib/styles';

const MOBILE = '(max-width: 959.98px)';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const h = window.innerHeight;
      const max = document.documentElement.scrollHeight - h;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      setScrolled(y > h * 0.6);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia(MOBILE);
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    mq.addEventListener('change', close);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      mq.removeEventListener('change', close);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div ref={progress} className="progress" aria-hidden="true"></div>

      <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}${open ? ' hdr--open' : ''}`}>
        <div style={{ maxWidth: 1760, margin: '0 auto', padding: '0 clamp(20px,4vw,56px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <a href="#top" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'inherit' }}>
            <img className="hdr__logo" src={asset('/logo.webp')} alt="" width={160} height={150} />
            <span style={{ ...FD, fontSize: 'calc(26px * var(--fs))', letterSpacing: 'var(--fls)' }}>Mercato</span>
          </a>
          <nav className="only-desk" aria-label="Разделы страницы" style={{ gap: 36, fontSize: 14, letterSpacing: '.02em' }}>
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a className="only-desk" href={CONTACTS.phoneHref} style={{ fontSize: 14, letterSpacing: '.02em', whiteSpace: 'nowrap' }}>
              {CONTACTS.phone}
            </a>
            <a className="only-desk btn btn--outline" href="#request">
              Запросить расчёт
            </a>
            <button type="button" className="only-mob menu-btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
              {open ? 'Закрыть' : 'Меню'}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          id="menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 45,
            background: '#0E1A24',
            color: '#F3F0EA',
            padding: '110px 28px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto'
          }}
        >
          <nav aria-label="Меню" style={{ ...FD, display: 'flex', flexDirection: 'column', gap: 18, fontSize: 'calc(40px * var(--fs))', letterSpacing: 'var(--fls)' }}>
            {[...NAV, { href: '#request', label: 'Заявка' }].map((n) => (
              <a key={n.href} href={n.href} onClick={close}>
                {n.label}
              </a>
            ))}
          </nav>
          <a href={CONTACTS.phoneHref} style={{ fontSize: 18 }}>
            {CONTACTS.phone}
          </a>
        </div>
      ) : null}
    </>
  );
}
