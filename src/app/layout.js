"use client";
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["system-ui"],
});

export default function RootLayout({ children }) {
  const [showGTM, setShowGTM] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Delay GTM by 3 seconds
    const timer = setTimeout(() => {
      setShowGTM(true);
    }, 3100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Push the pageview event to the GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        {/* facebook verification meta (pixel) */}
        <meta
          name="facebook-domain-verification"
          content="dborjxjhu9kiklk06c38hf5v5raay4"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="facebook-domain-verification"
          content="xzlsit1skwzpjhylrt0y96nn3nbksu"
        />

        {/* Font Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Tracker Script */}
        <Script
          strategy="lazyOnload"
          src="https://web-in21.mxradon.com/t/Tracker.js"
          onLoad={() => {
            if (window.pidTracker) window.pidTracker("57020");
          }}
        />
        {/* <Script
          strategy="lazyOnload"
          src="https://web-in21.mxradon.com/t/Tracker.js"
        ></Script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `pidTracker('57020');`,
          }}
        /> */}

        {/* googleoptimize script */}
        <Script
          strategy="lazyOnload"
          src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
        ></Script>

        {/* zoho crm script */}
        <Script
          strategy="afterInteractive"
          src="https://crmplus.zoho.in/crm/javascript/zcga.js"
        ></Script>

        {/* gtag script */}
        <Script
          strategy="lazyOnload"
          onError={(err) => {
            console.error("Error", err);
          }}
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "GTM-NN8XWH8", {
              page_path: window.location.pathname,
            });
          }}
        />

      </head>

      <body className={nunito.className}>
        <main>
          {children}
          {showGTM && <GoogleTagManager gtmId="GTM-NN8XWH8" />}

          <SpeedInsights />
          <Analytics />
        </main>
      </body>
    </html>
  );
}
