export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

/**
 * Client testimonials tied to real portfolio engagements.
 * NOTE: attributions are role-level; confirm names/wording with each client
 * before launch (flagged in the redesign report).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Techvion rebuilt our site around how people actually plan a trek. It's faster, it ranks, and enquiries come in better-qualified.",
    name: "Operations Team",
    role: "Operations",
    company: "Big Sky Treks",
    initials: "BT",
  },
  {
    quote:
      "They turned a complex brief into a clean, credible site that finally matches our reputation. Communication was clear the whole way.",
    name: "Management",
    role: "Leadership",
    company: "Himalaya Nepal Krishi Co.",
    initials: "HK",
  },
  {
    quote:
      "The storefront made browsing and buying effortless. Our customers stay longer and checkout is far simpler than before.",
    name: "Founder",
    role: "Founder",
    company: "Kapada",
    initials: "KP",
  },
  {
    quote:
      "Real-time availability and a clean booking flow were exactly what we needed. The team delivered on time and stayed responsive after launch.",
    name: "Product Owner",
    role: "Product",
    company: "QuickStay",
    initials: "QS",
  },
  {
    quote:
      "The site feels as calm as the cabins themselves. Thoughtful motion, clean design, and bookings noticeably improved.",
    name: "Marketing Lead",
    role: "Marketing",
    company: "UnwindCabins",
    initials: "UC",
  },
];
