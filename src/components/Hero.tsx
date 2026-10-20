import { asset } from '@/lib/asset';
import { FEATURES, HERO_FACTS } from '@/lib/content';
import { HERO_ALT, HERO_SIDE_ALT } from '@/lib/seo';
import { delay, FD } from '@/lib/styles';

const line = { display: 'block', overflow: 'hidden', paddingBottom: '.06em' } as const;

function Features({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden} style={{ display: 'flex', gap: 56 }}>
      {FEATURES.map((f) => (
        <span key={f} style={{ display: 'flex', gap: 56 }}>
          <span>{f}</span>
          <span aria-hidden="true" style={{ color: 'var(--ac)' }}>
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section id="top" style={{ position: 'relative', height: '100svh', minHeight: 640, overflow: 'hidden', background: '#0E1A24', color: '#F7F4EE' }}>
        <div className="in-hero" style={{ position: 'absolute', inset: 0 }}>
          <img
            data-px="0.25"
            src={asset('/assets/infra-lounge.webp')}
            alt={HERO_ALT}
            width={1000}
            height={1000}
            fetchPriority="high"
            decoding="async"
            style={{ position: 'absolute', inset: '-6% 0 0 0', width: '100%', height: '112%', objectFit: 'cover', objectPosition: '50% 62%' }}
          />
          <div className="hero-side">
            <img
              src={asset('/assets/hero-1200.webp')}
              srcSet={`${asset('/assets/hero-1200.webp')} 1200w, ${asset('/assets/hero.webp')} 2400w`}
              sizes="80vh"
              alt={HERO_SIDE_ALT}
              width={2400}
              height={1120}
              decoding="async"
            />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(14,26,36,.45) 0%,rgba(14,26,36,0) 28%,rgba(14,26,36,.15) 55%,rgba(14,26,36,.88) 100%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(14,26,36,.55) 0%,rgba(14,26,36,.15) 40%,rgba(14,26,36,0) 60%)' }}></div>
        <div
          style={{
            position: 'relative',
            height: '100%',
            maxWidth: 1760,
            margin: '0 auto',
            padding: '0 clamp(20px,4vw,56px) clamp(32px,6vh,64px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: 'clamp(28px,5vh,56px)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div className="in-fade" style={{ ...delay(300), display: 'flex', gap: 14, alignItems: 'center', fontSize: 14, letterSpacing: '.04em', flexWrap: 'wrap' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ac)' }}></span>
              <span>Сочи, Хостинский район</span>
              <span style={{ opacity: 0.5 }}>/</span>
              <span>Дом сдан</span>
            </div>
            <h1 style={{ ...FD, margin: 0, letterSpacing: 'var(--fls)', fontSize: 'calc(clamp(40px,5.6vw,92px) * var(--fs))', lineHeight: 1.06, maxWidth: '19ch', textWrap: 'balance' }}>
              <span style={line}>
                <span className="in-line" style={{ ...delay(200), display: 'block' }}>
                  Квартиры для отдыха или жизни
                </span>
              </span>{' '}
              <span style={line}>
                <span className="in-line" style={{ ...delay(340), display: 'block' }}>
                  в доме элит-класса с infinity-бассейном
                </span>
              </span>
            </h1>
            <p className="in-fade" style={{ ...delay(480), margin: 0, maxWidth: 560, fontSize: 'clamp(16px,1.3vw,19px)', lineHeight: 1.5, opacity: 0.9 }}>
              Инвестор приходит в готовый дом: ключи сразу, квартиру можно сдавать с первого месяца.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 24, alignItems: 'end', borderTop: '1px solid rgba(247,244,238,.25)', paddingTop: 24 }}>
            {HERO_FACTS.map((f, i) => (
              <div key={f.text} className="in-up" style={{ ...delay(600 + i * 100), display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ ...FD, fontSize: 'calc(34px * var(--fs))' }}>{f.value}</span>
                <span style={{ fontSize: 14, opacity: 0.8 }}>{f.text}</span>
              </div>
            ))}
            <div className="in-up" style={{ ...delay(900), display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              <a className="btn btn--light" href="#calc">
                Рассчитать доход
              </a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: '#0E1A24', color: '#F7F4EE', overflow: 'hidden', padding: '28px 0', borderTop: '1px solid rgba(247,244,238,.1)' }}>
        <div
          className="marquee"
          style={{ ...FD, display: 'flex', width: 'max-content', gap: 56, paddingRight: 56, fontSize: 'calc(clamp(26px,3vw,40px) * var(--fs))', whiteSpace: 'nowrap', letterSpacing: 'var(--fls)' }}
        >
          <Features />
          <Features hidden />
        </div>
      </div>
    </>
  );
}
