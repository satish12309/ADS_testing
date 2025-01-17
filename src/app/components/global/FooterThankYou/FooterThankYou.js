import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import styles from "./Footer.module.css";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import { BsFillTelephoneFill, BsTwitterX } from "react-icons/bs";

const FooterThankYou = () => {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/adlearnbay/white-logo.webp"
            alt="Learnbay"
            quality={100}
            width="230"
            height="100"
          />
          <p className={styles.FooterInnerli}>
            Enrol Now For Data Science Courses, System Designing Or Full Stack
            Development Courses. Master The Most Demanding Skills Of Job Market
            And Experience And Ever Growing And Lucrative Career Transformation.
          </p>
          <div className={styles.FooterSocial}>
            <BsTwitterX className="bIcons" />
            <FaFacebookF className="bIcons" />
            <FaLinkedinIn className="bIcons" />
            <FaYoutube className="bIcons" />
            <FaInstagram className="bIcons" />
          </div>
          <span style={{ display: "flex", marginTop: "20px" }}>
            <IoMailSharp className="bIcons" />
            <Link href="mailto:contacts@learnbay.co">contacts@learnbay.co</Link>
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            <Link href="tel:+916364939404">(+91) 6364 939404</Link>
          </span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Popular Courses</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Data Science & AI Certification
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Advance Data Science & AI Certification
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Data Structures & Algorithm And System Design
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Software Development Master Program
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Advance AI & ML Certification
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Data Science & AI Cert. For Managers & Leaders
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Data Science and AI Master Program
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Data Analytics & Business Analytics Program | Fast Track Course
          </p>
        </div>

        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Learnbay</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            About Us
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Contact Us
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Demo
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Blogs
          </p>
          <p className={styles.FooterInnerP}>Terms</p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Terms And Conditions
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Refund/Cancellation Policy
          </p>
          <p className={styles.FooterInnerli} style={{ display: "flex" }}>
            Privacy Policy
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Get Our Apps On</p>
          <button className={styles.btnout}>
            <FaAndroid className="bIcons" style={{ fontSize: "30px" }} />
            Get Our Android App
          </button>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <p className={styles.FooterInnerli}>
            #1090 , 1st floor, 18th cross road HSR layout sector 3, Bangalore -
            560102 (Above Sangam Sweets)
          </p>
        </div>
      </div>
      <div className={styles.FooterBottom}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2015 - 2024 Learnbay by Learnvista Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FooterThankYou);
