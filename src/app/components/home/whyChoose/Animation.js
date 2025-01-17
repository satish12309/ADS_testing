"use client";

import React, { memo, useCallback, useEffect, useRef } from "react";
import styles from "./Animation.module.css";
import Image from "next/image";
import whyChooseData from "./Whychoosedata";

function Animation() {
  const divRefs = useRef([]);

  const setDivRef = useCallback((index, el) => {
    divRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const options = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(styles.highlight);
          }, index * 200);
        } else {
          entry.target.classList.remove(styles.highlight);
        }
      });
    }, options);

    divRefs.current.forEach((div) => {
      if (div) observer.observe(div);
    });

    return () => {
      divRefs.current.forEach((div) => {
        if (div) observer.unobserve(div);
      });
    };
  }, []);

  return (
    <section className={styles.whyChooseSection}>
      <div className="containerWidth">
        <div className={styles.containerMain}>
          <div className={styles.header}>
            <p>It’s not just any other ordinary platform, </p>
            <h2>
              It's <span>Learnbay</span>
            </h2>
          </div>
          <div className={styles.columnDiv}>
            {whyChooseData.map((item, index) => (
              <div
                className={styles.divContainer}
                key={index}
                ref={(el) => setDivRef(index, el)}
              >
                <div className={styles.svglogo}>
                  <Image
                    src={item.image}
                    alt="Learnbay"
                    quality={30}
                    loading="lazy"
                    width={70}
                    height={70}
                  />
                  {item.svg && item.svg}
                </div>
                <div className={styles.downArrow}></div>
                <div className={styles.whyChooseContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Animation);
