const getValidation = (formEntries) => {
  const errors = [];

  // Validate name
  if (!formEntries.name || formEntries.name.trim().length < 2) {
    errors.push("Please enter a valid name (at least 2 characters).");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formEntries.email || !emailRegex.test(formEntries.email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate phone number
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Validates international phone numbers
  if (!formEntries.phone || !phoneRegex.test(formEntries.phone)) {
    errors.push("Please enter a valid phone number.");
  }

  // Validate work experience
  if (!formEntries.WorkExperience || formEntries.WorkExperience === "Select Work Experience *") {
    errors.push("Please select your work experience.");
  }

  // Validate current designation
  if (!formEntries.currentDesignation || formEntries.currentDesignation.trim().length === 0) {
    errors.push("Please enter your current job title.");
  }

  // Validate course preference if applicable
  if (formEntries.platform && formEntries.platform === "Course Preference *") {
    errors.push("Please select a valid course preference.");
  }

  // Return errors if any, otherwise return null
  return errors.length > 0 ? errors.join(" ") : null;
};

const getFormFields = (platform) => {
  return [

    //name field
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Enter your Full Name *",
      showField: true,
    },

    //email field
    {
      name: "email",
      label: "E-Mail",
      type: "email",
      required: true,
      placeholder: "Enter your Email *",
      showField: true,
    },

    //phone field
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

    //current Designation field
    {
      name: "currentDesignation",
      label: "Job Title",
      type: "text",
      placeholder: "Current Designation *",
      required: true,
      showField: true,
    },

    //Work Experience field
    {
      name: "WorkExperience",
      label: "Select Work Experience *",
      type: "select",
      options: [
        {
          value: "Select Work Experience *",
          label: "Select Work Experience *",
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
      required: true,
      showField: true,
    },

    //Course Preference field
    {
      name: "platform",
      label: "Course Preference",
      type: "select",
      options: [
        { value: "Course Preference *", label: "Course Preference *", hidden: true },
        {
          value: "Data Science & AI Courses",
          label: "Data Science & AI Courses",
        },
        {
          value: "Cloud Computing & DevOps ",
          label: "Cloud Computing & DevOps ",
        },
        {
          value: "Data Structure Algorithms & System Design ",
          label: "Data Structure Algorithms & System Design ",
        },
        {
          value: "Cyber Security & Ethical Hacking ",
          label: "Cyber Security & Ethical Hacking ",
        },
        // {
        //   value: "Master in CS: Data Science and AI",
        //   label: "Master in CS: Data Science and AI",
        // },
      ],
      required: platform,
      showField: platform,
    },
  ];
};

export {getValidation, getFormFields };