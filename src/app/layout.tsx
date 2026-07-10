import type { Metadata, Viewport } from "next";
import "./globals.css";

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
  applicationName: "Shrivar Singh",
  title: "Shrivar Singh | Quantitative Founder-Builder",
  description:
    "Shrivar Singh builds quantitative systems across statistics, AI, analytics, finance, and decision intelligence — from rigorous research to useful prototypes and products.",
  authors: [{ name: "Shrivar Singh" }],
  creator: "Shrivar Singh",
  keywords: [
    "Shrivar Singh",
    "quantitative systems",
    "decision intelligence",
    "applied AI",
    "statistics",
    "customer analytics",
    "quantitative finance"
  ],
  openGraph: {
    title: "Shrivar Singh | Quantitative Founder-Builder",
    description:
      "Quantitative systems that turn noisy data and uncertainty into better decisions.",
    siteName: "Shrivar Singh",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrivar Singh | Quantitative Founder-Builder",
    description:
      "Quantitative systems that turn noisy data and uncertainty into better decisions."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#020711",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
