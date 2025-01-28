"use client";
import Image from "next/image";
import styles from "./ProgramSection.module.css";
import dynamic from "next/dynamic";
import { useState, memo, useMemo } from "react";

const Form = dynamic(() => import("../../global/form/Form"), { ssr: false });
const Popup = dynamic(() => import("../../global/popup/Popup"), { ssr: false });

const ProgramSection = memo(
  ({ designOverrides, popupProps, programSectionData }) => {
    const [popups, setPopups] = useState(false);
    const popupShow = () => setPopups(true);

    const memoizedProgramSectionData = useMemo(() => {
      if (
        !programSectionData ||
        !Array.isArray(programSectionData) ||
        programSectionData.length === 0
      ) {
        return [];
      }
      return programSectionData;
    }, [programSectionData]);

    if (memoizedProgramSectionData.length === 0) {
      return <div>Error: Program section data is missing or empty</div>;
    }

    const { popupTitle = "Apply For Counselling", rightImg } = useMemo(() => {
      return memoizedProgramSectionData[0] || {};
    }, [memoizedProgramSectionData]);

    return (
      <section
        className={`${styles.container} ${designOverrides?.container || ""}`}
        style={designOverrides?.containerStyle}
      >
        {/* Popup Section */}
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          popup={true}
        >
          <div className="RightPopup">
            <h5>{popupTitle}</h5>
            <Form popup={true} setTrigger={setPopups} />
          </div>
        </Popup>

        {/* Main Content */}
        <div className="containerWidth">
          <div className={styles.innerDiv}>
            <h2>
              <span className={styles.innerDivH2Span}>Who is this</span>
              <span> Program for?</span>
            </h2>
            <div className={styles.twoSection}>
              <div className={styles.topBorderDiv1}></div>
              <div className={styles.topBorderDiv2}></div>
              <div className={styles.bottomBorderDiv1}></div>
              <div className={styles.bottomBorderDiv2}></div>
              {memoizedProgramSectionData.map((section, index) => {
                const { content = {} } = section;

                return (
                  <div key={index} className={styles.firstSection}>
                    <h3 className={styles.H3}>
                      <span className={styles.blackSpan}>
                        {content?.BoldText}{" "}
                      </span>
                      {content?.nonBold}
                      <span className={styles.colors}> {content?.yearExp}</span>
                    </h3>
                    <p className={styles.pTop}>
                      {content?.description
                        ?.split("not mandatory")
                        ?.map((segment, idx, array) => (
                          <span key={idx}>
                            {segment}
                            {idx < array.length - 1 && (
                              <span className={styles.green}>
                                not mandatory
                              </span>
                            )}
                          </span>
                        ))}
                    </p>

                    <div className={styles.innerBoxDivWrapper}>
                      <div className={styles.innerBoxDiv}>
                        {content?.points1?.map((point) => (
                          <div key={point.id} className={styles.innerBox1}>
                            <h3>{point.title}</h3>
                          </div>
                        ))}
                      </div>
                      <div className={styles.innerBoxDiv}>
                        {content?.points2?.map((point) => (
                          <div key={point.id} className={styles.innerBox2}>
                            <h3>{point.title}</h3>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className={styles.pBot}>
                      <span className={styles.orangeSpan}>Important Note:</span>
                      {content?.importantNote}
                      <span className={styles.blueSpan} onClick={popupShow}>
                        {""} check eligibility
                      </span>
                    </p>
                  </div>
                );
              })}

              <div className={styles.secondSection}>
                <div className={styles.secondSectionImgWrapper}>
                  <Image
                    src={rightImg}
                    alt="Learnbay"
                    quality={100}
                    width={280}
                    height={270}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default ProgramSection;
