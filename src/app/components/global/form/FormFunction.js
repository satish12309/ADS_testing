const getEndPoint = (pathname, event) => {
  let endPoint = "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4";
  if (event) {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }

  if (pathname === "/organic") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (pathname === "/campaign/dmd") {
    endPoint = "https://getform.io/f/773095f3-b69e-4071-9ffb-b2d6c6261891";
  }
  if (pathname === "/ads/generic") {
    endPoint = "https://getform.io/f/c803e186-7053-4f33-9f49-909cc11e32bc";
  }

  if (pathname === "/referrals") {
    endPoint = "https://getform.io/f/a876146f-2c5d-4a1f-b177-f993db3d7aaf";
  }

  if (
    pathname === "/learning-learnbay" ||
    pathname === "/learning-learnbay-select"
  ) {
    endPoint = "https://getform.io/f/fd68bf82-a911-435e-9719-7c134a89a731";
  }
  if (pathname === "/resume-builder") {
    endPoint = "https://getform.io/f/fd9da107-864c-4617-a52a-7e112297efa6";
  }
  if (
    pathname ===
    "/cloud&devops/s3-cloud-computing-and-devOps-certification-program"
  ) {
    endPoint = "https://getform.io/f/785b3539-e7ce-497c-a975-0dc288c3286c";
  }
  return endPoint;
  // ... (Logic to determine the endpoint based on the router)
};

const redirectionThankYou = (
  pathname,
  fullStack,
  event,
  dataScience,
  dataScienceGeneric,
  dataScienceCounselling,
  redirection
) => {
  let routerPath = "";
  if (pathname === "/learning-learnbay ") {
    routerPath = "/learning-learnbay-select";
  }
  if (pathname === "/learning-learnbay-select") {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "/data-science-courses") {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "resume-builder") {
    routerPath = "Thank-you-counselling";
  }
  if (pathname === "/campaign/dmd") {
    routerPath = "https://course.learnbay.co/Thank-you";
  }
  if (fullStack) {
    routerPath = "/Thank-you-fsd";
  }
  if (event) {
    routerPath = "/event/Thank-You-event";
  }
  if (dataScience) {
    routerPath = "/Thank-you";
  }
  if (dataScienceGeneric) {
    routerPath = "https://course.learnbay.co/Thank-you";
  }
  if (dataScienceCounselling) {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "/organic" || pathname === "/referrals") {
    routerPath = "/Thank-you-counselling";
  }
  if (pathname === "/Thank-you") {
    setToggle(false);
    setAlertMSG("Form Submitted successfully");
  }
  return routerPath;
};

const getValidation = (radio, interstedInHide, Domain, query) => {
  console.log(
    radio,
    interstedInHide,
    query.platform,
    query.Domain,
    "asdbfvsvcasfvvcfvcfqwerwe"
  );
  if (query.phone === "" || query.phone === undefined) {
    return true;
  } else if (radio === true && interstedInHide === true && Domain === true) {
    if (query.interstedIn === "Interested In") {
      return true;
    } else if (query.interstedIn === "") {
      return true;
    } else if (query.platform === "Select an option") {
      return true;
    } else if (query.platform === "") {
      return true;
    } else if (query.Domain === "") {
      return true;
    } else if (query.Domain === "Select Domain") {
      return true;
    } else {
      return false;
    }
  } else if (
    interstedInHide === true &&
    (!radio === undefined ||
      (radio === false && !Domain === undefined) ||
      Domain === false)
  ) {
    if (query.interstedIn === "Interested In") {
      return true;
    } else if (query.interstedIn === "") {
      return true;
    } else return false;
  } else if (
    radio === true &&
    (!interstedInHide === undefined ||
      (interstedInHide === false && !Domain === undefined) ||
      Domain === false)
  ) {
    if (query.platform === "Select an option") {
      return true;
    } else if (query.platform === "") {
      return true;
    } else if (query.platform === undefined) {
      return true;
    } else return false;
  } else if (
    Domain === true &&
    (!interstedInHide === undefined || interstedInHide === false,
    !radio === undefined || radio === false)
  ) {
    if (query.Domain === "Select Domain") {
      return true;
    } else if (query.Domain === "") {
      return true;
    } else if (query.Domain === undefined) {
      return true;
    } else return false;
  } else if (
    interstedInHide === false ||
    interstedInHide === undefined ||
    radio === false ||
    radio === undefined ||
    Domain === false ||
    Domain === undefined
  ) {
    return false;
  }
};
const getFormFields = (radio, google, referrals, Domain, interstedInHide) => {
  return [
    // ... (previous form fields)
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your Full Name",
      showField: true,
    },
    {
      name: "email",
      label: "E-Mail",
      type: "email",
      required: true,
      placeholder: "Enter your Email",
      showField: true,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "phone",
      inputStyle: {
        borderRadius: "6px",
        border: "0",
      },
      containerStyle: {
        borderRadius: "6px",
        border: "1px solid #D3D3D3",
      },
      inputProps: {
        name: "phone",
        required: true,
      },
      required: true,
      placeholder: "Enter Phone Number",
      showField: true,
    },
    {
      name: "WAdropdown",
      label: "WAdropdown",
      type: "select",
      options: [
        { value: "Select One", label: "Select One", hidden: true },
        { value: "Calls", label: "Calls" },
        { value: "WhatsApp", label: "WhatsApp" },
        { value: "Referral", label: "Referral" },
        { value: "Krishna Sir", label: "Krishna Sir" },
        { value: "Walk-In", label: "Walk-In" },
        { value: "GMB", label: "GMB" },
      ],
      required: google, // Conditionally required
      showField: google, // Conditionally render the field
    },
    {
      name: "WAdropdown",
      label: "WAdropdown",
      type: "select",
      options: [
        { value: "Referral", label: "Referral" },
        { value: "Krishna Sir", label: "Krishna Sir" },
      ],
      required: referrals, // Conditionally required
      showField: referrals, // Conditionally render the field
    },
    {
      name: "currentDesignation",
      label: "Job Title",
      type: "text",
      placeholder: "Current Designation",
      required: interstedInHide, // Conditionally required
      showField: interstedInHide, // Conditionally render the field
    },
    // {
    //   name: "interstedIn",
    //   label: "Interested In",
    //   type: "select",
    //   options: [
    //     { value: "Interested In", label: "Interested In", hidden: true },
    //     {
    //       value: "Master Degree Program",
    //       label: "Master Degree Program",
    //     },
    //     {
    //       value: "Certification Program",
    //       label: "Certification Program",
    //     },
    //   ],
    //   required: interstedInHide,
    //   showField: interstedInHide,
    // },
    {
      name: "WorkExperience",
      label: "Select Work Experience ",
      type: "select",
      options: [
        {
          value: "Select Work Experience",
          label: "Select Work Experience",
          hidden: true,
        },
        {
          value: "Freshers",
          label: "Freshers",
        },
        {
          value: "1-3 years",
          label: "1-3 years",
        },
        {
          value: "3-5 years",
          label: "3-5 years",
        },
        {
          value: "5-7 years",
          label: "5-7 years",
        },
        {
          value: "7+ years",
          label: "7+ years",
        },
      ],
      required: interstedInHide,
      showField: interstedInHide,
    },

    {
      name: "platform",
      label: "Course Preference",
      type: "select",
      options: [
        { value: "Select an option", label: "Select an option", hidden: true },
        {
          value: "Data Science & AI Courses",
          label: "Data Science & AI Courses",
        },
        {
          value: "Cloud Computing & DevOps ",
          label: "Cloud Computing & DevOps ",
        },
        {
          value: "Master in CS: Data Science and AI",
          label: "Master in CS: Data Science and AI",
        },
      ],
      required: radio, // Conditionally required
      showField: radio, // Conditionally render the field
    },

    {
      name: "Domain",
      label: "Select Domain",
      type: "select",
      options: [
        { value: "Select Domain", label: "Select Domain", hidden: true },
        {
          value: "Banking and Finance (BFSI) and IT",
          label: "Banking and Finance (BFSI) and IT",
        },
        {
          value: "Supplychain, Retail and Ecommerce",
          label: "Supplychain, Retail and Ecommerce",
        },
        {
          value: "Healthcare and Pharma",
          label: "Healthcare and Pharma",
        },
        {
          value: "Manufacturing and Automotive",
          label: "Manufacturing and Automotive",
        },
        {
          value: "Human Resource (HR)",
          label: "Human Resource (HR)",
        },
        {
          value: "Marketing and Sales",
          label: "Marketing and Sales",
        },
        {
          value: "Others",
          label: "Others",
        },
      ],
      required: Domain, // Conditionally required
      showField: Domain, // Conditionally render the field
    },
  ];
};

export { getEndPoint, redirectionThankYou, getValidation, getFormFields };
