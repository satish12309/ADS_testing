"use client"
import { useState, useEffect } from "react";
import DSAPopupWrapper from "../components/global/DSAPopup/DSAPopup";
import NavbarHome from "../components/home/navbar/NavbarHome";

export default function CourseLayout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div>
      <header>
        <nav>
          <NavbarHome isDSA={true} DSAdownloadBrochure={true} />
        </nav>
      </header>

      <main>
        {/* {showPopup && <DSAPopupWrapper />} */}
        <DSAPopupWrapper />
        <div className="content">{children} </div>
      </main>

      {/* <footer>
        <p>© 2024 Your Course Platform. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
