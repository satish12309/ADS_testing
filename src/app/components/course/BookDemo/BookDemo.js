"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./BookDemo.module.css";
import Image from "next/image";
import PathSteps from "../../../../../public/asset/PathSteps.png";
import Classroom from "../../../../../public/asset/Classroom.png";
import Button from "../../global/button/Button";
import LaptopCoding from "../../../../../public/asset/LaptopCoding.png";
import Popup from "../../global/popup/Popup";
import Form from "../../global/form/Form";
import horizontalConnector from "../../../../../public/asset/HorizontalLineDotted.png";
import verticalConnector from "../../../../../public/asset/VertialLineDotted.png";

const BookDemo = ({ DSAdownloadBrochure }) => {
  const [applyCounselingPopup, setApplyCounselingPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [connectorDimensions, setConnectorDimensions] = useState({
    width: 500,
    height: 2,
  });
  const [verticalConnectorDimensions, setVerticalConnectorDimensions] =
    useState({
      width: 5,
      height: 180,
    });

  const applyCounselingShow = useCallback(() => {
    setApplyCounselingPopup(true);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 641px)");

    // Handler function to update `isMobile`
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial state based on media query
    handleMediaQueryChange(mediaQuery);

    // Add event listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      // Clean up event listener
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.matchMedia("(max-width: 761px)").matches) {
        setConnectorDimensions({ width: 300, height: 2 });
      } else if (window.matchMedia("(max-width: 841px)").matches) {
        setConnectorDimensions({ width: 300, height: 2 });
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        setConnectorDimensions({ width: 330, height: 2 });
      } else if (window.matchMedia("(max-width: 1181px)").matches) {
        setConnectorDimensions({ width: 350, height: 2 });
      } else if (window.matchMedia("(max-width: 1281px)").matches) {
        setConnectorDimensions({ width: 400, height: 2 });
      } else if (window.matchMedia("(max-width: 1381px)").matches) {
        setConnectorDimensions({ width: 420, height: 2 });
      } else {
        setConnectorDimensions({ width: 470, height: 2 });
      }
    };

    updateDimensions();

    const resizeListener = () => updateDimensions();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const updateVerticalDimensions = () => {
      if (window.matchMedia("(max-width: 481px)").matches) {
        setVerticalConnectorDimensions({ width: 5, height: 160 });
      } else if (window.matchMedia("(max-width: 361px)").matches) {
        setVerticalConnectorDimensions({ width: 5, height: 140 });
      } else {
        setVerticalConnectorDimensions({ width: 5, height: 180 });
      }
    };

    updateVerticalDimensions();

    const resizeListener = () => updateVerticalDimensions();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <section className={styles.demoContainer}>
      <Popup
        trigger={applyCounselingPopup}
        setTrigger={setApplyCounselingPopup}
        className="popupModal"
      >
        <div className="RightPopup">
          <h5>Book A Demo Session</h5>
          <Form
            DSAdownloadBrochure={
              applyCounselingPopup ? DSAdownloadBrochure : false
            }
          />
        </div>
      </Popup>
      <div className="containerWidth">
        <div className={styles.contentsWrapper}>
          <div className={styles.leftSection}>
            <h2>Book Your Demo Class Now!</h2>
            <div className={styles.leftSectionDescription}>
              <p>
                The demo session provides an overview of our Data Structures,
                Algorithms, and System Design Program.
              </p>
              <p>It’s an opportunity to understand the :</p>
            </div>
            <div className={styles.demoPointsWrapper}>
              {!isMobile && (
                <div className={styles.horizontalConnectorWrapper}>
                  <Image
                    src={horizontalConnector}
                    width={connectorDimensions.width}
                    height={connectorDimensions.height}
                  />
                </div>
              )}
              {isMobile && (
                <div className={styles.verticalConnectorWrapper}>
                  <Image
                    src={verticalConnector}
                    width={verticalConnectorDimensions.width}
                    height={verticalConnectorDimensions.height}
                  />
                </div>
              )}
              <div className={styles.demoPoint}>
                <div className={styles.PathStepsImg}>
                  <Image src={PathSteps} width={40} height={40} />
                </div>
                <p>Course</p>
                <p>Structure</p>
              </div>
              <div className={styles.demoPoint}>
                <div className={styles.ClassroomImg}>
                  <Image src={Classroom} width={40} height={40} />
                </div>
                <p>Interact</p>
                <p>with mentors</p>
              </div>
              <div className={styles.demoPoint}>
                <div className={styles.LaptopCodingImg}>
                  <Image src={LaptopCoding} width={40} height={40} />
                </div>
                <p>Live</p>
                <p>Practice class</p>
              </div>
            </div>
            {!isMobile && (
              <div onClick={applyCounselingShow}>
                <Button text="Request a Demo Class" greenButton={true} />
              </div>
            )}
          </div>
          <div className={styles.rightSection}>
            <Image
              src="https://learnbay-s3.s3.us-east-2.amazonaws.com/adlearnbay/DSADemoMan.webp"
              width={340}
              height={400}
            />
            {isMobile && (
              <div onClick={applyCounselingShow}>
                <Button text="Request a Demo Class" greenButton={true} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
