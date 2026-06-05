import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Techvion collects, uses and protects the information you share with us.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="May 2026"
      intro={`This policy explains what information ${site.legalName} (“Techvion”, “we”, “us”) collects when you use our website or contact us, and how we use and protect it.`}
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you submit our inquiry form or contact us, we collect the details you provide: typically your name, email, company, phone number, project type, budget, timeline and project description.",
            "We may collect basic, anonymised analytics about how visitors use the site (such as pages viewed) to improve it. We do not use this to identify you personally.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use the information you share solely to respond to your inquiry, scope and deliver work you ask us to do, and communicate with you about your project.",
            "If you contact us via WhatsApp, your message is handled within WhatsApp under their terms and privacy policy.",
          ],
        },
        {
          heading: "Sharing",
          body: [
            "We do not sell your information, and we never share it with third parties for marketing. We only share data with service providers strictly necessary to operate (for example, our email provider) and only to the extent required.",
          ],
        },
        {
          heading: "Retention",
          body: [
            "We keep inquiry information for as long as needed to respond and, where an engagement begins, for the duration of that relationship and a reasonable period afterward for our records.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            `You can ask us to access, correct or delete the information we hold about you at any time by emailing ${site.email}. We will respond promptly.`,
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about this policy? Email us at ${site.email}.`],
        },
      ]}
    />
  );
}
