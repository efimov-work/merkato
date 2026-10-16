import { asset } from '@/lib/asset';
import { COMPLEX, DISTANCES } from '@/lib/content';
import { FD, H2, KICKER, PAD, RULE, WRAP } from '@/lib/styles';
import Photo from './Photo';

export default function Location() {
  return (
    <section id="location" style={{ padding: PAD }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
        <Photo
          src={asset('/assets/hero-1200.webp')}
          alt="ЖК Mercato в центре Сочи, напротив парка «Дендрарий»"
          parallax={0.12}
          style={{ aspectRatio: '4/5' }}
          imgStyle={{ left: '-30%', width: '160%' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px,4vw,44px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span data-r="fade" style={KICKER}>
              07 / Локация
            </span>
            <h2 data-r="up" style={H2}>
              Центр Сочи, напротив Дендрария
            </h2>
            <p data-r="up" data-d="80" style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: '#5A5D63' }}>
              <span>{COMPLEX.street}</span>. 200 м до остановки, 5 минут до Курортного проспекта.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: RULE }}>
            {DISTANCES.map((d, i) => (
              <div
                key={d.text}
                data-r="up"
                data-d={i * 80 || undefined}
                style={{
                  padding: i % 2 ? '24px 0 24px 24px' : '24px 0',
                  borderBottom: RULE,
                  borderLeft: i % 2 ? RULE : undefined,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6
                }}
              >
                <span style={{ ...FD, fontSize: 'calc(clamp(40px,4vw,60px) * var(--fs))', lineHeight: 1 }}>
                  <span data-count={d.count}>{d.count}</span> мин
                </span>
                <span style={{ fontSize: 15, color: '#5A5D63' }}>{d.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
