/**
 * Single source of truth for company-wide facts.
 * Honest, reconciled numbers (see metrics): used everywhere so claims never conflict.
 */

export const site = {
  name: "Techvion",
  legalName: "Techvion Technology",
  domain: "https://www.techvion.com",
  founded: 2024,
  tagline: "Design. Build. Scale.",
  description:
    "Techvion is a product studio that designs, builds, and scales software for ambitious teams, from MVP to production-grade platforms.",
  email: "techviontechnology@gmail.com",
  phoneDisplay: "+977 9843012542",
  phoneHref: "tel:+9779843012542",
  whatsappNumber: "9779843012542",
  location: {
    line: "Baniyatar, Kathmandu",
    region: "Nepal",
    full: "Baniyatar, Kathmandu, Nepal",
    mode: "Remote-first · Worldwide delivery",
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  ],
} as const;

export function whatsappLink(message?: string) {
  const text = message ?? "Hi Techvion! I'd like to discuss a project.";
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/technology", label: "How we build" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/technology", label: "How we build" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services/custom-software", label: "Custom Software" },
    { href: "/services/web-ecommerce", label: "Web & E-commerce" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/data-science-ai", label: "Data Science & AI" },
    { href: "/services/maintenance-support", label: "Maintenance & Support" },
  ],
  Resources: [
    { href: "/services", label: "All services" },
    { href: "/projects", label: "Recent work" },
    { href: "/contact#faq", label: "FAQ" },
    { href: "/contact", label: "Book a call" },
  ],
} as const;
