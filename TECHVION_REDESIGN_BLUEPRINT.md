# TECHVION — DEEP ANALYSIS & REDESIGN BLUEPRINT

> A complete reverse-engineered documentation package for the Techvion marketing website.
> Reconstructed from source on 2026-05-30. Detailed enough to redesign the entire site without the original project.

**Stack of record:** Next.js 16.1.5 (App Router) · React 19.2.3 · TypeScript 5 · Tailwind CSS v4 · shadcn/ui + Radix UI · Framer Motion 12 · React Hook Form 7 + Zod 4 · Lucide + react-icons · Sonner · Deployed on Vercel · No backend / no API routes (forms route to WhatsApp + local success state).

---

## TABLE OF CONTENTS

1. [Phase 1 — Business Discovery](#phase-1--business-discovery)
2. [Phase 2 — Site Structure Extraction](#phase-2--site-structure-extraction)
3. [Phase 3 — Page Inventory](#phase-3--page-inventory)
4. [Phase 4 — Component Inventory](#phase-4--component-inventory)
5. [Phase 5 — Content Audit](#phase-5--content-audit)
6. [Phase 6 — Visual Design System](#phase-6--visual-design-system)
7. [Phase 7 — Animation Audit](#phase-7--animation-audit)
8. [Phase 8 — UX Audit](#phase-8--ux-audit)
9. [Phase 9 — Competitor Analysis](#phase-9--competitor-analysis)
10. [Phase 10 — SEO Audit](#phase-10--seo-audit)
11. [Phase 11 — Brand Positioning](#phase-11--brand-positioning)
12. [Phase 12 — Redesign Strategy](#phase-12--redesign-strategy)
13. [Phase 13 — Wireframes](#phase-13--wireframes)
14. [Phase 14 — Modern UI Concept](#phase-14--modern-ui-concept)
15. [Phase 15 — Techvion Complete Website DNA](#phase-15--techvion-complete-website-dna)

---

# PHASE 1 — BUSINESS DISCOVERY

## 1.1 Company Identity (extracted)

| Attribute | Value (from code) | Source |
|---|---|---|
| Name | Techvion (stylized "Tech Vion" in navbar) | `navbar.tsx`, `layout.tsx` |
| Founded | 2024 | `about-page.tsx` |
| Experience claim | "2 Years" | `about-page.tsx` |
| HQ | Baniyatar, Kathmandu, Nepal — Remote-first | `inquiry-page.tsx`, `contact-page.tsx` |
| Phone / WhatsApp | +977 9843012542 | `footer.tsx`, `inquiry-form-card.tsx` |
| Email | techviontechnology@gmail.com | `footer.tsx` |
| Domain (canonical) | https://www.techvion.com | `layout.tsx`, `sitemap.ts` |
| Tagline (meta) | "Scalable Digital Solutions" | `layout.tsx` |

> **Identity inconsistency flag:** The logo renders "Tech Vion" (two words, two blues `#005b96`/`#03396c`) while every other surface uses "Techvion." Email domain is gmail.com, not @techvion.com — a trust gap for an enterprise pitch.

## 1.2 Mission, Vision, Values (verbatim from `about-page.tsx`)

| Pillar | Statement |
|---|---|
| **Mission** | "Design and deliver business-ready digital solutions that solve real operational and growth challenges." |
| **Vision** | "Become a trusted global technology partner known for clarity, quality, and measurable outcomes." |
| **Values** | "Professional execution, transparent communication, product ownership, and long-term client success." |

**Story (verbatim):** "Founded in 2024, Techvion was established to help businesses turn complex requirements into reliable, scalable digital products. In just 2 years, we have grown into a trusted delivery partner for companies seeking quality execution across software, cloud, and product operations."

## 1.3 Target Audience & Ideal Customers

The copy speaks to three tiers explicitly ("startups, SMEs, and enterprise modernization initiatives" — `about-page.tsx`):

| Segment | Evidence in code | Fit |
|---|---|---|
| **Startups / Founders** | "from idea to launch", inquiry timeline "ASAP / 1-2 weeks" | Primary |
| **SMEs / Local businesses** | Real projects are SMB sites (treks, agriculture, hotel, clothing) | Primary (actual delivered work) |
| **Enterprise modernization** | "enterprise applications", "ERP/CRM integration", "system integrations" | Aspirational (claimed, not yet evidenced by portfolio) |
| **International clients** | "we collaborate with teams worldwide across time zones" | Secondary |

**Reality vs. positioning gap:** Marketing copy targets enterprise; the actual portfolio is regional SMB / agency work (Nepal trekking, agriculture, cabins, chat app). The redesign must reconcile this — either lean into "growth partner for ambitious SMBs" (honest, winnable) or build enterprise proof before claiming it.

## 1.4 Customer Pain Points (inferred from messaging)

| Pain the copy addresses | Where it's answered |
|---|---|
| "I don't know which service I need" | Services page CTA: "Not sure which service you need?" |
| Vendors who disappear / poor communication | "Transparent Communication — weekly updates, no surprises" |
| Projects that don't scale | "Scalable, production-ready", "built to grow with your business" |
| Slow / unreliable delivery | "98% On-Time Delivery", "respond within 24 hours" |
| Post-launch abandonment | Maintenance & Support service, "24/7 Support" |
| Low trust in a new/small vendor | Metrics, FAQ, "2 years", testimonials (MISSING) |

## 1.5 Services Offered

**Marketing taxonomy (Home / 4 detailed service pages):**
1. Custom Software Development
2. Web & E-commerce
3. Digital Marketing & SEO
4. Maintenance & Support

**Full delivery taxonomy (Services page + Technology page — 8 capabilities):**
Custom Software · Web Development · Mobile App Development (Flutter/React Native) · QA & Testing · Cloud Computing · AI & Machine Learning · DevOps · API Development & Integration.

> **Taxonomy mismatch flag:** Home links to 4 service detail pages, but the `/services` index lists 8 *different* capabilities with **no links** to detail pages, and 2 of the 8 reuse wrong icons (Mobile App uses a ShoppingCart icon; AI/ML uses a Video icon; DevOps uses a Megaphone icon). Footer lists a *third* service set (Video & Graphic Design, SEO Copywriting, Domain & Hosting). Three inconsistent service vocabularies across the site.

## 1.6 Core Value Proposition

> **"Design. Build. Scale."** — Scalable software, high-impact digital experiences, and growth-driven solutions, from idea to launch — delivered with disciplined engineering, transparent communication, and measurable outcomes.

## 1.7 Brand Personality

| Trait | Strength (1–5) | Evidence |
|---|---|---|
| Professional / Disciplined | 5 | "disciplined execution", "engineering standards" |
| Modern / Technical | 5 | Next.js-forward, animated, monospace accents |
| Trustworthy / Transparent | 4 | "no surprises", "weekly updates" |
| Premium / Polished | 3 | Clean UI but light-only, stocky hero imagery |
| Approachable / Human | 2 | No team photos, no names, no faces anywhere |
| Bold / Distinctive | 2 | Conventional agency layout, safe palette |

## 1.8 Conversion Goals (as built)

| Priority | Goal | Mechanism |
|---|---|---|
| P0 | Submit project inquiry | `/inquiry` multi-field form → local "Submitted" state (no backend) |
| P0 | WhatsApp conversation | Green "Send via WhatsApp" button prefilled with form values |
| P1 | Email contact | mailto: techviontechnology@gmail.com |
| P2 | Phone call | tel:+9779843012542 |
| P3 | Portfolio engagement | "View Our Work" → `/projects` |

## 1.9 Lead Generation Strategy (as built)

- **Single conversion path** (inquiry form) repeated via persistent CTAs ("Send Inquiry" in navbar, footer, every page bottom).
- **WhatsApp-first** for a Nepal/South-Asia market where chat outranks email.
- **No lead magnet, no gated content, no newsletter, no booking calendar, no live chat, no CRM capture** — form submission currently does nothing server-side (sets `submitted=true`). **Critical: real inquiries are lost unless the user clicks WhatsApp.**

## 1.10 Customer Personas

### Persona A — "Founder Riya" (Startup)
| Field | Detail |
|---|---|
| Role | Non-technical founder, pre-seed SaaS |
| Age / Context | 27, Kathmandu/remote, bootstrapped |
| Goal | Ship an MVP fast, look credible to investors |
| Pains | Limited budget, needs speed + ownership, fears being overcharged |
| Triggers | "from idea to launch", "ASAP" timeline, WhatsApp ease |
| Objection | "Can a 2-year-old agency deliver something investors trust?" |
| Wins when site shows | Transparent process, fast response, MVP case study, pricing signal |

### Persona B — "Operations Lead Anish" (SME)
| Field | Detail |
|---|---|
| Role | Ops/marketing lead at a 20–80 person regional business |
| Goal | Modern website / e-commerce / internal tool that actually converts |
| Pains | Past vendor ghosted them, site is slow, no analytics |
| Triggers | Real local portfolio (treks, agriculture), "98% on-time", maintenance plan |
| Objection | "Will they support us after launch?" |
| Wins when site shows | Maintenance plans, measurable outcomes, live sites to click |

### Persona C — "VP Engineering Dana" (Enterprise / Modernization)
| Field | Detail |
|---|---|
| Role | Technical decision-maker, mid-market/enterprise |
| Goal | Augment team for cloud/DevOps/AI/API integration work |
| Pains | Needs proof of rigor, security, scale; risk-averse |
| Triggers | Tech stack depth, QA, CI/CD, ISO/SOC-type signals |
| Objection | "No enterprise logos, gmail address, no security/compliance info" |
| Wins when site shows | Enterprise case studies, security page, named team, certifications |

### Persona D — "International Client Marco" (Outsourcing buyer)
| Field | Detail |
|---|---|
| Role | Agency owner / product manager abroad outsourcing dev |
| Goal | Reliable, cost-effective offshore delivery partner |
| Pains | Timezone, communication, quality consistency |
| Triggers | "worldwide across time zones", remote-first, English copy |
| Objection | "Currency/pricing, contracts, IP ownership unclear" |
| Wins when site shows | Engagement models, timezone overlap, testimonials from abroad |

---

# PHASE 2 — SITE STRUCTURE EXTRACTION

## 2.1 Route Table

| Route | File | Type | Rendering | In Nav | In Sitemap |
|---|---|---|---|---|---|
| `/` | `app/page.tsx` → `home-page.tsx` | Static | Server shell + client sections | ✅ Home | ✅ |
| `/services` | `app/services/page.tsx` → `services-page.tsx` | Static | Client | ✅ Services | ✅ |
| `/services/custom-software` | `services/custom-software/page.tsx` | Static (data obj) | Client detail | ❌ (only via home) | ❌ |
| `/services/web-ecommerce` | `services/web-ecommerce/page.tsx` | Static (data obj) | Client detail | ❌ | ❌ |
| `/services/digital-marketing` | `services/digital-marketing/page.tsx` | Static (data obj) | Client detail | ❌ | ❌ |
| `/services/maintenance-support` | `services/maintenance-support/page.tsx` | Static (data obj) | Client detail | ❌ | ❌ |
| `/projects` | `app/projects/page.tsx` → `projects-page.tsx` | Static | Client (filter/tabs) | ✅ Projects | ✅ |
| `/technology` | `app/technology/page.tsx` → `technology-page.tsx` | Static | Client | ✅ Technology | ✅ |
| `/about` | `app/about/page.tsx` → `about-page.tsx` | Static | Client | ✅ About | ✅ |
| `/contact` | `app/contact/page.tsx` → `contact-page.tsx` | Static | Client | ✅ Contact | ✅ |
| `/inquiry` | `app/inquiry/page.tsx` → `inquiry-page.tsx` | Static | Client | CTA button | ✅ |
| `/sitemap.xml` | `app/sitemap.ts` | Generated | — | — | — |
| `/robots.txt` | `app/robots.ts` | Generated | — | — | — |

> **Pattern:** Every route uses a thin server `page.tsx` (exports `metadata`) that renders a `"use client"` `*-page.tsx`. Service detail pages embed a typed `data` object and render the shared `ServiceDetailPage`.

> **Gap:** The 4 service detail pages are **not in the sitemap** and **not in the navbar** — only reachable from the home `ServicesOverview` cards. The `/services` index does **not** link to them at all.

## 2.2 Navigation Hierarchy

**Primary nav (`navbar.tsx`):** Home · Services · Projects · Technology · About · Contact · **[Send Inquiry]** (button).
- Fixed, 70px tall, white/90 + backdrop blur, active-link underline via `layoutId` shared-element animation.
- Mobile: hamburger → right Sheet drawer on dark `#01151D`, staggered link reveal, Send Inquiry CTA.
- No dropdown/mega-menu — Services has children but nav doesn't expose them.

## 2.3 Footer Hierarchy (`footer.tsx`)

```
Footer (bg #022B3A)
├── Brand column
│   ├── "Techvion" wordmark
│   ├── Tagline: "Building scalable, high-performance digital solutions…"
│   ├── Phone: +977 9843012542
│   ├── Email: techviontechnology@gmail.com (mailto)
│   └── Social: LinkedIn · Twitter · Instagram  (all href="#", DEAD)
├── Quick Links: Services · Projects · Technology · About · Contact
├── Services (TEXT ONLY, not links):
│   Custom Web Development · E-commerce Solutions · Video & Graphic Design ·
│   Digital Marketing · SEO Copywriting · Domain & Hosting
└── Start a Project: blurb + [Send Inquiry] button
Bottom: © {year} Techvion. All rights reserved.
```
> **Gaps:** social links are dead (`#`); footer "Services" are plain text (not linked to service pages); footer service names don't match the actual service pages.

## 2.4 Internal Linking Map (diagram)

```
                         ┌──────────────┐
                         │   NAVBAR      │ (all pages)
                         └──────┬───────┘
        ┌───────────┬───────────┼───────────┬──────────┬─────────┐
        ▼           ▼           ▼           ▼          ▼         ▼
      HOME      SERVICES     PROJECTS   TECHNOLOGY   ABOUT    CONTACT
        │           │           │                      │         │
        │           └─(CTA)─► INQUIRY ◄─(CTA from every page incl. navbar/footer)
        │
        ├─ ServicesOverview cards ─► /services/custom-software
        │                          ─► /services/web-ecommerce
        │                          ─► /services/digital-marketing
        │                          ─► /services/maintenance-support
        ├─ FeaturedProjects ─► /projects  (+ external live sites)
        └─ Hero / FinalCTA ─► /inquiry , /projects

  SERVICE DETAIL PAGES ─► /services (back link) , /inquiry (CTA)
  CONTACT/INQUIRY ─► WhatsApp (wa.me) , mailto , tel
```
> **Orphan risk:** Service detail pages receive links only from Home. `/services` (the logical hub) doesn't link to them. Inquiry is the conversion sink (in-links from everywhere, no onward path except success state).

## 2.5 Visual Sitemap Tree

```
techvion.com
│
├── / (Home)
│   ├── Hero (slideshow + typewriter)
│   ├── Services Overview (4 cards → detail pages)
│   ├── Featured Projects (2 cards → /projects + live)
│   ├── Process (7 steps)
│   ├── Metrics (4 counters)
│   ├── Why Choose Us (4 strengths + 5 FAQ)
│   └── Final CTA
│
├── /services (8 capability cards → /inquiry)
│   ├── /custom-software   (detail template)
│   ├── /web-ecommerce     (detail template)
│   ├── /digital-marketing (detail template)
│   └── /maintenance-support (detail template)
│
├── /projects (tabs: Websites | Mobile Apps; website filters)
├── /technology (8 categories, tooltip badges)
├── /about (mission/vision/values, story, strengths, CTA)
├── /contact (info cards + inquiry form)
├── /inquiry (contact sidebar + inquiry form)
├── /sitemap.xml
└── /robots.txt
```

---

# PHASE 3 — PAGE INVENTORY

> Legend: **CTA** = primary call-to-action present. Layout described top→bottom.

## 3.1 HOME (`/`)

| Field | Detail |
|---|---|
| Purpose | First impression; route visitors to services, proof, and inquiry |
| Goal | Drive "Start Your Project" / "View Our Work" clicks |
| User Intent | Evaluate credibility & fit in <30s |
| Audience | All personas (top of funnel) |
| Primary CTA | "Start Your Project" → /inquiry; secondary "View Our Work" → /projects |
| Conversion Opportunity | Hero CTA, every section's link, sticky navbar button |

**Current layout (sections in order):** Hero (full-screen) → Services Overview → Featured Projects → Process → Metrics → Why Choose Us (cards + FAQ accordion) → Final CTA.

**Current content highlights:** Typewriter H1 "We Design./Build./Scale."; subhead "Scalable software, high-impact digital experiences…"; 3-image Unsplash slideshow (8s autoplay).

**Current components:** `HeroSection`, `ServicesOverview`, `FeaturedProjects`, `ProcessSection`, `MetricsSection`, `WhyChooseUs`, `FinalCTA`, `AnimatedCounter`, shadcn `Accordion`.

**Current UX flow:** Land → read animated promise → scan 4 services → see 2 proof projects → understand 7-step process → see metrics → read differentiators/FAQ → final CTA. Long single-column scroll; CTA repeated 3×.

## 3.2 ABOUT (`/about`)

| Field | Detail |
|---|---|
| Purpose | Build trust, tell story, state mission/vision/values |
| Goal | Convert skeptics; push to /inquiry or /contact |
| Intent | "Are these people credible and aligned?" |
| Audience | SME ops lead, enterprise evaluator |
| CTA | "Start a Project" + "Contact Us" |
| Conversion Opp | Bottom CTA card; trust badges (2 Years / Founded 2024) |

**Layout:** Hero ("Engineering Business Growth Through Technology") → Foundation banner → Mission/Vision/Values 3-card grid → Strengths list + Story (2-col, with Experience/Founded chips) → CTA card.
**Components:** motion divs, Lucide `Target/Eye/Heart/CheckCircle2`.
**Weakness:** "Why Techvion" heading appears **twice** in the 2-column section (left = strengths, right = story both labeled "Why Techvion"); no team, no faces, no logos.

## 3.3 SERVICES INDEX (`/services`)

| Field | Detail |
|---|---|
| Purpose | Present full capability catalog |
| Goal | Push every card to /inquiry |
| Intent | "What can they do for me?" |
| CTA | Per-card "Get Started" → /inquiry; bottom "Send Inquiry" |
| Conversion Opp | "Not sure which service you need?" CTA |

**Layout:** Hero ("Services Built to Scale") → 8-card grid with **shuffle animation** (hidden→center→scatter→settle) → CTA.
**Content:** 8 capabilities each with 3 feature tags.
**Critical flaws:** cards link to `/inquiry`, **not** to the 4 detail pages (which are richer); 3 icons semantically wrong; taxonomy ≠ home's 4 services.

## 3.4 SERVICE DETAIL ×4 (`/services/[slug]`)

Shared template `ServiceDetailPage` rendering a `data` object: `{ title, subtitle, description, features[6], stats[3] }`.

| Slug | Title | Stats (claimed) |
|---|---|---|
| custom-software | Custom Web Development & Software Solutions | 50+ Projects, 95+ Perf, 96% Retention |
| web-ecommerce | Web & E-commerce Solutions | 30+ Stores, 40% Conv Lift, $2M+ Revenue |
| digital-marketing | Digital Marketing & SEO | 200% Traffic, 4.5x ROAS, 10K+ Leads |
| maintenance-support | Maintenance & Support | 99.9% Uptime, <2hr Response, 20+ Contracts |

**Layout:** Back-link → subtitle/title/description → 3 stat columns → "What's Included" 6 feature cards → CTA.
**Trust risk:** Stats (50+ projects, $2M+ revenue, 10K+ leads) **contradict** Home metrics ("20+ Projects Completed", "2 Years"). Numbers appear fabricated/inconsistent.

## 3.5 PROJECTS (`/projects`)

| Field | Detail |
|---|---|
| Purpose | Portfolio proof |
| Goal | Build credibility → /inquiry |
| Intent | "Show me real work I can click" |
| CTA | "Visit Live Site" (external); no inquiry CTA on page |
| Conversion Opp | MISSING bottom CTA to inquiry |

**Layout:** Hero ("Projects We're Proud Of") → segmented toggle [Websites | Mobile Apps] → (Websites) category filter chips [All/Travel/Hospitality/Web App/Corporate] + animated grid; (Mobile) 4 Flutter app cards with swipeable screenshot carousels.
**Content:** 7 website projects (Big Sky Treks, HNKCL, Kapada, Mardi Treks, QuickStay, UnwindCabins, Connectify), 4 mobile apps (HamroBike, Weather, VPN UI, Video Player).
**Issues:** Connectify has empty `href` (broken "Visit" link); no case studies (only one-line outcome); no inquiry CTA at end.

## 3.6 TECHNOLOGY (`/technology`)

| Field | Detail |
|---|---|
| Purpose | Signal technical depth |
| Goal | Reassure technical evaluators |
| Intent | "Do they use a modern, trustworthy stack?" |
| CTA | NONE (dead-end page) |
| Conversion Opp | MISSING entirely |

**Layout:** Hero ("Technology We Trust") → 8 category cards, each a floating (perpetual y-bob) card with tooltip-on-hover tech badges (real brand icons via react-icons/si).
**Issue:** Perpetual infinite float animation on all 8 cards is distracting & battery-costly; no CTA; mostly redundant with Services.

## 3.7 CONTACT (`/contact`)

**Layout:** Centered hero → 3 info cards (Phone/WhatsApp, Email, Location) → 2-col: "Have a project in mind?" CTA + embedded `InquiryFormCard`.
**CTA:** Send Inquiry, Email Us, plus full form.
**Overlap:** Near-duplicate of `/inquiry` (both embed the same form + contact info) — redundant.

## 3.8 INQUIRY (`/inquiry`)

**Layout:** Hero ("Send Inquiry") → 2-col: left Contact Information card (Email, Phone, Location "Baniyatar, Kathmandu", WhatsApp, "Why Choose Us" 4 bullets, big WhatsApp button) + right `InquiryFormCard`.
**Form fields:** Name*, Email*, Company, Phone, Project Type* (8 options), Timeline (7 options), Description* (min 10). Submit → local success screen. WhatsApp button → prefilled wa.me link.
**Critical:** No server submission — `onSubmit` only sets `submitted=true`. Real leads only captured if user clicks WhatsApp.

## 3.9 Conversion-opportunity matrix

| Page | Has primary CTA to inquiry? | Quality |
|---|---|---|
| Home | ✅ ×3 | Strong |
| About | ✅ | Strong |
| Services | ✅ (cards + bottom) | Strong but skips detail pages |
| Service detail | ✅ | Good |
| Projects | ❌ | **Missing** |
| Technology | ❌ | **Missing** |
| Contact | ✅ form | Strong |
| Inquiry | ✅ form | Strong (but no backend) |

---

# PHASE 4 — COMPONENT INVENTORY

## 4.1 Application Components

| Component | Location | Purpose | Key deps | Props | Reusability | UX value |
|---|---|---|---|---|---|---|
| `Navbar` | `components/navbar.tsx` | Fixed top nav + mobile drawer | framer-motion, Sheet, usePathname | none | App-wide | Active-link `layoutId` underline; scroll state tracked but unused visually |
| `Footer` | `components/footer.tsx` | Site footer | framer-motion, lucide | none | App-wide | Contact + links; **dead social + unlinked services** |
| `HeroSection` | `components/home/hero-section.tsx` | Home hero, slideshow + typewriter | framer-motion, useState/useEffect | none | Home only | High impact; heavy client logic, stock imagery |
| `ServicesOverview` | `home/services-overview.tsx` | 4 service cards | useInView, custom step state | none | Home only | Directional sequential reveal (slow ~2.4s) |
| `FeaturedProjects` | `home/featured-projects.tsx` | 2 project cards | framer-motion | none | Home only | Proof; only 2 of 7 projects |
| `ProcessSection` | `home/process-section.tsx` | 7-step process | useInView | none | Home only | Educates; stagger 0.28s ×7 = ~2s reveal |
| `MetricsSection` | `home/metrics-section.tsx` | 4 animated counters | AnimatedCounter | none | Home only | Social proof; numbers conflict w/ detail pages |
| `WhyChooseUs` | `home/why-choose-us.tsx` | 4 strengths + FAQ | Accordion, useInView | none | Home only | Differentiators + objection handling |
| `FinalCTA` | `home/final-cta.tsx` | Closing CTA band | framer-motion | none | Reusable pattern | Conversion |
| `InquiryFormCard` | `components/inquiry-form-card.tsx` | The lead form | RHF, Zod, shadcn Form/Input/Select/Textarea/Button | `className?`, `title?` | High (used on /inquiry & /contact) | Core conversion; **no backend submit** |
| `AnimatedCounter` | `components/animated-counter.tsx` | Count-up number | framer-motion `animate`, useInView | `end:number`, `suffix?:string` | High | Draws eye to metrics |
| `PageTransition` | `components/page-transition.tsx` | Route fade/slide | framer-motion | `children` | App-wide (via `template.tsx`) | Smooth route changes |
| `ServiceDetailPage` | `services/_components/service-detail-page.tsx` | Service detail template | framer-motion | `data: ServiceData` | High (4 pages) | DRY templating |
| `Template` | `app/template.tsx` | Wraps pages in AnimatePresence | usePathname | children | App-wide | Enables exit animations |

## 4.2 shadcn/ui Primitives (in `components/ui/`)

| Component | Built on | Used by | Notes |
|---|---|---|---|
| `accordion` | @radix-ui/react-accordion | WhyChooseUs FAQ | Single, collapsible |
| `button` | CVA + Radix Slot | Form, CTAs | Variants via class-variance-authority |
| `card` | div primitives | (available, lightly used) | |
| `dialog` | @radix-ui/react-dialog | (available) | |
| `dropdown-menu` | @radix-ui/react-dropdown-menu | (available, unused in pages) | |
| `form` | RHF context wrappers | InquiryFormCard | FormField/Item/Label/Control/Message |
| `input` | native input | InquiryFormCard | |
| `label` | @radix-ui/react-label | Form | |
| `navigation-menu` | @radix-ui/react-navigation-menu | (installed, **not used** — navbar is custom) | Dead dependency surface |
| `select` | @radix-ui/react-select | InquiryFormCard | Project type / timeline |
| `sheet` | @radix-ui/react-dialog (vaul-style) | Navbar mobile | Right drawer |
| `textarea` | native textarea | InquiryFormCard | |
| `tooltip` | @radix-ui/react-tooltip | Technology page | Tech badge descriptions |
| `badge` | CVA | (available) | |

> **Cleanup candidates:** `navigation-menu`, `dropdown-menu`, `dialog`, `card`, `badge` are installed but unused in pages — either adopt (mega-menu, modals) or prune.

## 4.3 Reusability Score

| Tier | Components |
|---|---|
| Truly reusable | InquiryFormCard, AnimatedCounter, ServiceDetailPage, PageTransition, all `ui/*` |
| Single-use (could be generalized) | All `home/*` sections (hardcoded data inside component) |
| Recommendation | Extract section data to a `content/` layer (CMS-ready) so sections become prop-driven and reusable across pages |

---

# PHASE 5 — CONTENT AUDIT

## 5.1 Headlines & Subheadings (verbatim inventory)

| Location | Headline | Eyebrow / Subhead |
|---|---|---|
| Home Hero | "We Design./Build./Scale." (typewriter) | "Scalable software, high-impact digital experiences, and growth-driven solutions — from idea to launch." |
| Home Services | "End-to-end digital solutions" | "What We Do" |
| Home Projects | "Featured Projects" | "Recent Work" |
| Home Process | "A process built for results" | "How We Work" + "From first conversation to live product…" |
| Home Metrics | "Proven results, not just promises" | "By the Numbers" |
| Home Why | "Built different. Delivered better." | "Why Techvion" |
| Home Final CTA | "Ready to build something remarkable?" | "Let's Work Together" + "…respond within 24 hours with a clear game plan." |
| About Hero | "Engineering Business Growth Through Technology." | "Who We Are" |
| About | "A professional team with clear principles" | "Our Foundation" |
| About | "What sets us apart" / "Our Story" | "Why Techvion" (×2) |
| About CTA | "Ready to work together?" | — |
| Services Hero | "Services Built to Scale" | "What We Offer" |
| Services CTA | "Not sure which service you need?" | — |
| Projects Hero | "Projects We're Proud Of" | "Our Work" + "Real client work. Real results." |
| Technology Hero | "Technology We Trust" | "Our Stack" + "Hover any technology badge for details." |
| Contact Hero | "Let's Build Something Together" | "Get in Touch" + "We respond within 24 hours." |
| Inquiry Hero | "Send Inquiry" | "…we'll get back to you within 24 hours with a clear plan." |

## 5.2 Statistics inventory (and conflicts)

| Stat | Value | Source | Conflict |
|---|---|---|---|
| Client Satisfaction | 100% | Home Metrics | — |
| On-Time Delivery | 98% | Home Metrics | — |
| Projects Completed | 20+ | Home Metrics | ❌ vs "50+" / "30+" on detail pages |
| Countries Served | 2 | Home Metrics | — |
| Experience | 2 Years / Founded 2024 | About | — |
| Projects Delivered | 50+ | Custom-software detail | ❌ vs Home "20+" |
| Stores Launched | 30+ | Web-ecommerce detail | ❌ implausible vs 20+ total |
| Revenue Generated | $2M+ | Web-ecommerce detail | ⚠️ unverifiable |
| Leads Generated | 10K+ | Digital-marketing detail | ⚠️ unverifiable |
| Uptime Guarantee | 99.9% | Maintenance detail | ⚠️ no SLA backing |

> **The single biggest trust liability:** quantitative claims are internally contradictory. A skeptical buyer who reads two pages will distrust all numbers.

## 5.3 Content quality assessment

| Category | Strong | Weak | Redundant | Missing |
|---|---|---|---|---|
| Value prop | "Design. Build. Scale." memorable; clear subhead | — | — | Differentiated "why us vs others" |
| Services | Detail pages well-written | Index descriptions generic; wrong icons | 3 conflicting service vocabularies | Pricing, engagement models, deliverables |
| Proof | Real clickable projects | Outcomes are one-liners, not metrics | Contact ≈ Inquiry pages | Case studies, **testimonials**, logos |
| Trust | FAQ handles objections | Stats contradict | "Why Techvion" repeated | Team, faces, certifications, reviews |
| Process | Clear 7-step | Generic (any agency) | — | Timelines, what client must provide |
| Conversion | Strong CTA repetition + WhatsApp | Form has no backend | — | Booking calendar, lead magnet |
| Legal | — | "Terms"/"Privacy" are non-links | — | Actual Terms, Privacy, Cookie pages |

## 5.4 Contact information (single source of truth)

| Channel | Value |
|---|---|
| Phone / WhatsApp | +977 9843012542 (wa.me: 9779843012542) |
| Email | techviontechnology@gmail.com |
| Location | Baniyatar, Kathmandu, Nepal (Remote-first) |
| Social | LinkedIn / Twitter / Instagram — **all dead (`#`)** |

## 5.5 Top content improvements (prioritized)

1. **Reconcile all statistics** to one honest, verifiable set (e.g., 20+ projects, 2 countries, 100% satisfaction). Remove $2M+/10K+/50+ unless provable.
2. **Add testimonials** (3–5 named quotes + photo/logo) — currently zero.
3. **Add real case studies** (problem → approach → measurable result) for 2–3 flagship projects.
4. **Unify service taxonomy** across home, /services, footer, detail pages.
5. **Add pricing/engagement signal** (fixed-bid vs retainer vs staff aug; "from $X" or "request quote").
6. **Add team/faces** — humanize the "professional team" claim.
7. **Wire the form** to a real endpoint (email/CRM) + thank-you.
8. **Real legal pages** + working social links + @techvion.com email.

---

# PHASE 6 — VISUAL DESIGN SYSTEM

## 6.1 Color Tokens (from `globals.css` + inline usage)

### Brand palette (actual hex used across components)

| Token | Hex | Role | Usage |
|---|---|---|---|
| Primary / Deep Teal | `#022B3A` | Brand, text, dark surfaces, primary buttons | Headings, footer bg, primary CTA |
| Teal Accent | `#1F7A8C` | Secondary text, hover, muted-foreground, ring | Body accents, eyebrows, hover states |
| Sky Blue | `#BFDBF7` | Accent, borders, highlight | Badges, accent fills, focus, selection |
| Pale Lavender-Blue | `#E1E5F2` | Card/muted/secondary bg, borders | Section tints, card borders, chips |
| White | `#FFFFFF` | Background, primary-foreground | Page bg, button text |
| Mobile drawer dark | `#01151D` | Mobile menu bg | Sheet only |
| Logo blue 1 | `#005b96` | "Tech" wordmark | Navbar logo only |
| Logo blue 2 | `#03396c` / `#011f4b` | "Vion" wordmark | Navbar logo only |
| Hero hover | `#7B9CB3` | Hero primary button hover | Hero only |
| Success green | `green-500/600` (`#22c55e`) | WhatsApp buttons | Form / inquiry |
| Error red | `red-400` | Required asterisks | Form |

### CSS variables (`:root`)

```
--radius: 0.625rem (10px)
--background:#fff  --foreground:#022b3a
--card:#e1e5f2  --card-foreground:#022b3a
--primary:#022b3a  --primary-foreground:#fff
--secondary:#e1e5f2  --secondary-foreground:#022b3a
--muted:#e1e5f2  --muted-foreground:#1f7a8c
--accent:#bfdbf7  --accent-foreground:#022b3a
--border:#bfdbf7  --input:#bfdbf7  --ring:#1f7a8c
--destructive: oklch(0.577 0.245 27.325)
(chart-1..5 = default shadcn oklch; sidebar-* mirror brand; .dark variant defined but NO dark mode shipped)
```

> **Palette = "Indigo Dye / Blue family"** (a known 5-color scheme: #022B3A, #1F7A8C, #BFDBF7, #E1E5F2, #fff). Cohesive but **low contrast risk**: `#1F7A8C` body text on white ≈ 3.9:1 (fails WCAG AA for small text). Light-mode only.

## 6.2 Typography

| Aspect | Value |
|---|---|
| Sans font | **Geist** (`next/font/google`), `--font-geist-sans` |
| Mono font | **Geist Mono**, `--font-geist-mono` (loaded, barely used) |
| Body color | `#022B3A` on white |
| H1 (pages) | `text-4xl → md:text-5xl` (36→48px), `font-bold`, `tracking-tight` |
| H1 (hero) | `text-3xl → lg:text-6xl` (30→60px), white |
| H2 (sections) | `text-3xl → md:text-4xl` (30→36px), `font-bold` |
| H3 (cards) | `text-base/lg` (16–18px), `font-bold` |
| Eyebrow | `text-sm font-semibold uppercase tracking-widest` `#1F7A8C` |
| Body | `text-sm/base`, `leading-relaxed`, `#1F7A8C` |
| Metric numerals | `text-4xl→5xl font-extrabold`, `tabular-nums` |
| Letter-spacing | Logo `tracking-[0.08em]`; eyebrows `tracking-widest` |

**Type scale (effective):** 12 / 14 / 15 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60 px.

## 6.3 Spacing & Layout

| Token | Value | Notes |
|---|---|---|
| Section padding-Y | `py-20` (80px) home; `py-16` (64px) inner pages | |
| Page-top offset | `pt-28` (112px) to clear fixed 70px navbar | |
| Container widths | `max-w-7xl` (navbar 80rem) · `max-w-6xl` (sections 72rem) · `max-w-5xl/4xl/2xl` (content) | Inconsistent; standardize |
| Horizontal padding | `px-5/6/7/11` responsive | |
| Card padding | `p-5 / p-6 / p-8 / p-10` | |
| Grid gaps | `gap-5 / gap-6` | |
| Navbar height | `70px` | |

## 6.4 Grid Systems

| Context | Grid |
|---|---|
| Services overview (home) | `1 → sm:2 → lg:4` |
| Services index | `1 → md:2 → xl:3` |
| Service detail features | `1 → md:2 → lg:3` |
| Process | `2 → sm:3 → lg:7` |
| Metrics | `2 → md:4` |
| Projects (web) | `1 → md:2 → xl:3` |
| Projects (mobile) | `1 → md:2 → xl:4` |
| Technology | `1 → md:2 → xl:3` |
| Contact info | `1 → md:3` |
| Inquiry | `lg:[340px_1fr]` |

## 6.5 Breakpoints (Tailwind defaults)

| Name | Min-width |
|---|---|
| sm | 640px |
| md | 768px (nav switches to mobile below) |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

## 6.6 Border Radius

| Token | Value |
|---|---|
| `--radius` base | 10px (0.625rem) |
| sm/md/lg/xl/2xl/3xl/4xl | 6 / 8 / 10 / 14 / 18 / 22 / 26px |
| Cards | `rounded-xl` (12px) / `rounded-2xl` (16px) |
| Buttons | `rounded-lg` (8px) / `rounded-xl` |
| Badges | `rounded-md` (6px) |
| Pills/indicators | `rounded-full` |

## 6.7 Shadows

| Token | Value |
|---|---|
| `.soft-shadow` (utility) | `0 12px 30px rgba(2,43,58,0.12)` |
| Card hover | `hover:shadow-md` / `hover:shadow-lg` (Tailwind) |
| Form card | `shadow-lg shadow-[#022B3A]/[0.04]` |
| Inquiry form (contact) | `0 4px 24px rgba(2,43,58,0.07)` |

## 6.8 Icons

| Source | Usage |
|---|---|
| `lucide-react` | UI/semantic icons (ArrowRight, Code2, Globe, Megaphone, ShieldCheck, CheckCircle2, Compass, Rocket, Phone, Mail, MapPin, Menu, ChevronDown…) |
| `react-icons/si` | Real brand logos on Technology page (SiReact, SiNextdotjs, SiFlutter, SiDocker, SiHtml5, SiCss, SiJavascript, SiAndroid, SiApple) |
| Icon chip pattern | 10×10/11×11 rounded-lg `bg-[#E1E5F2]`, icon `#1F7A8C`, hover → `bg-[#022B3A]` + white icon |

## 6.9 Custom utilities (`globals.css`)

```
.glass       → border #BFDBF7 + bg #E1E5F2
.soft-shadow → 0 12px 30px rgba(2,43,58,.12)
::selection  → bg #BFDBF7 / color #022B3A
html         → scroll-behavior: smooth
```

## 6.10 Design Token JSON (redesign-ready)

```json
{
  "color": {
    "primary": "#022B3A",
    "primaryHover": "#1F7A8C",
    "accent": "#1F7A8C",
    "sky": "#BFDBF7",
    "surface": "#E1E5F2",
    "background": "#FFFFFF",
    "drawerDark": "#01151D",
    "success": "#22C55E",
    "danger": "#F87171",
    "textPrimary": "#022B3A",
    "textMuted": "#1F7A8C"
  },
  "font": { "sans": "Geist", "mono": "Geist Mono" },
  "radius": { "base": "10px", "card": "12px", "panel": "16px", "pill": "9999px" },
  "shadow": {
    "soft": "0 12px 30px rgba(2,43,58,0.12)",
    "card": "0 4px 24px rgba(2,43,58,0.07)"
  },
  "spacing": { "sectionY": "80px", "sectionYInner": "64px", "navH": "70px", "container": "1152px" },
  "breakpoints": { "sm": 640, "md": 768, "lg": 1024, "xl": 1280, "2xl": 1536 }
}
```

---

# PHASE 7 — ANIMATION AUDIT

> All motion via Framer Motion 12. Pattern is consistent: `initial → whileInView/animate` with easing `[0.25,0.46,0.45,0.94]` (easeOutQuad-ish) or spring.

| # | Animation | Where | Trigger | Purpose | Perf impact | UX impact | Suggestion |
|---|---|---|---|---|---|---|---|
| 1 | Navbar drop-in (`y:-20→0, opacity`) | Navbar | mount | Polished entrance | Low | + | Keep |
| 2 | Active-link underline (`layoutId` spring) | Navbar | route change | Orientation | Low | ++ | Keep (signature) |
| 3 | Mobile drawer staggered links | Navbar Sheet | open | Delight | Low | + | Keep |
| 4 | Hero image crossfade + scale 1.08→1 (2s) | Hero | 8s interval | Atmosphere | **Med-High** (large Unsplash imgs, `<img>` not `next/image`) | + but LCP risk | Use `next/image`, preload first slide, reduce to subtle |
| 5 | Hero typewriter (type/delete loop) | Hero | continuous setTimeout | Hook attention | Low CPU but **never idle** | +/− (can annoy) | Respect `prefers-reduced-motion`; pause when off-screen |
| 6 | Hero text fade-up stagger | Hero | mount | Hierarchy | Low | + | Keep |
| 7 | Scroll-cue bounce (infinite) | Hero | continuous | Affordance | Low | + | Keep |
| 8 | Services cards directional sequential reveal (L/bottom/bottom/R over 2.4s) | ServicesOverview | inView | Showcase | Low | − **too slow** (2.4s before all visible) | Cut to ~0.6s stagger |
| 9 | Process 7-step slide-in (x:120, stagger 0.28×7≈2s) | Process | inView | Storytelling | Low | − slow on scroll | Reduce delay to 0.08–0.1 |
| 10 | Metrics count-up (1.2s) | AnimatedCounter | inView once | Proof emphasis | Low | ++ | Keep |
| 11 | Metric/why/project card fade-up stagger | multiple | inView | Rhythm | Low | + | Keep |
| 12 | FAQ accordion expand | WhyChooseUs | click | Disclosure | Low | + | Keep |
| 13 | Services-index "shuffle" (hidden→center→scatter+rotate→settle) | ServicesPage | inView | Spectacle | Med | −/+ gimmicky, delays content ~1.4s | Simplify to fade/scale; gimmick hurts scannability |
| 14 | Technology cards **infinite y-bob** (5s mirror, all 8) | Technology | inView | "Alive" feel | **Med (never stops, 8 elements)** | − distracting, battery | Remove perpetual loop; bob once or on hover |
| 15 | Page transition fade/slide (0.4s) | template.tsx | route change | Continuity | Low | + | Keep |
| 16 | Mobile project carousel swipe (x slide 0.28s) | Projects | swipe/arrow | Navigation | Low | ++ | Keep |
| 17 | Projects filter layout animation (`layout`, AnimatePresence) | Projects | filter | Smooth reflow | Low-Med | + | Keep |
| 18 | Hover micro-interactions (scale 1.03/1.04, y:-1/-3, icon translate) | global | hover | Feedback | Low | ++ | Keep |
| 19 | Form success spring check (scale 0→1) | InquiryFormCard | submit | Reward | Low | ++ | Keep |

**Global animation findings:**
- **No `prefers-reduced-motion` handling anywhere** → accessibility gap.
- **Two perpetual animations** (typewriter, tech-card bob) run forever → CPU/battery on idle.
- **Sequential reveals are too slow** (Services 2.4s, Process 2s) → content feels gated behind animation.
- Hero uses raw `<img>` (3 large Unsplash URLs) → **LCP / CLS risk**, should be `next/image`.

---

# PHASE 8 — UX AUDIT

## 8.1 Heuristic scores (per page, 1–10)

| Page | Nav | Readability | Accessibility | Responsive | Conversion | Trust | **Overall** |
|---|---|---|---|---|---|---|---|
| Home | 8 | 7 | 5 | 8 | 7 | 6 | **6.8** |
| About | 8 | 7 | 5 | 8 | 6 | 5 | **6.5** |
| Services | 7 | 6 | 5 | 8 | 5 (skips detail) | 5 | **6.0** |
| Service detail | 8 | 8 | 6 | 8 | 7 | 4 (bad stats) | **6.8** |
| Projects | 7 | 8 | 6 | 8 | 4 (no CTA) | 7 | **6.7** |
| Technology | 6 | 7 | 5 | 8 | 2 (dead-end) | 6 | **5.7** |
| Contact | 8 | 8 | 6 | 8 | 8 | 6 | **7.3** |
| Inquiry | 8 | 8 | 6 | 8 | 7 (no backend) | 6 | **7.2** |
| **Site avg** | | | | | | | **6.6 / 10** |

## 8.2 UX Problems

| Severity | Problem | Location |
|---|---|---|
| 🔴 Critical | Inquiry form has **no backend** — submissions silently lost | InquiryFormCard |
| 🔴 Critical | **Contradictory statistics** destroy trust | Metrics vs detail pages |
| 🔴 Critical | Dead social links, non-functional Terms/Privacy | Footer, form |
| 🟠 High | `/services` doesn't link to detail pages (orphaned content) | Services |
| 🟠 High | Technology & Projects have **no inquiry CTA** (dead-ends) | Those pages |
| 🟠 High | Three different service taxonomies | Home/Services/Footer |
| 🟠 High | Body text `#1F7A8C` on white fails WCAG AA contrast | Global |
| 🟠 High | No testimonials / case studies / team — low social proof | Site-wide |
| 🟡 Med | Contact ≈ Inquiry duplication confuses path | Contact/Inquiry |
| 🟡 Med | Slow gated reveals; infinite tech bob; no reduced-motion | Animations |
| 🟡 Med | Wrong service icons (Mobile=Cart, AI=Video, DevOps=Megaphone) | Services |
| 🟡 Med | Connectify project has empty href (broken link) | Projects |
| 🟡 Med | Logo "Tech Vion" ≠ brand "Techvion"; gmail email | Brand |
| ⚪ Low | Mono font loaded but unused; unused shadcn deps | Build |

## 8.3 Friction points in the conversion funnel

```
Awareness → Interest → Consideration → Intent → Action
  Hero       Services    Projects/      Inquiry   Submit/
  (strong)   (orphaned   Tech (no CTA)  (good     WhatsApp
              detail)    ↓ leak          form)    (only WA
                         dead-ends                 actually
                                                   captures)
```
Biggest leaks: (1) Projects/Technology dead-ends, (2) Services→detail break, (3) form→nowhere.

## 8.4 Trust issues

Gmail address · dead socials · fabricated/contradictory metrics · no testimonials · no team/faces · no legal pages · "$2M+ revenue" with a 7-project portfolio · no client logos.

## 8.5 Missing sections (site-wide)

Testimonials · Case studies · Team/About-the-people · Pricing/Engagement models · Blog/Insights · Client logos/trust bar · FAQ on inner pages · Careers · Legal (Privacy/Terms) · Newsletter · Booking/Calendar · Live chat.

---

# PHASE 9 — COMPETITOR ANALYSIS

| Capability | Techvion | Toptal | Thoughtbot | Vention | Netguru | Intellectsoft | DockYard | Accenture Song |
|---|---|---|---|---|---|---|---|---|
| Hero clarity | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Testimonials/quotes | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Case studies w/ metrics | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Client logos / trust bar | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚪ | ✅ |
| Named team / faces | ❌ | ✅ | ✅ | ⚪ | ✅ | ⚪ | ✅ | ✅ |
| Pricing / engagement models | ❌ | ✅ | ⚪ | ✅ | ✅ | ⚪ | ⚪ | ⚪ |
| Blog / insights | ❌ | ✅ | ✅✅ | ✅ | ✅✅ | ✅ | ✅ | ✅ |
| Industry/solution pages | ❌ | ⚪ | ⚪ | ✅ | ✅ | ✅ | ⚪ | ✅ |
| Booking / book-a-call | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ⚪ |
| Dark mode / bold visual identity | ❌ | ⚪ | ✅ | ⚪ | ✅ | ⚪ | ✅ | ✅✅ |
| Animated/interactive polish | ✅ | ⚪ | ✅ | ✅ | ✅ | ⚪ | ✅ | ✅✅ |
| Certifications/security | ❌ | ⚪ | ⚪ | ✅ | ✅ | ✅ | ⚪ | ✅ |

### Missing features vs market
Case studies, testimonials, trust bar, pricing, blog/content engine, industry pages, book-a-call, security/compliance page, team page.

### Outdated patterns to drop
Autoplay stock-photo hero slideshow; gimmicky shuffle/perpetual-bob reveals; generic "process" with no proof; duplicate contact/inquiry.

### Modern trends to adopt
Bento-grid layouts · dark, brand-saturated hero · sticky "Book a call" CTA · interactive case-study cards · logo marquee · subtle scroll-linked motion (not gated reveals) · `next/image` + perf budget · MDX blog · proof-driven metrics with sources · light/dark theming.

---

# PHASE 10 — SEO AUDIT

## 10.1 Current state

| Element | Status | Detail |
|---|---|---|
| `metadataBase` | ✅ | https://www.techvion.com |
| Title template | ✅ | `%s | Techvion`, default "Techvion — Scalable Digital Solutions" |
| Per-page titles | ✅ | Home/About/Services/Projects/Technology/Contact/Inquiry + 4 detail |
| Descriptions | ✅ | Present on all routes |
| OpenGraph | ⚠️ | Title/desc/url/siteName/type set; **no `images` (no OG image)** |
| Twitter card | ⚠️ | `summary_large_image` but **no image** |
| Favicon/icons | ✅ | techvion-logo.png |
| robots.txt | ✅ | allow all + sitemap ref |
| sitemap.xml | ⚠️ | 7 routes; **omits 4 service detail pages** |
| Canonical URLs | ❌ | none set |
| Structured data (JSON-LD) | ❌ | no Organization/LocalBusiness/Service/Breadcrumb schema |
| H1 per page | ✅ mostly | but Home H1 is animated typewriter (crawl = "We " + JS word) |
| Headings hierarchy | ⚠️ | Some pages repeat eyebrow `<span>`; "Why Techvion" H2 ×2 on About |
| Alt text | ⚠️ | Hero `<img alt="">` empty; project imgs have alt |
| Image optimization | ❌ | raw `<img>` + remote Unsplash, no `next/image` |
| Internal linking | ⚠️ | service detail pages orphaned from /services & sitemap |
| Local SEO | ❌ | Kathmandu address not in LocalBusiness schema / GBP |

## 10.2 Keyword clusters (recommended)

| Cluster | Primary | Supporting / long-tail |
|---|---|---|
| Software agency | "software development company Nepal", "custom software development" | enterprise app development, internal tools, system integration |
| Web/E-com | "web development company", "ecommerce development" | Next.js development agency, headless commerce, online store development |
| Mobile | "mobile app development Nepal", "Flutter app development" | React Native agency, cross-platform app development |
| Marketing | "digital marketing agency", "SEO services" | PPC management, content marketing, CRO |
| Cloud/DevOps/AI | "cloud migration services", "DevOps consulting", "AI ML development" | CI/CD, API integration, ML solutions |
| Local | "IT company in Kathmandu", "web developers Nepal" | software company Baniyatar/Kathmandu |
| Offshore | "offshore development team", "hire remote developers" | dedicated development team, staff augmentation |

## 10.3 SEO action list

1. Add **JSON-LD**: Organization + LocalBusiness (address, geo, phone), Service (×each), BreadcrumbList, FAQ (reuse home FAQ).
2. Add **OG/Twitter images** (1200×630 branded) per page; dynamic OG via `opengraph-image.tsx`.
3. **Add service detail pages to sitemap**; add canonical URLs per page.
4. Convert hero/portfolio to **`next/image`**; set descriptive `alt`.
5. Ensure a **static, crawlable H1** per page (don't rely on JS typewriter for primary H1 text).
6. Build a **blog/insights** engine (MDX) for keyword-cluster content + internal links.
7. Create **industry & location landing pages** (treks/travel, agriculture, hospitality, Kathmandu).
8. Register **Google Business Profile**; embed map on contact.
9. Fix heading hierarchy (one H1, logical H2/H3; rename duplicate "Why Techvion").

---

# PHASE 11 — BRAND POSITIONING

## 11.1 Current brand read

| Dimension | Current |
|---|---|
| Personality | Professional, disciplined, modern-technical, safe |
| Voice | Confident, outcome-oriented, slightly generic-corporate |
| Tone | Reassuring, "no surprises", clear |
| Visual | Light, clean, blue-teal, animated, conventional agency |
| Brand story | "Founded 2024 to turn complex requirements into reliable, scalable products" |
| Archetype | The **Sage/Builder** (competence, mastery) — aspiring to **Ruler** (premium/enterprise) |

## 11.2 Brand voice guide (to formalize)

| Do | Don't |
|---|---|
| Lead with outcomes & clarity | Overclaim unverifiable stats |
| Use plain, confident sentences | Buzzword soup ("synergy", "leverage best-in-class") |
| Show proof (numbers w/ source) | Invent metrics |
| Be human ("we", named team) | Faceless corporate |

## 11.3 Three positioning options

### Option A — Modern (Recommended near-term, honest)
**"The growth-focused product studio for ambitious businesses."**
Lean into real SMB/startup wins (treks, agriculture, hospitality, chat). Friendly, fast, transparent. Light brand evolved with one bold accent + dark hero. Proof = clickable live sites + outcomes. Pricing transparency. *Winnable today.*

### Option B — Premium
**"Design-led engineering for products that feel inevitable."**
Editorial typography, generous whitespace, restrained motion, dark/light duotone, signature accent. Fewer, deeper case studies. Selective ("we partner with a handful of clients"). Positions on craft & design taste over volume.

### Option C — Enterprise
**"Your modernization & delivery partner — secure, scalable, accountable."**
Requires investment: enterprise case studies, security/compliance page, SLAs, named senior team, certifications, @techvion.com domain, contracts/MSA, dedicated-team & staff-aug models. *Aspirational; build proof first.*

**Recommendation:** Ship **Option A** now (matches reality, fixes trust), architect for **Option B** visual elevation, and stage **Option C** content (enterprise proof) over 6–12 months.

---

# PHASE 12 — REDESIGN STRATEGY

> For each page: problems → proposed layout/sections/components/content/CTA strategy.

## 12.1 Global redesign moves

1. **Single source of truth for content** — move all section data into `/content/*.ts` (or CMS) so numbers can't contradict.
2. **One service taxonomy** (the 8-capability set), grouped into 4 "pillars" for the home overview, each pillar → detail page.
3. **Wire the form** to an API route / form service (Resend, Formspree, or `/api/inquiry` + email) with spam protection + thank-you page + analytics event.
4. **Add trust layer**: logo/trust bar, 3–5 testimonials, 2–3 case studies, team strip.
5. **Add sticky "Book a call" / "Start project"** CTA + persistent footer CTA.
6. **Accessibility pass**: bump muted text to ≥4.5:1, focus states, `prefers-reduced-motion`, `next/image`.
7. **Optional dark mode** (tokens already defined).
8. **Add legal pages, working socials, branded email & OG images, JSON-LD.**

## 12.2 Per-page strategy

### HOME
- **Problems:** stock slideshow (LCP), gated slow reveals, only 2 projects, no testimonials/logos, metrics conflict.
- **New layout:** Hero (brand-owned visual / product mock / subtle gradient + static crawlable H1) → Trust bar (client/tech logos) → Pillars (4) → Featured case studies (3, outcome metrics) → Process (compact) → Metrics (reconciled, sourced) → Testimonials → FAQ → Final CTA (with book-a-call).
- **New components:** `TrustBar`, `CaseStudyCard`, `TestimonialCarousel`, `BookCallCTA`.
- **CTA:** Primary "Start your project", secondary "Book a 20-min call".

### ABOUT
- **Problems:** duplicate "Why Techvion" H2; no team/faces; thin story.
- **New:** Story timeline → Mission/Vision/Values → **Team grid (photos + roles)** → Culture/Ways-of-working → Trust (numbers + certifications) → CTA.

### SERVICES (index)
- **Problems:** orphaned detail pages, wrong icons, taxonomy mismatch, links to inquiry not detail.
- **New:** 4 pillar sections each linking to its **detail page**; correct icons; "deliverables + typical timeline + starting price" per service; engagement-models section; CTA.

### SERVICE DETAIL
- **Problems:** contradictory stats; no proof; generic features.
- **New:** Add **related case study**, **process for this service**, **FAQ**, **pricing/engagement**, **related services**; replace stats with honest, sourced numbers or remove.

### PROJECTS
- **Problems:** no CTA, thin outcomes, broken Connectify link, no case studies.
- **New:** Keep Websites/Mobile tabs + filters; each card → **case study page** (problem/approach/result/tech/testimonial); fix/hide broken links; **add bottom CTA**.

### TECHNOLOGY
- **Problems:** dead-end, perpetual animation, redundant w/ services.
- **New:** Reframe as "How we build" (stack + architecture principles + security + QA + DevOps) with proof; add CTA; remove infinite bob.

### CONTACT vs INQUIRY (de-duplicate)
- **New:** Make **/contact** the single conversion hub (info + form + map + book-a-call). Redirect **/inquiry → /contact** (preserve link equity) or make /inquiry a focused short form. Pick one canonical form.

---

# PHASE 13 — WIREFRAMES (text)

> Notation: `[ ]` block, `( )` button, `===` full-bleed, `▭` image/media. D=Desktop, T=Tablet, M=Mobile.

## 13.1 HOME

**Desktop**
```
=================================================================
| (logo)            Home Services Projects Tech About Contact (Send Inquiry) |  ← sticky 70px
=================================================================
|                    ▭ HERO (brand visual / gradient)            |
|        H1: We design, build & scale digital products          |
|        sub • ( Start your project )  ( Book a call )          |
|        ● ● ●   (scroll cue)                                    |
-----------------------------------------------------------------
|  TRUST BAR:  logo  logo  logo  logo  logo  logo               |
-----------------------------------------------------------------
|  WHAT WE DO            [card][card][card][card]  (4 pillars)   |
-----------------------------------------------------------------
|  CASE STUDIES   [▭ big][▭ big][▭ big]  outcome metric each     |
-----------------------------------------------------------------
|  PROCESS  ①─②─③─④─⑤─⑥─⑦  (compact, single fast reveal)         |
-----------------------------------------------------------------
|  METRICS   100%   98%   20+   2    (sourced)                   |
-----------------------------------------------------------------
|  TESTIMONIALS  ❝ quote ❞  ‹ ›   (name • role • logo)          |
-----------------------------------------------------------------
|  FAQ (accordion)                                              |
-----------------------------------------------------------------
|  FINAL CTA: Ready to build?  ( Start project )( Book a call )  |
=================================================================
|  FOOTER: brand • quick links • services(linked) • CTA         |
=================================================================
```
**Tablet:** pillars 2×2; case studies 1×3 stacked or 2-up; metrics 2×2; nav still desktop ≥768.
**Mobile:** hamburger; hero text centered, buttons full-width stacked; everything single column; trust bar = horizontal scroll marquee; sticky bottom ( Start project ) bar.

## 13.2 SERVICES (index)
```
D: Hero ─ [Pillar 1 ▭ + bullets + (Explore →detail)] alternating L/R ×4 ─ Engagement models 3-col ─ CTA
T: Pillars stack with image top; engagement 1×3
M: Single column; image → text → button; engagement stacked
```

## 13.3 SERVICE DETAIL
```
D: ‹Back · subtitle · H1 · desc · (Start) ─ honest stats row ─ What's included 3×2 ─ Process ─ Related case study ─ FAQ ─ Related services ─ CTA
M: stacked; stats 1×3 small; features 1-col; CTA sticky
```

## 13.4 PROJECTS
```
D: Hero ─ [Websites|Mobile] toggle ─ filter chips ─ grid 3-col case cards ─ CTA band
M: toggle full-width ─ chips horizontal scroll ─ 1-col cards ─ mobile carousel swipe ─ CTA
```

## 13.5 ABOUT
```
D: Hero ─ Story timeline ─ M/V/V 3-col ─ TEAM grid 4-col ─ Culture ─ Trust/metrics ─ CTA
M: stacked; team 2-col; timeline vertical
```

## 13.6 CONTACT (canonical hub)
```
D: Hero ─ 2-col [ info card + map + book-a-call | inquiry form ] ─ FAQ
M: info card → form (stacked); sticky WhatsApp FAB
```

---

# PHASE 14 — MODERN UI CONCEPT ("as if building the Figma file")

## 14.1 Design style
**"Calm-tech editorial + bento."** Light base with optional dark hero; generous whitespace; large confident type; restrained, purposeful motion; one saturated accent for energy; real photography/product mocks replacing stock.

## 14.2 Color evolution
- Keep **#022B3A** (Indigo Dye) as the anchor.
- **Add a vivid accent** for CTAs/highlights (e.g., electric cyan `#22D3EE` or warm amber `#F4A340`) to break the all-blue monotony and lift CTA contrast.
- Darken muted text from `#1F7A8C` → `#0F5867`/`#0E4A57` for **WCAG AA** on white.
- Introduce **neutral grays** (`#0B1418` ink, `#5B7480` secondary, `#F6F8FB` panel) for hierarchy.
- Ship **dark mode** (tokens exist): bg `#01151D`, surface `#022B3A`, text `#E1E5F2`, accent cyan.

## 14.3 Typography improvements
- Keep **Geist Sans** for UI/body; add a **display pairing** for editorial H1/H2 (e.g., Geist at tighter tracking, or a serif/grotesk like *Instrument Serif* / *Clash Display* for personality).
- Establish a true type scale (1.25 ratio): 14·16·20·25·31·39·49·61.
- Use **Geist Mono** intentionally for eyebrows/labels/metrics (it's loaded but unused) — gives a "technical" signature.

## 14.4 Card design
- Soft 16px radius, 1px `#E1E5F2` border, `0 4px 24px rgba(2,43,58,.07)`; on hover: lift `-4px` + accent border + subtle accent glow.
- **Bento variation**: mix card sizes (2×1 hero card + 1×1 supports) for case studies & pillars.
- Icon chip retains fill-swap (`#E1E5F2`→`#022B3A`) but icon turns **accent** on hover.

## 14.5 Button design
| Variant | Style |
|---|---|
| Primary | bg `#022B3A`, white text, `rounded-xl`, hover → accent (cyan/amber), micro-scale 1.03, arrow nudge |
| Secondary | outline `#BFDBF7`, ink text, hover `#E1E5F2` |
| Accent CTA | solid accent, ink/white text — reserved for the single most important action per view |
| WhatsApp | keep green, add icon |
- Consistent height (48px), focus ring `2px` accent, disabled state defined.

## 14.6 Section design
- Alternate white / `#F6F8FB` panel backgrounds for rhythm (replace the all-`#E1E5F2/40`).
- Full-bleed dark band for testimonials & final CTA (`#022B3A`/`#01151D`) to punctuate.
- Consistent `max-w-6xl` container + `py-24` desktop / `py-16` mobile.

## 14.7 Micro-interactions & motion design
- Replace gated sequential reveals with **fast (0.4–0.6s) single fade-up stagger (0.06s)**.
- **Scroll-linked** subtle parallax on hero media (not autoplay slideshow).
- Magnetic/hover-grow on primary CTA; animated underline nav (keep `layoutId`).
- Count-up metrics (keep). Testimonials auto-advance w/ pause-on-hover.
- **Remove perpetual loops**; honor `prefers-reduced-motion` (provide static fallback).
- Page transitions: keep 0.3–0.4s fade-slide.

## 14.8 Imagery
- Replace Unsplash hero with **branded gradient + product/dashboard mock** or real client screenshots in device frames.
- Use `next/image` everywhere; device-frame mobile app shots; consistent 16:10 ratios.

## 14.9 Figma file structure (deliverable spec)
```
Pages:
  00 Cover
  01 Foundations (color, type, spacing, radius, shadow, grid, icons)
  02 Components (buttons, inputs, cards, nav, footer, badges, tabs, accordion, testimonial, case card)
  03 Patterns (hero, trust bar, pillar grid, case grid, process, metrics, CTA bands, forms)
  04 Pages — Desktop (Home, Services, Service Detail, Projects, Case Study, Technology, About, Contact)
  05 Pages — Tablet
  06 Pages — Mobile
  07 Dark mode
  08 Motion specs (annotations: trigger, duration, easing, reduced-motion)
Grid: 12-col, 1152 max, 24 gutter, 80 margins (desktop)
Tokens: published as Figma variables mirroring the Design Token JSON (Phase 6.10)
```

---

# PHASE 15 — TECHVION COMPLETE WEBSITE DNA

> Self-contained spec. An AI/designer can rebuild the entire site from this section alone.

## 15.1 Business Context
Techvion is a Kathmandu-based, remote-first software & digital agency (founded 2024) serving startups, SMEs, and aspiring-enterprise clients globally. It sells custom software, web & e-commerce, mobile (Flutter/React Native), QA, cloud, AI/ML, DevOps, and API integration — plus digital marketing/SEO and ongoing maintenance. Real delivered work skews regional SMB (travel/trekking, agriculture, hospitality, e-commerce, chat). Conversion model: project inquiry form + WhatsApp-first contact (no e-commerce, no login). Currently **no backend** — forms must be wired. Contact: +977 9843012542, techviontechnology@gmail.com, Baniyatar, Kathmandu.

## 15.2 Brand Context
- **Name/wordmark:** "Techvion" (fix logo to match; drop "Tech Vion" split).
- **Anchor color:** `#022B3A` (Indigo Dye). Support: `#1F7A8C` teal, `#BFDBF7` sky, `#E1E5F2` lavender-blue, white. Add a saturated accent (cyan `#22D3EE` or amber `#F4A340`) for CTAs; darken muted text for AA.
- **Type:** Geist Sans (body/UI), Geist Mono (labels/metrics), optional display face for editorial headings.
- **Personality:** professional, disciplined, modern-technical, transparent, outcome-driven; evolve toward warmer/human and bolder/premium.
- **Voice/tone:** confident, plain-spoken, proof-led, reassuring ("no surprises", "within 24 hours").
- **Tagline:** "Design. Build. Scale." / "Scalable Digital Solutions."

## 15.3 User Personas
A) Startup Founder (speed, MVP, credibility). B) SME Ops Lead (modern site/commerce, support, real local proof). C) Enterprise/Modernization VP (rigor, security, scale — needs proof first). D) International Outsourcing Buyer (reliable offshore, timezone, models). *(Full detail Phase 1.10.)*

## 15.4 Site Architecture
Routes: `/` · `/services` (+ `/custom-software`, `/web-ecommerce`, `/digital-marketing`, `/maintenance-support`) · `/projects` (+ future case-study pages) · `/technology` · `/about` · `/contact` (canonical hub) · `/inquiry` (focused form or redirect) · generated `sitemap.xml` & `robots.txt` · add: `/blog`, `/case-studies/[slug]`, `/pricing`, `/privacy`, `/terms`. Thin server `page.tsx` (metadata) → client `*-page.tsx`. Content lives in `/content/*.ts` (CMS-ready). Global `Navbar` + `Footer` in `layout.tsx`; `template.tsx` adds page transitions.

## 15.5 Page Structures (canonical)
- **Home:** Hero → TrustBar → 4 Pillars → 3 Case studies → Process(7) → Metrics(4, sourced) → Testimonials → FAQ → Final CTA.
- **Services:** Hero → 4 pillar sections (→detail) → Engagement models → CTA.
- **Service detail:** Back · subtitle · H1 · desc · honest stats → What's included (6) → Process → Case study → FAQ → Related → CTA.
- **Projects:** Hero → [Websites|Mobile] toggle → filters → case cards → CTA. Mobile cards = swipeable carousels.
- **Technology:** Hero → stack categories (8) + architecture/security/QA/DevOps principles → CTA.
- **About:** Hero → Story timeline → M/V/V → Team → Culture → Trust → CTA.
- **Contact (hub):** Hero → info card + map + book-a-call + form → FAQ.

## 15.6 Features
Typewriter hero (reduced-motion aware), animated active-nav underline (`layoutId`), mobile Sheet drawer, count-up metrics, scroll-reveal sections, FAQ accordion, project filter + tabs, swipeable mobile-app carousel, tooltip tech badges, multi-field validated inquiry form (Zod/RHF), WhatsApp deep-link prefill, page transitions. **Add:** working form backend + thank-you, testimonials carousel, case-study pages, trust/logo bar, book-a-call, blog (MDX), dark mode, JSON-LD, OG images.

## 15.7 Content Strategy
One taxonomy (8 capabilities → 4 pillars). Proof-first: every claim sourced; reconcile all stats to one honest set; add testimonials + case studies (problem→approach→measurable result). Humanize (team, faces). Add pricing/engagement-model clarity. Build keyword-cluster blog (software/web/mobile/marketing/cloud/local/offshore). Plain confident voice; no fabricated metrics.

## 15.8 SEO Strategy
metadataBase + per-page title/description (keep); ADD canonical URLs, OG/Twitter images, JSON-LD (Organization, LocalBusiness, Service×, Breadcrumb, FAQ), service detail pages into sitemap, `next/image` + alt text, static crawlable H1s, GBP + local pages, MDX blog for clusters, internal-link service↔detail↔case-study↔blog.

## 15.9 Design System
Tokens per Phase 6.10. Radius 10/12/16px; soft shadows `0 4–12px rgba(2,43,58,.07–.12)`; container `max-w-6xl`; section `py-24/16`; grids 1→2→3/4; Tailwind breakpoints; icon-chip fill-swap pattern; Geist fonts; AA-compliant contrast; light + dark. Components: Button(primary/secondary/accent/whatsapp), Input/Select/Textarea, Card/BentoCard, Nav, Footer, Badge, Tabs, Accordion, Tooltip, Testimonial, CaseCard, TrustBar, MetricCounter, CTABand, Sheet.

## 15.10 UX Strategy
One clear primary action per view; never dead-end (every page → inquiry/book-a-call); de-duplicate contact/inquiry; AA contrast + focus + reduced-motion; `next/image` perf budget (LCP < 2.5s); proof layer for trust; sticky mobile CTA; fix broken/dead links; correct semantic icons.

## 15.11 Animation Strategy
Purposeful, fast (0.3–0.6s), single fade-up stagger (0.06s); keep nav `layoutId`, count-up, carousel, page transitions, hover micro-interactions; REMOVE perpetual loops (typewriter idle, tech bob) and slow gated reveals; honor `prefers-reduced-motion` with static fallbacks; scroll-linked subtle parallax over autoplay slideshow. Easing standard: `cubic-bezier(0.25,0.46,0.45,0.94)`; springs for nav/success.

## 15.12 Conversion Strategy
Primary KPI: qualified inquiries + booked calls. Path: every page → "Start project" / "Book a call" + persistent navbar CTA + sticky mobile CTA + WhatsApp FAB. **Wire form** to API/email/CRM with validation, spam protection, thank-you page, analytics events; keep WhatsApp prefill as fast-path. Add trust accelerators (testimonials, case metrics, logos, guarantees) near CTAs. Reduce friction (short form first, progressive disclosure). Add booking calendar. Reconcile metrics so proof is believable.

## 15.13 Build/Tech Notes for re-implementation
Next.js App Router; thin server pages export `metadata`, render client sections; Tailwind v4 `@theme` tokens in `globals.css`; shadcn/ui + Radix; Framer Motion (centralize variants in a `motion/` lib, add reduced-motion wrapper); RHF + Zod for forms; add `/api/inquiry` route (or Formspree/Resend); `next/image` with remote patterns; MDX for blog/case studies; content in `/content`; add `opengraph-image.tsx`, JSON-LD components, `next-sitemap` or expand `sitemap.ts`. Prune unused deps (navigation-menu, dialog, dropdown-menu, card, badge) or adopt them (mega-menu, modals).

---

## APPENDIX A — Source-of-truth data tables (verbatim, for re-creation)

### Home — Services Overview (4)
| Icon | Title | Desc | Link |
|---|---|---|---|
| Code2 | Custom Software Development | Scalable, production-ready applications built for your exact business needs. | /services/custom-software |
| Globe | Web & E-commerce | Fast, conversion-focused web experiences and modern online stores. | /services/web-ecommerce |
| Megaphone | Digital Marketing & SEO | Data-driven strategies that grow traffic, leads, and revenue. | /services/digital-marketing |
| ShieldCheck | Maintenance & Support | Ongoing monitoring, security, and performance optimization. | /services/maintenance-support |

### Home — Process (7)
Discover · Ideate · Design · Develop · Test & QA · Launch · Grow (each with one-line desc, see Phase 3/source).

### Home — Metrics (4)
100% Client Satisfaction · 98% On-Time Delivery · 20+ Projects Completed · 2 Countries Served.

### Home — Why Choose Us (4) + FAQ (5)
Strengths: Precision Engineering · Design-First Thinking · Transparent Communication · Measurable Outcomes.
FAQ: services offered · how custom software is built · how to start · international clients · technologies.

### Services index (8 capabilities)
Custom Software Development · Web Development · Mobile App Development · Quality Assurance & Testing · Cloud Computing Services · AI & Machine Learning · DevOps Services · API Development & Integration. *(Fix icons: Mobile, AI, DevOps, API.)*

### Projects — Websites (7)
Big Sky Treks (Travel) · Himalaya Nepal Krishi Co. (Corporate) · Kapada (Web App) · Mardi Treks (Travel) · QuickStay (Web App) · UnwindCabins (Hospitality) · Connectify (Web App, **href empty**).
### Projects — Mobile (4)
HamroBike · Weather App · VPN App UI · Video Player App (all Flutter).

### Inquiry form schema (Zod)
fullName(min2)* · email(email)* · company? · phone? · projectType(8: web-development, ecommerce, video-editing, graphic-design, digital-marketing, custom-software, ui-ux, other)* · timeline(7: asap,1-2-weeks,1-month,2-3-months,3-6-months,6-plus-months,flexible)? · description(min10)*.

### Technology categories (8)
Custom Software · Web (HTML5/CSS3/JS/React/Next.js) · Mobile (Flutter/React Native/iOS/Android) · QA (Manual/Automated/Performance) · Cloud (Infra/Migration/Hosting) · AI&ML (AI/ML/Automation) · DevOps (CI-CD/Containerization/Automation) · API (Dev/CRM/ERP).

---

## APPENDIX B — Priority fix list (engineering, ranked)

| # | Fix | Effort | Impact |
|---|---|---|---|
| 1 | Wire inquiry form to backend + thank-you + analytics | M | 🔴 Critical |
| 2 | Reconcile all statistics to one honest set | S | 🔴 Critical |
| 3 | Working social links + @techvion.com email + legal pages | S | 🔴 Critical |
| 4 | Link /services → detail pages; add detail pages to sitemap | S | 🟠 High |
| 5 | Add inquiry CTA to Projects & Technology | S | 🟠 High |
| 6 | Unify service taxonomy (home/services/footer) | M | 🟠 High |
| 7 | AA contrast (darken muted text) + focus + reduced-motion | M | 🟠 High |
| 8 | Add testimonials + 2–3 case studies + trust bar | L | 🟠 High |
| 9 | `next/image` for hero/portfolio; fix Connectify link; correct icons | M | 🟡 Med |
| 10 | De-duplicate Contact/Inquiry; pick canonical | S | 🟡 Med |
| 11 | JSON-LD + OG images + canonicals | M | 🟡 Med |
| 12 | Remove perpetual animations; speed up reveals | S | 🟡 Med |
| 13 | Prune unused deps / adopt as mega-menu+modals | S | ⚪ Low |

---

*End of blueprint.*
