import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrivar Singh | Strategic Problem-Solver",
  description:
    "A premium digital-tree personal website for Shrivar Singh: thinker, builder, analyst, and strategist across statistics, AI, finance, research, and useful systems.",
  openGraph: {
    title: "Shrivar Singh | Strategic Problem-Solver",
    description: "Clear thinking. Useful systems. Better decisions.",
    type: "website"
  }
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
