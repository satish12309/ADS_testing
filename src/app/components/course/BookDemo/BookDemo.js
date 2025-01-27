"use client"
import React, { useCallback, useState } from "react";
import styles from "./BookDemo.module.css";
import Image from "next/image";
import PathSteps from "../../../../../public/asset/PathSteps.png";
import Classroom from "../../../../../public/asset/Classroom.png";
import Button from "../../global/button/Button";
import LaptopCoding from "../../../../../public/asset/LaptopCoding.png";
import DSADemoMan from "../../../../../public/asset/DSADemoMan.png";
import Popup from "../../global/popup/Popup";
import Form from "../../global/form/Form";

const BookDemo = ({DSAdownloadBrochure}) => {
    const [applyCounselingPopup, setApplyCounselingPopup] = useState(false);

    const applyCounselingShow = useCallback(() => {
        setApplyCounselingPopup(true);
      }, []);
  return (
    <section className={styles.demoContainer}>
        <Popup
          trigger={applyCounselingPopup}
          setTrigger={setApplyCounselingPopup}
          className="popupModal"
        >
          <div className="RightPopup">
            <h5>Book A Demo Session</h5>
            <Form
              DSAdownloadBrochure={applyCounselingPopup ? DSAdownloadBrochure : false}
            />
          </div>
        </Popup>
      <div className="containerWidth">
        <div className={styles.contentsWrapper}>
          <div className={styles.leftSection}>
            <h2>Book Your Demo Class Now!</h2>
            <div className={styles.leftSectionDescription}>
              <p>
                The demo session provides an overview of our Data Structures,
                Algorithms, and System Design Program.
              </p>
              <p>It’s an opportunity to understand the :</p>
            </div>
            <div className={styles.demoPointsWrapper}>
              <div className={styles.demoPoint}>
                <div className={styles.PathStepsImg}>
                  <Image src={PathSteps} width={40} height={40} />
                </div>
                <p>Course</p>
                <p>Structure</p>
              </div>
              <div className={styles.demoPoint}>
                <div className={styles.ClassroomImg}>
                  <Image src={Classroom} width={40} height={40} />
                </div>
                <p>Interact</p>
                <p>with mentors</p>
              </div>
              <div className={styles.demoPoint}>
                <div className={styles.LaptopCodingImg}>
                  <Image src={LaptopCoding} width={40} height={40} />
                </div>
                <p>Live</p>
                <p>Practice class</p>
              </div>
            </div>
            <div onClick={applyCounselingShow} style={{display:"flex"}}>
              <Button text="Request a Demo Class" greenButton={true} />
            </div>
          </div>
          <div className={styles.rightSection}>
            <Image src={DSADemoMan} width={340} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
