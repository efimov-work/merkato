'use client';

import { useRef } from 'react';
import { GALLERY } from '@/lib/content';
import { H2 } from '@/lib/styles';

const arrow = { position: 'relative', display: 'block', width: 22, height: 1, background: 'currentColor' } as const;
const head = { position: 'absolute', top: 0, marginTop: -4.5, width: 9, height: 9, transform: 'rotate(45deg)' } as const;

export default function Gallery() {
  const strip = useRef<HTMLDivElement>(null);

  const move = (dir: 1 | -1) => {
    strip.current?.scrollBy({ left: dir * Math.min(780, window.innerWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section style={{ background: '#0E1A24', color: '#F7F4EE', padding: 'clamp(80px,10vw,130px) 0' }}>
      <div style={{ maxWidth: 1760, margin: '0 auto', padding: '0 clamp(20px,4vw,56px) 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, flexWrap: 'wrap' }}>
        <h2 data-r="up" style={{ ...H2, textWrap: undefined }}>
          Галерея
        </h2>
        <div data-r="fade" style={{ display: 'flex', gap: 12 }}>
          <button type="button" className="round-btn" aria-label="Назад" onClick={() => move(-1)}>
            <span style={arrow}>
              <span style={{ ...head, left: 1, borderLeft: '1px solid currentColor', borderBottom: '1px solid currentColor' }}></span>
            </span>
          </button>
          <button type="button" className="round-btn" aria-label="Вперёд" onClick={() => move(1)}>
            <span style={arrow}>
              <span style={{ ...head, right: 1, borderRight: '1px solid currentColor', borderTop: '1px solid currentColor' }}></span>
            </span>
          </button>
        </div>
      </div>
      <div
        ref={strip}
        className="strip"
        tabIndex={0}
        role="group"
        aria-label="Фотографии комплекса"
        style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          padding: '0 clamp(20px,4vw,56px)',
          scrollPaddingInline: 'clamp(20px,4vw,56px)'
        }}
      >
        {GALLERY.map((g, i) => (
          <figure
            key={g.img}
            data-r={i < 3 ? 'up' : undefined}
            data-d={i < 3 && i ? i * 80 : undefined}
            style={{ margin: 0, flex: `0 0 ${g.basis}`, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <div style={{ overflow: 'hidden', borderRadius: 4, aspectRatio: g.ratio }}>
              <img className="zoom zoom--soft" src={g.img} alt={g.alt} loading="lazy" decoding="async" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <figcaption style={{ fontSize: 14, opacity: 0.7 }}>{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
