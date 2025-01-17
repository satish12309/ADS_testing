"use client"
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
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
        <Script
          strategy="lazyOnload"
          src="https://www.googleoptimize.com/optimize.js?id=OPT-NQHBZ7H"
        ></Script>
        {/* <script
          type="text/javascript"
          src="https://web-in21.mxradon.com/t/Tracker.js"
        ></script> */}
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
        <link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
        {/* Start VWO Async SmartCode */}
        <Script id="vwoCode" strategy="beforeInteractive">
          {`window._vwo_code=window._vwo_code || (function() {
var account_id=711959,
version = 1.5,
settings_tolerance=2000,
library_tolerance=2500,
use_existing_jquery=false,
is_spa=1,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,vwoCodeEl=d.querySelector('#vwoCode'),code={use_existing_jquery:function(){return use_existing_jquery},library_tolerance:function(){return library_tolerance},hide_element_style:function(){return'{'+hide_element_style+'}'},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=d.createElement('script');t.fetchPriority='high';t.src=e;t.type='text/javascript';t.onerror=function(){window._vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(t)},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.match(e)||[]}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\s?(_vis_opt_exp_\d+_combi=[^;$]*)/gi);e=e.map(function(e){try{var t=decodeURIComponent(e);if(!/_vis_opt_exp_\d+_combi=(?:\d+,?)+\s*$/.test(t)){return''}return t}catch(e){return''}});var i=[];e.forEach(function(e){var t=e.match(/([\d,]+)/g);t&&i.push(t.join('-'))});return i.join('|')},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;w.settings_timer=setTimeout(function(){window._vwo_code.finish()},settings_tolerance);var e=d.currentScript,t=d.createElement('style'),i=e&&!e.async?hide_element?hide_element+'{'+hide_element_style+'}':'':code.lA=1,n=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');vwoCodeEl&&t.setAttribute('nonce',vwoCodeEl.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));n.appendChild(t);var o=this.getCombinationCookie();this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+ +is_spa+'&vn='+version+(o?'&c='+o:''));return settings_timer}};w._vwo_settings_timer = code.init();return code;}());
`}
        </Script>
        {/* End VWO Async SmartCode */}

        <Script
          strategy="lazyOnload"
          onError={(err) => {
            console.error("Error", err);
          }}
          onLoad={() => {
            // Function to perform after loading the script
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
      <GoogleTagManager gtmId="GTM-NN8XWH8" />
      <body className={nunito.className}>
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        {/* <script
          type="text/javascript"
          src="https://crmplus.zoho.in/crm/javascript/zcga.js"
        >
          {" "}
        </script> */}
        <Script
          strategy="lazyOnload"
          src="https://crmplus.zoho.in/crm/javascript/zcga.js"
        ></Script>
      </body>
    </html>
  );
}
