'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { INTEREST_EVENT } from '@/lib/interest';
import { FD } from '@/lib/styles';
import { useLead } from '@/lib/useLead';
import PhoneInput from './PhoneInput';

const field = { display: 'flex', flexDirection: 'column', gap: 8 } as const;
const caption = { fontSize: 14, color: 'rgba(247,244,238,.7)' } as const;

export default function RequestForm() {
  const { status, error, send } = useLead();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [website, setWebsite] = useState('');
  const [interest, setInterest] = useState('');

  useEffect(() => {
    const onInterest = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener(INTEREST_EVENT, onInterest);
    return () => window.removeEventListener(INTEREST_EVENT, onInterest);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send({ name, phone, budget, interest, website });
  };

  if (status === 'success') {
    return (
      <div className="form-done" role="status" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '24px 0' }}>
        <span style={{ ...FD, fontSize: 'calc(40px * var(--fs))' }}>Заявка принята</span>
        <span style={{ fontSize: 16, color: 'rgba(247,244,238,.75)' }}>Менеджер свяжется с вами в течение 15 минут в рабочее время.</span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} aria-busy={status === 'sending'} style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <label style={field}>
        <span style={caption}>Имя</span>
        <input className="field" required name="name" autoComplete="name" maxLength={200} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label style={field}>
        <span style={caption}>Телефон</span>
        <PhoneInput className="field" label="Телефон" placeholder="+7" value={phone} onChange={setPhone} />
      </label>
      <label style={field}>
        <span style={caption}>Бюджет</span>
        <input className="field" name="budget" placeholder="например, 12 млн ₽" maxLength={200} value={budget} onChange={(e) => setBudget(e.target.value)} />
      </label>
      <label className="hp" aria-hidden="true">
        <span>Сайт</span>
        <input name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </label>
      <button type="submit" className="btn btn--light" disabled={status === 'sending'} style={{ marginTop: 8, padding: '18px 28px', fontSize: 16 }}>
        {status === 'sending' ? 'Отправляем...' : 'Получить расчёт'}
      </button>
      {status === 'error' && error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <span style={{ fontSize: 12, lineHeight: 1.5, color: 'rgba(247,244,238,.5)' }}>Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</span>
    </form>
  );
}
