"use client";

import React, { useState, useEffect, useRef, useMemo, memo } from "react";
import Image from "next/image";
import styles from "./mentor.module.css";
import { debounce } from "@/utils/debounce";

function MentorsSection() {
  const mentorImg = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mentor-icon-sec.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mentor-sec-min.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/secmentor1.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/mentor-desktop.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/puulkit.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/tripti.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/AnkurK.webp",
  ];

  const companyImg = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/walmart.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/mentor-icon.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/walmart.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/kryndal.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/paypal.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/paytm.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/walmart.webp",
  ];

  const mentorNames = [
    "Disha Jindgar",
    "Disha M.",
    "Tammanna V.",
    "Mohit S.",
    "Pulkit Jain",
    "Tripti Jain",
    "Ankur K.",
  ];

  const duplicatedMentorImg = useMemo(() => [...mentorImg, ...mentorImg], []);
  const duplicatedCompanyImg = useMemo(
    () => [...companyImg, ...companyImg],
    []
  );
  const duplicatedMentorNames = useMemo(
    () => [...mentorNames, ...mentorNames],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(window.innerWidth >= 768 ? 4 : 1);
    };

    const debouncedResize = debounce(updateSlidesPerView, 200);

    updateSlidesPerView();
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % duplicatedMentorImg.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + duplicatedMentorImg.length) % duplicatedMentorImg.length
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = "grabbing"; // Change cursor to 'grabbing'
  };

  const handleMouseMove = debounce((e) => {
    if (!isDragging) return;
    const x = e.clientX;
    const walk = (x - startX) * 2; // Adjust speed of dragging
    sliderRef.current.scrollLeft = scrollLeft - walk;
  },10);

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = "grab"; // Reset cursor when dragging ends
  };

  return (
    <div className="containerWidth">
      <section className={styles.container}>
        <h4>
          Meet Our <span className={styles.spans}>Mentors</span>
        </h4>
        <p>Guiding You Every Step of the Way Towards Professional Excellence</p>
        <div className={styles.SliderDiv}>
          <button className={styles.prevBtn} onClick={prevSlide}>
            ‹
          </button>
          <div
            ref={sliderRef}
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${(currentSlide * 70) / slidesPerView}%)`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Stops dragging if mouse leaves the area
          >
            {duplicatedMentorImg.map((mentor, index) => (
              <div key={`mentor-${index}`} className={styles.slide}>
                <div className={styles.box}>
                  <div className={styles.mentorImg}>
                    <Image
                      src={mentor}
                      width={100}
                      height={100}
                      alt="mentor"
                      quality={50}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>
                      {duplicatedMentorNames[index]}
                    </p>
                    <Image
                      src={duplicatedCompanyImg[index]}
                      width={100}
                      height={25}
                      alt="company"
                      quality={50}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.nextBtn} onClick={nextSlide}>
            ›
          </button>
        </div>
      </section>
    </div>
  );
}

export default memo(MentorsSection);
