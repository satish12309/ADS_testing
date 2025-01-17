"use client";
import React, { useState, useEffect } from "react";
import { courses } from "./NewcourseData";
import styles from "./DataScienceCard.module.css";
import "swiper/css"; // Correct import for the CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Form from "@/app/components/global/form/Form";
import Popup from "@/app/components/global/popup/Popup";
import Link from "next/link";
import { MdOutlineFileDownloadSvg } from "@/Data/svgData/MDIcons";

const DataScienceCard = ({
  dataScience,
  radio,
  dataScienceCounselling,
  organicADS,
  dataScienceGeneric,
  interstedInHide,
  brochurePdf,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [titleCourse, setTitleCourse] = useState("");
  const [brochureLinks, setBrochureLinks] = useState("");
  const [brochurePdfs, setBrochurePdf] = useState("");
  const [popups, setPopups] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 761); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const popupShow = () => {
    setPopups(true);
  };

  const renderSwiper = (sectionData, sectionTitle, sectionClass = "") => (
    <div className={`${styles.sectionContainer} ${sectionClass}`}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          641: { slidesPerView: 2.2, spaceBetween: 10 },
          481: { slidesPerView: 1.6, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 10 },
        }}
        className={styles.swiperContainer}
      >
        {sectionData.map((course) => (
          <SwiperSlide key={course.title} className={styles.swiperSlider}>
            <div key={course.title} className={styles.maindiv}>
              <Image
                src={course.image}
                width={350}
                height={120}
                alt={course.title}
                loading="lazy"
                quality={50}
                className={styles.mainImage}
              />
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <div className={styles.lists}>
                  <div className={styles.listicondiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                      width={25}
                      height={25}
                      alt="certificate_icon"
                      loading="lazy"
                      quality={40}
                    />
                    <span>{course.duration}</span>
                  </div>
                  <div className={styles.listicondiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Date_icons.webp"
                      width={25}
                      height={25}
                      alt="certificate_icon"
                      loading="lazy"
                      quality={40}
                    />
                    <span>{course.certification}</span>
                  </div>
                  <div className={styles.listicondiv}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp"
                      width={25}
                      height={25}
                      alt="certificate_icon"
                      loading="lazy"
                      quality={40}
                    />
                    <span>{course.description}</span>
                  </div>
                </div>
                <div className={styles.buttons}>
                  <button
                    className={styles.brochurebtn}
                    onClick={() => {
                      setTitleCourse(course.titleCourse);
                      setBrochureLinks(course.brochureLinks);
                      setBrochurePdf(course.brochurePdfs);
                      popupShow();
                    }}
                  >
                    Brochure <MdOutlineFileDownloadSvg />
                  </button>
                  {course.link ? (
                    // <Link href={course.link} passHref>
                    <button
                      className={styles.viewDetailsButton}
                      onClick={() => {
                        setTitleCourse(course.titleCourse);
                        setBrochureLinks(course.brochureLinks);
                        setBrochurePdf(course.brochurePdfs);
                        popupShow();
                      }}
                    >
                      View Details
                    </button>
                  ) : (
                    // </Link>
                    <button disabled className={styles.viewDetailsButton}>
                      No Details Available
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  const renderDesktop = (sectionData, sectionTitle, sectionClass = "") => (
    <div className={`${styles.mainContainer} ${sectionClass}`}>
      {/* <h2 className={styles.sectionTitle}>{sectionTitle}</h2> */}
      <div className={styles.desktopContainer}>
        {sectionData.map((course) => (
          <div key={course.title} className={styles.maindiv}>
            <Image
              src={course.image}
              width={410}
              height={120}
              alt={course.title}
              loading="lazy"
              quality={50}
              className={styles.mainImage}
            />
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{course.title}</h3>
              <div className={styles.lists}>
                <div className={styles.listicondiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                    width={25}
                    height={25}
                    alt="certificate_icon"
                    loading="lazy"
                    quality={40}
                  />
                  <span>{course.duration}</span>
                </div>
                <div className={styles.listicondiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Date_icons.webp"
                    width={25}
                    height={25}
                    alt="certificate_icon"
                    loading="lazy"
                    quality={40}
                  />
                  <span>{course.certification}</span>
                </div>
                <div className={styles.listicondiv}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp"
                    width={25}
                    height={25}
                    alt="certificate_icon"
                    loading="lazy"
                    quality={40}
                  />
                  <span>{course.description}</span>
                </div>
              </div>
              <div className={styles.buttons}>
                <button
                  className={styles.brochurebtn}
                  onClick={() => {
                    setTitleCourse(course.titleCourse);
                    setBrochureLinks(course.brochureLinks);
                    setBrochurePdf(course.brochurePdfs);
                    popupShow();
                  }}
                >
                  Brochure <MdOutlineFileDownloadSvg />
                </button>
                {course.link ? (
                  // <Link href={course.link} passHref>
                  <button
                    className={styles.viewDetailsButton}
                    onClick={() => {
                      setTitleCourse(course.titleCourse);
                      setBrochureLinks(course.brochureLinks);
                      setBrochurePdf(course.brochurePdfs);
                      popupShow();
                    }}
                  >
                    View Details
                  </button>
                ) : (
                  // </Link>
                  <button disabled className={styles.viewDetailsButton}>
                    No Details Available
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.cardContainer}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure={true}
      >
        {/* <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div> */}
        <div className="RightPopup">
          <h5>Download Syllabus</h5>
          <Form
            // titleCourse={titleCourse}
            brochureLink={brochureLinks}
            brochurePdf={brochurePdfs}
            // dataScience={dataScience}
            // dataScienceCounselling={dataScienceCounselling}
            // dataScienceGeneric={dataScienceGeneric}
            // radio={radio}
            downloadBrochure={true}
            // upSkillingHide={true}
            // interstedInHide={interstedInHide}
            // learning={true}
          />
        </div>
      </Popup>

      {/* Data Science and AI Section */}
      {isMobile
        ? renderSwiper(courses.dataScienceAndAI, "Data Science and AI")
        : renderDesktop(courses.dataScienceAndAI, "Data Science and AI")}

      {/* Business Analytics / Data Analytics Section */}
      {/* {isMobile
        ? renderSwiper(
            courses.DABA,
            "Business Analytics / Data Analytics",
            styles.BADA
          )
        : renderDesktop(
            courses.DABA,
            "Business Analytics / Data Analytics",
            styles.BADA
          )} */}

      {/* Cloud Computing & Software Development Section */}
      {/* {isMobile
        ? renderSwiper(
            courses.CloudS,
            "Cloud Computing & Software Development",
            styles.CloudS
          )
        : renderDesktop(
            courses.CloudS,
            "Cloud Computing & Software Development",
            styles.CloudS
          )} */}
    </div>
  );
};

export default DataScienceCard;
