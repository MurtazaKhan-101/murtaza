import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  // backend,
  creator,
  // web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
  cb,
  // koponx,
  // GS,
  ziv,
  bud,
  nest,
  bp,
  cont,
  ser1,
  launching,
  python,
  firebase,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Django Developer",
    icon: ser1,
  },
  {
    title: "NextJs Developer",
    icon: mobile,
  },
  {
    title: "Deployemnt",
    icon: launching,
  },
  {
    title: "Design Ideas",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postgresql",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer",
    companyName: "Web Squads",
    icon: cb,
    iconBg: "#383E56",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Tested and deployed scalable and highly available software products.",
      "Built databases and table structures for web applications.",
      "Enhanced user experience by developing and implementing responsive web designs.",
      "Worked closely with clients to gather requirements and translate them into technical specifications for implementation.",
    ],
  },
  // {
  //   title: "Full Stack Developer",
  //   companyName: "Freelance",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Aug 2022 - present",
  //   points: [
  //     "Expertise in React Native for mobile app development with proficiency in MongoDB, Express.js, and Node.js for backend technologies",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-platform compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Front-end mobile app developer",
  //   companyName: "V3 Solution",
  //   icon: tesla,
  //   iconBg: "#383E56",
  //   date: "Dec 2021 - Aug 2022",
  //   points: [
  //     "Specialized in front-end design, particularly using React Native.",
  //     "Focused on crafting visually appealing and user-friendly mobile applications.",
  //     "Collaborated closely with UX/UI designers to translate design concepts into engaging and responsive user interfaces for iOS and Android platforms.",
  //   ],
  // },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Zivrox",
    description:
      "A network marketing website where people connect with each other and make money",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Chatify",
        color: "pink-text-gradient",
      },
      {
        name: "Pusher-Client",
        color: "blue-text-gradient",
      },
    ],
    image: ziv,
    sourceCodeLink: "https://www.zivrox.com/",
  },
  {
    name: "StudyBud",
    description:
      "A social media app where people can create chat rooms and chat about that room’s topic.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Django Rest Framework",
        color: "pink-text-gradient",
      },
    ],
    image: bud,
    sourceCodeLink: "https://studybuddev.herokuapp.com/",
  },
  {
    name: "Chat-Nest",
    description:
      "The application supports both individual and group chats, multimedia messaging, and user profile management, making it a versatile tool for real-time interaction.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Pusher",
        color: "pink-text-gradient",
      },
    ],
    image: nest,
    sourceCodeLink: "https://chat-nest-nu.vercel.app/",
  },
  {
    name: "Binary Pool",
    description:
      "A Desktop Application built using C# and .NET framework for the surveillance of the IT labs at University with SQL as the Database and Python for the barcode authentication",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Framework",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: bp,
    sourceCodeLink: "https://github.com/MurtazaKhan-101/Binary-Pool",
  },
  {
    name: "Arcade Mania",
    description:
      "A Desktop Application built using core Data Structure Concepts in C++ including Trees, List and Arrays containing arcade games.",
    tags: [
      {
        name: "C++",
        color: "pink-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "blue-text-gradient",
      },
     
    ],
    image: cont,
    sourceCodeLink: "https://github.com/MurtazaKhan-101/Arcade-Mania",
  },
];

export { services, technologies, experiences, testimonials, projects };