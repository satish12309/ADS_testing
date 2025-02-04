"use client";
import { useMemo, memo, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ContactUs.module.css";
import dynamic from "next/dynamic";
import { debounce } from "@/utils/debounce";

const Form = dynamic(() => import("../../global/form/Form"));

function ContactUs({platform}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 300);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const sliderImages = [
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/KPMG_one.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/AXA_two.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Gen_threee.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Data_four.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/JPM_fifth.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/KPMG_one.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/AXA_two.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Gen_threee.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Data_four.webp",
    "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/JPM_fifth.webp",
  ];

  // const formProps = useMemo(
  //   () => ({
  //     dataScience,
  //     dataScienceCounselling,
  //     radio,
  //     upSkillingHide,
  //     interstedInHide,
  //     dataScienceGeneric,
  //   }),
  //   [
  //     dataScience,
  //     dataScienceCounselling,
  //     radio,
  //     upSkillingHide,
  //     interstedInHide,
  //     dataScienceGeneric,
  //   ]
  // );

  return (
    <section className={styles.section}>
      <div className="containerWidth">
        {isMobile ? (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/mbl_shadows.webp"
            fill
            styles={{ objectFit: "cover" }}
            alt="Mobile Background"
            priority={false}
            quality={10}
          />
        ) : (
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/shades.webp"
            fill
            styles={{ objectFit: "cover" }}
            alt="Desktop Background"
            priority={false}
            quality={10}
          />
        )}

        <div className={styles.ContactUs}>
          <div className={styles.LeftSide}>
            <h2 className={styles.leftSideH2}>
              Get Ahead with Industry-Leading Courses <br />
            </h2>

            <div className={styles.conpara}>
              <p>
                <span className={styles.paraspan}>“</span>
                <br />I had a great learning experience at Learnbay. The
                faculties here are top notch. Right from enrollment to getting a
                good job, they keep putting enormous efforts for each and every
                candidate. Thanks to all the trainers, backend team.
              </p>
            </div>

            <div className={styles.leftpaerson}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/preksha-home.png"
                width={50}
                height={50}
                loading="lazy"
                alt="review"
                quality={40}
              />

              <p>
                Shravanthi A.
                <br />
                <span>Data Scientist @TCS</span>
              </p>
            </div>

            <div className={styles.slider}>
              <div className={styles.swiperslider}>
                {sliderImages.map((image, index) => (
                  <div className={styles.cardBox} key={index}>
                    <Image
                      src={image}
                      width={100}
                      height={140}
                      loading="lazy"
                      alt={`Slide ${index + 1}`}
                      quality={50}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Suspense fallback={<div>Loading Form...</div>}>
            <div className={styles.RightSide}>
              <p className={styles.NormalPForm}>
                Check Your <span className={styles.span}>Eligibility </span>
              </p>
              <Form platform={platform}/>
              {/* <Form {...formProps} /> */}
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactUs);
