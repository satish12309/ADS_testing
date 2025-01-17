"use client";

import React, { useState, useMemo, useCallback, memo } from "react";
import Styles from "./MobileTestimonal.module.css";
import Image from "next/image";
import Button from "@/app/components/global/button/Button";
import dynamic from "next/dynamic";
import { testimonials } from "./MobileTestimonialData";
import {
  MdOutlineKeyboardArrowLeftSvg,
  MdOutlineKeyboardArrowRightSvg,
} from "@/Data/svgData/MDIcons";
import { debounce } from "@/utils/debounce";
const Form = dynamic(() => import("@/app/components/global/form/Form"), {
  loading: () => <div>Loading...</div>,
});
const Popup = dynamic(() => import("@/app/components/global/popup/Popup"), {
  loading: () => <div>Loading...</div>,
});

const MobileTestimonial = memo(() => {
  const [popups, setPopups] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(testimonials.length / 3)
  );

  //   const [activeIndex, setActiveIndex] = useState(0);

  const debouncedNextClick = debounce(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, 300);

  const debouncedPrevClick = debounce(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, 300);

  const handleUserClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const calculateTransform = useMemo(() => {
    const centerOffset = Math.floor((5 - 1) / 2);
    const offset = activeIndex * 100;
    const translateValue = Math.max(
      Math.min(offset, 0),
      -((testimonials.length - 5) * 100)
    );
    return `translateX(${translateValue}%)`;
  }, [activeIndex, testimonials.length]);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <section className={Styles.section}>
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form />
          </div>
        </Popup>
        <div className={Styles.TestimonialContainer}>
          <div className={Styles.FirstDiv}>
            <h4>
              <span>Insider glimpses:</span> Click to see real conversations
              with our learners
            </h4>
            <div className={Styles.leftSlide}>
              <div onClick={debouncedPrevClick}>
                {" "}
                <MdOutlineKeyboardArrowLeftSvg className={Styles.icons} />{" "}
              </div>
              <div
                className={Styles.sliderUser}
                style={{ transform: calculateTransform }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`${Styles.UserImage} ${
                      activeIndex === index ? Styles.active : Styles.faded
                    }`}
                    style={{
                      transform: `translateX(-${activeIndex * 100}%)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                    onClick={() => handleUserClick(index)}
                  >
                    <Image
                      width="100"
                      height="100"
                      src={testimonial.UserImage}
                      alt={`User ${testimonial.UserImage}`}
                      className={Styles.imgBorder}
                      priority
                      quality={50}
                    />
                  </div>
                ))}
              </div>
              <div onClick={debouncedNextClick}>
                <MdOutlineKeyboardArrowRightSvg className={Styles.icons} />
              </div>
            </div>
            <div className={Styles.HideInMobile}>
              <div className={Styles.btnWrapper} onClick={popupShow}>
                <Button
                  className={Styles.Btn}
                  OrangeButton={true}
                  text="Free Career Counselling from Experts"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.MobileReviewImageContainer}>
          <Image
            width="363"
            height="500"
            src={testimonials[activeIndex].MobileReviewImage}
            alt={`User ${testimonials[activeIndex].UserImage}`}
            loading="lazy"
            quality={50}
          />
        </div>
      </section>
      <div className={Styles.ShowInMobile}>
        <div className={Styles.btnWrapper} onClick={popupShow}>
          <Button
            className={Styles.Btn}
            OrangeButton={true}
            text="Free Career Counselling from Experts"
          />
        </div>
      </div>
    </>
  );
});
export default MobileTestimonial;
