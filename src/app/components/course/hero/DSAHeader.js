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
  downloadBrochure,
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
            <h5>{Popups ? "Download Syllabus" : "Apply For Counselling"}</h5>
            <Form
              downloadBrochure={Popups ? downloadBrochure : false}
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
        </div>
        <div className={styles.contentPointWrapper}>
          {points.map((point) => (
            <div className={styles.pointWrapper} key={point.id}>
              <div className={styles.pointsImgWrapper}>
                <Image
                  //   src={point.img}
                  src={firstPoint}
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
                    width={60}
                    height={30}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <div onClick={popupShow}>
              <Button text="Request A Demo Class" grayButton />
            </div>
            <div onClick={applyCounselingShow}>
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
