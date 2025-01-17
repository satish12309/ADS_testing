"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import styles from "./upskillmbl.module.css";
import Image from "next/image";

// The SVG Line component
const SVgLine = () => (
  <svg
    className={styles.svgLine}
    height="10"
    width="100"
    fill="none"
    viewBox="0 0 100 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height="10" width="100" fill="#583726" rx="5" />
    <line
      stroke="white"
      strokeDasharray="4 4"
      strokeLinecap="round"
      x1="7.5"
      x2="91.5"
      y1="4.5"
      y2="4.5"
    />
  </svg>
);

const UpskillMbl = ({ upskillMbl }) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrowDirection, setArrowDirection] = useState("right");
  const totalSlides = upskillMbl.length;

  const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const scrollToSlide = useCallback(
    (index) => {
      const slider = sliderRef.current;
      const slideWidth = slider.children[0].offsetWidth;
      slider.scrollLeft = slideWidth * index;
      setActiveIndex(index);
    },
    [totalSlides]
  );
  // Track the previous index
  const previousIndexRef = useRef(activeIndex);

  useEffect(() => {
    if (activeIndex > previousIndexRef.current) {
      setArrowDirection("right");
    } else if (activeIndex < previousIndexRef.current) {
      setArrowDirection("left");
    }
    previousIndexRef.current = activeIndex;
  }, [activeIndex, totalSlides]);

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    const slideWidth = slider.children[0].offsetWidth;
    const newScrollLeft = slider.scrollLeft;
    const tolerance = 10;

    let newActiveIndex = Math.round((newScrollLeft + tolerance) / slideWidth);

    //we scrolled to the very end or not
    if (newScrollLeft + slider.clientWidth >= slider.scrollWidth - tolerance) {
      newActiveIndex = totalSlides - 1;
    }

    setActiveIndex(newActiveIndex);

    if (newActiveIndex > previousIndexRef.current) {
      setArrowDirection("right");
    } else if (newActiveIndex < previousIndexRef.current) {
      setArrowDirection("left");
    }

    previousIndexRef.current = newActiveIndex;
  }, [totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    const debouncedScroll = debounce(handleScroll, 100);
    slider.addEventListener("scroll", debouncedScroll);

    return () => {
      slider.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]);

  return (
    <div className="containerWidth">
      <section className={styles.section}>
        <div className={styles.Container}>
          <h2>
            Journey towards <span className={styles.span}>Upskilling</span>
          </h2>

          <div className={styles.sliderMain} ref={sliderRef}>
            {upskillMbl.map((item, index) => (
              <div className={styles.Box} key={index}>
                <div className={styles.svglineDiv}>
                  <div className={styles.termBox}>
                    <h5>Term {item.term}</h5>
                    <span>{item.duration}</span>
                  </div>
                  {index < totalSlides - 1 && <SVgLine />}
                </div>
                <div className={styles.contentBox}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className={styles.ToolsBox}>
                  <p>tool: </p>
                  <Image
                    src={item.toolsImage}
                    width={item.width}
                    height={item.height}
                    alt="tools"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.pagination}>
            <div className={styles.dotBar}>
              <div
                className={styles.activeDotBar}
                style={{ left: `${activeIndex * (100 / totalSlides)}%` }}
              />
            </div>
            {upskillMbl.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`${styles.dot} ${
                  activeIndex === index ? styles.activeDot : ""
                }`}
              >
                {activeIndex === index && (
                  <span
                    className={`${styles.arrow} ${
                      arrowDirection === "right" && index === totalSlides - 1
                        ? styles.rotate
                        : arrowDirection === "left" && index === totalSlides - 1
                        ? styles.rotate
                        : arrowDirection === "right" &&
                          index > 0 &&
                          index < totalSlides - 1
                        ? styles.rotateLeft
                        : arrowDirection === "left" && index === 0
                        ? styles.rotateLeft
                        : arrowDirection === "left" && index > 0
                        ? styles.rotate
                        : ""
                    }`}
                  >
                    ⟶
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(UpskillMbl);
