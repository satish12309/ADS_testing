import Image from "next/image";
import React, { memo } from "react";
import styles from "./certificate.module.css";

const BottomCertificate = ({ remainingCertificates }) => {
  return (
    <div className={styles.certBoxWrapperBottom}>
      {remainingCertificates.map((certificate) => (
        <div key={certificate.id} className={styles.certBoxDemo}>
          <div className={styles.AddonMbl}>
            <p>Add on</p>
          </div>
          <Image
            src={certificate.imageUrl}
            alt={certificate.title}
            width={certificate.imageWidth}
            height={certificate.imageHeight}
            className={`${styles.toolIcon} ${styles.toolIconThree}`}
            loading="lazy"
            quality={60}
          />
          <div className={styles.iconDivMain}>
            <div className={styles.Addon}>
              <p>Add on</p>
            </div>
            <h4>{certificate.title}</h4>
            {Array.isArray(certificate.description) ? (
              certificate.description.map((desc, descIndex) => (
                <div key={descIndex} className={styles.iconDiv}>
                  <p>{desc}</p>
                </div>
              ))
            ) : (
              <div className={styles.iconDiv}>
                <p>{certificate.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(BottomCertificate);
