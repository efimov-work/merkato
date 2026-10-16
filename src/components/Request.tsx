import { asset } from '@/lib/asset';
import { FD, WRAP } from '@/lib/styles';
import RequestForm from './RequestForm';

const line = { display: 'block', overflow: 'hidden', paddingBottom: '.06em' } as const;

export default function Request() {
  return (
    <section id="request" style={{ position: 'relative', overflow: 'hidden', background: '#0E1A24', color: '#F7F4EE', padding: 'clamp(90px,12vw,170px) clamp(20px,4vw,56px)' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.28 }}>
        <img data-px="0.2" src={asset('/assets/gallery-5.webp')} alt="" loading="lazy" decoding="async" style={{ position: 'absolute', left: 0, top: '-15%', width: '100%', height: '130%', objectFit: 'cover' }} />
      </div>
      <div style={{ ...WRAP, position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h2 style={{ ...FD, margin: 0, fontSize: 'calc(clamp(42px,6vw,96px) * var(--fs))', lineHeight: 1, letterSpacing: 'var(--fls)', textWrap: 'balance' }}>
            <span style={line}>
              <span data-r="line" style={{ display: 'block' }}>
                Инвестиционный
              </span>
            </span>{' '}
            <span style={line}>
              <span data-r="line" data-d="120" style={{ display: 'block' }}>
                расчёт за 1 день
              </span>
            </span>
          </h2>
          <p data-r="up" data-d="200" style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(247,244,238,.78)', maxWidth: '42ch' }}>
            Менеджер подготовит подборку квартир в наличии, модель доходности и условия банков.
          </p>
        </div>
        <div
          data-r="up"
          data-d="250"
          style={{
            background: 'rgba(247,244,238,.06)',
            border: '1px solid rgba(247,244,238,.18)',
            borderRadius: 4,
            padding: 'clamp(24px,3.4vw,44px)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          <RequestForm />
        </div>
      </div>
    </section>
  );
}
