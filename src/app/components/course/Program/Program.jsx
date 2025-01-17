import Image from "next/image";
import styles from "./Program.module.css";

const Program = () => {
  return (
    <div className={styles.programContainer}>
      <div className="containerWidth">
        <h2 className={styles.title}>Who is this program for?</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>
              <span className={styles.highlight}>Early to Mid </span>Level
              Professionals with min
              <span className={styles.highlight}> 1 Year of Experience</span>
            </h3>
            <p className={styles.description}>
              This program is perfect for Marketing/Sales Associate, HR
              Assistant, Entry-Level Financial Analyst, Project Coordinator,
              Customer Service Representative, QA Tester, Web Developer.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>Data Engineer</span>
              <span className={styles.badge}>Data Analyst</span>
              <span className={styles.badge}>Business Analyst</span>
              <span className={styles.badge}>Systems Admin</span>
            </div>
            <p className={styles.note}>
              <strong>Important Note:</strong> This program is not for fresh
              graduates. You must have at least 1 year of work experience. To
              know more,
              <a href="#" className={styles.link}>
                check eligibility
              </a>
              .
            </p>
          </div>
          <div className={styles.imageMainWrapper}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ryt_programImg+(2).webp"
                alt="Program Preview"
                width={400}
                height={400}
                className={styles.image}
                quality={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
