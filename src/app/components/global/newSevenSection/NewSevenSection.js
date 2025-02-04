"use client";

import dynamic from "next/dynamic";
import { memo, useState } from "react";
import styles from "./NewSevenSection.module.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

import Link from "next/link";
const PopupContent = dynamic(() => import("../popup/PopupContent"));

const NewSevenSection = ({
  platform
}) => {

  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  
  return (
    <div className="containerWidth">
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Apply For Counselling"
        platform={platform}
      />
      <div className={styles.NewSevenSection}>
        <div className={styles.griContiner}>
          <div className={styles.left}>
            <div className={styles.fontDiv}>
              <h4>Got more questions?</h4>
              <h3>Talk to our team directly</h3>
              <p>
                Contact us and our academic counsellor will get in touch with
                you shortly
              </p>
            </div>

            <div className={styles.buttonDiv}>
              <button className={styles.green} onClick={popupShow}>
                Enquire Now
              </button>
              <Link href="tel:+917795687988" className={styles.callLink}>
                <button className={styles.blue}>
                  <FaPhoneAlt /> 091-77956 87988
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.ryt}>
            <div className={styles.rytImgWrapper}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/seven_mblss.webp"
                fill
                alt="coun"
                loading="lazy"
                quality={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.NewSevenSectionM}>
        <div className={styles.griContiner}>
          <div className={styles.left}>
            <div className={styles.fontDiv}>
              <h4>Got more questions?</h4>
              <h3>Talk to our team directly</h3>
              <p>
                Contact us and our academic counsellor will get in touch with
                you shortly
              </p>
            </div>
          </div>

          <div className={styles.ryt}>
            <div className={styles.buttonDiv}>
              <button className={styles.green} onClick={popupShow}>
                Enquire Now
              </button>
              <Link href="tel:+917795687988" className={styles.callLink}>
                <button className={styles.blue}>
                  <FaPhoneAlt /> 091-77956 87988
                </button>
              </Link>
            </div>

            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/seven_mblss.webp"
              width={400}
              height={350}
              alt="coun"
              loading="lazy"
              quality={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NewSevenSection);
