'use client';

import { useEffect } from 'react';

const EASE = 'cubic-bezier(.16,1,.3,1)';

const KINDS: Record<string, [Keyframe[], number]> = {
  up: [[{ opacity: 0, transform: 'translateY(48px)' }, { opacity: 1, transform: 'none' }], 1200],
  fade: [[{ opacity: 0 }, { opacity: 1 }], 1400],
  line: [[{ transform: 'translateY(110%) rotate(2deg)' }, { transform: 'none' }], 1400],
  clip: [[{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], 1600],
  zoom: [[{ transform: 'scale(1.3)' }, { transform: 'scale(1)' }], 2200]
};

const BY_PARENT = new Set(['line', 'clip', 'zoom']);

function count(el: HTMLElement) {
  const end = Number(el.dataset.count);
  const t0 = performance.now();
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / 1800);
    el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 4))));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Motion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const vh = window.innerHeight;
    const below = (el: Element) => el.getBoundingClientRect().top >= vh;

    const waiting = new Map<Element, (() => void)[]>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          waiting.get(e.target)?.forEach((fn) => fn());
          waiting.delete(e.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    const wait = (target: Element, fn: () => void) => {
      const list = waiting.get(target);
      if (list) list.push(fn);
      else {
        waiting.set(target, [fn]);
        io.observe(target);
      }
    };

    document.querySelectorAll<HTMLElement>('[data-r]').forEach((el) => {
      const kind = KINDS[el.dataset.r || ''];
      if (!kind) return;
      const target = BY_PARENT.has(el.dataset.r!) ? el.parentElement! : el;
      if (!below(target)) return;
      const anim = el.animate(kind[0], { duration: kind[1], delay: Number(el.dataset.d) || 0, easing: EASE, fill: 'backwards' });
      anim.pause();
      wait(target, () => anim.play());
    });

    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      if (below(el)) wait(el, () => count(el));
    });

    const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-px]'));

    let raf = 0;
    const update = () => {
      raf = 0;
      const h = window.innerHeight;
      parallax.forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < -100 || r.top > h + 100) return;
        const off = (r.top + r.height / 2 - h / 2) * -Number(el.dataset.px);
        el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
      });
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    update();

    const flush = () => {
      waiting.forEach((list) => list.forEach((fn) => fn()));
      waiting.clear();
    };

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      io.disconnect();
      flush();
    };
  }, []);

  return null;
}
