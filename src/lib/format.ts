export function group(n: number): string {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function comma(n: number, digits = 1): string {
  return n.toFixed(digits).replace('.', ',');
}

export function years(v: number): string {
  if (v % 1) return `${comma(v)} года`;
  const n = v % 100;
  const m = v % 10;
  return `${v} ${n > 10 && n < 20 ? 'лет' : m === 1 ? 'год' : m > 1 && m < 5 ? 'года' : 'лет'}`;
}
