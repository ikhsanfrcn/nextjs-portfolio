export type ProjectCardProps = {
  slug: string;
  title: string;
  caption: string;
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  technologies: string[];
  visuals: string[];
  github?: string;
  links?: { [key: string]: string }[]; 
  buttons?: { title: string; onClick: () => void; className?: string }[];
};

export const ProjectsData: ProjectCardProps[] = [
  {
    slug: "jobsdoors",
    title: "JobsDoors | Empowering Careers, Connecting Ambitions",
    caption: "Next.js · TypeScript · Express.js · PostgreSQL · Prisma ORM · NextAuth · Xendit · Cloudinary",
    description: "A scalable fullstack job board platform with multi-role support for job seekers, companies, and admins — featuring end-to-end hiring workflows, subscription-based monetization, PDF resume generation, skill assessments with badges, and real-time application tracking.",
    situation: "The goal was to design and build a production-grade job board platform that handles the full hiring lifecycle — from job discovery and applications to interview scheduling and offer management — while supporting premium subscriptions and automated workflows.",
    task: "As the project lead in a team of 3 fullstack developers, I was responsible for setting up and managing the Jira board — including sprint planning, task breakdown, and backlog management — while also contributing to both frontend and backend development covering authentication, role-based access control, job and company management, application tracking pipeline, subscription system, skill assessments, and an admin dashboard.",
    action: "Led project planning by structuring the development workflow in Jira, breaking down features into sprints and tasks to keep the team aligned. Built a RESTful API with Express.js v5 and Prisma ORM, implemented JWT-based auth with role-based access control, and integrated NextAuth v5 on the frontend. Set up Xendit payment gateway for subscription management, Cloudinary for file and image storage, Nodemailer for transactional emails, Puppeteer for PDF resume and certificate generation, and Node Cron for scheduled background tasks. The frontend was built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4, with Formik + Yup for form validation and Chart.js for analytics dashboards.",
    result: "Delivered a fully functional, multi-role platform covering the entire hiring workflow from application to offer. The system handled complex business logic including subscription tiers, automated email notifications, and dynamic PDF generation — demonstrating strong fullstack depth, project leadership, and production-ready architecture.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma ORM", "NextAuth", "Xendit", "Cloudinary", "Nodemailer", "Puppeteer", "JWT", "Node Cron"],
    visuals: [
      "/jd1.png",
      "/jd2.png",
      "/jd3.png",
    ],
    links: [
      { "preview": "https://jobsdoors.vercel.app" },
      { "github": "https://github.com/ikhsanfrcn/job-board-app" }
    ],
    buttons: [
      { title: "Live <~>", onClick: () => { window.open("https://jobsdoors.vercel.app", "_blank"); }, className: "border-primary hover:bg-[#C778DD]" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[0].slug}`; }, className: "border-grey text-grey hover:bg-[#ABB2BF]" }
    ]
  },
  {
    slug: "event-mgmt-platform-concerthubs",
    title: "Event Management Platform (ConcertHubs)",
    caption: "Next.js · TypeScript · Express.js · PostgreSQL · Prisma ORM · NextAuth · Xendit · Cloudinary",
    description: "A fullstack concert ticketing platform with dual-role support for customers and organizers — featuring event discovery, tiered ticketing, Xendit payment integration, a referral and loyalty points system, verified reviews, and dedicated dashboards for both roles.",
    situation: "The challenge was to build a platform that simplifies event creation and ticket sales for organizers, while giving customers a smooth end-to-end experience from discovery to ticket download — including a referral-based reward system to drive user growth.",
    task: "As part of a collaborative project built with a partner, I contributed across the full stack — handling backend API development, authentication, payment integration, and frontend pages including event discovery, ticketing flow, and dashboard features.",
    action: "Built a RESTful API with Express.js v5 and Prisma ORM, implemented JWT-based auth with email verification, and integrated NextAuth v5 for session management on the frontend. Set up Xendit payment gateway with webhook handling for transaction status updates, Cloudinary for image uploads, and Nodemailer with Handlebars for transactional emails. Implemented custom referral logic with loyalty points and expiry, seat-limited ticket tiers, and role-based dashboards with Recharts for revenue visualization. Frontend built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4.",
    result: "Delivered a fully functional ticketing platform supporting the complete event lifecycle — from creation to payment and ticket download. The referral and loyalty system added a layer of user engagement mechanics, while the dual-role dashboard gave organizers clear visibility into revenue and attendance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma ORM", "NextAuth", "Xendit", "Cloudinary", "Nodemailer", "JWT", "Recharts", "Framer Motion"],
    visuals: [
      "/concerthubs.webp",
      "/concerthubs2.webp",
      "/concerthubs3.webp",
      "/concerthubs4.webp",
      "/concerthubs5.webp"
    ],
    links: [
      { "preview": "https://concerthubs.vercel.app" },
      { "github": "https://github.com/ikhsanfrcn/concerthub" }
    ],
    buttons: [
      { title: "Live <~>", onClick: () => { window.open("https://concerthubs.vercel.app", "_blank"); }, className: "border-primary hover:bg-[#C778DD]" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[1].slug}`; }, className: "border-grey text-grey hover:bg-[#ABB2BF]" }
    ]
  },
  {
    slug: "centercode",
    title: "CenterCode | Expert in Web & Mobile App Development, UI/UX Design",
    caption: "HTML Tailwind CSS React Next.js TypeScript",
    description: "We specialize in creating high-performance mobile and web applications with a focus on intuitive design and seamless user experiences. Our expertise spans across mobile app development, web solutions, and comprehensive UI/UX design.",
    situation: "The goal was to help clients transform their ideas into functional, user-friendly applications with scalable backend solutions.",
    task: "Our team was responsible for end-to-end development, including mobile app development, web platforms, and crafting compelling UI/UX designs.",
    action: "We leveraged React and Flutter for building responsive mobile and web applications, integrated seamless backends using Node.js, and followed modern design principles to ensure excellent user experiences.",
    result: "Our solutions helped clients enhance user engagement, streamline operations, and improve conversion rates, with significant business growth observed post-launch.",
    technologies: ["HTML", "React", "Tailwind CSS", "Next.js"],
    visuals: [
      "/centercode.webp",
      "/centercode2.webp",
    ],
    links: [
      { "preview": "https://centercode.vercel.app" },
      { "github": "https://github.com/nextjs-compro-centercode" }
    ],
    buttons: [
      { title: "Live <~>", onClick: () => { window.open("https://centercode.vercel.app", "_blank"); }, className: "border-primary hover:bg-[#C778DD]" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[2].slug}`; }, className: "border-grey text-grey hover:bg-[#ABB2BF]" }
    ]
  },  
  {
    slug: 'loremipsum-blog-app',
    title: 'Lorem Ipsum Blog App',
    caption: 'HTML Tailwind CSS React Next.js TypeScript Backendless',
    description: 'A simple blog web app with login, register, post creation features using backendless API.',
    situation: 'The project aimed to improve user engagement for a blog platform.',
    task: 'My responsibility was to design a user interface that was both visually appealing and functional.',
    action: 'I utilized Next.js for the frontend, integrated it with the backend API, and worked closely with the UX team.',
    result: 'The new design increased user retention by 20%, and the client was highly satisfied with the outcome.',
    technologies: ['HTML', 'React', 'Next.js', 'Tailwind CSS', 'Backendless'],
    visuals: ['/blogapp.webp', '/blogapp2.webp', '/blogapp3.webp', '/blogapp4.webp'],
    links: [
      { preview: "https://nextjs-loremipsum.vercel.app" }, 
      { github: "https://github.com/ikhsanfrcn/nextjs-blog" }
    ],
    
    buttons: [
      { title: "Live <~>", onClick: () => { window.open("https://nextjs-loremipsum.vercel.app", "_blank"); }, className: "border-primary hover:bg-[#C778DD]" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[3].slug}`; }, className: "border-grey text-grey hover:bg-[#ABB2BF]" }
    ],
  },
  // {
  //   slug: 'web-portfolio',
  //   title: 'Web Portfolio',
  //   caption: 'HTML Tailwind CSS React Next.js Typescript',
  //   description: 'A personal web portfolio designed to showcase my skills, projects, and professional experience.',
  //   situation: 'The project was aimed at creating an online portfolio to display my web development work and highlight my expertise.',
  //   task: 'My responsibility was to design and develop a visually appealing and user-friendly portfolio that effectively communicated my work.',
  //   action: 'I built the portfolio using HTML, CSS, and JavaScript for the frontend, and added interactive elements with React to enhance user experience.',
  //   result: 'The portfolio has served as a powerful tool in attracting potential clients and employers, helping me secure multiple freelance opportunities.',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  //   visuals: ['/portfolio.webp'],
  //   links: [
  //     { github: "https://github.com/ikhsanfrcn/nextjs-portfolio" }
  //   ],
  //   buttons: [
  //     { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[2].slug}`; }, className: "border-grey text-grey hover:bg-[#ABB2BF]" }
  //   ],
  // },
  {
    slug: 'fivem-game-server',
    title: 'FiveM Custom Game Server',
    caption: 'Lua FiveM Server Optimization and Management',
    description: 'A custom-built FiveM game server designed to provide a unique and seamless player experience.',
    situation: 'The project involved creating, optimizing, and maintaining a bespoke FiveM game server with a focus on performance and player engagement.',
    task: 'I was responsible for managing the entire server infrastructure, ensuring smooth gameplay, addressing technical issues, and enhancing the user experience.',
    action: 'I utilized Lua for both client-side and server-side scripting to customize gameplay, troubleshoot performance issues, and integrate user-friendly UI/UX elements.',
    result: 'The custom server attracted a loyal player base, improved player retention, reduced downtime, and created a highly immersive gaming environment.',
    technologies: ['Lua', 'FiveM'],
    visuals: ['/fivem.webp'],
    buttons: [
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[4].slug}`; }, className: "border-grey text-grey hover:bg-[#ABB2BF]" }
    ],
  }
];
