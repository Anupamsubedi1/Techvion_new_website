export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Travel" | "Hospitality" | "E-commerce" | "Web App" | "Corporate";
  year: string;
  summary: string;
  live: string | null;
  image: string;
  stack: string[];
  challenge: string;
  solution: string;
  approach: { title: string; desc: string }[];
  outcomes: string[];
  testimonial?: { quote: string; name: string; role: string };
};

export type MobileProject = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  screenshots: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "big-sky-treks",
    title: "Big Sky Treks",
    client: "Big Sky Treks",
    category: "Travel",
    year: "2024",
    summary:
      "An adventure-travel platform with curated routes, itinerary management and conversion-focused trip discovery.",
    live: "https://bigskytreks.com/trekking",
    image: "/bigskytreks_website.jpg",
    stack: ["Next.js", "Tailwind CSS", "SEO", "Vercel"],
    challenge:
      "A growing trekking operator needed to turn a static brochure site into a discovery engine, because visitors couldn't compare routes or move confidently toward booking.",
    solution:
      "We rebuilt the experience around curated routes and clear trip-discovery paths, with fast page loads and SEO foundations that surface treks in search.",
    approach: [
      { title: "Information architecture", desc: "Reorganised treks into scannable, comparable routes with clear difficulty and duration." },
      { title: "Performance & SEO", desc: "Server-rendered pages, optimized imagery and structured metadata for discoverability." },
      { title: "Conversion paths", desc: "Guided the visitor from inspiration to enquiry with focused calls-to-action." },
    ],
    outcomes: ["Clearer trip discovery and engagement", "Faster, search-friendly pages", "A foundation built to scale with new routes"],
    testimonial: {
      quote: "The new site finally reflects the quality of our trips; visitors find the right trek and reach out with confidence.",
      name: "Operations Team",
      role: "Big Sky Treks",
    },
  },
  {
    slug: "himalaya-krishi",
    title: "Himalaya Nepal Krishi Co.",
    client: "Himalaya Nepal Krishi Co. Ltd",
    category: "Corporate",
    year: "2024",
    summary:
      "A clean, credible corporate and storytelling site for a modern integrated agro company.",
    live: "https://www.himalayaagronepal.com",
    image: "/himalaya_agro_website.png",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    challenge:
      "An established agriculture business lacked a professional digital presence that matched its reputation and ambitions.",
    solution:
      "We designed a modern corporate site with clear brand storytelling, a clean layout and a structure ready to grow into commerce.",
    approach: [
      { title: "Brand storytelling", desc: "Translated the company's mission into a confident, modern narrative." },
      { title: "Clean, modern UX", desc: "A clear layout that builds trust with partners and buyers." },
      { title: "Scalable foundation", desc: "Architecture ready to extend toward a multivendor marketplace." },
    ],
    outcomes: ["A professional digital presence established", "Clear brand narrative for partners", "Room to grow into e-commerce"],
  },
  {
    slug: "kapada",
    title: "Kapada",
    client: "Kapada",
    category: "E-commerce",
    year: "2024",
    summary: "An e-commerce platform for a clothing brand with a modern product catalogue.",
    live: "https://kapada-frontend.vercel.app/",
    image: "/kapada_website.jpg",
    stack: ["React", "Node.js", "MongoDB"],
    challenge:
      "A clothing brand needed an online store that made browsing and buying effortless across devices.",
    solution:
      "We built a modern catalogue and storefront focused on engagement and a simple path to purchase.",
    approach: [
      { title: "Product catalogue", desc: "A fast, filterable catalogue that makes the range easy to explore." },
      { title: "Engagement-first UX", desc: "Clean product pages designed to keep shoppers moving toward checkout." },
      { title: "Full-stack delivery", desc: "React front end with a Node.js and MongoDB backend." },
    ],
    outcomes: ["Simplified online shopping", "Higher customer engagement", "A storefront ready to scale the catalogue"],
  },
  {
    slug: "mardi-treks",
    title: "Mardi Treks",
    client: "Mardi Treks",
    category: "Travel",
    year: "2025",
    summary: "A fast, modern site for Mardi Himal treks with a seamless booking experience.",
    live: "https://marditreks.com/",
    image: "/mardi_treks_website.jpg",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    challenge: "A trekking brand needed a fast, modern site that made planning and booking the Mardi Himal trek effortless.",
    solution: "We delivered a performant Next.js site with seamless booking UX and quick load times on mobile networks.",
    approach: [
      { title: "Performance", desc: "Optimized for fast loads on the mobile connections trekkers actually use." },
      { title: "Booking UX", desc: "A seamless flow from trek details to enquiry and booking." },
      { title: "Modern design", desc: "A clean, confident look that reflects the experience on the trail." },
    ],
    outcomes: ["Faster load times", "Smoother booking experience", "A modern, trustworthy brand presence"],
  },
  {
    slug: "quickstay",
    title: "QuickStay Hotel Booking",
    client: "QuickStay",
    category: "Web App",
    year: "2024",
    summary: "A hotel-booking platform with real-time availability and a responsive reservation flow.",
    live: null,
    image: "/quick_stay_website.jpg",
    stack: ["React", "Node.js", "MongoDB"],
    challenge: "Travellers needed a fast way to check availability and reserve rooms without a clunky, multi-step process.",
    solution: "We built a booking platform with real-time availability, seamless reservations and a fully responsive design.",
    approach: [
      { title: "Real-time availability", desc: "Live room availability so guests always see accurate options." },
      { title: "Streamlined reservations", desc: "A reservation flow stripped of unnecessary friction." },
      { title: "Responsive by default", desc: "A consistent experience from desktop to phone." },
    ],
    outcomes: ["Streamlined booking experience", "Accurate, real-time availability", "Strong mobile usability"],
  },
  {
    slug: "unwind-cabins",
    title: "UnwindCabins",
    client: "UnwindCabins",
    category: "Hospitality",
    year: "2024",
    summary: "A modern cabin-booking site with a relaxing, animation-led experience.",
    live: null,
    image: "/unwinde_cambin_website.jpg",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    challenge: "A cabin-rental brand wanted a site whose feel matched the calm of the getaway itself.",
    solution: "We crafted a relaxing, motion-led experience with clean design and smooth, purposeful animations that guide booking.",
    approach: [
      { title: "Atmosphere through motion", desc: "Subtle, performance-friendly animation that sets a calm tone." },
      { title: "Clean visual design", desc: "Generous space and imagery that sell the experience." },
      { title: "Booking conversion", desc: "Clear paths from browsing to reserving a stay." },
    ],
    outcomes: ["Improved user engagement", "Higher booking conversions", "A distinctive, on-brand feel"],
  },
  {
    slug: "connectify",
    title: "Connectify Chat App",
    client: "Connectify",
    category: "Web App",
    year: "2024",
    summary: "A real-time chat application with instant messaging and a polished UI.",
    live: null,
    image: "/connectify.jpeg",
    stack: ["React", "Socket.io", "Node.js"],
    challenge: "Users needed reliable, instant communication with a clean, modern interface.",
    solution: "We built a real-time chat app with instant messaging, authentication and a refined chat experience.",
    approach: [
      { title: "Real-time messaging", desc: "Socket.io-powered instant delivery with reliable connection handling." },
      { title: "Secure auth", desc: "User authentication to keep conversations private." },
      { title: "Polished chat UI", desc: "A clean, responsive interface that feels effortless." },
    ],
    outcomes: ["Smooth real-time communication", "Reliable message delivery", "A polished, modern chat experience"],
  },
];

export const mobileProjects: MobileProject[] = [
  {
    title: "HamroBike",
    category: "Marketplace",
    description: "A specialised Nepali two-wheeler marketplace with real-time chat and location-aware discovery.",
    stack: ["Flutter", "Firebase", "Clean Architecture"],
    screenshots: ["/mobile-app-one/image.png", "/mobile-app-one/image1.png"],
  },
  {
    title: "Weather App",
    category: "Utility",
    description: "A real-time weather experience built for smooth performance and a clean, modern UI.",
    stack: ["Flutter", "Riverpod", "Clean Architecture"],
    screenshots: ["/mobile-app-two/image.png", "/mobile-app-two/image-1.png", "/mobile-app-two/image-2.png"],
  },
  {
    title: "VPN App UI",
    category: "Product UI",
    description: "A minimal, intuitive VPN interface focused on clarity, speed and premium usability.",
    stack: ["Flutter", "Responsive UI", "Modern UX"],
    screenshots: ["/mobile-app-three/image.png", "/mobile-app-three/image-1.png"],
  },
  {
    title: "Video Player App",
    category: "Media",
    description: "A feature-rich local video player with customizable controls and multitasking playback.",
    stack: ["Flutter", "PiP", "Local Media"],
    screenshots: ["/mobile-app-four/image.png", "/mobile-app-four/image-1.png"],
  },
];

export const projectCategories = ["All", "Travel", "Hospitality", "E-commerce", "Web App", "Corporate"] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
