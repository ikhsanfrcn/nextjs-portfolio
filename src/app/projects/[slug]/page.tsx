import { ProjectsData } from "@/data/projectsData";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectDetailProps) {
  const project = ProjectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  const currentUrl = `https://ikhsanfrcn.vercel.app/projects/${project.slug}`;

  return {
    title: `${project.title} | Creative Web Portfolio`,
    description: project.description.substring(0, 150),
    openGraph: {
      title: `${project.title} | Creative Web Portfolio`,
      description: project.description.substring(0, 150),
      url: currentUrl,
      type: "article",
      images: [
        {
          url: project.visuals[0] || "/default-thumbnail.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Creative Web Portfolio`,
      description: project.description.substring(0, 150),
      images: [project.visuals[0] || "/default-thumbnail.jpg"],
    },
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const project = ProjectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Brief</h2>
        <p>{project.description}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">STAR Method</h2>
        <div className="mb-4">
          <strong>Situation:</strong>
          <p>{project.situation}</p>
        </div>
        <div className="mb-4">
          <strong>Task:</strong>
          <p>{project.task}</p>
        </div>
        <div className="mb-4">
          <strong>Action:</strong>
          <p>{project.action}</p>
        </div>
        <div className="mb-4">
          <strong>Result:</strong>
          <p>{project.result}</p>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visuals</h2>
        <div className="flex max-sm:flex-col items-center gap-4">
          {project.visuals.map((visual, index) => (
            <Image
              key={index}
              src={visual}
              width={0}
              height={0}
              sizes="100vw"
              alt={`Project visual ${index + 1}`}
              className="rounded-lg shadow-lg"
              style={{ width: "300px" }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
