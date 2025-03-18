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
      { title: "Live <~>", onClick: () => { window.open("https://centercode.vercel.app", "_blank"); }, className: "border-primary" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[0].slug}`; }, className: "border-gray text-gray" }
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
      { title: "Live <~>", onClick: () => { window.open("https://nextjs-loremipsum.vercel.app", "_blank"); }, className: "border-primary" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[1].slug}`; }, className: "border-gray text-gray" }
    ],
  },
  {
    slug: 'web-portfolio',
    title: 'Web Portfolio',
    caption: 'HTML Tailwind CSS React Next.js Typescript',
    description: 'A personal web portfolio designed to showcase my skills, projects, and professional experience.',
    situation: 'The project was aimed at creating an online portfolio to display my web development work and highlight my expertise.',
    task: 'My responsibility was to design and develop a visually appealing and user-friendly portfolio that effectively communicated my work.',
    action: 'I built the portfolio using HTML, CSS, and JavaScript for the frontend, and added interactive elements with React to enhance user experience.',
    result: 'The portfolio has served as a powerful tool in attracting potential clients and employers, helping me secure multiple freelance opportunities.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    visuals: ['/portfolio.webp'],
    links: [
      { github: "https://github.com/ikhsanfrcn/nextjs-portfolio" }
    ],
    buttons: [
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[2].slug}`; }, className: "border-gray text-gray" }
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
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[3].slug}`; }, className: "border-gray text-gray" }
    ],
  }
];
