import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  achnet,
  storylinez,
  aviac,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Javascript Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Tescra Software Pvt. Ltd.",
    icon: achnet,
    iconBg: "#FFF",
    date: "Oct 2024 - Present",
    points: [
      "Built and scaled an AI-driven recruitment platform with automated job postings, assessments, and AI-powered interview rounds, boosting selection accuracy by 10 % and hiring efficiency by 20 % .",
      "Automated the entire recruitment lifecycle, from job creation to candidate progress tracking, reducing manual intervention across all stages.",
      "Engineered a master/slave video synchronization architecture (drift correction, reusable RecordingPlayer and FullscreenPlayer components) using custom hooks, resolving critical iOS Safari playback issues(user - activation gesture chains, playsinline handling) in the AI interview review flow.",
      "Implemented plan management features allowing users to view, upgrade, or downgrade subscriptions, enhancing overall user experience.",
      "Architected Module Federation setup, enabling seamless cross communication between micro frontends.",
      "Migrated frontend build from Webpack to Vite and adopted PNPM, reducing build time by 35% and disk usage by 50%.",
      "Introduced Test-Driven Development with Jest, cutting production issues by 50% and improving code reliability.",
      "Migrated from React to Preact, created a reusable component library, unified the design system, and helped scale the product from MVC to a production - ready version.",
    ],
  },
  {
    title: "FullStack Developer - Freelancing",
    company_name: "StoryLinez",
    icon: storylinez,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Dec 2024",
    points: [
      "Designed 200+ ad templates and product wireframes in Figma, focusing on visual consistency and user-friendly design.",
      "Developed the frontend from scratch using React.js and Tailwind CSS, implementing responsive UI, routing, and pagination for smooth navigation.",
      "Rendered dynamic JSX components by fetching backend data, enabling real-time updates and interactive features.",
      "Built modular components using React hooks, improving code efficiency, and collaborated on GitHub for version control.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Aviac Technologies Pvt. Ltd.",
    icon: aviac,
    iconBg: "#FFF",
    date: "June 2023 – August 2023",
    points: [
      "Developed two immersive 3D websites using React Three Fiber, React Three Drei, and Lamina, integrating .glb models via gltfjsx and implementing scroll - based animations with GSAP and React hooks like useLayoutEffect and useRef.",
      "Implemented interactive model behavior using OrbitControls and getAzimuthalAngle to trigger JSX content based on camera angle during horizontal drag, leveraging useFrame, useState, and dynamic angle detection to enhance user engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ritik proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ritik does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ritik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IR Cell",
    description:
      "Official International Relations Cell Website of IITH in which users can explore the campus of IITH and search for International Scholarships. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AOS",
        color: "green-text-gradient",
      },
      {
        name: "reacthooks",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ir-cell.netlify.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A clone OTT platform where users can watch the trailers of the movies listed in the format of Netflix.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tmdbapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://netflix-e4b01.web.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard website that allows users to track the daily, monthly, yearly sales of the company and the other users and products of the company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "material/mui",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://admin-frontend-tp54.onrender.com/dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
