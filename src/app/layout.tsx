import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "POZ Consulting — Architecte de solutions IA et No-Code",
  description:
    "POZ Consulting : il est temps de poser de solides fondations sur la productivité de votre entreprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="min-h-full bg-page-bg text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
