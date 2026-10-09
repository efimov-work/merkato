import { STEPS } from '@/lib/content';
import { FD, H2, KICKER, LEAD, PAD, WRAP } from '@/lib/styles';

export default function Management() {
  return (
    <section style={{ background: '#FAF8F4', padding: PAD }}>
      <div style={{ ...WRAP, display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 24, alignItems: 'end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span data-r="fade" style={KICKER}>
              06 / Управление
            </span>
            <h2 data-r="up" style={H2}>
              Доверительное управление под ключ
            </h2>
          </div>
          <p data-r="up" data-d="100" style={LEAD}>
            Профессиональная управляющая компания берёт на себя поиск гостей, уборку, обслуживание и отчётность. Собственник получает выплаты.
          </p>
        </div>
        <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 16 }}>
          {STEPS.map((s, i) => (
            <li key={s.n} data-r="up" data-d={i * 100 || undefined}>
              <div className={`step${s.dark ? ' step--dark' : ''}`} style={{ height: '100%', padding: '32px 28px', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 40, minHeight: 240 }}>
                <span aria-hidden="true" style={{ ...FD, fontSize: 'calc(48px * var(--fs))', color: s.dark ? 'var(--ac)' : 'var(--acd)', lineHeight: 1 }}>
                  {s.n}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 19, fontWeight: 500 }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: s.dark ? 'rgba(247,244,238,.72)' : '#5A5D63' }}>{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
