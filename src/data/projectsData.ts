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
  buttons?: { title: string; onClick: () => void; className?: string }[];
};

export const ProjectsData: ProjectCardProps[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    caption: 'CSS Express Node.js',
    description: 'A brief summary of Project One.',
    situation: 'The project aimed to improve user engagement for an e-commerce platform.',
    task: 'My responsibility was to design a user interface that was both visually appealing and functional.',
    action: 'I utilized React for the frontend, integrated it with the backend API, and worked closely with the UX team.',
    result: 'The new design increased user retention by 20%, and the client was highly satisfied with the outcome.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    visuals: ['/project1.jpg', '/project1.jpg'],
    buttons: [
      { title: "Live <~>", onClick: () => { window.open("https://www.google.com", "_blank"); }, className: "border-primary" },
      { title: "More >=", onClick: () => { window.location.href = `/projects/${ProjectsData[0].slug}`; }, className: "border-gray text-gray" }
    ],
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    caption: 'Python Django PostgreSQL',
    description: 'A brief summary of Project Two.',
    situation: 'The goal was to streamline the internal workflow for a logistics company.',
    task: 'I was tasked with automating reporting and creating dashboards for the team.',
    action: 'I developed the solution using Python and Django, integrated with the company’s existing systems.',
    result: 'The automation reduced manual reporting time by 40%, and the team saw a significant increase in efficiency.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    visuals: ['/project1.jpg'],
  },
];
  
export const smallProjectsData = [
    {
        caption: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        description: "Get answers to your Kahoot quiz",
        buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
    },
    {
      caption: "CSS Express Node.js",
      title: "Kahoot Answers Viewer",
      description: "Get answers to your Kahoot quiz",
      buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
  },
  {
    caption: "CSS Express Node.js",
    title: "Kahoot Answers Viewer",
    description: "Get answers to your Kahoot quiz",
    buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
},
{
  caption: "CSS Express Node.js",
  title: "Kahoot Answers Viewer",
  description: "Get answers to your Kahoot quiz",
  buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
},
{
  caption: "CSS Express Node.js",
  title: "Kahoot Answers Viewer",
  description: "Get answers to your Kahoot quiz",
  buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
},
];