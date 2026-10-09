import { FEATURES, HERO_FACTS } from '@/lib/content';
import { HERO_ALT } from '@/lib/seo';
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
            src="/assets/hero.webp"
            srcSet="/assets/hero-1200.webp 1200w, /assets/hero.webp 2400w"
            sizes="max(100vw, 240vh)"
            alt={HERO_ALT}
            width={2400}
            height={1120}
            fetchPriority="high"
            decoding="async"
            style={{ position: 'absolute', inset: '-6% 0 0 0', width: '100%', height: '112%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(14,26,36,.5) 0%,rgba(14,26,36,.2) 30%,rgba(14,26,36,.45) 60%,rgba(14,26,36,.9) 100%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(14,26,36,.7) 0%,rgba(14,26,36,.35) 45%,rgba(14,26,36,0) 75%)' }}></div>
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
            <h1 style={{ ...FD, margin: 0, letterSpacing: 'var(--fls)', fontSize: 'calc(clamp(52px,8.4vw,136px) * var(--fs))', lineHeight: 1.04, maxWidth: '16ch', textWrap: 'balance' }}>
              <span style={line}>
                <span className="in-line" style={{ ...delay(200), display: 'block' }}>
                  Квартиры у моря
                </span>
              </span>{' '}
              <span style={line}>
                <span className="in-line" style={{ ...delay(340), display: 'block' }}>
                  как доходный актив
                </span>
              </span>
            </h1>
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
