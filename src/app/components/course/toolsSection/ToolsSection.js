import React from "react";
import styles from "./toolsSection.module.css";
import Image from "next/image";

function ToolsSection() {
  return (
    <section className="containerWidth">
      <div className={styles.container}>
        <h2>Programming Languages & Tools Covered</h2>
        <div className={styles.languageToolsImageWrapper}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/tools_cover.webp"
            alt="Learnbay"
            quality={100}
            // priority
            loading="lazy"
            // width="2006"
            // height="389"
            fill
            className={styles.desktopImg}
          />
        </div>
        <div className={styles.languageToolsImageWrapperMbl}>
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/mbl_tools.webp" // Replace with your mobile image URL
            alt="Learnbay Mobile"
            quality={100}
            loading="lazy"
            // priority
            fill
            className={styles.mobileImage}
          />
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;
