import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "UNIO — Таны бизнес. Нэг систем. Вэбсайт, цаг захиалга, бизнесийн систем.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [logo, font] = await Promise.all([
    readFile(join(process.cwd(), "public/projects/unio.png")),
    readFile(join(process.cwd(), "public/fonts/manrope-bold.ttf")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f7f5",
        padding: "56px 70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Manrope",
        fontWeight: 700,
        color: "#1c3026",
      }}
    >
      <div style={{ display: "flex", position: "relative", width: 330, height: 112, overflow: "hidden" }}>
        {/* Frame the original logo, matching the website header. */}
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          alt="UNIO"
          width={418}
          height={412}
          style={{ position: "absolute", left: -42, top: -156 }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 76, letterSpacing: "-3px", lineHeight: 1.2 }}>
        <span>Таны бизнес.</span>
        <span style={{ color: "#647d69" }}>Нэг систем.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18, borderTop: "2px solid #d6dfd7", paddingTop: 24 }}>
        <span style={{ fontSize: 27 }}>Вэбсайт · Цаг захиалга · Бизнесийн систем</span>
        <span style={{ fontSize: 18, color: "#647d69" }}>UNIO / ХАМТДАА БҮТЭЭЕ</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Manrope", data: font, weight: 700, style: "normal" }],
    },
  );
}
