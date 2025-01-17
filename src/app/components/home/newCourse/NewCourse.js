"use client";
import React, { useState, useRef, useEffect, memo } from "react";
import styles from "./NewCourse.module.css";
import Image from "next/image";
import { courses, masterCourse, SvgArrow } from "./NewcourseData"; // Import course and master data
import Link from "next/link";
import dynamic from "next/dynamic";
import DataScienceCard from "./DataScienceCard";
import "swiper/css"; // Correct import for the CSS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdOutlineFileDownloadSvg } from "@/Data/svgData/MDIcons";

const Popup = dynamic(() => import("@/app/components/global/popup/Popup"));
const Form = dynamic(() => import("@/app/components/global/form/Form"));

const NewCourse = ({ downloadBrochure }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileImage, setIsMobileImage] = useState(false);
  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();
  const [brochurePdfs, setBrochurePdfs] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 761) {
        setIsMobile(true);
        setVisibleCount(0);
        if (window.innerWidth <= 641) {
          setIsMobileImage(true);
        }
      } else {
        setIsMobile(false);
        setVisibleCount(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCourses = () => {
    const selectedCourses = courses[activeTab];
    const visibleCourses = selectedCourses.slice(0, visibleCount);

    return (
      <>
        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              641: { slidesPerView: 2.2, spaceBetween: 10 },
              481: { slidesPerView: 1.6, spaceBetween: 16 },
              0: { slidesPerView: 1, spaceBetween: 10 },
            }}
            className={styles.swiperContainer}
          >
            {visibleCourses.map((course, index) => (
              <SwiperSlide key={course.title}>
                <div className={styles.courseCard} key={index}>
                  <Image
                    src={course.image}
                    width={360}
                    height={120}
                    alt={course.title}
                    loading="lazy"
                    quality={50}
                    className={styles.mainImage}
                  />
                  <div className={styles.cardContent}>
                    <h3>{course.title}</h3>
                    <div className={styles.lists}>
                      <div className={styles.listicondiv}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                          width={25}
                          height={25}
                          alt="certificate_icon"
                          loading="lazy"
                          quality={50}
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
                          quality={50}
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
                          quality={50}
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
                          setBrochurePdfs(course.brochurePdfs);
                          setPopups(true);
                        }}
                      >
                        Brochure <MdOutlineFileDownloadSvg />
                      </button>

                      {course.link ? (
                        // <Link href={course.link} passHref>
                          <button
                            className={styles.viewDetailsButton}
                            onClick={() => {
                              // setTitleCourse(course.titleCourse);
                              // setBrochureLinks(course.brochureLinks);
                              // setBrochurePdfs(course.brochurePdfs);
                              setPopups(true);
                            }}
                          >
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
        ) : (
          <>
            {visibleCourses.map((course, index) => (
              <div className={styles.courseCard} key={index}>
                <Popup
                  trigger={popups}
                  setTrigger={setPopups}
                  className="popupModal"
                  downloadBrochure
                >
                  <div className="RightPopup">
                    {downloadBrochure
                      ? "Download Syllabus"
                      : "Apply For Counselling"}
                    <Form
                      brochureLink={brochureLinks}
                      brochurePdf={brochurePdfs}
                      downloadBrochure
                    />
                  </div>
                </Popup>

                <Image
                  src={course.image}
                  width={360}
                  height={120}
                  alt={course.title}
                  loading="lazy"
                  quality={60}
                  className={styles.mainImage}
                />
                <div className={styles.cardContent}>
                  <h3>{course.title}</h3>
                  <div className={styles.lists}>
                    <div className={styles.listicondiv}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                        width={25}
                        height={25}
                        alt="certificate_icon"
                        loading="lazy"
                        quality={50}
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
                        quality={50}
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
                        quality={50}
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
                        setBrochurePdfs(course.brochurePdfs);
                        setPopups(true);
                      }}
                    >
                      Brochure <MdOutlineFileDownloadSvg />
                    </button>

                    {course.link ? (
                      <button
                        className={styles.viewDetailsButton}
                        onClick={() => {
                          setTitleCourse(course.titleCourse);
                          setBrochureLinks(course.brochureLinks);
                          setBrochurePdfs(course.brochurePdfs);
                          setPopups(true);
                        }}
                      >
                        View Details
                      </button>
                    ) : (
                      <button disabled className={styles.viewDetailsButton}>
                        No Details Available
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </>
    );
  };

  const renderMasterCourse = () => (
    <div className={styles.MasterCard}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="RightPopup">
          <h5>
            {downloadBrochure ? "Download Syllabus" : "Apply For Counselling"}
          </h5>
          <Form
            brochureLink={brochureLinks}
            brochurePdf={brochurePdfs}
            downloadBrochure
          />
        </div>
      </Popup>
      <Image
        src={isMobileImage ? masterCourse.mImage : masterCourse.image}
        width={isMobile ? 375 : 1200}
        height={isMobile ? 300 : 200}
        alt="MasterCard"
        loading="lazy"
        quality={60}
        className={styles.bgImageMaster}
      />
      <div className={styles.contentConteiner}>
        <h2>{masterCourse.title}</h2>
        <div>
          <div className={styles.mastericon}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/yellow_save+(1).webp"
              width={25}
              height={25}
              alt="certificate_icon"
              loading="lazy"
              quality={50}
            />
            <p>{masterCourse.duration}</p>
          </div>
        </div>

        <div>
          <div className={`${styles.buttons} ${styles.buttonsMaster}`}>
            <button
              className={`${styles.brochurebtn} ${styles.brochurebtnMaster}`}
              onClick={() => {
                setTitleCourse(masterCourse.title);
                setBrochureLinks(masterCourse.brochureLinks);
                setBrochurePdfs(masterCourse.brochurePdfs);
                setPopups(true);
              }}
            >
              Brochure <MdOutlineFileDownloadSvg />
            </button>

            {masterCourse.link ? (
              // <Link href={masterCourse.link} passHref>
              <button
                className={`${styles.viewDetailsButton} ${styles.viewDetailsButtonmaster}`}
                onClick={() => {
                  setTitleCourse(masterCourse.title);
                  setBrochureLinks(masterCourse.brochureLinks);
                  setBrochurePdfs(masterCourse.brochurePdfs);
                  setPopups(true);
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
      <div className={styles.absloute}>
        <div>
          <h4>
            90+
            <span>Transferrable ECTS Credits</span>
          </h4>
        </div>
        <div>
          <h4>
            60+
            <span>Countries Recognition</span>
          </h4>
        </div>
      </div>
    </div>
  );
  const debounceScroll = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
  const handleTabClick = debounceScroll((tabName) => {
    setActiveTab(tabName);
    setVisibleCount(isMobile ? 9 : 6);

    if (containerRef.current) {
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: containerTop - 100,
        behavior: "smooth",
      });

      const activeTabElement = document.querySelector(
        `.${styles.tabdiv}.active`
      );
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }
    }
  }, 200);
  const handlePopularClick = debounceScroll((tabName) => {
    setActiveTab(tabName);
    setVisibleCount(isMobile ? 9 : 0);

    if (containerRef.current) {
      const containerTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: containerTop - 100,
        behavior: "smooth",
      });

      const activeTabElement = document.querySelector(
        `.${styles.tabdiv}.active`
      );
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }
    }
  }, 200);
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + (isMobile ? 3 : 6));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: event.deltaX > 0 ? 100 : -100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.newSection}>
          <div className={styles.tabHead}>
            <div className={styles.tabMain} onWheel={handleWheel}>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "all" ? styles.active : ""
                }`}
                onClick={() => handlePopularClick("all")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/round_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>Popular Program </p>
                  </div>
                </div>

                <SvgArrow color={activeTab === "all" ? "white" : "black"} />
              </div>
              {}
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "Certifications" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("Certifications")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cer_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>Certification Courses</p>
                  </div>
                </div>
                <SvgArrow
                  color={activeTab === "Certifications" ? "white" : "black"}
                />
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "domainCourse" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("domainCourse")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>Domain Certification </p>
                  </div>
                </div>
                <SvgArrow
                  color={activeTab === "domainCourse" ? "white" : "black"}
                />
              </div>

              <div
                className={`${styles.tabdiv} ${
                  activeTab === "CloudDevops" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("CloudDevops")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>Cloud & DevOps</p>
                  </div>
                </div>
                <SvgArrow
                  color={activeTab === "CloudDevops" ? "white" : "black"}
                />
              </div>
              {/* <div
                className={`${styles.tabdiv} ${
                  activeTab === "dataScience" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("dataScience")}
              >
                            <div className={styles.sliders}>
                <p>Data Science</p>
                {svgFile}
              </div>
              </div> */}
              {/* <div
                className={`${styles.tabdiv} ${
                  activeTab === "MasterDegree" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("MasterDegree")}
              >
                             <div className={styles.sliders}>
                <p>Master's Degree</p>
                {svgFile}
              </div>
              </div> */}
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "bfsi" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("bfsi")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cer_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>BFSI</p>
                  </div>
                </div>
                <SvgArrow color={activeTab === "bfsi" ? "white" : "black"} />
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "hr" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("hr")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>HR</p>
                  </div>
                </div>
                <SvgArrow color={activeTab === "hr" ? "white" : "black"} />
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "manager" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("manager")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                      quality={40}
                    />
                    <p>Managers </p>
                  </div>
                </div>
                <SvgArrow color={activeTab === "manager" ? "white" : "black"} />
              </div>
            </div>
          </div>

          <div>
            {activeTab === "all" && (
              <DataScienceCard
                dataScience={true}
                radio={true}
                interstedInHide={true}
              />
            )}

            <div className={styles.CourseCardHead}>{renderCourses()}</div>
          </div>

          {/* Render the Master Course after the View More button */}
        </div>

        {courses[activeTab].length > visibleCount && (
          <div className={styles.viewMoreContainer}>
            <button onClick={handleViewMore} className={styles.viewMoreButton}>
              View More
            </button>
          </div>
        )}
      </div>
      {[
        "all",
        "bfsi",
        "Certifications",
        "hr",
        "manager",
        "CloudDevops",
        "domainCourse",
      ].includes(activeTab) && renderMasterCourse()}
    </section>
  );
};

export default memo(NewCourse);
