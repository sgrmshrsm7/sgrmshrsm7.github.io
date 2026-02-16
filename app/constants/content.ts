/**
 * Central content constants. Components import from here and map to UI (e.g. icons).
 */

import type {
  NavLink,
  ContactInfo,
  ContactSocialLink,
  SocialMediaLink,
  HeroSection,
  AboutSection,
  SkillsSection,
  Experience,
  Education,
  ContactSection,
  Footer,
  Site,
} from "./types";

export const NAV_LINKS: readonly NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
] as const;

export const CONTACT_INFO: readonly ContactInfo[] = [
  {
    type: "email",
    value: "sgrmshrsm7@gmail.com",
    href: "mailto:sgrmshrsm7@gmail.com",
  },
  {
    type: "phone",
    value: "+91 8808109747",
    href: "tel:+918808109747",
  },
  { type: "location", value: "Gurugram, India", href: null },
] as const;

export const CONTACT_SOCIAL_LINKS: readonly ContactSocialLink[] = [
  { type: "resume", label: "Resume", href: "#" },
  {
    type: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sgrmshrsm7",
  },
  {
    type: "email",
    label: "Email",
    href: "mailto:sgrmshrsm7@gmail.com",
  },
] as const;

export const SOCIAL_MEDIA_LINKS: readonly SocialMediaLink[] = [
  { type: "phone", href: "tel:+918808109747" },
  { type: "mail", href: "mailto:sgrmshrsm7@gmail.com" },
  { type: "linkedin", href: "https://www.linkedin.com/in/sgrmshrsm7" },
  { type: "github", href: "https://github.com/sgrmshrsm7" },
  { type: "instagram", href: "https://www.instagram.com/sgrmshrsm7" },
  { type: "telegram", href: "https://t.me/sgrmshrsm7" },
] as const;

export const SOCIAL_MEDIA_ICON_SIZE: number = 28;

export const HERO: HeroSection = {
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

export const ABOUT: AboutSection = {
  title: "About Me",
  paragraphs: [
    "Senior Software Engineer with 4+ years of experience specializing in building high-performance, responsive, and scalable web architectures. Currently at MakeMyTrip, I've previously delivered impact at Bharti Airtel.",
    "I've reduced page load latency by 75%, improved initial page speeds by 60%, and built systems serving millions of users. I'm passionate about performance optimization, mentoring junior developers, and crafting elegant solutions to complex problems.",
    "When I'm not coding, you'll find me competing in programming contests or exploring new technologies. I hold a B.Tech in Computer Science from NIT Nagpur.",
  ],
} as const;

export const SKILLS: SkillsSection = {
  title: "Technical Skills",
  description:
    "A comprehensive toolkit built over 4+ years of building scalable web applications.",
  categories: [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux",
        "Recoil",
        "CSS/SCSS",
        "Tailwind",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "REST APIs",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "GCP", "Sentry", "Kibana", "Keycloak"],
    },
    {
      title: "Architecture",
      skills: [
        "Module Federation",
        "Micro-frontends",
        "SSR/SSG",
        "Performance Optimization",
        "System Design",
      ],
    },
  ],
} as const;

export const EXPERIENCE: readonly Experience[] = [
  {
    title: "Senior Software Engineer - II",
    company: "MakeMyTrip India Private Limited",
    duration: "Jan 2026 - Present",
    location: "Gurugram, India",
    achievements: [
      {
        text: "Achieved 30% reduction in data over-fetching by developing and optimising GraphQL APIs with Apollo Server.",
        highlights: ["30% reduction in data over-fetching"],
      },
      {
        text: "Boosted initial page load speeds by 60% and enhanced SEO performance by migrating the React application to Next.js using SSR and SSG.",
        highlights: [
          "Boosted initial page load speeds by 60%",
          "SEO performance",
        ],
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Bharti Airtel Limited",
    duration: "Jun 2024 - Jan 2026",
    location: "Gurugram, India",
    achievements: [
      {
        text: "Minimized identity management and security audit overhead by 50% across all onboarded portals by integrating Keycloak for centralized authentication and access control.",
        highlights: ["50%", "Keycloak"],
      },
      {
        text: "Increased development efficiency by 2 times and reduced software development time by building internal tool Pagespace, a tool capable of generating pages (widgets, API calls, actions) by passing JSON.",
        highlights: ["Increased development efficiency by 2 times"],
      },
      {
        text: "Led the development of One Portal, a scalable B2B platform designed for modular onboarding of portals using a reusable template architecture, reducing the average time to launch a new client portal by 80%.",
        highlights: ["scalable B2B platform", "modular onboarding", "80%"],
      },
      {
        text: "Reduced 65% average ticket resolution time by spearheading the development of the portal for internal users.",
        highlights: ["65% average ticket resolution time"],
      },
    ],
  },
  {
    title: "Software Engineer",
    company: "Bharti Airtel Limited",
    duration: "Jul 2022 - Jun 2024",
    location: "Gurugram, India",
    achievements: [
      {
        text: "Reduced the average page load latency by 75% by migrating the frontend architecture to webpack module federation micro-frontend architecture.",
        highlights: [
          "75%",
          "webpack module federation micro-frontend architecture",
        ],
      },
      {
        text: "Decreased service escalations by 10% by launching a chat-based troubleshooting system that slashed the average resolution time from 4 hours to a few minutes resulting in 10% cost reduction of Service Requests.",
        highlights: [
          "10%",
          "chat-based troubleshooting system",
          "4 hours to a few minutes",
          "10% cost reduction",
        ],
      },
      {
        text: "Achieved a 40% improvement in page performance by optimizing Core Web Vitals.",
        highlights: ["40% improvement in page performance", "Core Web Vitals"],
      },
      {
        text: "Attained a 99.9% uptime and reduced critical incidents by 90% by implementing robust error monitoring and real-time alerting (Sentry, Kibana).",
        highlights: [
          "99.9% uptime",
          "critical incidents by 90%",
          "Sentry, Kibana",
        ],
      },
      {
        text: "Resolved 50+ production bugs diagnosed through Sentry and Kibana logs.",
        highlights: ["50+ production bugs", "Sentry", "Kibana"],
      },
    ],
  },
] as const;

export const EDUCATION: readonly Education[] = [
  {
    institution: "Visvesvaraya National Institute of Technology",
    degree: "Bachelor of Technology - BTech",
    branch: "Computer Science and Engineering",
    duration: "Jul 2018 - May 2022",
    location: "Nagpur, India",
  },
  {
    institution: "Lucknow Public School",
    degree: "Intermediate, PCM",
    duration: "Apr 2015 - May 2017",
    location: "Lucknow, India",
  },
  {
    institution: "Lucknow Public School",
    degree: "High School",
    duration: "Apr 2013 - Mar 2015",
    location: "Lucknow, India",
  },
] as const;

export const CONTACT_SECTION: ContactSection = {
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

export const FOOTER: Footer = {
  copyright: "© 2026 Sagar Mishra. All rights reserved.",
} as const;

export const SITE: Site = {
  logoText: "Sagar",
  logoHighlight: ".dev",
  baseUrl: "https://sgrmshrsm7.github.io",
} as const;
