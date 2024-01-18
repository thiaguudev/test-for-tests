import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { fontSans } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { Provider } from "@/components/Providers";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
        <main className="w-full mx-auto min-h-screen flex justify-between items-center antialiased">
          <Provider>
            <Sidebar />
            <div className="flex-1 px-4">{children}</div>
          </Provider>
          <Toaster />
        </main>
        <Analytics />
        <Script
          id="crisp"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="e8e6b6f4-7b42-4ef5-a1a8-79ecab73e03f";
              (function() {
                d = document;
                s = d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
        <Script
          id="hotjar"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3831247,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </body>
    </html>
  );
}
