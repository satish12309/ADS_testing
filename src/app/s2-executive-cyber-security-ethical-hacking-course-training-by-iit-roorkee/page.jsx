import React from "react";
import dynamic from "next/dynamic"; 
import {
  getPageData,
  generateStaticParams,
} from "@/utils/getCyberSecurityPageData";
import Header from "@/app/components/course/hero/Header";
import BottomBar from "@/app/components/global/BottomBar/BottomBar";

const CyberSecurityAnimationNew = dynamic(
  () => import("../components/course/whyChoose/CyberSecurityAnimationNew"),
  { ssr: false }
);
const Practical = dynamic(() =>
  import("@/app/components/course/practical/Practical")
);
const ProgramSection = dynamic(
  () => import("@/app/components/course/programsection/programSection"),
  { ssr: false }
);
const ReviewSlider = dynamic(() =>
  import("@/app/components/global/reviewSlider/ReviewSlider")
);
const NewSevenSection = dynamic(() =>
  import("@/app/components/global/newSevenSection/NewSevenSection")
);
const JobReadySection = dynamic(() =>
  import("@/app/components/course/jobReadySection/JobReadySection")
);
const MentorsSection = dynamic(
  () => import("@/app/components/course/mentor/Mentor"),
  { ssr: false }
);
const SyllabusSection = dynamic(
  () => import("@/app/components/course/syllabus/SyllabusSection"),
  { ssr: false }
);
const FeeContent = dynamic(() =>
  import("@/app/components/course/feeSection/FeeSection")
);
const ProjectSection = dynamic(
  () => import("@/app/components/course/projectSection/ProjectSection"),
  { ssr: false }
);

const CyberSecurityCertificateSection = dynamic(
  () =>
    import(
      "../components/course/certificateSection/CyberSecurityCertificateSection"
    ),
  { ssr: false }
);

export const metadata = {
  title: "Best Cyber Security & Ethical Hacking Course | IITR Certification",
  description:
    "Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats.",
  keywords: [
    "cyber security and ethical hacking course",
    "cyber security and ethical hacking",
    "cyber hacking course",
    "cyber security ethical hacking course",
    "cyber security and hacking courses",
    "cyber security ethical hacking certification",
  ],
  robots: "index, follow",
  icons: {
    icon: "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp",
  },
  alternates: {
    canonical:
      "https://www.learnbay.co/cyber-security/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee",
  },
  openGraph: {
    url: "https://www.learnbay.co/fullstack/generative-ai-course-for-professionals",
    title: "Best Cyber Security & Ethical Hacking Course | IITR Certification",
    siteName: "learnbay.co",
    type: "article",
    description:
      "Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats.",
    images: [
      {
        url: "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100",
        width: 256,
        height: 100,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Learnbay",
    creator: "@Learnbay",
    title: "Best Cyber Security & Ethical Hacking Course | IITR Certification",
    description:
      "Become an expert in cyber security & ethical hacking with Learnbay's Executive Program. Master the skills to secure networks & data from cyber threats.",
    images: [
      "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100",
    ],
  },
};


const page = async () => {
  const pageData = await getPageData();

  if (pageData.error) {
    return <div>{pageData.error}</div>;
  }
  return (
    <>
      <main>
        <Header
          title={pageData.header?.title}
          orgTitle={pageData.header?.orgTitle}
          spanTag={pageData.header?.spanTag}
          spanIcon={pageData.header?.spanIcon}
          descrption={pageData.header?.descrption}
          collaborationImg={pageData.header?.collaborationImg}
          subtitle={pageData.header?.subtitle}
          applicationIcon={pageData.header?.applicationIcon}
          BotWidth={pageData.header?.BotWidth}
          BotHeight={pageData.header?.BotHeight}
          ProgramIcon={pageData.header?.ProgramIcon}
          trainingIcon={pageData.header?.trainingIcon}
          CloseDes={pageData.header?.CloseDes}
          CloseBotDate={pageData.header?.CloseBotDate}
          DurationBot={pageData.header?.DurationBot}
          DurationBotDate={pageData.header?.DurationBotDate}
          TrainingBot={pageData.header?.TrainingBot}
          TrainingBotFormat={pageData.header?.TrainingBotFormat}
          downloadBrochure={true}
          backgroundImg={pageData.header?.backgroundImg}
          isCyberSecurity={true}
        />
        <ProgramSection programSectionData={pageData.ProgramSection} />
        <Practical />
        <CyberSecurityAnimationNew />
        <JobReadySection />
        <SyllabusSection
          sections={pageData.sections}
          brochureLink={pageData.brochureLink}
          brochurePdf={pageData.brochurePdf}
          downloadBrochure={true}
        />
        <CyberSecurityCertificateSection />
        <FeeContent
          Fee={pageData.FeeSection?.Fee}
          hybridFee={pageData.FeeSection?.hybridFee}
          adsHide={pageData.FeeSection?.adsHide}
          dataScience={pageData.FeeSection?.dataScience}
          WeekdayDate={pageData.FeeSection?.WeekdayDate}
          WeekendDate={pageData.FeeSection?.WeekendDate}
          WeekdayTime={pageData.FeeSection?.WeekdayTime}
          WeekendTime={pageData.FeeSection?.WeekendTime}
          CutFee={pageData.FeeSection?.CutFee}
          FeeEmi={pageData.FeeSection?.FeeEmi}
          hybridEmi={pageData.FeeSection?.hybridEmi}
          weekday={pageData.FeeSection?.weekday}
          weekend={pageData.FeeSection?.weekend}
          weekdaybatch={pageData.FeeSection?.weekdaybatch}
          weekendbatch={pageData.FeeSection?.weekendbatch}
          setPopups={pageData.FeeSection?.setPopups}
          devopfee={pageData.FeeSection?.devopfee}
          emiPopupProps={pageData.FeeSection?.emiPopupProps}
          emiType={pageData.FeeSection?.emiType}
          duration1={pageData.FeeSection?.duration1}
          totalAmount1={pageData.FeeSection?.totalAmount1}
          monthlyPayment1={pageData.FeeSection?.monthlyPayment1}
          greenDown1={pageData.FeeSection?.greenDown1}
          duration2={pageData.FeeSection?.duration2}
          totalAmount2={pageData.FeeSection?.totalAmount2}
          monthlyPayment2={pageData.FeeSection?.monthlyPayment2}
          greenDown2={pageData.FeeSection?.greenDown2}
          isHybrid={pageData.FeeSection?.isHybrid}
        />
        <ReviewSlider showVideoYt={false} />
        <MentorsSection />
        <ProjectSection />
        <NewSevenSection />
        <BottomBar />
      </main>
    </>
  );
};
export default page;
