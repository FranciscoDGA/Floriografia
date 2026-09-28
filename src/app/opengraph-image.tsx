import { ImageResponse } from "next/og";

import { absoluteUrl } from "@/lib/site";

export const alt = "Floriografia — a linguagem das flores";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function heroDataUrl(): Promise<string | null> {
  try {
    const response = await fetch(absoluteUrl("/images/hero.jpg"));
    if (!response.ok) return null;
    const bytes = Buffer.from(await response.arrayBuffer()).toString("base64");
    return `data:image/jpeg;base64,${bytes}`;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const hero = await heroDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: "#fbf8f2",
          color: "#14432f",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 999,
                background: "#b8486a",
                display: "flex",
              }}
            />
            <div style={{ fontSize: 40, letterSpacing: 6, textTransform: "uppercase", color: "#4c5a51" }}>
              Floriografia
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 88,
                lineHeight: 1.05,
                fontWeight: 700,
              }}
            >
              <span>A linguagem</span>
              <span>das flores</span>
            </div>
            <div style={{ fontSize: 32, lineHeight: 1.35, color: "#4c5a51", maxWidth: 620 }}>
              O amor à moda antiga: gestos, flores e significados para dizer o que você sente.
            </div>
          </div>

          <div style={{ display: "flex", fontSize: 26, color: "#4c5a51" }}>floriografia</div>
        </div>

        {hero ? (
          <div style={{ width: 500, height: "100%", display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse do next/og não aceita next/image */}
            <img src={hero} width={500} height={630} style={{ objectFit: "cover" }} alt="" />
          </div>
        ) : (
          <div style={{ width: 500, height: "100%", background: "#14432f", display: "flex" }} />
        )}
      </div>
    ),
    { ...size },
  );
}
