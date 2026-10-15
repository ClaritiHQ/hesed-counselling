# Hesed Counselling Services — WhatsApp booking website

A frontend-only Next.js website. There is no Express API, Supabase dependency, database, therapist login, or stored appointment data. Next.js exports plain static files for deployment.

## Run locally

Use Node.js 22 or newer.

```powershell
cd F:\personal\hesed
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000. Only one process is needed. On other shells, `npm` works instead of `npm.cmd`.

## Set the therapist’s WhatsApp number

The website defaults to **+254 705 605 821**, printed on the business card. Confirm that this number accepts WhatsApp messages before publishing. To override it, create `.env.local` in the project root, using [.env.example](.env.example) as a guide:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_THERAPIST_WHATSAPP=254705605821
```

Replace the number with the therapist’s actual WhatsApp-enabled international number, digits only, including the country code. For Kenya, replace a local leading zero with 254. Do not include the literal placeholder above. Restart development after changing it; rebuild an exported site after changes.

The destination phone number is public website configuration, not a secret. No password, service-role key, email provider, or WhatsApp API account is needed. When no valid number is configured, visitors can prepare/copy a message but cannot open a conversation with a dummy recipient.

Existing local environment files are not overwritten. The old Supabase, email, session-secret, and backend variables are no longer read by the application and can be removed from your local/hosting configuration. No external Supabase project or its data has been changed by this migration.

## How booking works

1. The client chooses a service and in-person or online format.
2. They choose a preferred future date and time in **Africa/Nairobi (UTC+3)**.
3. They enter a name and an optional practical note. Teen requests also include a guardian name and consent.
4. The website shows the exact WhatsApp message for review.
5. “Open WhatsApp” opens a `wa.me` link with the text filled in. **The client must press Send in WhatsApp.**
6. The therapist replies to agree availability, session length, fees, location, or video instructions.

These are appointment **requests**, not live reservations. The site does not claim a time is available, prevent double booking, send emails/reminders, or auto-confirm appointments. Cancellations and rescheduling happen in the WhatsApp conversation. Group availability and capacity are agreed with the therapist.

The contact form uses the same review-and-open-WhatsApp flow. If WhatsApp cannot open, the visitor can copy the prepared message instead.

## Privacy

Booking and contact form values exist only in React memory for the current page. They are not sent to a website API or saved in cookies, localStorage, sessionStorage, or a database. The privacy-notice dismissal is also memory-only.

Opening the WhatsApp link passes the prepared text to WhatsApp; pressing Send transmits the message to the therapist. Browser history and WhatsApp may retain that URL/message. Hosting access logs and external photo/font providers may process ordinary connection information. The privacy page explains the handoff and needs the practice’s own contact and received-message policy before launch. No claim of automatic legal compliance is made.

The therapist’s public contact destination and existing marketing copy remain static website configuration; there is no private therapist account/profile record.

## Build and publish

```powershell
npm.cmd test
npm.cmd run typecheck
npm.cmd run build
```

`npm run build` generates the [out directory](out/). Upload its contents to a static host; no application server or start command is needed in production. Use `npm run dev` for local preview. Set `NEXT_PUBLIC_SITE_URL` to your HTTPS domain and the WhatsApp number before building.

On your static host, use HTTPS and configure appropriate security headers (including `X-Content-Type-Options: nosniff` and `Referrer-Policy: no-referrer`). No runtime server variables or database setup are required. The removed admin/management routes return not-found pages.

## Update content

- [Practice copy and FAQs](app/lib/practice.ts)
- [Home page](app/page.tsx)
- [Other public pages](app/[slug]/page.tsx)
- [WhatsApp number configuration and message formatting](app/lib/whatsapp.ts)
- [Booking and contact interfaces](app/components/booking.tsx)
- [Styles](app/globals.css)

The logo, plum (#5a375b) and olive (#58573b) palette, Dr. Emmanuel Werashipala’s name, Certified Therapist credential, Thika address, phone, and email come from the supplied brand assets. The tagline is “care rooted in love”. The original logo file remains unchanged; the site displays its emblem with the updated tagline.

Provide an approved therapist portrait, detailed qualifications/registration, years of experience, languages, fees, and policies to replace the remaining placeholders. Resources remain starter topic ideas. There are no fabricated testimonials.

The focused tests check message contents, special-character encoding, international-number validation, future Nairobi dates, and guardian consent. They do not send any WhatsApp messages.
