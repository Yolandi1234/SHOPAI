import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shopai.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SHOPAI | AI Shopping Search",
    template: "%s | SHOPAI",
  },
  description:
    "SHOPAI is a premium AI shopping search experience built to help shoppers discover the right products faster.",
  openGraph: {
    title: "SHOPAI | AI Shopping Search",
    description:
      "A futuristic shopping search homepage with AI-guided discovery, premium motion, and fast product results.",
    siteName: "SHOPAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHOPAI | AI Shopping Search",
    description:
      "Search shopping the future-forward way with SHOPAI's premium AI search interface.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
