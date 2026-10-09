'use client';

import { useState } from 'react';
import { comma, group, years } from '@/lib/format';
import { setInterest } from '@/lib/interest';
import { FD, H2, RULE_DARK, WRAP } from '@/lib/styles';

const NET_SHARE = 0.7;

const cell = { padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', gap: 10 } as const;
const muted = 'rgba(247,244,238,.7)';

type SliderProps = {
  label: string;
  value: number;
  text: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

function Slider({ label, value, text, min, max, step, onChange }: SliderProps) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <span style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 15 }}>
        <span style={{ color: muted }}>{label}</span>
        <span>{text}</span>
      </span>
      <input className="range" type="range" min={min} max={max} step={step} value={value} aria-valuetext={text} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

export default function Calculator() {
  const [price, setPrice] = useState(12);
  const [rate, setRate] = useState(8000);
  const [occ, setOcc] = useState(65);
  const [growth, setGrowth] = useState(8);

  const priceRub = price * 1e6;
  const net = ((rate * 365 * occ) / 100) * NET_SHARE;
  const rentYield = (net / priceRub) * 100;

  const priceText = `${String(price).replace('.', ',')} млн ₽`;
  const rateText = `${group(rate)} ₽`;
  const monthly = `${group(net / 12)} ₽`;

  return (
    <section id="calc" style={{ background: '#0E1A24', color: '#F7F4EE', padding: 'clamp(80px,11vw,150px) clamp(20px,4vw,56px)' }}>
      <div style={{ ...WRAP, display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,72px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
          <span data-r="fade" style={{ fontSize: 14, color: 'var(--ac)', letterSpacing: '.04em' }}>
            05 / Доходность
          </span>
          <h2 data-r="up" style={H2}>
            Модель дохода от посуточной аренды
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(32px,5vw,80px)' }}>
          <div data-r="up" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <Slider label="Стоимость квартиры" value={price} text={priceText} min={8} max={25} step={0.5} onChange={setPrice} />
            <Slider label="Ставка за сутки" value={rate} text={rateText} min={4000} max={20000} step={500} onChange={setRate} />
            <Slider label="Загрузка за год" value={occ} text={`${occ}%`} min={40} max={90} step={1} onChange={setOcc} />
            <Slider label="Рост стоимости в год" value={growth} text={`${growth}%`} min={0} max={15} step={1} onChange={setGrowth} />
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'rgba(247,244,238,.55)' }}>
              Учтены комиссия управляющей компании 25% и эксплуатационные расходы 5%. Модель не является офертой.
            </p>
          </div>
          <div data-r="up" data-d="150" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: RULE_DARK, borderRadius: 4 }}>
            <div style={{ ...cell, gridColumn: '1 / 3', borderBottom: RULE_DARK }}>
              <span style={{ fontSize: 14, color: 'var(--ac)' }}>Доход в месяц, чистыми</span>
              <span style={{ ...FD, fontSize: 'calc(clamp(52px,6.4vw,104px) * var(--fs))', lineHeight: 1, letterSpacing: 'var(--fls)' }}>{monthly}</span>
            </div>
            <div style={{ ...cell, borderRight: RULE_DARK }}>
              <span style={{ fontSize: 14, color: muted }}>Арендная доходность</span>
              <span style={{ ...FD, fontSize: 'calc(clamp(36px,3.6vw,56px) * var(--fs))', lineHeight: 1 }}>{comma(rentYield)}%</span>
            </div>
            <div style={cell}>
              <span style={{ fontSize: 14, color: muted }}>С учётом роста цены</span>
              <span style={{ ...FD, fontSize: 'calc(clamp(36px,3.6vw,56px) * var(--fs))', lineHeight: 1, color: 'var(--ac)' }}>{comma(rentYield + growth)}%</span>
            </div>
            <div
              style={{ gridColumn: '1 / 3', padding: 'clamp(24px,3vw,40px)', borderTop: RULE_DARK, display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}
            >
              <span style={{ fontSize: 15, color: muted }}>Окупаемость арендой: {years(Math.round((priceRub / net) * 10) / 10)}</span>
              <a
                className="btn btn--light"
                href="#request"
                onClick={() => setInterest(`Калькулятор: квартира ${priceText}, ставка ${rateText} в сутки, загрузка ${occ}%, рост ${growth}%`)}
                style={{ padding: '14px 24px' }}
              >
                Получить точный расчёт
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
