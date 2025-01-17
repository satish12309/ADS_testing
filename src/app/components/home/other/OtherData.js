// data.js

export const otherData = {
    title: "Others Vs Learnbay",
    leftSide: [
      { label: "Training Mode", svgWidth: 110, svgHeight: 16 },
      { label: "Support", svgWidth: 100, svgHeight: 16 },
      { label: "Placement", svgWidth: 120, svgHeight: 16 },
      { label: "Faculty", svgWidth: 130, svgHeight: 16 },
      { label: "Real-Time Projects", svgWidth: 140, svgHeight: 16 },
    ],
    middleSide: [
      "100% Online & Hybrid (Online + Classroom)",
      "24/7 Student Support",
      "100% Placement Assistance",
      "Experienced Industry Professionals",
      "Practice with Live Projects & Team Management",
    ],
    rightSide: [
      "Only recorded class & few live online",
      "Limited Support Hours",
      "Limited Placement Support",
      "Academics and Trainers",
      "Simulated Projects",
    ],
    svgArrow: (width, height) => (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 123 16" fill="none">
        <path
          d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM122.707 8.70711C123.098 8.31658 123.098 7.68342 122.707 7.29289L116.343 0.928932C115.953 0.538408 115.319 0.538408 114.929 0.928932C114.538 1.31946 114.538 1.95262 114.929 2.34315L120.586 8L114.929 13.6569C114.538 14.0474 114.538 14.6805 114.929 15.0711C115.319 15.4616 115.953 15.4616 116.343 15.0711L122.707 8.70711ZM1 9L122 9V7L1 7L1 9Z"
          fill="url(#paint0_linear_862_107)"
        />
        <defs>
          <linearGradient id="paint0_linear_862_107" x1="1" y1="8.5" x2="122" y2="8.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#888888" stopOpacity="0" />
            <stop offset="1" stopColor="#888888" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };
  