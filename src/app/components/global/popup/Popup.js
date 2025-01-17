import React, { memo } from "react";
import styles from "./Popup.module.css";
import { IoCloseSvg } from "@/Data/svgData/Io5";
import Image from "next/image";

const Popup = memo((props) => {
  if (props.price) color = "white";
  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        <div className="image">
          <Image
            src="https://learnbay-s3.s3.us-east-2.amazonaws.com/web/s3_main/popup_newImgs.webp"
            height={430}
            width={330}
            priority
            quality={50}
          />
        </div>
        <IoCloseSvg
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
});

export default Popup;
