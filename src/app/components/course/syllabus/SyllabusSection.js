"use client";

import React, { useState, memo, useCallback, useEffect } from "react";
import styles from "./syllabus.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const PopupContent = dynamic(() => import("../../global/popup/PopupContent"), {
  ssr: false,
  loading: () => <p>Loading EMI options...</p>,
});
const SyllabusSection = ({
  sections = [],
  brochureLink,
  brochurePdf,
  downloadBrochure,
}) => {
  const [popups, setPopups] = useState(false);
  const [applyCounselingPopup, setApplyCounselingPopup] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const popupShow = useCallback(() => {
    setPopups(true);
  }, []);
  const applyCounselingShow = useCallback(() => {
    setApplyCounselingPopup(true);
  }, []);

  if (!Array.isArray(sections) || sections.length === 0) {
    return <div>No sections available.</div>;
  }
  const getResponsiveSize = (sizes) => {
    if (!sizes) {
      return { width: 100, height: 100 }; // Fallback to default size
    }
    if (windowWidth < 361) return sizes.vsm;
    if (windowWidth < 641) return sizes.sm;
    if (windowWidth < 1024) return sizes.md; // Tablet
    return sizes.lg; // Desktop
  };

  return (
    <div className="containerWidth">
      <div className={styles.mainConteiner}>
        <PopupContent
          popups={popups ? popups : applyCounselingPopup}
          setPopups={popups ? setPopups : setApplyCounselingPopup}
          heading={popups ? "Download Syllabus" : "Apply For Counselling"}
          downloadBrochure={popups ? downloadBrochure : false}
          brochureLink={brochureLink}
          brochurePdf={brochurePdf}
        />
        <h2 className={styles.headline}>
          Explore Our <span>Syllabus</span>
        </h2>
        {sections.map((section, index) => {
          const reasult = getResponsiveSize(section.imageSizes);
          const { height, width } = reasult;

          return (
            <div key={section.id} className={styles.gridConteiner}>
              <div className={styles.gridleft}>
                <div className={styles.leftinside}>
                  <Image
                    src={section.trackIcon}
                    width={section.width}
                    height={section.height}
                    alt="trackIcon"
                    loading="lazy"
                    quality={50}
                  />
                  <h3 className={styles.leftInsideH3}>{section.title}</h3>
                </div>
                {index !== sections.length - 1 && (
                  <div className={styles.verticalLine}></div>
                )}
              </div>
              <div className={styles.gridryt}>
                <div className={styles.rytmain}>
                  <div className={styles.ryttop}>
                    <p>{section.description}</p>
                    <div className={styles.date}>
                      <p>{section.duration}</p>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.contentlist}>
                      <p className={styles.pline}>
                        <span className={styles.org}>
                          {section.contentModule}:{" "}
                        </span>
                        {section.contentDescription}
                      </p>
                      <ul className={styles.lists}>
                        {section.contentDetails.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                      <div className={styles.popupbtn} onClick={popupShow}>
                        Read more
                      </div>
                    </div>
                    <div className={styles.tools}>
                      <p>Topics</p>
                      <div className={styles.toolsImgWrapper}>
                        <Image
                          src={section.toolsImg}
                          width={width}
                          height={height}
                          alt="tools"
                          loading="lazy"
                          quality={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={styles.buttondiv}>
          <div className={styles.btnone} onClick={applyCounselingShow}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Thumb_Icon+(1).webp"
              width={30}
              height={30}
              loading="lazy"
              alt="Python"
              quality={40}
            />
            Start Your Application
          </div>
          <div className={styles.btntwo} onClick={popupShow}>
            <div className={styles.pdficon}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/pdF_icon+(1).webp"
                width={30}
                height={30}
                loading="lazy"
                alt="PDF Download"
                quality={40}
              />
            </div>
            Download Brochure
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SyllabusSection);
