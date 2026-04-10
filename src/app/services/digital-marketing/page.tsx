import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO | Techvion",
  description: "Data-driven strategies that grow traffic, leads, and revenue.",
};

const data = {
  title: "Digital Marketing & SEO",
  subtitle: "Growth-Driven Marketing",
  description:
    "We implement data-driven digital marketing strategies that drive measurable growth. From search engine optimization and paid advertising to social media management and content marketing, our campaigns are designed to increase your visibility, generate qualified leads, and maximize ROI.",
  features: [
    {
      title: "SEO & SEM",
      desc: "Technical SEO audits, keyword research, on-page optimization, and paid search campaigns that rank and convert.",
    },
    {
      title: "Paid Social Advertising",
      desc: "Targeted campaigns across Facebook, Instagram, LinkedIn, and TikTok to reach your ideal audience.",
    },
    {
      title: "Content Marketing",
      desc: "Strategic content creation — blogs, whitepapers, case studies — that builds authority and drives organic traffic.",
    },
    {
      title: "Email Marketing",
      desc: "Automated nurture sequences, newsletters, and transactional emails that engage and convert.",
    },
    {
      title: "Analytics & Reporting",
      desc: "Comprehensive dashboards tracking impressions, clicks, conversions, and revenue attribution.",
    },
    {
      title: "Conversion Rate Optimization",
      desc: "A/B testing, heatmap analysis, and UX improvements to turn more visitors into customers.",
    },
  ],
  stats: [
    { label: "Organic Traffic Growth", value: "200%" },
    { label: "Avg ROAS", value: "4.5x" },
    { label: "Leads Generated", value: "10K+" },
  ],
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
