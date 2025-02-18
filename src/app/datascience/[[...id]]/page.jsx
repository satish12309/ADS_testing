import React from "react";
import dynamic from "next/dynamic";
import { getPageData, generateStaticParams } from "@/utils/getDSPageData";
import Header from "@/app/components/course/hero/Header";
import BottomBar from "@/app/components/global/BottomBar/BottomBar";
import HRAnalyticsProjectSection from "@/app/components/course/projectSection/HRAnalyticsProjectSection";
import BFSIProjectSection from "@/app/components/course/projectSection/BFSIProjectSection";
const Practical = dynamic(() =>
  import("@/app/components/course/practical/Practical")
);
const ProgramSection = dynamic(
  () => import("@/app/components/course/programsection/programSection"),
  { ssr: false }
);
const AnimationNew = dynamic(() =>
  import("@/app/components/course/whyChoose/AnimationNew")
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
const CertificateSection = dynamic(() =>
  import("@/app/components/course/certificateSection/CertificateSection")
);
const DataAnalyticsCertificateSection = dynamic(() =>
  import("@/app/components/course/certificateSection/DataAnalyticsCertificateSection")
);

// Dynamic Meta Data
export async function generateMetadata({ params }) {
  const id = Array.isArray(params.id) ? params.id : [params.id];
  const pageData = await getPageData(id.join("/"));

  if (pageData.error) {
    return {
      title: "Error",
      description: "Page not found",
    };
  }

  const metadata = pageData.MetaHead || {};
  return {
    title: metadata.title || "Default Title",
    description:
      metadata.meta?.find((meta) => meta.name === "description")?.content ||
      "Default Description",
    icons: metadata.link?.find((link) => link.rel === "icon")?.href
      ? { icon: metadata.link.find((link) => link.rel === "icon").href }
      : undefined,
    other:
      metadata.meta?.map((meta) => ({
        name: meta.name,
        content: meta.content,
      })) || [],
    links:
      metadata.link?.map((link) => ({ rel: link.rel, href: link.href })) || [],
  };
}

export const viewport = "width=device-width, initial-scale=1, maximum-scale=1";

const Page = async ({ params }) => {
  const id = Array.isArray(params.id) ? params.id : [params.id];
  const pageData = await getPageData(id.join("/"));

  if (pageData.error) {
    return <div>{pageData.error}</div>;
  }

  //Dynamic Project Component for different url
  const projectSectionsMap = {
    "s2-hr-analytics": HRAnalyticsProjectSection,
    "s2-data-science-banking": BFSIProjectSection,
  };
  const ProjectSectionComponent =
    projectSectionsMap[id.join("/")] || ProjectSection;

  //Dynamic Certification Component for different url
  const DataAnalyticsUrls = [
    "bangalore/s2-data-analytics",
    "s2-data-analytics-generic",
    "pune/s2-data-analytics",
    "s2-data-analytics-job-assistance-generic",
    "s2-data-analytics-training-generic",
    "s2-data-analytics-syllabus-generic",
    "hyderabad/s2-data-analytics",
    "chennai/s2-data-analytics",
  ];
  const isDataAnalyticsCertificate =
  DataAnalyticsUrls.includes(id.join("/").toLowerCase());
  const CertificateComponent = isDataAnalyticsCertificate
    ? DataAnalyticsCertificateSection
    : CertificateSection;

  return (
    <main>
      <Header
        title={pageData.header?.title}
        orgTitle={pageData.header?.orgTitle}
        spanTag={pageData.header?.spanTag}
        spanIcon={pageData.header?.spanIcon}
        descrption={pageData.header?.descrption}
        collaborationImg={pageData.header?.collaborationImg}
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
      />
      <ProgramSection programSectionData={pageData.ProgramSection} />
      <Practical />
      <AnimationNew />
      <JobReadySection />
      <SyllabusSection
        sections={pageData.sections}
        brochureLink={pageData.brochureLink}
        brochurePdf={pageData.brochurePdf}
        downloadBrochure={true}
      />
      <CertificateComponent />
      <FeeContent
        Fee={pageData.FeeSection?.Fee}
        hybridemi1={pageData.FeeSection?.hybridemi1}
        hybridemi2={pageData.FeeSection?.hybridemi2}
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
      <ProjectSectionComponent />
      <NewSevenSection />
      <BottomBar />
    </main>
  );
};

export { generateStaticParams };
export default Page;
