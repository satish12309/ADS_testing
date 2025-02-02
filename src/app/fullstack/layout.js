"use client";
import { useState, useEffect } from "react";
import DSAPopupWrapper from "../components/global/DSAPopup/DSAPopup";
import NavbarHome from "../components/home/navbar/NavbarHome";

export default function CourseLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000); // 4 seconds delay

    const handleScroll = () => {
      if (showPopup) return; // Prevent setting state if popup is already shown

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      const scrolledPercentage = (scrollTop + clientHeight) / scrollHeight;

      if (scrolledPercentage >= 0.6) {
        setShowPopup(true);
        clearTimeout(timer); // Clear the timeout if scroll condition is met first
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer); // Cleanup timeout on unmount
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll event
    };
  }, [showPopup]);

  return (
    <div>
      <header>
        <nav>
          <NavbarHome isDSA={true} DSAdownloadBrochure={true} />
        </nav>
      </header>

      <main>
        {showPopup && <DSAPopupWrapper />}
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
