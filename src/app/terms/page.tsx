import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Techvion website and our working relationship.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="May 2026"
      intro={`These terms govern your use of the ${site.legalName} (“Techvion”) website. Specific engagements are governed by a separate, signed agreement that takes precedence over anything here.`}
      sections={[
        {
          heading: "Using this website",
          body: [
            "This site is provided for general information about our services. While we keep it accurate and up to date, it is offered “as is” without warranties of any kind.",
          ],
        },
        {
          heading: "Engagements & ownership",
          body: [
            "Any project we undertake is defined by a separate written agreement covering scope, timeline, price and deliverables.",
            "Upon full payment, you own the deliverables and source code we produce for you. We retain the right to reference the work in our portfolio unless we agree otherwise in writing.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The Techvion name, logo, site design and content are our property. You may not reproduce them without permission. Third-party trademarks shown in our work belong to their respective owners.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the fullest extent permitted by law, Techvion is not liable for any indirect or consequential loss arising from use of this website. Liability for paid engagements is governed by the relevant signed agreement.",
          ],
        },
        {
          heading: "Governing law",
          body: ["These terms are governed by the laws of Nepal, where Techvion is based."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms? Email us at ${site.email}.`],
        },
      ]}
    />
  );
}
