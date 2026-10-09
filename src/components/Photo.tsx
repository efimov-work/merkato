import type { CSSProperties, ReactNode } from 'react';

type Props = {
  src: string;
  alt: string;
  style?: CSSProperties;
  parallax?: number;
  delay?: number;
  imgStyle?: CSSProperties;
  children?: ReactNode;
};

const frame: CSSProperties = { position: 'relative', overflow: 'hidden', borderRadius: 4, background: '#D9D3C8' };
const fill: CSSProperties = { width: '100%', height: '100%', objectFit: 'cover' };
const shifted: CSSProperties = { position: 'absolute', left: 0, top: '-10%', width: '100%', height: '120%', objectFit: 'cover' };

export default function Photo({ src, alt, style, parallax, delay, imgStyle, children }: Props) {
  return (
    <div data-r="clip" data-d={delay} style={{ ...frame, ...style }}>
      <div data-r="zoom" data-d={delay} style={{ position: 'absolute', inset: 0 }}>
        <img data-px={parallax} src={src} alt={alt} loading="lazy" decoding="async" style={{ ...(parallax ? shifted : fill), ...imgStyle }} />
      </div>
      {children}
    </div>
  );
}
