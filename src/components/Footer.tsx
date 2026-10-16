import { asset } from '@/lib/asset';
import { COMPLEX, CONTACTS } from '@/lib/content';
import { FD } from '@/lib/styles';

const col = { display: 'flex', flexDirection: 'column', gap: 6 } as const;
const label = { color: 'rgba(247,244,238,.45)', fontSize: 13 } as const;

export default function Footer() {
  return (
    <footer style={{ background: '#0A131B', color: 'rgba(247,244,238,.7)', padding: '56px clamp(20px,4vw,56px) 40px' }}>
      <div style={{ maxWidth: 1760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32, fontSize: 15 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#F7F4EE' }}>
            <img src={asset('/logo.webp')} alt="" width={160} height={150} loading="lazy" style={{ width: 40, height: 'auto' }} />
            <span style={{ ...FD, fontSize: 'calc(28px * var(--fs))' }}>Mercato</span>
          </div>
          <div style={col}>
            <span style={label}>Отдел продаж</span>
            <a href={CONTACTS.phoneHref} style={{ color: '#F7F4EE' }}>
              {CONTACTS.phone}
            </a>
          </div>
          <address style={{ ...col, fontStyle: 'normal' }}>
            <span style={label}>Адрес</span>
            <span style={{ color: '#F7F4EE' }}>
              {COMPLEX.locality}, {COMPLEX.street}
            </span>
          </address>
          <div style={col}>
            <span style={label}>Застройщик</span>
            <span style={{ color: '#F7F4EE' }}>{COMPLEX.developer}</span>
          </div>
        </div>
        <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: 'rgba(247,244,238,.45)', maxWidth: '110ch', borderTop: '1px solid rgba(247,244,238,.12)', paddingTop: 24 }}>
          Информация на сайте носит справочный характер и не является публичной офертой (ст. 437 ГК РФ). Расчёты доходности являются моделью и не гарантируют результат. Фактический вид объекта может
          отличаться от изображений.
        </p>
      </div>
    </footer>
  );
}
