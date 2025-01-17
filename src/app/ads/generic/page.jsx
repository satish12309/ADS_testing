import Home from "@/app/page";
import React from "react";

export const metadata = {
  title: "Online IT Certification Courses and Professional Programs",
  description:
    "Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!",
  icons: {
    icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp",
  },
  additionalMetaTags: [
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "data science course, data science training, data science institute in India, best data science institute, data scientist course, data scientist certification, data science training institute, advanced data science course, data science course with Placement Assistance, data science course with IBM certification",
    },
  ],
  canonical: "https://www.learnbay.co/",
};

const Generic = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Generic;
