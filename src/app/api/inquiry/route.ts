import { NextResponse } from "next/server";
import { inquirySchema, type InquiryValues } from "@/lib/inquiry-schema";

/**
 * Inquiry endpoint.
 * - Validates server-side with the shared Zod schema.
 * - Emails the team via Resend's REST API when RESEND_API_KEY + INQUIRY_TO_EMAIL are set
 *   (no extra dependency; uses fetch).
 * - Without those env vars it still accepts the submission (logged) so the form works in
 *   any environment; WhatsApp remains the instant, always-on channel.
 *
 * Required env for live email delivery:
 *   RESEND_API_KEY       https://resend.com API key
 *   INQUIRY_TO_EMAIL     where inquiries should land
 *   INQUIRY_FROM_EMAIL   verified sender (optional; defaults to Resend onboarding sender)
 */
export const runtime = "nodejs";

function renderText(d: InquiryValues) {
  return [
    "New project inquiry via techvion.com",
    "",
    `Name:        ${d.fullName}`,
    `Email:       ${d.email}`,
    `Company:     ${d.company || "Not provided"}`,
    `Phone:       ${d.phone || "Not provided"}`,
    `Project:     ${d.projectType}`,
    `Budget:      ${d.budget || "Not provided"}`,
    `Timeline:    ${d.timeline || "Not provided"}`,
    "",
    "Details:",
    d.description,
  ].join("\n");
}

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }
  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL ?? "Techvion <onboarding@resend.dev>";

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: data.email,
          subject: `New inquiry from ${data.fullName}`,
          text: renderText(data),
        }),
      });
      if (!res.ok) {
        console.error("[inquiry] Resend error:", await res.text());
        return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("[inquiry] Email exception:", err);
      return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
    }
  } else {
    console.warn(
      `[inquiry] RESEND_API_KEY/INQUIRY_TO_EMAIL not configured; inquiry accepted but not emailed (from ${data.email}).`,
    );
  }

  return NextResponse.json({ ok: true });
}
