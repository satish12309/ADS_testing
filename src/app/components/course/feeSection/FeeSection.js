"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./feeSection.module.css";
import FeeSectionData from "./FeeSectionData";
// import Modal from "react-modal";
const PopupContent = dynamic(() => import("../../global/popup/PopupContent"), {
  loading: () => <p>Loading...</p>,
});
const Emipopup = dynamic(() => import("./EmiPopup"), {
  ssr: false,
  loading: () => <p>Loading EMI options...</p>,
});
const Button = dynamic(() => import("../../global/button/Button"));

const FeeContent = ({
  Fee,
  FeeEmi,
  hybridFee,
  hybridEmi,
  emiType,
  duration1,
  totalAmount1,
  monthlyPayment1,
  greenDown1,
  duration2,
  totalAmount2,
  monthlyPayment2,
  greenDown2,
  isHybrid,
  hybridemi1,
  hybridemi2,
}) => {
  const [popups, setPopups] = useState(false);
  const [emiPopupIsOpen, setEmiPopupIsOpen] = useState(false);
  const [hybridemiPopupIsOpen, setHybridEmiPopupIsOpen] = useState(false);

  // const popupShow = useCallback(() => {
  //   setPopups(true);
  // }, []);

  // const openEmiPopup = useCallback(() => {
  //   setEmiPopupIsOpen(true);
  // }, []);

  // const closeEmiPopup = useCallback(() => {
  //   setEmiPopupIsOpen(false);
  // }, []);
  const togglePopup = useCallback(() => setPopups((prev) => !prev), []);
  const toggleEmiPopup = useCallback(
    () => setEmiPopupIsOpen((prev) => !prev),
    []
  );
  const toggleHybridEmiPopup = useCallback(
    () => setHybridEmiPopupIsOpen((prev) => !prev),
    []
  );

  const { liveClasses, hybridClasses } = FeeSectionData.feeSection;

  return (
    <div className={styles.feesmain}>
      <div className="containerWidth">
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Apply For Counselling"
        />
        <h2>Course Fee</h2>
        <div className={styles.mainContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.firstContainer}>
              <h4 className={styles.headOrange}>{liveClasses.title}</h4>
              <p className={styles.firstP}>Benefits :</p>
              <div className={styles.iconDiv}>
                {liveClasses.benefits.map((item, index) => (
                  <div className={styles.innerIconDiv} key={index}>
                    <Image
                      src={liveClasses.imgSrc}
                      alt={liveClasses.imgAlt}
                      width="45"
                      height="45"
                      loading="lazy"
                      quality={40}
                    />
                    <p className={styles.iconContent}>{item}</p>
                  </div>
                ))}
              </div>
              <div className={styles.feeContentContainer}>
                <div className={styles.border}>
                  <p>Program Fee</p>
                  <h4>
                    {Fee}
                    <span> + 18% GST</span>
                  </h4>
                </div>
                <p>Pay in easy EMIs starting as low as</p>
                <h4>{FeeEmi}</h4>

                <div className={styles.emiButton} onClick={toggleEmiPopup}>
                  <Button text="Check EMI Options" />
                </div>
              </div>
            </div>
            {isHybrid && (
              <div className={styles.secondContainer}>
                {/* <div className={styles.starRight}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/star_right.webp"
                  alt="Zest"
                  width="590"
                  height="525"
                  loading="lazy"
                  quality={40}
                />
              </div> */}
                <div className={styles.divTop}>
                  <h4 className={styles.headBlue}>{hybridClasses.title}</h4>
                  <span>{hybridClasses.tag}</span>
                </div>
                <p className={styles.fadedText}>Benefits :</p>
                <div className={styles.iconDiv}>
                  {hybridClasses.benefits.map((item, index) => (
                    <div className={styles.innerIconDiv} key={index}>
                      <Image
                        src={hybridClasses.imgSrc}
                        alt={hybridClasses.imgAlt}
                        width="45"
                        height="45"
                        loading="lazy"
                        quality={40}
                      />
                      <p className={styles.iconContent}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.feeSectionContainer}>
                  <div className={styles.feeContentContainer}>
                    <div className={styles.border}>
                      <p>Program Fee</p>
                      <h4>
                        {hybridFee}
                        <span> + 18% GST</span>
                      </h4>
                    </div>
                    <p>Pay in easy EMIs starting as low as</p>
                    <h4 style={{ color: "#0072BC" }}>{hybridEmi}</h4>

                    <div
                      className={styles.emiButtonBlue}
                      onClick={toggleHybridEmiPopup}
                    >
                      <Button text="Check EMI Options" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.btnDown}>
            <div className={styles.btnone} onClick={togglePopup}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/Thumb_Icon+(1).webp"
                width={30}
                height={30}
                loading="lazy"
                alt="Python"
                quality={50}
              />
              Start Your Application
            </div>
          </div>
        </div>

        {/* Emi Popup */}
        {/* <Modal
          isOpen={emiPopupIsOpen}
          onRequestClose={closeEmiPopup}
          className={styles.Emipopup}
          overlayClassName={styles.Overlay}
          contentLabel="EMI Popup"
        > */}
        {(emiPopupIsOpen || hybridemiPopupIsOpen) && (
          <div className={styles.emiPopupWrapper}>
            <Emipopup
              emiType={emiType}
              duration1={duration1}
              totalAmount1={emiPopupIsOpen ? totalAmount1 : hybridFee}
              monthlyPayment1={emiPopupIsOpen ? monthlyPayment1 : hybridemi1}
              greenDown1={greenDown1}
              duration2={duration2}
              totalAmount2={emiPopupIsOpen ? totalAmount2 : hybridFee}
              monthlyPayment2={emiPopupIsOpen ? monthlyPayment2 : hybridemi2}
              greenDown2={greenDown2}
              closeEmiPopup={
                emiPopupIsOpen ? toggleEmiPopup : toggleHybridEmiPopup
              }
            />
            {/* </Modal> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeeContent;
