import React, { useMemo } from "react";
import styles from "./Infiniti.module.css";
import Image from "next/image";
import { topSliderData, bottomSliderData } from "./Sliderdata"; // Import the data

const Slider = () => {
  const topSliderItems = useMemo(() => topSliderData, [topSliderData]);
  const bottomSliderItems = useMemo(() => bottomSliderData, [bottomSliderData]);

  return (
    <>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInner}>
          <div className={styles.topDiv}>
            {topSliderItems.map((item, index) => (
              <div key={index} className={styles.cards}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                  quality={50}
                />
                <p>{item.text}</p>
              </div>
            ))}
            {/* Duplicate content for seamless looping */}
            {topSliderItems.map((item, index) => (
              <div key={`duplicate-${index}`} className={styles.cards}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                  quality={50}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sliderWrapperdown}>
        <div className={styles.sliderInnerDown}>
          <div className={styles.DownDiv}>
            {bottomSliderItems.map((item, index) => (
              <div key={index} className={styles.cardsDown}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                  quality={50}
                />
                <p>{item.text}</p>
              </div>
            ))}
            {/* Duplicate content for seamless looping */}
            {bottomSliderItems.map((item, index) => (
              <div key={`duplicate-down-${index}`} className={styles.cardsDown}>
                <Image
                  src={item.src}
                  width={30}
                  height={30}
                  alt={item.alt}
                  loading="lazy"
                  quality={50}
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
