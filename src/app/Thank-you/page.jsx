"use client";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./ThankYou.module.css";

import FooterThankYou from "../components/global/FooterThankYou/FooterThankYou";
import CourseThankYou from "../components/global/CourseThankYou/CourseThankYou";
// import cookies from "next-cookies";
import NavbarHome from "../components/home/navbar/NavbarHome";

// const setCookie = (name, value, days, domain) => {
//   const expires = new Date();
//   expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
//   document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=${domain}`;
// };

const ThankYou = ({ initialName, initialPhone }) => {
  const email = JSON.stringify(initialName);
  const phone = JSON.stringify(initialPhone); // Log the email to the console

  // useEffect(() => {
  //   Set the cookie with a domain that allows cross-origin access
  //   setCookie("yourCookieName", initialName, 30, ".learnbay.co");
  //   setCookie("yourCookieName", initialPhone, 30, ".learnbay.co");
  // }, [initialName, initialPhone]);

  return (
    <>
      <div className={styles.main}>
        <Head>
          <title>Thank you!</title>
          <meta name="description" content="Thank you!" />
          <link
            rel="icon"
            href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  'event': 'form_complete',
                  'enhanced_conversion_data': {
                    "email": ${email},
                    "phone": ${phone},
                  }
                });
              `,
            }}
          />
        </Head>
        <NavbarHome isThankYou={true} />

        <section className={styles.mains}>
          <div className={styles.Back}>
            <h4 className={styles.thankh4}>
              Thank you!
              <br />
              <span className={styles.thankspan}>
                We Received your request and look forward to getting in touch
                soon.
              </span>
            </h4>
            <div className={styles.imgdiv}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/thank-header.png"
                width="522"
                height="380"
                priority
                quality={60}
              />
            </div>
          </div>
          <CourseThankYou />
        </section>
        <FooterThankYou />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
            var s = document.createElement("script");
            s.async = true;
            s.type = 'text/javascript';
            s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
            s.onload = function () {
              window.loadChat360Bot(botId);
            };
            s.onerror = function (err) {
              console.error(err);
            };
            document.body.appendChild(s);
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
        `,
        }}
      />
    </>
  );
};

// ThankYou.getInitialProps = async (ctx) => {
//   return {
//     initialName: cookies(ctx).CARD || "",
//     initialPhone: cookies(ctx).CARDPHONE || "",
//   };
// };

export default ThankYou;
