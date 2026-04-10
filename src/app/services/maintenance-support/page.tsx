import type { Metadata } from "next";
import { ServiceDetailPage } from "../_components/service-detail-page";

export const metadata: Metadata = {
  title: "Maintenance & Support | Techvion",
  description: "Ongoing monitoring, security, and performance optimization for your digital products.",
};

const data = {
  title: "Maintenance & Support",
  subtitle: "Keep Your Product Running Smoothly",
  description:
    "We provide ongoing maintenance, monitoring, and support to ensure your digital products stay secure, performant, and up-to-date. From bug fixes and security patches to feature enhancements and performance tuning — we've got your back so you can focus on growing your business.",
  features: [
    {
      title: "24/7 Monitoring",
      desc: "Real-time uptime monitoring, error tracking, and alerting to catch issues before your users do.",
    },
    {
      title: "Security Updates",
      desc: "Regular dependency updates, vulnerability scanning, and security patch management.",
    },
    {
      title: "Performance Optimization",
      desc: "Continuous performance audits, database tuning, and caching strategies to keep things fast.",
    },
    {
      title: "Bug Fixes & Patches",
      desc: "Quick turnaround on bug reports with documented fixes and regression testing.",
    },
    {
      title: "Feature Enhancements",
      desc: "Iterative feature development to keep your product competitive and meeting user needs.",
    },
    {
      title: "Backup & Disaster Recovery",
      desc: "Automated backups, disaster recovery plans, and business continuity strategies.",
    },
  ],
  stats: [
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Avg Response Time", value: "<2hr" },
    { label: "Active Contracts", value: "20+" },
  ],
};

export default function Page() {
  return <ServiceDetailPage data={data} />;
}
