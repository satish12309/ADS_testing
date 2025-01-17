"use client";
import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import Image from "next/image";
import styles from "./OutCome.module.css";
import outcomeData from "./OutComeData";

// Memoized OutcomeItem component for better performance
const OutcomeItem = memo(({ item, backgroundClass }) => (
  <div className={styles.innerBox}>
    <div className={`${styles.headCont} ${backgroundClass}`}>
      <div>
        <Image
          src={item.imgSrc}
          alt={item.imgAlt}
          quality={100}
          width={50}
          height={50}
          loading="lazy"
        />
        <h3>{item.title}</h3>
      </div>
    </div>
    <p className={styles.pTop}>{item.description}</p>
  </div>
));

const OutcomeSection = () => {
  const [activeDot, setActiveDot] = useState(0);
  const sectionRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollToSection = useCallback((index) => {
    const section = sectionRef.current.children[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveDot(index);
    }
  }, []);

  useEffect(() => {
    const sectionContainer = sectionRef.current;

    const handleScroll = () => {
      if (sectionContainer) {
        const totalHeight =
          sectionContainer.scrollHeight - sectionContainer.clientHeight;
        const scrollTop = sectionContainer.scrollTop;
        setScrollPercentage((scrollTop / totalHeight) * 100);
      }
    };

    // Add event listener to section container for scroll event
    sectionContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set scroll percentage

    return () => {
      sectionContainer.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  return (
    <section className={styles.container} ref={sectionRef}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            Program Outcome:
            <span className={styles.borderBot}>What’s in it for you?</span>
          </h2>

          <p className={styles.pHead}>
            Work on projects based on real-world scenarios
          </p>
          <div className={styles.innerBoxDiv}>
            {outcomeData.map((item, index) => {
              const backgroundClass =
                index === 0
                  ? styles.headContBlue
                  : index === 1
                  ? styles.headContGreen
                  : styles.headContOrange;

              return (
                <OutcomeItem
                  key={item.id}
                  item={item}
                  backgroundClass={backgroundClass}
                />
              );
            })}
          </div>

          {/* Custom Scrollbar with Dots */}
          <div className={styles.customScrollbar}>
            <div className={styles.dotContainer}>
              {outcomeData.map((_, index) => (
                <span
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`${styles.dot} ${
                    activeDot === index ? styles.active : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Horizontal Scroll Indicator */}
          <div
            className={styles.scrollIndicator}
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(OutcomeSection);
