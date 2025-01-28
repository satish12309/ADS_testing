"use client";
import React, { useCallback, useState } from "react";
import styles from "./DSAHeader.module.css";
import Image from "next/image";
import Button from "../../global/button/Button";
import firstPoint from "./../../../../../public/asset/firstPoint.png";
import TableauSoftware from "./../../../../../public/asset/TableauSoftware.png";
import Module from "./../../../../../public/asset/Module.png";
import PieChart from "./../../../../../public/asset/PieChart.png";
import Hierarchy from "./../../../../../public/asset/Hierarchy.png";
import Popup from "../../global/popup/Popup";
import Form from "../../global/form/Form";

const DSAHeader = ({
  spanTag,
  spanIcon,
  OrangeButton,
  title1,
  orgTitle,
  title2,
  points,
  mentorText,
  mentorFromImg,
  applicationIcon,
  CloseDes,
  ProgramIcon,
  DurationBot,
  DurationBotDate,
  trainingIcon,
  TrainingBot,
  TrainingBotFormat,
  CloseBotDate,
  BotWidth,
  BotHeight,
  backgroundImage, // URL for background image
  backgroundGradient, // CSS for gradient
  purpleButton,
  descrption,
  DSAdownloadBrochure,
  collaborationImg,
  backgroundImg,
}) => {
  const [Popups, setPopups] = useState(false);
  const [applyCounselingPopup, setApplyCounselingPopup] = useState(false);

  // Memoized callback to show download popup
  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);

  // Memoized callback to show apply counseling popup
  const applyCounselingShow = useCallback(() => {
    setApplyCounselingPopup(true);
  }, []);
  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <Popup
          trigger={Popups ? Popups : applyCounselingPopup}
          setTrigger={Popups ? setPopups : setApplyCounselingPopup}
          className="popupModal"
        >
          <div className="RightPopup">
            <h5>{Popups ? "Download Syllabus" : "Book A Demo Session"}</h5>
            <Form
              downloadBrochure={Popups ? true : false}
              DSAdownloadBrochure={
                applyCounselingPopup ? DSAdownloadBrochure : false
              }
            />
          </div>
        </Popup>
        <div className={styles.contentTitleWrapper}>
          <h1>
            {title1} <span>{orgTitle}</span> {title2}
          </h1>
          <h5>{spanTag}</h5>
          <div className={styles.svgWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="142"
              height="90"
              viewBox="0 0 172 122"
              fill="none"
            >
              <path
                d="M3.19509 2.51541C1.54682 2.68385 0.347173 4.15659 0.51562 5.80485C0.684053 7.45312 2.15678 8.65277 3.80505 8.48433L3.19509 2.51541ZM139.011 115.742C138.868 117.392 140.091 118.846 141.742 118.989L168.641 121.313C170.292 121.456 171.746 120.234 171.889 118.583C172.031 116.932 170.809 115.478 169.158 115.336L145.247 113.269L147.313 89.3585C147.456 87.7078 146.234 86.254 144.583 86.1114C142.932 85.9687 141.478 87.1913 141.336 88.842L139.011 115.742ZM3.80505 8.48433C71.9218 1.52345 122.051 15.2929 146.904 36.949C159.262 47.7168 165.22 60.2668 164.474 73.1781C163.724 86.146 156.172 100.163 140.069 113.704L143.931 118.296C160.828 104.087 169.589 88.666 170.464 73.5244C171.343 58.3262 164.239 44.095 150.846 32.4254C124.199 9.2065 72.0786 -4.52382 3.19509 2.51541L3.80505 8.48433Z"
                fill="#B887FC"
              />
            </svg>
          </div>
          <div className={styles.mobileSvgWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="54"
              viewBox="0 0 38 54"
              fill="none"
            >
              <path
                d="M0.901042 0.579744C0.373933 0.63361 -0.00970847 1.10458 0.0441578 1.63169C0.0980224 2.1588 0.568996 2.54244 1.09611 2.48858L0.901042 0.579744ZM21.0442 51.4008C20.9986 51.9287 21.3895 52.3936 21.9174 52.4392L30.5198 53.1826C31.0477 53.2282 31.5126 52.8373 31.5583 52.3094C31.6039 51.7815 31.2129 51.3166 30.685 51.271L23.0384 50.6102L23.6992 42.9636C23.7448 42.4357 23.3539 41.9708 22.826 41.9251C22.2981 41.8795 21.8332 42.2705 21.7876 42.7984L21.0442 51.4008ZM1.09611 2.48858C11.9302 1.38144 19.8261 2.83279 25.2728 5.79668C30.6934 8.74638 33.7597 13.2304 34.9074 18.3826C37.2208 28.7674 31.7449 42.0352 21.3825 50.7491L22.6175 52.2177C33.3617 43.1827 39.2912 29.2373 36.7803 17.9654C35.5158 12.2893 32.1124 7.33408 26.19 4.11129C20.2936 0.902689 11.973 -0.551707 0.901042 0.579744L1.09611 2.48858Z"
                fill="#B887FC"
              />
            </svg>
          </div>
        </div>
        <div className={styles.contentPointWrapper}>
          {points.map((point, index) => (
            <div className={styles.pointWrapper} key={point.id}>
              <div className={styles.pointsImgWrapper}>
                <Image
                  src={point.img}
                  alt={point.imgAlt}
                  width={60}
                  height={60}
                />
              </div>
              <p className={styles.pointText}>
                {point.text1}
                <span className={styles.pointTextBold}>{point.boldText}</span>
                {point.text2}
              </p>
              {index === 0 && (
                <div className={styles.staticPoints}>
                  <p>Integrated </p>
                  <p>
                    With <b>Gen-AI</b> for{" "}
                  </p>
                  <p>Software Developers</p>
                </div>
              )}
              {index === 1 && (
                <div className={styles.staticPoints}>
                  <p>Practice <b>200+</b> </p>
                  <p><b>DSA Problems</b> &</p>
                  <p><b>System Design Projects</b></p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.mentorsWraper}>
          <div className={styles.mentorsContentsWraper}>
            <p className={styles.mentorText}>{mentorText}</p>
            <div className={styles.mentorFromImgWrapper}>
              {mentorFromImg.map((fromImg) => (
                <div className={styles.fromImgWrapper} key={fromImg.id}>
                  <Image
                    src={fromImg.img}
                    alt={fromImg.imgAlt}
                    width={fromImg.width}
                    height={fromImg.height}
                    quality={50}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <div onClick={applyCounselingShow}>
              <Button text="Request A Demo Class" grayButton />
            </div>
            <div onClick={popupShow}>
              <Button text="Download Syllabus" purpleButton={purpleButton} />
            </div>
          </div>
        </div>
        <div className={styles.headerIconsWrapper}>
          <div className={styles.TableauSoftwareIconWrapper}>
            <Image
              src={TableauSoftware}
              alt="Hierarchy"
              width={40}
              height={40}
            />
          </div>
          <div className={styles.ModuleIconWrapper}>
            <Image src={Module} alt="Hierarchy" width={28} height={28} />
          </div>
          <div className={styles.PieChartIconWrapper}>
            <Image src={PieChart} alt="Hierarchy" width={38} height={33} />
          </div>
          <div className={styles.HierarchyIconWrapper}>
            <Image src={Hierarchy} alt="Hierarchy" width={50} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DSAHeader;
