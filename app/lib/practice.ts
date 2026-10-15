// Public business details transcribed from the supplied business card.
// Fields not supplied by the practice remain explicitly marked for completion.
export const practice = {
  name: 'Hesed Counselling Services',
  tagline: 'care rooted in love',
  city: 'Thika',
  timezone: 'Africa/Nairobi',
  therapistName: 'Dr. Emmanuel',
  credentials: 'Certified Therapist',
  experience: '2',
  languages: 'English, Kiswahili',
  address: 'Naivas Supermarket, 3rd floor, Room 3–10, Thika Town',
  email: 'info.hesedcounselling@gmail.com',
  phone: '+254 705 605 821',
  phoneHref: 'tel:+254705605821',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Naivas%20Supermarket%2C%20Thika%20Town%2C%20Kenya',
  fee: 'Fees on request',
  preview: true,
};
export const services = [
  { id: 'individual', title: 'Individual therapy', short: 'A little space, just for you.', description: 'For the moments when life feels heavy, confusing, or simply not quite like you. Explore anxiety, low mood, grief, life changes, and the patterns you would like to understand.', approach: 'One-to-one conversations at your pace, with space to reflect and find practical ways forward.', duration: 50, icon: 'logo' },
  { id: 'couple', title: 'Couples therapy', short: 'Find your way back to each other.', description: 'For partners who want to feel more understood. Whether you are navigating conflict, rebuilding trust, or growing through a change, both of your voices matter.', approach: 'Supported conversations to understand your relationship patterns and practise communicating with care.', duration: 75, icon: 'hearts' },
  { id: 'family', title: 'Family therapy', short: 'Make room for every voice.', description: 'For families facing tension, transitions, or difficult conversations. A shared space to listen, understand one another, and consider new ways of relating.', approach: 'Sessions with agreed family members, with attention to each person’s needs and boundaries.', duration: 75, icon: 'family' },
  { id: 'group', title: 'Group therapy', short: 'You don’t have to carry it alone.', description: 'For people who would value connection with others experiencing similar challenges. Group themes and suitability are discussed before joining.', approach: 'A small, therapist-led group with clear agreements about respect, participation, and confidentiality.', duration: 90, icon: 'circle' },
  { id: 'teen', title: 'Therapy for teens', short: 'A place to feel heard, not judged.', description: 'For young people navigating school, friendships, identity, or big feelings. There is no pressure to have the right words or know where to begin.', approach: 'Age-appropriate conversations, a clear explanation of privacy, and agreed involvement from a parent or guardian.', duration: 50, icon: 'sun' },
] as const;
export const faqs = [
  ['What happens in the first session?', 'We start by getting to know one another. You can share what brought you here, ask questions, and talk about what you hope might change. We will discuss consent, privacy, fees, and whether working together feels like a good fit. You do not need to prepare a story or share everything at once.'],
  ['Can I choose an online session?', 'Yes. Choose online or in person when booking. For online sessions, your therapist will confirm your appointment and share joining instructions in your WhatsApp conversation. You will need a private space, a stable internet connection, and a device with a camera and microphone. Your therapist will discuss whether online care is suitable for your needs and location.'],
  ['Is what I share confidential?', 'Your privacy matters. The therapist will explain confidentiality and its limits before you begin, including safeguarding concerns, serious risk of harm, and legal requirements. Group members agree to respect privacy, although other participants’ actions cannot be guaranteed.'],
  ['How do I pay?', 'There is no online payment. Fees are available on request and will be agreed before your session. Payment is made in person or arranged with the practice after the appointment. Please ask about payment methods before you book.'],
  ['What if I need to cancel or reschedule?', 'Message your therapist in the same WhatsApp conversation to cancel or request a different time. Changes are agreed directly with the therapist. Please give as much notice as possible. [Replace with the practice’s cancellation notice period, fees, and any exceptions before launch.]'],
  ['How does therapy for under-18s work?', 'A parent or guardian’s name and consent are required when booking a teen session. The therapist will confirm the young person’s assent, legal consent requirements, and safeguarding arrangements. Privacy and the role of parents or guardians are discussed clearly at the start.'],
  ['How many sessions will I need?', 'There is no one-size-fits-all answer. We can talk about your needs and review progress together. You are welcome to ask questions, share feedback, and discuss the pace of your support. No particular outcome is guaranteed.'],
  ['What if I am in crisis?', 'This website and booking service are not monitored for emergencies. If you are in immediate danger or crisis, contact local emergency services or go to the nearest emergency department. [Add a verified local crisis line before launch.]'],
] as const;
