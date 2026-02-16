/**
 * Central content constants. Components import from here and map to UI (e.g. icons).
 */

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
] as const;

export const CONTACT_INFO = [
  {
    type: "email" as const,
    value: "sgrmshrsm7@gmail.com",
    href: "mailto:sgrmshrsm7@gmail.com",
  },
  {
    type: "phone" as const,
    value: "+91 8808109747",
    href: "tel:+918808109747",
  },
  { type: "location" as const, value: "Gurugram, India", href: null },
] as const;

export const CONTACT_SOCIAL_LINKS = [
  { type: "resume" as const, label: "Resume", href: "#" },
  {
    type: "linkedin" as const,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sgrmshrsm7",
  },
  {
    type: "email" as const,
    label: "Email",
    href: "mailto:sgrmshrsm7@gmail.com",
  },
] as const;

export const SOCIAL_MEDIA_LINKS = [
  { type: "phone" as const, href: "tel:+918808109747" },
  { type: "mail" as const, href: "mailto:sgrmshrsm7@gmail.com" },
  { type: "linkedin" as const, href: "https://www.linkedin.com/in/sgrmshrsm7" },
  { type: "github" as const, href: "https://github.com/sgrmshrsm7" },
  { type: "instagram" as const, href: "https://www.instagram.com/sgrmshrsm7" },
  { type: "telegram" as const, href: "https://t.me/sgrmshrsm7" },
] as const;

export const SOCIAL_MEDIA_ICON_SIZE = 28;

export const HERO = {
  name: "Sagar Mishra",
  tagline: "Senior Software Engineer II",
  company: "MakeMyTrip Private Limited",
  location: "Gurugram, India",
  description:
    "Building high-performance, scalable web architectures that deliver measurable impact.",
  descriptionHighlight: "measurable impact",
  quote:
    "\"Each of us lives, dependent and bound by our individual knowledge and our awareness. All that is what we call 'reality'. However, both knowledge and awareness are equivocal. One's reality might be another's illusion. We all live inside our own fantasies.\" — Itachi Uchiha.",
} as const;

export const ABOUT = {
  title: "About Me",
  paragraphs: [
    "Senior Software Engineer with 4+ years of experience specializing in building high-performance, responsive, and scalable web architectures. Currently at MakeMyTrip, I've previously delivered impact at Bharti Airtel.",
    "I've reduced page load latency by 75%, improved initial page speeds by 60%, and built systems serving millions of users. I'm passionate about performance optimization, mentoring junior developers, and crafting elegant solutions to complex problems.",
    "When I'm not coding, you'll find me competing in programming contests or exploring new technologies. I hold a B.Tech in Computer Science from NIT Nagpur.",
  ],
} as const;

export const CONTACT_SECTION = {
  subtitle: "GET IN TOUCH",
  heading: "Let's connect and discuss opportunities.",
  description:
    "I'm always open to discussing new opportunities, freelance projects, or just having a chat about technology.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Let's talk about...",
    submitText: "Send Message",
  },
} as const;

export const FOOTER = {
  copyright: "© 2026 Sagar Mishra. All rights reserved.",
} as const;

export const SITE = {
  logoText: "Sagar",
  logoHighlight: ".dev",
  baseUrl: "https://sgrmshrsm7.github.io",
} as const;
