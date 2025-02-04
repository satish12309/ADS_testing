"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import styles from "./NavbarHome.module.css";
const Popup = dynamic(() => import("../../global/popup/Popup"), { ssr: false });
const Form = dynamic(() => import("../../global/form/Form"), { ssr: false });
import Button from "../../global/button/Button";

const NavbarHome = ({ isThankYou, isDSA, DSAdownloadBrochure, platform }) => {
  const [Popups, setPopup] = useState(false);

  const popupShow = useCallback(() => {
    setPopup(true);
  }, []);
  return (
    <nav
      className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}
    >
      <Popup trigger={Popups} setTrigger={setPopup} className="popupModal">
        <div className="RightPopup">
          <h5>{isDSA ? "Book Demo Session" : "Apply For Counselling"}</h5>
          <Form
            popup={true}
            setTrigger={setPopup}
            DSAdownloadBrochure={isDSA ? DSAdownloadBrochure : ""}
            platform={platform}
          />
        </div>
      </Popup>

      <div className={`${styles.left} flexBox flexAlignCenter`}>
        <div className={styles.logoWrapper}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
            alt="Learnbay"
            quality={100}
            priority
            className={styles.logo}
            fill
          />
        </div>
        {isThankYou ? (
          ""
        ) : (
          <div onClick={popupShow}>
            <Button
              text={isDSA ? "Book Demo" : "Apply Now"}
              newBlueButton={true}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default React.memo(NavbarHome);
