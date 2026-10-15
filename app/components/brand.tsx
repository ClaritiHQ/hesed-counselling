import Link from 'next/link';
import { practice } from '../lib/practice';
import logo from '../logo.png';

/** Use the supplied artwork; clip its old slogan in the layout, not in the source image. */
export function Brand({ className = '', linked = true }: { className?: string; linked?: boolean }) {
  const content = <>
    <span className="brand-artwork" aria-hidden="true"><img src={logo.src} alt="" width={logo.width} height={logo.height}/></span>
    <span className="brand-wordmark"><strong>HESED</strong><span>Counselling Services</span></span>
  </>;
  return linked
    ? <Link href="/" className={`brand brand-identity ${className}`} aria-label={practice.name}>{content}</Link>
    : <div className={`brand brand-identity ${className}`}>{content}</div>;
}
