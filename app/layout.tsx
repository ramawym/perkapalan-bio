import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-manrope",
  weight: ['400', '700', '800'] 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ['400', '500', '600'] 
});

export const metadata: Metadata = {
  title: "Perkapalan-Bio Archive",
  description: "Centralized research repository for marine ecosystems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${manrope.variable} ${inter.variable} font-body bg-surface text-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}