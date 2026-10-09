import { OBJECT_PHOTOS, SPECS } from '@/lib/content';
import { H2, KICKER, PAD, RULE, WRAP } from '@/lib/styles';
import Photo from './Photo';

export default function Complex() {
  return (
    <section id="object" style={{ background: '#FAF8F4', padding: PAD }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,520px),1fr))', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,48px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span data-r="fade" style={KICKER}>
              02 / Объект
            </span>
            <h2 data-r="up" style={H2}>
              Монолитный комплекс с видом на море и Дендрарий
            </h2>
          </div>
          <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', fontSize: 16 }}>
            {SPECS.map(([k, v], i) => (
              <div
                key={k}
                data-r="up"
                data-d={i * 40 || undefined}
                style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '18px 0', borderTop: RULE, borderBottom: i === SPECS.length - 1 ? RULE : undefined }}
              >
                <dt style={{ color: '#5A5D63' }}>{k}</dt>
                <dd style={{ margin: 0, textAlign: 'right' }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Photo src={OBJECT_PHOTOS.main.img} alt={OBJECT_PHOTOS.main.alt} parallax={0.1} style={{ gridColumn: '1 / 3', aspectRatio: '4/3' }} />
          <Photo src={OBJECT_PHOTOS.facade.img} alt={OBJECT_PHOTOS.facade.alt} delay={150} style={{ aspectRatio: '1' }} />
          <Photo src={OBJECT_PHOTOS.sea.img} alt={OBJECT_PHOTOS.sea.alt} delay={300} style={{ aspectRatio: '1' }} />
        </div>
      </div>
    </section>
  );
}
