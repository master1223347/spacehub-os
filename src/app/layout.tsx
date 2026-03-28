import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SpaceHub | The MMO Operating System for Aerospace Engineering",
  description: "Where engineers build the future. Together. An AI-native, multiplayer platform for aerospace collaboration built in Rust.",
  openGraph: {
    title: "SpaceHub | The MMO Operating System for Aerospace Engineering",
    description: "Where engineers build the future. Together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-cosmos text-starlight antialiased">{children}</body>
    </html>
  );
}
