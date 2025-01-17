"use client";
import { useEffect, useState } from "react";
import styles from "./BottomBar.module.css";
import PopupContent from "../popup/PopupContent";
import { MdOutlineFileDownloadSvg } from "@/Data/svgData/MDIcons";
import Button from "../button/Button";

function BottomBar() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    let heightToHideFrom = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <section className={isVisible ? styles.EightSection : styles.hide}>
        <PopupContent
          popups={popups}
          setPopups={setPopups}
          heading="Download Syllabus"
          downloadBrochure
        />
        <div>
          <p className={styles.career}>
            Learn industry-relevant skills and build a rewarding career
          </p>
        </div>
        <div onClick={popupShow} className={styles.btnInner}>
          <Button
            text="Download Syllabus"
            passIcon={<MdOutlineFileDownloadSvg className={styles.icon} />}
            outline={true}
            invert
          />
        </div>
      </section>
    </>
  );
}

export default BottomBar;
