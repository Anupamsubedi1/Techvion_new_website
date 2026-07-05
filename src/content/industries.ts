export type IndustrySolution = {
  name: string;
  description: string;
  features: string[];
};

/**
 * Ready-to-launch, fully customizable SaaS platforms grouped by industry.
 * Surfaced on the Custom Software service page.
 */
export const industrySolutions: IndustrySolution[] = [
  {
    name: "Salons & Beauty",
    description:
      "Premium booking systems with service galleries, staff scheduling, and customer loyalty programs.",
    features: [
      "Online booking & appointment system",
      "Service gallery with pricing",
      "Staff management",
      "Customer review system",
      "Loyalty rewards program",
      "Before/after gallery",
    ],
  },
  {
    name: "Fitness & Gyms",
    description:
      "Complete membership management with billing automation, class scheduling, and trainer portals.",
    features: [
      "Member management system",
      "Automated billing & subscriptions",
      "Class scheduling & tracking",
      "Trainer profiles & availability",
      "Workout tracking portal",
      "Payment processing",
    ],
  },
  {
    name: "Healthcare & Services",
    description:
      "HIPAA-compliant patient portals with appointment scheduling and secure communication.",
    features: [
      "HIPAA-compliant system",
      "Patient portal & records",
      "Appointment scheduling",
      "Secure messaging",
      "Care plan tracking",
      "Insurance integration",
    ],
  },
  {
    name: "Retail & Liquor Stores",
    description:
      "Inventory management, promotions showcase, and online ordering with POS integration.",
    features: [
      "Product catalog & inventory",
      "Promotional campaigns",
      "Online ordering system",
      "POS integration",
      "Customer loyalty tracking",
      "Sales analytics dashboard",
    ],
  },
  {
    name: "Restaurants & Cafes",
    description:
      "Online menus, table reservations, delivery ordering, and customer engagement tools.",
    features: [
      "Digital menu management",
      "Table reservation system",
      "Online ordering & delivery",
      "Special promotions display",
      "Customer reviews & ratings",
      "Email marketing integration",
    ],
  },
  {
    name: "E-commerce & Retail",
    description:
      "Complete online store solutions with product management, shopping cart, and payment processing.",
    features: [
      "Product catalog & variants",
      "Shopping cart system",
      "Payment gateway integration",
      "Order tracking & management",
      "Customer reviews system",
    ],
  },
];
