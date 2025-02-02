"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DSAPopup.module.css";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../global/popup/Popup"), { ssr: false });
const Form = dynamic(() => import("../../global/form/Form"), { ssr: false });

const DSAPopup = ({ message, onClose }) => {
  const [Popups, setPopup] = useState(false);

  const popupShow = useCallback(() => {
    setPopup(true);
  }, []);
  const leftPoints = [
    {
      id: 1,
      title: "Course Structure",
    },
    {
      id: 2,
      title: "Mentor guidance",
    },
    {
      id: 3,
      title: "Scholarship Opportunity",
    },
  ];
  return (
    <div className={styles.popupOverlay}>
      <Popup trigger={Popups} setTrigger={setPopup} className="popupModal">
        <div className="RightPopup">
          <h5>Book Demo Session</h5>
          <Form popup={true} setTrigger={setPopup} DSAdownloadBrochure={true} />
        </div>
      </Popup>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
      >
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <div className={styles.mainDiv}>
          <div className={styles.titleDiv}>
            <Image
              src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Hourglass.webp"
              quality={100}
              width={76}
              height={76}
            />
            <h3>Book Your Demo Class Now!</h3>
            <span className={styles.desc}>
              The demo session provides an overview of our Data Structures,
              Algorithms, and System Design Program
            </span>
          </div>
          <div className={styles.contentDiv}>
            <div className={styles.leftContentDiv}>
              {leftPoints.map((point) => (
                <div className={styles.pointDiv} key={point.id}>
                  <div className={styles.checkMarkDiv}>
                    <Image
                      src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Check+Mark.webp"
                      width={20}
                      height={20}
                      quality={100}
                      loading="lazy"
                    />
                  </div>
                  <p>{point.title}</p>
                </div>
              ))}
            </div>
            <div className={styles.middleLineDiv}></div>
            <div className={styles.rightContentDiv}>
              <span>Time : 8 pm , Date : 30 Jan</span>
              <div className={styles.mentorsFromDiv}>
                <p>Mentors from:</p>
                <div className={styles.mentorsFromImageDiv}>
                  <Image
                    src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/Microsoft%2BLogo.webp"
                    width={120}
                    height={30}
                    quality={100}
                    loading="lazy"
                    className={styles.microsoftLogo}
                  />
                  <Image
                    src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/GoogleColor.webp"
                    width={78}
                    height={26}
                    quality={100}
                    loading="lazy"
                    className={styles.googleLogo}
                  />
                  <Image
                    src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/MetaColor.webp"
                    width={87}
                    height={20}
                    quality={100}
                    loading="lazy"
                    className={styles.metaLogo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonDiv}>
            <button onClick={popupShow}>Request a Demo Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DSAPopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasSeenPopup")) {
      // Show the popup if the user hasn't seen it yet during this session
      setPopupVisible(true);

      // Set a flag in sessionStorage to mark that the user has seen the popup
      sessionStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <DSAPopup
          message="Book Your Demo Class Now!"
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default DSAPopupWrapper;
