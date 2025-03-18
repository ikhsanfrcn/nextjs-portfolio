import { Icon } from "@/components/atoms/Icon";
import { ProjectsData } from "@/data/projectsData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = ProjectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist.",
    };
  }

  const currentUrl = `https://ikhsanfrcn.vercel.app/projects/${slug}`;
  const imageUrl =
    project.visuals.length > 0 ? project.visuals[0] : "/default-thumbnail.jpg";

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
          url: imageUrl,
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
      images: [imageUrl],
    },
  };
}

const linkIcons = {
  preview: TfiWorld,
  github: BsGithub,
};

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const projectIndex = ProjectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    return notFound();
  }

  const project = ProjectsData[projectIndex];
  const prevProject = ProjectsData[projectIndex - 1];
  const nextProject = ProjectsData[projectIndex + 1];

  return (
    <div className="container mx-auto p-6">
      {/* Back Button */}
      <div>
        <Link
          href="/projects"
          className="text-lg font-semibold text-grey hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-6 pt-10">{project.title}</h1>
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
        <div className="flex items-center gap-5">
          <h2 className="text-2xl font-semibold">Links:</h2>
          {project.links && project.links.length > 0 && (
            <div className="flex gap-5">
              {project.links.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  {Object.keys(linkIcons).map((key) => {
                    const iconKey = key as keyof typeof linkIcons;
                    if (link[iconKey]) {
                      return (
                        <Icon
                          key={key}
                          Component={linkIcons[iconKey]}
                          link={link[iconKey]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl hover:text-black"
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
        <h2 className="text-2xl font-semibold pt-5">Visuals:</h2>
        <div className="flex flex-wrap max-sm:flex-col items-center gap-4 pt-5">
          {project.visuals.map((visual, index) => (
            <Image
              key={index}
              src={visual}
              width={0}
              height={0}
              sizes="100vw"
              alt={`Project visual ${index + 1}`}
              className="rounded-lg shadow-lg w-[250px] h-auto object-contain border border-grey hover:scale-[150%] transition-all"
            />
          ))}
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <div>
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="text-lg font-semibold text-grey hover:underline"
            >
              ← Previous Project
            </Link>
          )}
        </div>
        <div>
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-lg font-semibold text-grey hover:underline"
            >
              Next Project →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
