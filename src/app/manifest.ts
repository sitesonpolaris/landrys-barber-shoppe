import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Landry’s Barber Shoppe",
    short_name: "Landry’s",
    start_url: "/",
    display: "browser",
    theme_color: "#0d1611",
    background_color: "#0d1611",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
