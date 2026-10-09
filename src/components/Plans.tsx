'use client';

import { useState } from 'react';
import { PLANS } from '@/lib/content';
import { setInterest } from '@/lib/interest';
import { FD, H2, KICKER, PAD, RULE, WRAP } from '@/lib/styles';

const row = { display: 'flex', justifyContent: 'space-between', gap: 20, padding: '16px 0', borderTop: RULE } as const;

export default function Plans() {
  const [active, setActive] = useState(0);
  const plan = PLANS[active];

  return (
    <section id="plans" style={{ padding: PAD }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,44px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span data-r="fade" style={KICKER}>
              04 / Планировки
            </span>
            <h2 data-r="up" style={H2}>
              Три формата квартир
            </h2>
          </div>
          <div data-r="up" data-d="100" role="tablist" aria-label="Формат квартиры" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PLANS.map((p, i) => (
              <button key={p.tab} type="button" role="tab" className="tab" aria-selected={i === active} aria-controls="plan-view" onClick={() => setActive(i)}>
                {p.tab}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ fontSize: 14, color: '#5A5D63' }}>Площадь</span>
            <span style={{ ...FD, fontSize: 'calc(clamp(64px,7vw,110px) * var(--fs))', lineHeight: 1, letterSpacing: 'var(--fls)' }}>{plan.area}</span>
          </div>
          <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', fontSize: 16 }}>
            <div style={row}>
              <dt style={{ color: '#5A5D63' }}>Отделка</dt>
              <dd style={{ margin: 0, textAlign: 'right' }}>Дизайнерский ремонт или без отделки</dd>
            </div>
            <div style={row}>
              <dt style={{ color: '#5A5D63' }}>Формат аренды</dt>
              <dd style={{ margin: 0, textAlign: 'right' }}>{plan.rent}</dd>
            </div>
            <div style={{ ...row, borderBottom: RULE }}>
              <dt style={{ color: '#5A5D63' }}>Стоимость</dt>
              <dd style={{ margin: 0, textAlign: 'right' }}>По запросу</dd>
            </div>
          </dl>
          <a className="btn btn--dark" href="#request" onClick={() => setInterest(`Планировка: ${plan.tab}, ${plan.area}`)} style={{ alignSelf: 'flex-start' }}>
            Запросить наличие и цены
          </a>
        </div>
        <div id="plan-view" role="tabpanel" data-r="clip" style={{ position: 'relative', aspectRatio: '1680/1192', borderRadius: 4, overflow: 'hidden', background: '#EEF1F4' }}>
          {PLANS.map((p, i) => (
            <img
              key={p.img}
              src={p.img}
              alt={p.alt}
              aria-hidden={i !== active}
              loading="lazy"
              decoding="async"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'opacity .8s,transform 1.2s cubic-bezier(.16,1,.3,1)',
                opacity: i === active ? 1 : 0,
                transform: i === active ? 'none' : 'scale(.96) translateY(12px)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
