import { MARKET } from '@/lib/content';
import { FD, H2, KICKER, PAD, RULE, WRAP } from '@/lib/styles';
import Photo from './Photo';

export default function Market() {
  return (
    <section id="sochi" style={{ padding: PAD }}>
      <div style={{ ...WRAP, display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,80px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
          <span data-r="fade" style={KICKER}>
            01 / Рынок
          </span>
          <h2 data-r="up" style={H2}>
            Спрос в Сочи опережает предложение
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))', gap: 'clamp(32px,4vw,64px)' }}>
          <Photo src="/assets/market-bypass.webp" alt="Обход Адлера, визуализация новой автодороги" parallax={0.12} style={{ aspectRatio: '4/3' }}>
            <span style={{ position: 'absolute', left: 16, bottom: 16, padding: '8px 14px', background: 'rgba(243,240,234,.92)', fontSize: 13, borderRadius: 999 }}>Обход Адлера, визуализация</span>
          </Photo>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {MARKET.map((m, i) => (
              <div
                key={m.title}
                data-r="up"
                data-d={i * 100 || undefined}
                style={{
                  padding: '28px 0',
                  borderTop: RULE,
                  borderBottom: i === MARKET.length - 1 ? RULE : undefined,
                  display: 'grid',
                  gridTemplateColumns: 'minmax(150px,max-content) minmax(0,1fr)',
                  gap: 24
                }}
              >
                <span style={{ ...FD, fontSize: 'calc(40px * var(--fs))', lineHeight: 1, color: 'var(--acd)', whiteSpace: 'nowrap' }}>{m.value}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>{m.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#5A5D63' }}>{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
