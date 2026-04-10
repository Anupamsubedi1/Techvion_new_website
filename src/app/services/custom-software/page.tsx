import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";

export const metadata: Metadata = {
  title: "Custom Software Development | Techvion",
  description: "High-performance, scalable web apps and bespoke software tailored to your business.",
};

const data = {
  title: "Custom Web Development & Software Solutions",
  subtitle: "Tailored Technology for Your Business",
  description:
    "We build high-performance, scalable web applications and bespoke software tailored to your exact business requirements. From complex SaaS platforms to internal tools, every solution is crafted with clean architecture, modern technologies, and a focus on maintainability.",
  features: [
    {
      title: "Next.js & TypeScript",
      desc: "Leveraging the latest frameworks for type-safe, server-rendered applications with exceptional performance.",
    },
    {
      title: "API & Integrations",
      desc: "Seamless connections with third-party services, payment gateways, CRMs, and custom APIs.",
    },
    {
      title: "Performance-First Architecture",
      desc: "Optimized for speed with lazy loading, code splitting, edge caching, and Core Web Vitals excellence.",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Cloud-native deployments on AWS, Vercel, or your preferred platform — built to grow with your business.",
    },
    {
      title: "Clean Codebase",
      desc: "Well-documented, maintainable code following industry best practices and design patterns.",
    },
    {
      title: "End-to-End Delivery",
      desc: "From discovery and design through development, testing, and deployment — we handle the full lifecycle.",
    },
  ],
  stats: [
    { label: "Projects Delivered", value: "50+" },
    { label: "Avg Performance Score", value: "95+" },
    { label: "Client Retention", value: "96%" },
  ],
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
