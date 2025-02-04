'use client'
import React, { useState, useRef, useEffect, memo } from "react";
import styles from "./NewCourse.module.css";
import Image from "next/image";
import { courses, masterCourse, SvgArrow } from "./NewCourseData";
import Link from "next/link";
import dynamic from "next/dynamic";
import DataScienceCard from "./DataScienceCard";
import "swiper/css"; // Correct import for the CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdOutlineFileDownloadSvg } from "@/Data/svgData/MDIcons";

const Popup = dynamic(() => import("../../global/popup/Popup"));
const Form = dynamic(() => import("../../global/form/Form"));

const NewCourse = ({
  downloadBrochure
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();
  const [brochurePdfs, setBrochurePdfs] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        
        setIsMobile(true);
        setVisibleCount(12);
      } else {
        setIsMobile(false);
        setVisibleCount(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCourses = () => {


    let selectedCourses = courses[activeTab] || [];

    // If it's mobile and 'all' tab is active, hide the 'all' courses
    if (isMobile && activeTab === 'all') {
      selectedCourses = []; // Clear courses when 'all' is active in mobile
    }

    // Slice the array to show only the number of visible courses
    const visibleCourses = selectedCourses.slice(0, visibleCount);

    return (
      <>
        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className={styles.swiperContainer}
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
                    className={styles.mainImage}
                  />
                  <div className={styles.cardContent}>
                    <h3>{course.title}</h3>
                    <div className={styles.lists}>
                      <div className={styles.listicondiv}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                          width={20}
                          height={20}
                          alt="certificate_icon"
                          loading="lazy"
                        />
                        <span>{course.duration}</span>
                      </div>
                      <div className={styles.listicondiv}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Date_icons.webp"
                          width={20}
                          height={20}
                          alt="certificate_icon"
                          loading="lazy"
                        />
                        <span>{course.certification}</span>
                      </div>
                      <div className={styles.listicondiv}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp"
                          width={20}
                          height={20}
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
                          setBrochurePdfs(course.brochurePdfs);
                          setPopups(true);
                        }}
                      >
                        Brochure <MdOutlineFileDownloadSvg />
                      </button>

                      {course.link ? (
                        // <Link href={course.link} passHref>
                          <button className={styles.viewDetailsButton} onClick={() => {
                              setPopups(true);
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
                      platform={true}
                    />
                  </div>
                </Popup>

                <Image
                  src={course.image}
                  width={360}
                  height={120}
                  alt={course.title}
                  loading="lazy"
                  className={styles.mainImage}
                />
                <div className={styles.cardContent}>
                  <h3>{course.title}</h3>
                  <div className={styles.lists}>
                    <div className={styles.listicondiv}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Cer_icons.webp"
                        width={20}
                        height={20}
                        alt="certificate_icon"
                        loading="lazy"
                      />
                      <span>{course.duration}</span>
                    </div>
                    <div className={styles.listicondiv}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Date_icons.webp"
                        width={20}
                        height={20}
                        alt="certificate_icon"
                        loading="lazy"
                      />
                      <span>{course.certification}</span>
                    </div>
                    <div className={styles.listicondiv}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Save_icons.webp"
                        width={20}
                        height={20}
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
                        setBrochurePdfs(course.brochurePdfs);
                        setPopups(true);
                      }}
                    >
                      Brochure <MdOutlineFileDownloadSvg />
                    </button>

                    {course.link ? (
                      // <Link href={course.link} passHref>
                        <button className={styles.viewDetailsButton} onClick={() => {
                          setTitleCourse(course.titleCourse);
                          setBrochureLinks(course.brochureLinks);
                          setBrochurePdfs(course.brochurePdfs);
                          setPopups(true);
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
          </>
        )}
      </>
    );
  };

  const renderMasterCourse = () => (
    <div className={`${styles.MasterCard} width`}>
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
            platform={true}
          />
        </div>
      </Popup>
      <Image
        src={isMobile ? masterCourse.mImage : masterCourse.image}
        width={isMobile ? 375 : 1200}
        height={isMobile ? 300 : 200}
        alt="MasterCard"
        loading="lazy"
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
              // </Link>
            ) : (
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
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + (isMobile ? 20 : 6));
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
      <div className={`${styles.container}`} ref={containerRef}>
        <div className={styles.newSection}>
          <div className={styles.tabHead}>
            <div className={styles.tabMain} onWheel={handleWheel}>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "all" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("all")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/round_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
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
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/cloud_DSA_icons.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                    />
                    <p>DSA / Cloud & DevOps</p>
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
                    />
                    <p> Managers / HR / BFSI </p>
                  </div>
                </div>
                <SvgArrow color={activeTab === "bfsi" ? "white" : "black"} />
              </div>
              <div
                className={`${styles.tabdiv} ${
                  activeTab === "CyberSecurity" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("CyberSecurity")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                  <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/round_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                    />
                    <p>Cyber Security</p>
                  </div>
                </div>
                <SvgArrow color={activeTab === "CyberSecurity" ? "white" : "black"} />
              </div>

              <div
                className={`${styles.tabdiv} ${
                  activeTab === "dsa" ? styles.active : ""
                }`}
                onClick={() => handleTabClick("dsa")}
              >
                <div className={styles.sliders}>
                  <div className={styles.imgText}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/level_side.webp"
                      width={30}
                      height={30}
                      loading="lazy"
                      alt="slide_icon"
                    />
                 <div className={styles.tagGen}>
                 <p>GEN AI</p>
                 <div className={styles.tagNew}>NEW</div>
                 </div>
                  </div>
                </div>
                <SvgArrow color={activeTab === "dsa" ? "white" : "black"} />
              </div>
              {/*            
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
                    />
                    <p>Managers </p>
                  </div>
                </div>
                <SvgArrow color={activeTab === "manager" ? "white" : "black"} />
              </div> */}
            </div>
          </div>

          <div>
            {isMobile && activeTab === "all" && (
              <DataScienceCard />
            )}
            {/* Render DataScienceCard only on mobile */}

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
        "dsa",
        "CloudDevops",
        "domainCourse",
        "CyberSecurity"
      ].includes(activeTab) && renderMasterCourse()}
    </section>
  );
};

export default memo(NewCourse);
