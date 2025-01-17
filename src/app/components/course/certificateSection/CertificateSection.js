import React, { memo, useMemo } from "react";
import styles from "./certificate.module.css";
import certificateData from "../../../../Data/componentsdata/CertificateData.json";
import TopCertificate from "./TopCertificate";
import BottomCertificate from "./BottomCertificate";

function CertificateSection() {
  const { certificateNew } = certificateData;

  if (!certificateNew || certificateNew.length === 0) {
    return <p>No certificates available at the moment.</p>;
  }

  const [topCertificates, remainingCertificates] = useMemo(() => {
    const TOP_CERTIFICATES_COUNT = 2;
    return [
      certificateNew.slice(0, TOP_CERTIFICATES_COUNT),
      certificateNew.slice(TOP_CERTIFICATES_COUNT),
    ];
  }, [certificateNew]);

  return (
    <section className="containerWidth">
      <div className={styles.mainBg}>
        <h2 className={styles.upskillHeading}>
          Get certified and accelerate your
          <span className={styles.spanHead}>&nbsp;career growth</span>
        </h2>
        <div className={styles.innerDiv}>
          {/* First two certificates */}
          <TopCertificate topCertificates={topCertificates} />

          {/* Remaining certificate */}
          <BottomCertificate remainingCertificates={remainingCertificates} />
        </div>
      </div>
    </section>
  );
}

export default memo(CertificateSection);
