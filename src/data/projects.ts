export const projectsData = [
    {
      img: "/project1.jpg",
      caption: "HTML SCSS Python Flask",
      title: "CherNodes",
      description: "Minecraft servers hosting",
      buttons: [
        { title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" },
        { title: "Cached >=", onClick: () => { alert("Cached") }, className: "border-gray text-gray" }
      ],
    },
    {
      img: "/project1.jpg",
      caption: "React Express Discord.js Node.js HTML SCSS Python Flask",
      title: "ProtectX",
      description: "Discord anti-crash bot",
      buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
    },
    {
      img: "/project1.jpg",
      caption: "CSS Express Node.js",
      title: "Kahoot Answers Viewer",
      description: "Get answers to your Kahoot quiz",
      buttons: [
        { title: "Cached >=", onClick: () => { alert("Cached") }, className: "border-gray text-gray" }
    ],
    },
  ];
  
export const smallProjectsData = [
    {
        caption: "CSS Express Node.js",
        title: "Kahoot Answers Viewer",
        description: "Get answers to your Kahoot quiz",
        buttons: [{ title: "Live <~>", onClick: () => { alert("Live") }, className: "border-primary" }],
      },
];