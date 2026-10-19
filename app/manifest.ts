import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UNIO — Software Studio",
    short_name: "UNIO",
    description: "Таны бизнес. Нэг систем.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7f5",
    theme_color: "#1c3026",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
