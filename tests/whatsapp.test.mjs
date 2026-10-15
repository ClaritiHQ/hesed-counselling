import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

// Compile the pure TypeScript helper without requiring a running Next server.
const source = await readFile(new URL('../app/lib/whatsapp.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { bookingMessage, normalizeWhatsAppNumber, whatsappLink, validateBookingRequest, nairobiDate } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`);
const now = new Date('2035-01-01T08:00:00Z');
const request = { service: 'couple', format: 'online', date: '2035-01-05', time: '14:30', name: 'Amina & Sam', note: 'After work, please.', guardian: '', consent: false };

test('booking message includes selected details and clearly requests confirmation', () => {
  const message = bookingMessage(request);
  for (const text of ['Amina & Sam', 'Couples therapy', 'Online (video)', '2035-01-05', '14:30', 'Africa/Nairobi', 'After work, please.', 'not a confirmed appointment']) assert.ok(message.includes(text), text);
  assert.ok(!message.includes('Parent/guardian:'));
});

test('WhatsApp link preserves Unicode, line breaks and URL-special characters', () => {
  const message = bookingMessage({ ...request, name: 'Zoë & José', note: 'A + B? #1 / 100% — thanks 🌿' });
  const url = new URL(whatsappLink(message, '+254 700 000 000'));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/254700000000');
  assert.equal(url.searchParams.get('text'), message);
  assert.equal([...url.searchParams.keys()].length, 1);
  assert.equal(url.hash, '');
});

test('missing, local-only, or malformed destination never creates a dummy-recipient link', () => {
  assert.equal(normalizeWhatsAppNumber('+254 (700) 000-000'), '254700000000');
  for (const number of ['', '0700000000', 'YOUR_NUMBER', '123', '254700000000?text=other', '1'.repeat(16)]) {
    assert.equal(normalizeWhatsAppNumber(number), '');
    assert.throws(() => whatsappLink('Hello', number), /not been configured/);
  }
});

test('preferred dates use Nairobi time and reject elapsed or impossible dates', () => {
  assert.equal(nairobiDate(new Date('2035-01-01T22:00:00Z')), '2035-01-02');
  assert.equal(validateBookingRequest(request, now), '');
  for (const values of [{ date: '2035-02-30' }, { date: '2035-01-01', time: '10:59' }, { time: '24:00' }]) assert.ok(validateBookingRequest({ ...request, ...values }, now));
  assert.equal(validateBookingRequest({ ...request, date: '2035-01-01', time: '11:01' }, now), '');
});

test('teen request requires guardian consent and includes it in the reviewed text', () => {
  const teen = { ...request, service: 'teen', guardian: 'Parent Name' };
  assert.match(validateBookingRequest(teen, now), /consent/);
  assert.equal(validateBookingRequest({ ...teen, consent: true }, now), '');
  assert.match(bookingMessage({ ...teen, consent: true }), /Parent\/guardian: Parent Name/);
  assert.match(bookingMessage({ ...teen, consent: true }), /consent to this request: Yes/);
  assert.ok(validateBookingRequest({ ...teen, consent: true, guardian: ' ' }, now));
});
