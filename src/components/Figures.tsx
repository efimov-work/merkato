import { FIGURES } from '@/lib/content';
import { FD, H2, RULE_DARK, WRAP } from '@/lib/styles';

export default function Figures() {
  return (
    <section style={{ background: '#0E1A24', color: '#F7F4EE', padding: 'clamp(80px,11vw,150px) clamp(20px,4vw,56px) clamp(48px,6vw,80px)' }}>
      <div style={{ ...WRAP, display: 'flex', flexDirection: 'column', gap: 'clamp(32px,4vw,56px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 32, alignItems: 'end' }}>
          <h2 data-r="up" style={H2}>
            Показатели для инвестора
          </h2>
          <p data-r="up" data-d="120" style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(247,244,238,.78)', maxWidth: '46ch' }}>
            Готовый объект с управляющей компанией. Квартира приносит доход с первого месяца после покупки, без ожидания сдачи дома.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', borderTop: RULE_DARK }}>
          {FIGURES.map((f, i) => (
            <div key={f.label} data-r="up" data-d={i * 100 || undefined} style={{ padding: '36px 28px 36px 0', borderBottom: RULE_DARK, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <span style={{ fontSize: 14, color: 'var(--ac)' }}>{f.label}</span>
              <span style={{ ...FD, fontSize: 'calc(clamp(52px,4.8vw,96px) * var(--fs))', lineHeight: 1, letterSpacing: 'var(--fls)', whiteSpace: 'nowrap' }}>
                {f.before}
                <span data-count={f.count}>{f.count}</span>
                {f.after}
                {f.rub ? <span style={{ fontSize: '.6em' }}>&nbsp;₽</span> : null}
              </span>
              <span style={{ fontSize: 14, color: 'rgba(247,244,238,.65)' }}>{f.note}</span>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(247,244,238,.55)' }}>* По данным отдела продаж. Точный расчёт под конкретную квартиру предоставляется по запросу.</p>
      </div>
    </section>
  );
}
