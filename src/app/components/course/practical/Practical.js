import React, { memo } from "react";
import styles from "./Practical.module.css";
import Image from "next/image";
import practicalData from "../../../../Data/componentsdata/PracticalData.json";

const Practical = () => {
  const { title, description, points, boxes, svgRight } = practicalData;

  const PointItem = memo(({ point }) => (
    <div className={styles.pointItem}>
      <span className={styles.svgIcon}>
        <div className={styles.practicalSvgWrapper}>
          <svg
            width="38px"
            height="25px"
            viewBox="0 0 1024 1024"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#04C988"
              stroke="10"
              d="M77.248 415.04a64 64 0 0190.496 0l226.304 226.304L846.528 188.8a64 64 0 1190.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 010-90.496z"
            />
          </svg>
        </div>
      </span>
      <span className={styles.pointText}>{point.text}</span>
    </div>
  ));

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
    <div className="containerWidth">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h2>{title}</h2>
          <p className={styles.pTag}>{description}</p>

          <div className={styles.spanDiv}>
            {points.map((point, index) => (
              <PointItem key={index} point={point} />
            ))}
          </div>

          <div className={styles.boxMain}>
            {boxes.map((box, index) => (
              <BoxItem key={index} box={box} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Practical);
