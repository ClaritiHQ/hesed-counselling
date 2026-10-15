'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect,useState } from 'react';
import { Icon } from './icons';
import { Brand } from './brand';
import { practice } from '../lib/practice';
export function Header(){
  const [open,setOpen]=useState(false),path=usePathname();
  useEffect(()=>{setOpen(false);},[path]);
  return <header className="site-header">
    <div className="contact-bar"><div className="container contact-bar-inner">
        <a href={practice.phoneHref}><Icon name="phone" size={18}/><span>{practice.phone}</span></a>
        <a href={`mailto:${practice.email}`}><Icon name="mail" size={18}/><span>{practice.email}</span></a>
        <a className="contact-bar-address" href={practice.mapUrl} target="_blank" rel="noreferrer"><Icon name="pin" size={18}/><span>{practice.address}</span></a>
    </div></div>
    <div className="container header-inner"><Brand/><button className="nav-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}><Icon name={open?'close':'menu'}/></button><nav id="main-nav" aria-label="Main navigation" className={`nav-links ${open?'is-open':''}`}>{[['/about','About'],['/services','How I can help'],['/how-it-works','What to expect'],['/contact','Contact']].map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined}>{label}</Link>)}<Link className="button button-primary nav-cta" href="/book">Book a session <Icon name="arrow" size={17}/></Link></nav></div></header>;
}
export function PrivacyNotice(){
  const [show,setShow]=useState(true);
  if(!show)return null;
  return <aside className="cookie-notice cookie-notice-banner" aria-label="Cookies and privacy"><span><strong>Your privacy matters.</strong> This website does not save your booking details. Session requests are sent through WhatsApp.</span><button type="button" onClick={()=>setShow(false)}>Accept cookies</button></aside>;
}
