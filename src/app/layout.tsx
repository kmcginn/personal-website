import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello!",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
