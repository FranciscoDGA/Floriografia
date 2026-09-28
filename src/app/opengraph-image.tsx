import { ImageResponse } from "next/og";

export const alt = "Floriografia — a linguagem das flores";
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
          padding: 80,
          background: "#fbf8f2",
          color: "#14432f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background: "#b8486a",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 42, letterSpacing: 6, textTransform: "uppercase", color: "#4c5a51" }}>
            Floriografia
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 96, lineHeight: 1.05, fontWeight: 700 }}>A linguagem das flores</div>
          <div style={{ fontSize: 34, lineHeight: 1.3, color: "#4c5a51", maxWidth: 900 }}>
            Significados, cores, aromas, ocasiões e cuidados para escolher bem cada flor.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#4c5a51" }}>floriografia</div>
      </div>
    ),
    { ...size },
  );
}
