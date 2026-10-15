'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import Link from 'next/link';
import { services } from '../lib/practice';
import { bookingMessage, nairobiDate, normalizeWhatsAppNumber, therapistWhatsApp, validateBookingRequest, whatsappLink } from '../lib/whatsapp';
import type { BookingRequest } from '../lib/whatsapp';
import { Icon } from './icons';

const configured = Boolean(normalizeWhatsAppNumber(therapistWhatsApp));

function SetupNotice() {
  return <p className="notice" role="status">WhatsApp booking will be available once the practice adds its contact number. You can prepare and copy your message, but it cannot be addressed to the therapist yet.</p>;
}

function MessagePreview({ message, onEdit, onValidate }: { message: string; onEdit: () => void; onValidate?: () => string }) {
  const [status, setStatus] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus(); }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setStatus('Message copied. Paste it into your conversation with the therapist.');
    } catch {
      setStatus('Copy is unavailable in this browser. Select and copy the message below instead.');
    }
  }

  return <div className="whatsapp-review">
    <span className="aside-icon"><Icon name="hearts" size={30}/></span>
    <h2 ref={heading} tabIndex={-1}>Your message is ready.</h2>
    <p>Review the details, then open WhatsApp and press <strong>Send</strong> there. Nothing has been sent or reserved yet.</p>
    <pre className="message-preview" aria-label="Your WhatsApp message">{message}</pre>
    {!configured && <SetupNotice/>}
    <div className="action-row">
      {configured && <a className="button button-primary" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" onClick={event => {
        const error = onValidate?.();
        if (error) { event.preventDefault(); setStatus(error); return; }
        setStatus('Next, review and press Send in WhatsApp. The therapist will reply to confirm availability.');
      }}>Open WhatsApp <Icon name="arrow" size={18}/></a>}
      <button className="button button-outline" type="button" onClick={copy}>Copy message</button>
      <button className="text-link" type="button" onClick={onEdit}>Edit details</button>
    </div>
    {status && <p className="notice" role="status">{status}</p>}
    <p className="small muted">The message is passed to WhatsApp only when you open the link. An appointment is confirmed only after the therapist replies. To change or cancel a request, use the same WhatsApp conversation.</p>
  </div>;
}

export function BookingFlow() {
  const [details, setDetails] = useState<BookingRequest>({ service: 'individual', format: 'in-person', date: '', time: '', name: '', note: '', guardian: '', consent: false });
  const [review, setReview] = useState(false);
  const [error, setError] = useState('');
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(nairobiDate());
    const chosen = new URLSearchParams(window.location.search).get('service');
    if (services.some(service => service.id === chosen)) setDetails(current => ({ ...current, service: chosen! }));
  }, []);

  function update<K extends keyof BookingRequest>(key: K, value: BookingRequest[K]) {
    setDetails(current => ({ ...current, [key]: value }));
    setError('');
  }

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const problem = validateBookingRequest(details);
    if (problem) { setError(problem); return; }
    setError('');
    setReview(true);
  }

  return <div className="booking-layout">
    <div className="booking-panel">
      <ol className="steps"><li className={!review ? 'active' : ''}><span>1</span>Your preferences</li><li className={review ? 'active' : ''}><span>2</span>Review message</li><li><span>3</span>WhatsApp</li></ol>
      {review ? <MessagePreview message={bookingMessage(details)} onEdit={() => setReview(false)} onValidate={() => validateBookingRequest(details)}/> : <form onSubmit={prepare}>
        {!configured && <SetupNotice/>}
        {error && <p className="error" role="alert">{error}</p>}
        <fieldset className="plain-fieldset"><legend>What brings you here?</legend><p className="muted">Choose the support you’re looking for.</p><div className="choice-grid">
          {services.map(service => <button type="button" className={`choice ${details.service === service.id ? 'selected' : ''}`} aria-pressed={details.service === service.id} key={service.id} onClick={() => { setDetails(current => ({ ...current, service: service.id, guardian: '', consent: false })); setError(''); }}><Icon name={service.icon} size={22}/>{service.title}{details.service === service.id && <Icon name="check" size={16}/>}</button>)}
        </div></fieldset>
        <fieldset className="plain-fieldset"><legend>How would you like to meet?</legend><div className="format-choices">
          {[['in-person', 'In person', 'pin'], ['online', 'Online', 'video']].map(([id, label, icon]) => <button type="button" key={id} className={`choice ${details.format === id ? 'selected' : ''}`} aria-pressed={details.format === id} onClick={() => update('format', id)}><Icon name={icon}/>{label}</button>)}
        </div></fieldset>
        <h2 className="form-heading">When would suit you?</h2>
        <p className="small muted" id="time-help">Choose your preferred date and time in Africa/Nairobi (EAT, UTC+3). These are preferences, not live availability. The therapist will confirm or suggest another time.</p>
        <div className="form-grid">
          <label className="field">Preferred date<input type="date" value={details.date} min={today || undefined} onChange={event => update('date', event.target.value)} required aria-describedby="time-help"/></label>
          <label className="field">Preferred time (EAT)<input type="time" value={details.time} onChange={event => update('time', event.target.value)} required aria-describedby="time-help"/></label>
        </div>
        <label className="field">Your name<input autoComplete="name" value={details.name} onChange={event => update('name', event.target.value)} required maxLength={120}/></label>
        <p className="small muted">No email or phone form is needed. The therapist can reply to the WhatsApp account you send from.</p>
        {details.service === 'teen' && <div className="consent-panel">
          <label className="field">Parent or guardian’s name<input value={details.guardian} onChange={event => update('guardian', event.target.value)} required maxLength={120}/></label>
          <label className="checkbox-label"><input type="checkbox" checked={details.consent} onChange={event => update('consent', event.target.checked)} required/>I am the parent or legal guardian and consent to this session request. The therapist will confirm consent and safeguarding arrangements before any session.</label>
        </div>}
        <label className="field">A practical note <span className="muted">Optional</span><textarea value={details.note} onChange={event => update('note', event.target.value)} rows={3} maxLength={500} aria-describedby="note-help"/></label>
        <p className="small muted" id="note-help">Please don’t include clinical histories, diagnoses, or other sensitive details. This note will be included in your WhatsApp message.</p>
        <p className="small">Your form stays in this page’s memory; the website does not save it. Opening WhatsApp shares the prepared text with WhatsApp.</p>
        <button type="submit" className="button button-primary wide">Review WhatsApp request <Icon name="arrow" size={18}/></button>
        <p className="payment-note"><Icon name="lock" size={15}/>No online payment. Fees agreed with the therapist.</p>
      </form>}
    </div>
    <aside className="booking-aside"><span className="aside-icon"><Icon name="logo" size={34}/></span><h2>A small step.<br/><em>A little more space.</em></h2><p>It’s okay if reaching out feels unfamiliar. We can take things one conversation at a time.</p><hr/><h3>What happens next</h3><ul className="check-list"><li><Icon name="check"/>Choose the session and time you’d prefer.</li><li><Icon name="check"/>Review your message and send it in WhatsApp.</li><li><Icon name="check"/>The therapist replies to agree a time, session length, and fee.</li><li><Icon name="check"/>Make any later changes in the same conversation.</li></ul><p className="small">No account, no automatic reservation, and no online payment. You stay in control of what you send.</p><Link href="/contact" className="text-link">Have a question first? <Icon name="arrow" size={17}/></Link></aside>
  </div>;
}

export function ContactForm() {
  const [name, setName] = useState(''), [message, setMessage] = useState(''), [review, setReview] = useState(false), [error, setError] = useState('');
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !message.trim()) { setError('Please enter your name and a practical question.'); return; }
    setError(''); setReview(true);
  }
  return <div className="booking-panel">{review ? <MessagePreview message={`Hello Hesed Counselling Services, my name is ${name.trim()}.\n\n${message.trim()}`} onEdit={() => setReview(false)}/> : <form onSubmit={prepare}>
    <h2>A conversation can start here.</h2><p className="small muted">Prepare a message, then send it directly to the therapist in WhatsApp.</p>
    {!configured && <SetupNotice/>}{error && <p className="error" role="alert">{error}</p>}
    <label className="field">Your name<input autoComplete="name" value={name} onChange={event => setName(event.target.value)} required maxLength={120}/></label>
    <label className="field">How can we help?<textarea value={message} onChange={event => setMessage(event.target.value)} rows={5} required maxLength={1000} aria-describedby="contact-help"/></label>
    <p className="small muted" id="contact-help">Practical questions only, please. Don’t include sensitive clinical details. This site does not store your message; WhatsApp receives it when you open the prepared link.</p>
    <p className="small">This is not an emergency service.</p>
    <button type="submit" className="button button-primary">Review WhatsApp message <Icon name="arrow" size={18}/></button>
  </form>}</div>;
}
