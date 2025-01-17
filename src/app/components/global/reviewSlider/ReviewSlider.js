"use client";

import styles from "./ReviewSlider.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const Reels = dynamic(() => import("./Reels"));
const VideoYt = dynamic(() => import("../videoYt/VideoYt"), { ssr: false });

const ReviewSlider = ({ showVideoYt }) => {
  return (
    <div className="containerWidth">
      <div className={styles.keyContainer}>
        <Reels />
        {showVideoYt && (
          <div className={styles.mainDiv}>
            {/* Bottom Review Section */}
            <div className={styles.reviewBotSection}>
              <div className={styles.firstBotReview}>
                <div className={styles.firstBotHeading}>
                  <h3 className={styles.mainHeading}>Courses Top Rated in:</h3>
                  <p>Discover what our learners say about us</p>
                </div>
                <div className={styles.firstBotImgWrapper}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/Social_review.webp"
                    alt="Learnbay"
                    quality={40}
                    loading="lazy"
                    fill
                  />
                </div>
              </div>
              <div className={styles.secondBotReview}>
                <VideoYt className={styles.YT} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSlider;
