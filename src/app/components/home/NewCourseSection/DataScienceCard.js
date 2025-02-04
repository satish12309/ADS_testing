'use client'
import React, { useState, useEffect } from 'react';
import { courses } from './NewCourseData'; 
import styles from './DataScienceCard.module.css';
import "swiper/css"; // Correct import for the CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineFileDownloadSvg } from '@/Data/svgData/MDIcons';
import dynamic from 'next/dynamic';
const Popup = dynamic(() => import("../../global/popup/Popup"));
const Form = dynamic(() => import("../../global/form/Form"));

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
  const [titleCourse, setTitleCourse] = useState('');
  const [brochureLinks, setBrochureLinks] = useState('');
  const [brochurePdfs, setBrochurePdf] = useState('');
  const [popups, setPopups] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); // Add event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const popupShow = () => {
    setPopups(true);
  };

  const renderSwiper = (sectionData, sectionTitle, sectionClass = '') => (
    <div className={`${styles.sectionContainer} ${sectionClass}`}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1, 
            spaceBetween: 10,
          },
          412: {
            slidesPerView: 1.2,
            spaceBetween: 0,
          },

          512: {
            slidesPerView: 1.4,
            spaceBetween: 0,
          },
          612: {
            slidesPerView: 1.6,
            spaceBetween: 0,
          },
          712: {
            slidesPerView: 2.1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className={styles.swiperContainer}
      >
        {sectionData.map((course) => (
          <SwiperSlide key={course.title}>
            <div key={course.title} className={styles.maindiv}>
              <Image
                src={course.image}
                width={350}
                height={120}
                alt={course.title}
                loading="lazy"
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
                      <button className={styles.viewDetailsButton} onClick={() => {
                        setTitleCourse(course.titleCourse);
                        setBrochureLinks(course.brochureLinks);
                        setBrochurePdf(course.brochurePdfs);
                        popupShow();
                      }}>
                        View Details
                      </button>
                    // </Link>
                  ) : (
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

  const renderDesktop = (sectionData, sectionTitle, sectionClass = '') => (
    <div className={`${styles.mainContainer} ${sectionClass}`}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.desktopContainer}>
        {sectionData.map((course) => (
          <div key={course.title} className={styles.maindiv}>
            <Image
              src={course.image}
              width={410}
              height={120}
              alt={course.title}
              loading="lazy"
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
                  Brochure <MdOutlineFileDownloadSvg/>
                </button>
                {course.link ? (
                  // <Link href={course.link} passHref>
                    <button className={styles.viewDetailsButton}
                    onClick={() => {
                      setTitleCourse(course.titleCourse);
                      setBrochureLinks(course.brochureLinks);
                      setBrochurePdf(course.brochurePdfs);
                      popupShow();
                    }}>
                      View Details
                    </button>
                  // </Link>
                ) : (
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
            platform={true}
          />
        </div>
      </Popup>

      {/* Data Science and AI Section */}
      {isMobile
        ? renderSwiper(courses.dataScienceAndAI, 'Data Science and AI')
        : renderDesktop(courses.dataScienceAndAI, 'Data Science and AI')}

      {/* Business Analytics / Data Analytics Section */}
      {isMobile
        ? renderSwiper(courses.DABA, 'Managers / HR / BFSI  ', styles.BADA)
        : renderDesktop(courses.DABA, '', styles.BADA)}

      {/* Cloud Computing & Software Development Section */}
      {isMobile
        ? renderSwiper(courses.CloudS, 'Cloud Computing & Software Development', styles.CloudS)
        : renderDesktop(courses.CloudS, 'Cloud Computing & Software Development', styles.CloudS)}
    </div>
  );
};

export default DataScienceCard;
