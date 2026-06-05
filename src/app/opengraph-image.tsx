import { ImageResponse } from "next/og";

export const alt = "Techvion: Design, Build & Scale Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(21,151,168,0.32), rgba(5,31,39,0) 60%), linear-gradient(180deg, #051f27 0%, #082e39 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#0a3a47",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={{ width: "26px", height: "4px", background: "#fff", borderRadius: "4px" }} />
          </div>
          <div style={{ fontSize: "34px", fontWeight: 600, letterSpacing: "-0.02em" }}>Techvion</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            We design, build &amp; scale software teams rely on.
          </div>
          <div style={{ marginTop: "28px", fontSize: "30px", color: "rgba(255,255,255,0.6)" }}>
            Product studio · Web · Mobile · E-commerce
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "26px", color: "rgba(255,255,255,0.7)" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "9999px", background: "#38cadd" }} />
          www.techvion.com
        </div>
      </div>
    ),
    size,
  );
}
