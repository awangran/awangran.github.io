import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashlee Yin | Web Developer & UI/UX Designer",
  description: "Portfolio of Ashlee Yin, a engineering student specializing in React, Next.js, and high-performance web experiences. View my latest projects and get in touch.",

  openGraph: {
    title: "Ashlee Yin | Web Developer & UI/UX Designer",
    description: "Portfolio of Ashlee Yin, a engineering student specializing in React, Next.js, and high-performance web experiences. View my latest projects and get in touch.",
    url: "https://ashleeyin.com",
    siteName: "Ashlee Yin Portfolio",
    images: [
      {
        url: "https://ashleeyin.com/preview.png", 
        width: 1200,
        height: 630,
        alt: "Ashlee Yin Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashlee Yin | Frontend Developer",
    description: "Building high-performance web applications with Next.js.",
    images: ["https://ashleeyin.com/preview.png"], 
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
        <SpeedInsights />
      </body>
    </html>
  );
}
