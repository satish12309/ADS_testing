"use client";

import { Suspense, memo, useCallback, useState } from "react";
import Image from "next/image";
import styles from "./Cyber.module.css";
import Button from "@/app/components/global/button/Button";
import dynamic from "next/dynamic";

// Lazy-load heavy components to improve FID and LCP
const Popup = dynamic(() => import("../../global/popup/Popup"), { ssr: false });
import Form from "../../global/form/Form";

const Header = memo(
  ({
    spanTag,
    spanIcon,
    OrangeButton,
    title,
    orgTitle,
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
    isCyberSecurity,
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

    const backgroundImageContainerStyle = {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <section className={styles.mainBg}>
        <div className={styles.containerWrapper}>
          <Popup
            trigger={Popups ? Popups : applyCounselingPopup}
            setTrigger={Popups ? setPopups : setApplyCounselingPopup}
            className="popupModal"
          >
            <div className="RightPopup">
              <h5>{Popups ? "Download Syllabus" : "Apply For Counselling"}</h5>
              <Form
                downloadBrochure={Popups ? downloadBrochure : false}
                isCyberSecurity={isCyberSecurity}
              />
            </div>
          </Popup>
          <div
            className={
              backgroundImg ? styles.backgroundImgContainer : styles.container
            }
            style={backgroundImg ? backgroundImageContainerStyle : null}
          >
            <div className="containerWidth">
              <div className={styles.innerDiv}>
                <div className={styles.firstSection}>
                  <div className={styles.starDiv}>
                    <Image
                      src={spanIcon}
                      alt="Curriculum Inclusive of Gen-AI"
                      width={59}
                      height={72}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                      quality={50}
                    />
                    <h5>{spanTag}</h5>
                  </div>
                  <h1>
                    {title}
                    <span
                      className={
                        isCyberSecurity ? styles.cyberSpan : styles.span
                      }
                    >
                      {" "}
                      {orgTitle}
                    </span>
                  </h1>
                  <div className={styles.starDivSection}>
                    <div className={styles.starDiv}>
                      <p>{descrption}</p>
                    </div>
                  </div>
                  <div className={styles.imgBot}>
                    {collaborationImg ? (
                      <>
                        <div className={styles.collaborationDivWrapper}>
                          <p>In Collaboration With</p>
                          <div className={styles.collaborationImgWrapper}>
                            <Image
                              src={collaborationImg}
                              height={40}
                              width={180}
                              alt="Collaboration Image"
                              priority
                              quality={50}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={styles.wrapper}>
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                            alt="Video Thumbnail"
                            fill
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                            quality={60}
                          />
                        </div>
                      </>
                    )}
                  </div>
                  <div className={styles.btnDiv}>
                    <div onClick={popupShow} className={styles.btn}>
                      <Button text="Download Syllabus" grayButton />
                    </div>
                    <div onClick={applyCounselingShow}>
                      <Button text="Apply for Counseling" />
                    </div>
                  </div>

                  <div className={styles.btnDivM}>
                    <div onClick={popupShow}>
                      <Button text="Download Syllabus" grayButton />
                    </div>
                    <div onClick={applyCounselingShow}>
                      <Button
                        text="Apply for Counseling"
                        purpleButton={purpleButton}
                        OrangeButton={OrangeButton}
                      />
                    </div>
                  </div>
                </div>

                <Suspense fallback={<div>Loading Form...</div>}>
                  <div className={styles.formdiv}>
                    <h3>
                      Check Your{" "}
                      <span
                        className={
                          isCyberSecurity ? styles.cyberSpan : styles.span
                        }
                      >
                        Eligibility
                      </span>
                    </h3>
                    <Form isCyberSecurity={isCyberSecurity} />
                  </div>
                </Suspense>
              </div>
            </div>
          </div>

          <div className="containerWidth">
            <div className={styles.botDiv}>
              <div className={styles.innerBotDiv}>
                <div className={styles.botWrapper}>
                  <Image
                    src={applicationIcon}
                    alt="Application Closes"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
                    quality={50}
                  />
                </div>
                <div className={styles.content}>
                  <p>{CloseDes}</p>
                  <h3>{CloseBotDate}</h3>
                </div>
              </div>
              <div className={styles.innerBotDiv}>
                <div className={styles.botWrapper}>
                  <Image
                    src={ProgramIcon}
                    alt="Program Duration"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
                    quality={50}
                  />
                </div>
                <div className={styles.content}>
                  <p>{DurationBot}</p>
                  <h3>{DurationBotDate}</h3>
                </div>
              </div>
              <div className={styles.innerBotDiv}>
                <div className={styles.botWrapper}>
                  <Image
                    src={trainingIcon}
                    alt="Training Format"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
                    quality={50}
                  />
                </div>
                <div className={styles.content}>
                  <p>{TrainingBot}</p>
                  <h3>{TrainingBotFormat}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Header;
