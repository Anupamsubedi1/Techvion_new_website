import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";

export const metadata: Metadata = {
  title: "Web & E-commerce Development | Techvion",
  description: "Fast, conversion-focused web experiences and modern online stores.",
};

const data = {
  title: "Web & E-commerce Solutions",
  subtitle: "Online Stores That Convert",
  description:
    "We design and develop conversion-focused e-commerce experiences with modern UX, seamless checkout flows, and robust backend integrations. Whether you need a headless storefront or a full-featured marketplace, we deliver storefronts that drive sales.",
  features: [
    {
      title: "Headless Commerce",
      desc: "Decouple your frontend from the backend for maximum flexibility, speed, and omnichannel reach.",
    },
    {
      title: "Checkout Optimization",
      desc: "Streamlined purchase flows with minimal friction — reducing cart abandonment and increasing conversions.",
    },
    {
      title: "Analytics & Insights",
      desc: "Deep e-commerce analytics integration to track user behavior, revenue funnels, and marketing ROI.",
    },
    {
      title: "Payment Gateway Integration",
      desc: "Stripe, PayPal, Razorpay, and more — secure, PCI-compliant payment processing out of the box.",
    },
    {
      title: "Inventory & Order Management",
      desc: "Real-time stock tracking, automated order workflows, and fulfillment integrations.",
    },
    {
      title: "Mobile-First Design",
      desc: "Responsive storefronts optimized for mobile shoppers who make up 70%+ of e-commerce traffic.",
    },
  ],
  stats: [
    { label: "Stores Launched", value: "30+" },
    { label: "Avg Conversion Lift", value: "40%" },
    { label: "Revenue Generated", value: "$2M+" },
  ],
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
