import type { CSSProperties } from 'react';

export const WRAP: CSSProperties = { maxWidth: 1760, margin: '0 auto' };

export const PAD = 'clamp(80px,11vw,150px) clamp(20px,4vw,56px)';

export const FD: CSSProperties = { fontFamily: 'var(--fd)', fontWeight: 'var(--fdw)' };

export const H2: CSSProperties = {
  ...FD,
  margin: 0,
  fontSize: 'calc(clamp(38px,5.4vw,80px) * var(--fs))',
  lineHeight: 1.02,
  letterSpacing: 'var(--fls)',
  textWrap: 'balance'
};

export const KICKER: CSSProperties = { fontSize: 14, color: 'var(--acd)', letterSpacing: '.04em' };

export const LEAD: CSSProperties = { margin: 0, fontSize: 17, lineHeight: 1.6, color: '#5A5D63', maxWidth: '46ch' };

export const RULE = '1px solid rgba(21,23,27,.14)';
export const RULE_DARK = '1px solid rgba(247,244,238,.18)';

export const delay = (ms: number) => ({ ['--d' as string]: `${ms}ms` }) as CSSProperties;
