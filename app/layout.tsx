import type { Metadata } from "next";
import { Public_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency Homepage",
  description: "Weboin Intern task using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} ${interTight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
