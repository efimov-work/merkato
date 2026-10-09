import { AMENITIES, INFRA } from '@/lib/content';
import { FD, H2, KICKER, LEAD, PAD, WRAP } from '@/lib/styles';

export default function Infrastructure() {
  return (
    <section style={{ padding: PAD }}>
      <div style={{ ...WRAP, display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,64px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 24, alignItems: 'end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span data-r="fade" style={KICKER}>
              03 / Территория
            </span>
            <h2 data-r="up" style={H2}>
              Инфраструктура внутри периметра
            </h2>
          </div>
          <p data-r="up" data-d="100" style={LEAD}>
            Территория огорожена, охрана и видеонаблюдение круглосуточно. Для арендатора это повышает загрузку и ставку.
          </p>
        </div>
        <div className="infra" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 16 }}>
          {INFRA.map((t, i) => (
            <div
              key={t.img}
              className={t.wide ? 'infra__wide' : undefined}
              data-r="clip"
              data-d={i % 2 ? 120 : undefined}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, minHeight: i < 2 ? 420 : 340, background: '#D9D3C8', color: '#fff' }}
            >
              <img className="zoom" src={t.img} alt={t.alt} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: 24,
                  background: 'linear-gradient(0deg,rgba(14,26,36,.7),rgba(14,26,36,0))',
                  pointerEvents: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'end',
                  gap: 12
                }}
              >
                <h3 style={{ ...FD, margin: 0, fontSize: 'calc(30px * var(--fs))' }}>{t.title}</h3>
                {t.note ? <span style={{ fontSize: 14, opacity: 0.85 }}>{t.note}</span> : null}
              </div>
            </div>
          ))}
          <div
            data-r="up"
            data-d="240"
            style={{ borderRadius: 4, minHeight: 340, background: '#0E1A24', color: '#F7F4EE', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}
          >
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 400, color: 'var(--ac)' }}>Также на территории</h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: 17 }}>
              {AMENITIES.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
