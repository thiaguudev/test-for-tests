import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "@/components/Providers";
import "./globals.css";

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
        <main className="w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-between items-center antialiased">
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
