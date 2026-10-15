# Hesed Counselling Services

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People seeking individual, couples, family, group, or teen counselling in Thika or online, including first-time visitors who may feel uncertain about reaching out. Parents or guardians participate in teen-session requests. The therapist receives and responds to requests through WhatsApp, not a website dashboard.

## Product Purpose

Build a trustworthy online presence for the practice, help visitors understand the support offered, improve local discoverability, and make requesting a session straightforward. Success means visitors can find accurate practice details, choose a suitable service and format, and knowingly send a request to the therapist.

## Operating Context

- Practice: Hesed Counselling Services, Dr. Emmanuel Werashipala, Certified Therapist (as printed on the supplied business card).
- Location: Naivas Supermarket, 3rd floor, Room 3–10, Thika Town.
- Public phone: +254 705 605 821; email: info.hesedcounselling@gmail.com.
- Session formats: in person and online. All preferred appointment times use Africa/Nairobi (UTC+3).
- Visitors select a service, format, preferred future date/time, name, and optional practical note. Teen requests also collect guardian name and consent.
- Visitors review the prepared message, open WhatsApp, and press Send themselves. The therapist manually agrees availability, fees, and session arrangements. Cancellation and rescheduling happen in the same conversation.
- Fees are on request; payment takes place in person or by arrangement after the session, never through this website.

## Capabilities and Constraints

- Existing implementation: Next.js App Router, React, TypeScript, static export. Preserve the frontend-only architecture.
- No Express backend, Supabase, database, admin login, client account, or stored private therapist profile.
- Public business details remain static content. Booking/contact fields stay in page memory; do not persist them in browser storage or send them to a website API.
- A selected date/time is a preference, not a confirmed appointment or evidence of availability. No live reservations, capacity enforcement, double-booking prevention, automatic confirmations, email notifications, or reminders.
- WhatsApp receives the prepared message when its link is opened. Do not imply that the website controls WhatsApp storage or that no third party receives data.
- Collect only practical booking information; warn against sharing clinical histories or sensitive details.
- Retain home, about, services, how-it-works/FAQ, booking, contact, resources, and privacy content, plus local SEO metadata and structured data.
- Keep contact details and the location accessible in the top header, with a clear path to request a session.
- Website and WhatsApp booking are not emergency services. Preserve the crisis disclaimer.

## Brand Commitments

- Name: Hesed Counselling Services. Tagline: “care rooted in love”.
- Preserve the supplied logo and business-card facts. The user's latest direction binds the theme to the logo's plum colour, not green, and specifies Geist as the main font.
- Warm, calming, welcoming, professional language; gentle, plain-spoken, reassuring copy without clinical jargon or guaranteed outcomes.
- These are existing user commitments, not permission to invent a new visual identity during initialization.

## Evidence on Hand

- [Original logo](public/Hesed%20Counseling%20Logo.png).
- [Business card](public/Hesed%20Business%20Card.png), the source of the public name, credential, phone, email, and location.
- [Practice content](app/lib/practice.ts), [booking flow](app/components/booking.tsx), and [WhatsApp message helper](app/lib/whatsapp.ts).
- The card's Certified Therapist wording is supplied evidence, not independently verified licensure. Do not fabricate registration numbers, specialist accreditations, experience, testimonials, outcomes, or a therapist portrait.

## Product Principles

1. Make reaching out understandable and low-pressure.
2. Distinguish an appointment request from a confirmed session at every step.
3. Minimize data collection and explain the WhatsApp handoff before it occurs.
4. Prefer accurate, approved practice facts over persuasive but unsupported claims.
5. Keep the site accessible, responsive, and simple to maintain without a backend.

## Accessibility & Inclusion

Target WCAG AA, with readable contrast, keyboard navigation, visible focus indicators, labelled forms, useful alt text, and mobile-first responsive layouts. Explain parental/guardian involvement for under-18s without claiming that a website checkbox alone establishes legal consent.

## Open Decisions and Launch Content

Confirm WhatsApp availability on the business-card phone number; approved therapist and office photography; detailed qualifications/registration; years of experience; spoken languages; final service descriptions and session lengths; fees; cancellation terms; response times; privacy and message-retention policies; applicable data-protection requirements; a verified local crisis contact; production domain; and genuine business/social profile links. Existing placeholder text or durations are not approval of these facts. Do not claim legal compliance before review.
