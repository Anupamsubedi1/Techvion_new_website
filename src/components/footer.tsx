import Link from "next/link";
import { Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/site/layout";
import { Logo } from "@/components/site/logo";
import { site, footerNav } from "@/content/site";

const socialIcons = { linkedin: Linkedin, github: Github, instagram: Instagram } as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-night text-white">
      <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {site.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-accent-bright" />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-white/55 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-accent-bright" />
                {site.email}
              </a>
              <p className="flex items-center gap-2.5 text-white/55">
                <MapPin className="h-4 w-4 text-accent-bright" />
                {site.location.full}
              </p>
            </div>
            <div className="mt-6 flex gap-2.5">
              {site.social.map((s) => {
                const SocialIcon = socialIcons[s.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/55 transition-colors hover:border-accent-bright/40 hover:text-white"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <p className="label-mono text-white/40">{heading}</p>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
