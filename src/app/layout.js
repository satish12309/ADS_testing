"use client"
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

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
      </head>
      <GoogleTagManager gtmId="GTM-NN8XWH8" />
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
