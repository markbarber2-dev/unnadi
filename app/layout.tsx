import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unnadhi – Global Educational Advisory",
  description: "Expert educational guidance to help you achieve your academic dreams and unlock global opportunities. #dreamhighdreamunnadhi",
  themeColor: "#2563eb", // Blue-600
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Unnadhi – Global Educational Advisory",
    description: "Expert educational guidance to help you achieve your academic dreams and unlock global opportunities.",
    url: "https://unnadhi.vercel.app",
    siteName: "Unnadhi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unnadhi – Global Educational Advisory",
    description: "Expert educational guidance to help you achieve your academic dreams and unlock global opportunities.",
    creator: "@unnadhi",
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
      </body>
    </html>
  );
}
