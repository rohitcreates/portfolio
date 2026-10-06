import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Rohit Singh | Full-Stack Developer",
  description:
    "Portfolio of Rohit Singh, a computer science student and full-stack developer building modern web applications.",
  keywords: [
    "Rohit Singh",
    "Full-Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
  ],
  authors: [{ name: "Rohit Singh" }],
  creator: "Rohit Singh",
  openGraph: {
    title: "Rohit Singh | Full-Stack Developer",
    description:
      "Portfolio of Rohit Singh, a computer science student and full-stack developer.",
    type: "website",
    locale: "en_IN",
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