import type { Metadata } from "next";
import Link from "next/link";
import { Header, PrivacyNotice } from "./components/chrome";
import { Icon } from "./components/icons";
import { Brand } from "./components/brand";
import { practice } from "./lib/practice";
import { Geist } from 'next/font/google';
import logo from './logo.png';
import "./globals.css";
const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans", // Used optionally for Tailwind CSS
});

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: "Hesed Counselling Services | Care rooted in love | Thika",
    template: "%s | Hesed Counselling Services",
  },
  description:
    "A welcoming space for individual, couples, family, group and teen therapy in Thika and online. Explore support and book a session at your pace.",
  openGraph: {
    type: "website",
    siteName: "Hesed Counselling Services",
    locale: "en_KE",
    title: "Hesed Counselling Services — care rooted in love",
    description:
      "Care rooted in love. Counselling with Dr. Emmanuel in Thika and online.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: logo.src, type: "image/png" }],
    shortcut: logo.src,
    apple: logo.src,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistSans.className} antialiased`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Brand className="footer-brand"/>
                <p className="footer-tagline">{practice.tagline}</p>
                <span className="footer-location">
                  <Icon name="pin" size={17} /> Thika, Kenya · online & in
                  person
                </span>
              </div>
              <div>
                <h2>Find your way</h2>
                <Link href="/about">Meet your therapist</Link>
                <Link href="/services">Therapy services</Link>
                <Link href="/how-it-works">Questions & answers</Link>
              </div>
              <div>
                <h2>Let’s connect</h2>
                <Link href="/contact">
                  Get in touch <Icon name="arrow" size={15} />
                </Link>
                <address className="footer-contact"><a href={`mailto:${practice.email}`}>{practice.email}</a><a href={practice.phoneHref}>{practice.phone}</a><span>{practice.address}</span></address>
                <a href={practice.mapUrl} target="_blank" rel="noreferrer">Find us in Thika ↗</a>
              </div>
              <div className="footer-invite">
                <h2>One small step.</h2>
                <p>You don’t need to have it all figured out to begin.</p>
                <Link href="/book" className="button button-outline">
                  Book a session <Icon name="arrow" size={18} />
                </Link>
              </div>
            </div>
            <div className="crisis-note">
              <Icon name="hearts" size={20} />
              <p>
                This is not a crisis service. If you are in immediate danger or
                crisis, contact local emergency services or go to your nearest
                emergency department.
              </p>
            </div>
            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} Hesed Counselling Services. Care rooted in love.
              </span>
              <div>
                <Link href="/book">Request a session</Link>
              </div>
            </div>
          </div>
        </footer>
        <PrivacyNotice />
      </body>
    </html>
  );
}
