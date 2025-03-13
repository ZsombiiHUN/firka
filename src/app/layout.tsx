import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "firka.hu - Alternative e-KRÉTA client",
  description: "Alternative e-KRÉTA client, by students for students.",
  keywords: ["e-KRÉTA", "student", "education", "app", "refilc", "firka"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`lenis-smooth ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
