import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Intervals — Proactive Safety Technology",
  description:
    "Live Intervals automates location sharing at intervals you control. If something goes wrong, your trusted contacts know exactly where to find you — even when you're offline.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
