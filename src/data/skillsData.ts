export interface SkillItem {
  title: string;
  skills: string;
}

export const skillsData: SkillItem[] = [
  {
    title: 'Frontend',
    skills: 'React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS',
  },
  {
    title: 'Backend',
    skills: 'Node.js, Express.js, PostgreSQL, MySQL/MariaDB, Prisma ORM, RESTful API',
  },
  {
    title: 'System & Cloud',
    skills: 'Linux Server, VPS Management, Nginx, SSH Deployment',
  },
  {
    title: 'Physical IT & Networking',
    skills: 'LAN/WLAN Configuration, VoIP, Hardware Troubleshooting & Repair, On-site Technical Support',
  },
  {
    title: 'Tools & Workflow',
    skills: 'Git, GitHub, Jira, Agile/Scrum, Axios, REST API Integration',
  },
];
