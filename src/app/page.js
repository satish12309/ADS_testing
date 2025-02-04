import dynamic from "next/dynamic";

import HeroSection from "./components/home/heroSection/HeroSection";
const MobileTestimonial = dynamic(() =>
  import("./components/global/mobiletestimonal/MobileTestimonal")
);
const NewSevenSection = dynamic(() =>
  import("./components/global/newSevenSection/NewSevenSection")
);
const ReviewSlider = dynamic(() =>
  import("./components/global/reviewSlider/ReviewSlider")
);
const CLogo = dynamic(() => import("./components/home/Company/Clogo"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const ContactUs = dynamic(() =>
  import("./components/home/contactUs/ContactUs")
);
''
const InfinityLogo = dynamic(
  () => import("./components/home/Infinity/Infinity"),
  { ssr: false, loading: () => <div>Loading...</div> }
);
const KickStart = dynamic(() =>
  import("./components/home/KickStartSection/KickStart")
);
const NavbarHome = dynamic(() => import("./components/home/navbar/NavbarHome"));
const NewCourse = dynamic(() =>
  import("./components/home/NewCourseSection/NewCourse")
);
const Animation = dynamic(
  () => import("./components/home/whyChoose/Animation"),
  { ssr: false, loading: () => <div>Loading...</div> }
);

import styles from "./page.module.css";
import BottomBar from "./components/global/BottomBar/BottomBar";
import AnimationNew from "./components/course/whyChoose/AnimationNew";

export const metadata = {
  title: "Online IT Certification Courses and Professional Programs",
  description:
    "Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!",
  icons: {
    icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp",
  },
};
export default function Home() {
  return (
    <>
      <nav>
        <NavbarHome platform={true}/>
      </nav>
      <main className={styles.main}>
        <HeroSection downloadBrochure={true} platform={true}/>
        <KickStart />
        <NewCourse downloadBrochure={true}/>
        <InfinityLogo />
        <AnimationNew />
        <ReviewSlider showVideoYt={true} />
        <ContactUs platform={true}/>
        <CLogo />
        <MobileTestimonial platform={true}/>
        <NewSevenSection platform={true}/>
        <BottomBar platform={true}/>
      </main>
    </>
  );
}
