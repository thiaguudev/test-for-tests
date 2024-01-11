import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { fontSans } from "@/config/fonts";
import Header from "@/components/Header";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Survey Apoli",
  description: "Survey with a simple click!",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={cn("bg-[#f9fafb]", fontSans.className)}>
        <main className="w-full max-w-6xl mx-auto min-h-screen flex flex-col justify-between items-center">
          <Header />
          {children}
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}
