import logo from '../logo.png';
export function Icon({name='logo',size=24}:{name?:string;size?:number}) {
  const paths:Record<string,React.ReactNode>={
    phone:<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    hearts:<><path d="M12 19 4 11C-1 6 7 1 12 7c5-6 13-1 8 4Z"/><path d="m9 10 3 3 3-3"/></>,
    family:<><circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M7 21v-4a5 5 0 0 1 10 0v4M2 20v-4a3 3 0 0 1 4-3m16 7v-4a3 3 0 0 0-4-3"/></>,
    circle:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="8" r="2"/><path d="M7 17a5 5 0 0 1 10 0"/></>,
    sun:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></>,
    arrow:<path d="M4 12h16m-6-6 6 6-6 6"/>,
    check:<path d="m5 12 4 4L19 6"/>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></>,
    pin:<><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>,
    video:<><rect x="3" y="6" width="12" height="12" rx="3"/><path d="m15 10 6-3v10l-6-3"/></>,
    lock:<><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3"/></>,
    menu:<path d="M4 6h16M4 12h16M4 18h16"/>,
    close:<path d="m6 6 12 12M6 18 18 6"/>,
  };
  if(name==='logo'||!paths[name])return <svg className="hesed-logo-icon" width={size} height={size} viewBox="580 80 380 390" aria-hidden="true" focusable="false"><image href={logo.src} width={logo.width} height={logo.height}/></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
