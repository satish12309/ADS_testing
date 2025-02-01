import React, { memo } from "react";
import styles from "./DSAPractical.module.css";
import Image from "next/image";
import practicalData from "../../../../Data/componentsdata/DSAPracticalData.json";

const Practical = () => {
  const { title, description, points, boxes, svgRight } = practicalData;

  const BoxItem = memo(({ box }) => (
    <div className={styles.box}>
      <div className={styles.imgDiv}>
        <Image
          src={box.imgSrc}
          alt={box.imgAlt}
          loading="lazy"
          width={box.width}
          height={box.height}
          quality={50}
          placeholder="blur"
          blurDataURL={box.imgSrc}
        />
      </div>
      <h5>{box.title}</h5>
      <p>{box.description}</p>
    </div>
  ));

  return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2>{title}</h2>
          <p className={styles.pTag}>{description}</p>

          <div className={styles.boxMain}>
            {boxes.map((box, index) => (
              <BoxItem key={index} box={box} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default memo(Practical);
