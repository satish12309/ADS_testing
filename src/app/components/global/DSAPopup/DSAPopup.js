"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DSAPopup.module.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className={styles.popupOverlay}>
      <div
        className={styles.popupContainer}
        onClick={(e) => e.stopPropagation()} // Prevents propagation to the overlay
      >
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>

        <div className={styles.mainDiv}>
          <div className={styles.whiteDiv}>
            <h3>Get Scholarship upto</h3>
            <span className={styles.OFF}>30% OFF</span>
          </div>

          {/* Middle TagLine */}
          <div className={styles.tagLine}>
            <p>
              on all Our <span>Course</span>
            </p>
          </div>

          {/* Bottom Gradient Div */}
          <div className={styles.gradientDiv}>
            <p className={styles.batch}>Batch Details</p>
            <div className={styles.batchDiv}>
              <p className={styles.offerText}>
                Weekend Batch : <span>9:30 AM - 1 PM</span>
              </p>
              <p className={styles.offerText}>
                Weekday Batch : <span>8:00 PM - 10:30 PM</span>
              </p>
            </div>
            <Link href="/fullstack/s2-dsa-and-system-design" target="_blank">
              <div className={styles.buttonDiv}>
                <button>Apply for Scholarship Now</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DSAPopupWrapper = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown for the session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Show the popup if the user hasn't seen it yet during this session
      setPopupVisible(true);

      // Set a flag in sessionStorage to mark that the user has seen the popup
      sessionStorage.setItem("hasSeenPopup", "true");
      console.log(`User has seen the popup: ${!hasSeenPopup}`);
    }
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <Popup message="Get Scholarship" onClose={handleClosePopup} />
      )}
    </>
  );
};

export default DSAPopupWrapper;
