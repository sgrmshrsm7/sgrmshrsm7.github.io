/**
 * Type definitions for content constants
 */

// Navigation Link
export interface NavLink {
  readonly name: string;
  readonly href: string;
}

// Contact Information
export type ContactType = "email" | "phone" | "location";

export interface ContactInfo {
  readonly type: ContactType;
  readonly value: string;
  readonly href: string | null;
}

// Social Links
export type SocialLinkType =
  | "resume"
  | "linkedin"
  | "email"
  | "phone"
  | "mail"
  | "github"
  | "instagram"
  | "telegram";

export interface ContactSocialLink {
  readonly type: "resume" | "linkedin" | "email";
  readonly label: string;
  readonly href: string;
}

export interface SocialMediaLink {
  readonly type:
    | "phone"
    | "mail"
    | "linkedin"
    | "github"
    | "instagram"
    | "telegram";
  readonly href: string;
}

// quote: {lines: readonly string[]; author: string};
export interface Quote {
  readonly line: string;
  readonly author: string;
}

// Hero Section
export interface HeroSection {
  readonly name: string;
  readonly tagline: string;
  readonly company: string;
  readonly location: string;
  readonly description: string;
  readonly descriptionHighlight: string;
  readonly quote: Quote;
}

// About Section
export interface AboutSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

// Skills Section
export interface Skill {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface SkillsSection {
  readonly title: string;
  readonly description: string;
  readonly categories: readonly Skill[];
}

// Experience Section
export interface AchievementHighlight {
  readonly text: string;
  readonly highlights: readonly string[];
}

export interface Experience {
  readonly title: string;
  readonly company: string;
  readonly duration: string;
  readonly location: string;
  readonly achievements: readonly AchievementHighlight[];
}

// Education Section
export interface Education {
  readonly institution: string;
  readonly degree: string;
  readonly branch?: string;
  readonly duration: string;
  readonly location: string;
}

// Contact Section
export interface ContactFormLabels {
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly submitText: string;
}

export interface ContactSection {
  readonly subtitle: string;
  readonly heading: string;
  readonly description: string;
  readonly form: ContactFormLabels;
}

// Footer
export interface Footer {
  readonly copyright: string;
}

// Site Configuration
export interface Site {
  readonly logoText: string;
  readonly logoHighlight: string;
  readonly baseUrl: string;
}
