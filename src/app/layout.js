"use client";
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["system-ui"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="dborjxjhu9kiklk06c38hf5v5raay4"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="facebook-domain-verification"
          content="xzlsit1skwzpjhylrt0y96nn3nbksu"
        />
        <Script
          strategy="lazyOnload"
          src="https://web-in21.mxradon.com/t/Tracker.js"
        ></Script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `pidTracker('57020');`,
          }}
        />
      </head>
      <body className={nunito.className}>
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
