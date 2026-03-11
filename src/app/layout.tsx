import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "NyxWorks Style Guide",
  description:
    "Design tokens, components, and patterns for the NyxWorks design system.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
