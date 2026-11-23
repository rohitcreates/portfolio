import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const siteUrl = "https://portfolio-silk-xi-44.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rohit Singh | Full-Stack JavaScript Developer",
    template: "%s | Rohit Singh",
  },
  description:
    "Rohit Singh is a computer science student and full-stack JavaScript developer building web applications with React, Next.js, TypeScript, Node.js, and databases.",
  keywords: [
    "Rohit Singh",
    "Full-Stack JavaScript Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Rohit Singh" }],
  creator: "Rohit Singh",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rohit Singh | Full-Stack JavaScript Developer",
    description:
      "Selected projects and engineering work by Rohit Singh, building with React, Next.js, TypeScript, and Node.js.",
    url: siteUrl,
    siteName: "Rohit Singh Portfolio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Singh | Full-Stack JavaScript Developer",
    description:
      "Selected projects and engineering work by Rohit Singh.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}