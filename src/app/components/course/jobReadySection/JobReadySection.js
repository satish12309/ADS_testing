import React from "react";
import styles from "./JobReadySection.module.css";
import Image from "next/image";
import JobReadySectionData from "./JobReadySectionData.json";

function JobReadySection() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2 className={styles.headH2}>
          <span className={styles.grey}>
            Achieve your career goals with our{" "}
          </span>
          <span className={styles.orange}>Placement Support</span>
        </h2>
        <div className={styles.innerdiv}>
          {JobReadySectionData.map((item, index) => (
            <div key={index} className={styles.innerbox}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className={styles.Wrapper}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    loading="lazy"
                    className={styles.img1}
                    quality={50}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobReadySection;
