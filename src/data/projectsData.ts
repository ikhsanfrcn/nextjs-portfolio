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
    caption: "HTML TailwindCSS React Next.js Express.js TypeScript PostgreSQL PrismaORM",
    description: "A fullstack Job Board App connecting job seekers and companies, featuring job discovery, application tracking, company management, subscription services, and skill assessments.",
    situation: "The goal was to build a Job Board App that connects job seekers with companies, offering features like job discovery, applications, and subscription-based premium services.",
    task: "Our team was responsible for fullstack development, including authentication, job and company management, application tracking, subscription system, and skill assessments.",
    action: "We used Next.js, TypeScript, and TailwindCSS for a responsive UI, while Express.js, Prisma, and PostgreSQL powered the backend with secure APIs, role-based access, and clean code practices.",
    result: "The project delivered a fully functional Job Board App with multi-role support, modern UI/UX, and scalable backend solutions, receiving positive evaluations for feature completeness and clean implementation.",
    technologies: ["HTML", "Tailwind CSS", "React", "Next.js", "Express.js", "PostgreSQL", "Prisma ORM"],
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
    title: "Event Management Platform (ConcertHubs) | Discover, Manage & Promote Events with Ease",
    caption: "React Tailwind CSS Next.js Node.js Express.js PostgreSQL Prisma",
    description: "A mini project from Purwadhika Bootcamp to comprehensive event management platform enabling organizers to create, manage, and promote events while allowing attendees to browse, register, and review events with a seamless user experience.",
    situation: "The challenge was to build a robust MVP that simplifies event creation and ticketing for organizers, while providing a smooth browsing and registration experience for attendees.",
    task: "We were responsible for building a fully responsive web app including authentication, event discovery, ticketing system, review system, referral reward logic, and dashboards with data visualization.",
    action: "Utilized React and Next.js for the frontend, Tailwind CSS for styling, and Node.js with PostgreSQL for backend APIs. Integrated search with debounce, filtering, secure role-based pages, and custom logic for referrals and point expiration.",
    result: "The MVP successfully allowed organizers to promote and monetize their events, while users benefited from a fast, intuitive interface and referral-based rewards, enhancing engagement and retention.",
    technologies: ["React", "Tailwind CSS", "Next.js", "Node.js", "Express.js", "PostgreSQL", "Xendit"],
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
