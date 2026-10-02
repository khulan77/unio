import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UNIO — Software Studio",
    short_name: "UNIO",
    description: "Your business. One system.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f2",
    theme_color: "#2855ed",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
