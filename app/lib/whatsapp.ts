/** Public destination only. No credentials, accounts, or booking storage. */
// Public phone number from the practice's business card; an optional build-time override is supported.
export const therapistWhatsApp = process.env.NEXT_PUBLIC_THERAPIST_WHATSAPP?.trim() || '254705605821';
export const bookingTimezone = 'Africa/Nairobi';

export function normalizeWhatsAppNumber(value: string): string {
  const trimmed = value.trim();
  if (!/^\+?[1-9][\d ()-]*$/.test(trimmed)) return '';
  const digits = trimmed.replace(/\D/g, '');
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : '';
}

export function whatsappLink(message: string, number = therapistWhatsApp): string {
  const destination = normalizeWhatsAppNumber(number);
  if (!destination) throw new Error('The practice’s WhatsApp number has not been configured yet.');
  return `https://wa.me/${destination}?text=${encodeURIComponent(message)}`;
}

export function nairobiDate(now = new Date()): string {
  return new Date(now.getTime() + 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export type BookingRequest = {
  service: string;
  format: string;
  date: string;
  time: string;
  name: string;
  note: string;
  guardian: string;
  consent: boolean;
};
const serviceLabels: Record<string, string> = {
  individual: 'Individual therapy', couple: 'Couples therapy', family: 'Family therapy',
  group: 'Group therapy', teen: 'Therapy for teens'
};
export function validateBookingRequest(data: BookingRequest, now = new Date()): string {
  if (!serviceLabels[data.service]) return 'Choose a service.';
  if (!['in-person', 'online'].includes(data.format)) return 'Choose a session format.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(data.time)) return 'Choose a preferred date and time.';
  const requested = new Date(`${data.date}T${data.time}:00+03:00`);
  if (!Number.isFinite(+requested) || nairobiDate(requested) !== data.date || requested <= now) return 'Choose a valid future date and time in Africa/Nairobi.';
  if (!data.name.trim() || data.name.trim().length > 120) return 'Please enter your name (maximum 120 characters).';
  if (data.note.trim().length > 500) return 'Keep your practical note to 500 characters or fewer.';
  if (data.service === 'teen' && (!data.guardian.trim() || data.guardian.trim().length > 120 || !data.consent)) return 'A parent or guardian’s name and consent are required for a teen session request.';
  return '';
}

export function bookingMessage(data: BookingRequest): string {
  return [
    'Hello, I’d like to request a therapy session with Hesed Counselling Services.',
    '',
    `Name: ${data.name.trim()}`,
    `Service: ${serviceLabels[data.service] || data.service}`,
    `Format: ${data.format === 'online' ? 'Online (video)' : 'In person'}`,
    `Preferred date: ${data.date}`,
    `Preferred time: ${data.time} (${bookingTimezone}, UTC+3)`,
    ...(data.service === 'teen' ? [`Parent/guardian: ${data.guardian.trim()}`, `Parent/guardian consent to this request: ${data.consent ? 'Yes' : 'No'}`] : []),
    ...(data.note.trim() ? [`Practical note: ${data.note.trim()}`] : []),
    '',
    'Please confirm whether this time is available, the session length, and the fee. I understand this is a request, not a confirmed appointment.'
  ].join('\n');
}
