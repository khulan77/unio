import { ImageResponse } from "next/og";
export const alt = "UNIO — Your business. One system.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f7f7f2",
        padding: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#20231f",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          fontSize: 90,
          fontWeight: 700,
        }}
      >
        unio<span style={{ color: "#2855ed" }}>•</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          letterSpacing: "-4px",
        }}
      >
        <span>Your business.</span>
        <span style={{ color: "#2855ed" }}>One system.</span>
      </div>
      <div
        style={{
          fontSize: 22,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>WEBSITES · BOOKING · BUSINESS SOFTWARE</span>
        <span>ULAANBAATAR, MONGOLIA</span>
      </div>
    </div>,
    size,
  );
}
