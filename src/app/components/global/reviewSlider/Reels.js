"use client";
import React, { memo, Suspense, useState, useEffect, useCallback } from "react";
import styles from "./ReviewSlider.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import Reeldata from "./Reeldata";

const VideoPopup = dynamic(() =>
  import("@/app/components/global/videoPopup/VideoPopup")
);

const Reels = () => {
  if (!Reeldata || Reeldata.length === 0) {
    return <div>No data available</div>;
  }

  const [vId, setVId] = useState("");
  const [video, setVideo] = useState(false);
  const [visibleData, setVisibleData] = useState([]);

  const videoShow = useCallback((id) => {
    setVideo(true);
    setVId(id);
  }, []);

  const updateVisibleData = useCallback(() => {
    if (window.matchMedia("(max-width: 481px)").matches) {
      setVisibleData(Reeldata.slice(0, 3));
    } else if (window.matchMedia("(max-width: 1081px)").matches) {
      setVisibleData(Reeldata.slice(0, 4));
    } else if (window.matchMedia("(max-width: 1281px)").matches) {
      setVisibleData(Reeldata.slice(0, 5));
    } else {
      setVisibleData(Reeldata.slice(0, 6));
    }
  }, []);

  useEffect(() => {
    updateVisibleData();
    window.addEventListener("resize", updateVisibleData);

    return () => {
      window.removeEventListener("resize", updateVisibleData);
    };
  }, [updateVisibleData]);
  return (
    <>
      <Suspense fallback={<div>Loading Video...</div>}>
        <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      </Suspense>
      <div className={styles.headingContainer}>
        <div className={styles.Header}>
          <h2>
            Real Stories, <span className={styles.topSpan}>Real Success</span>
          </h2>
          <p className={styles.subHeading}>
            Discover what our learners say about us
          </p>
        </div>

        <div className={styles.mainContiner}>
          {visibleData.map((item) => (
            <div key={item.id} className={styles.reelItem}>
              <Image
                src={item.proimage}
                alt="Learnbay"
                loading="lazy"
                width={180}
                height={200}
                quality={60}
                className={styles.videoImage}
                onClick={() => videoShow(item.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Reels);
