import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap{const origin=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';return ['/','/about','/services','/how-it-works','/book','/contact'].map(path=>({url:origin+path,changeFrequency:'monthly',priority:path==='/'?1:0.7}));}
