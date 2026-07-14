import type { Metadata, Viewport } from "next";
import "./globals.css";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: new URL(deploymentHost ? "https://" + deploymentHost : "http://localhost:3000"),
  applicationName: "Shrivar Singh",
  title: "Shrivar Singh — Statistics, AI and better decisions",
  description:
    "Shrivar Singh works on statistical, AI and quantitative systems for difficult decisions under uncertainty. Explore current projects, research and what he is building next.",
  authors: [{ name: "Shrivar Singh" }],
  creator: "Shrivar Singh",
  keywords: ["Shrivar Singh", "statistics", "AI", "decision intelligence", "uncertainty", "nested sampling", "Twi VITS", "customer analytics"],
  openGraph: {
    title: "Shrivar Singh — Statistics, AI and better decisions",
    description: "Questions, models and systems for decisions under uncertainty.",
    siteName: "Shrivar Singh",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrivar Singh — Statistics, AI and better decisions",
    description: "Questions, models and systems for decisions under uncertainty."
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#03080e",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
