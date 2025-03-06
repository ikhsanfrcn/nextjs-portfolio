import { MetaTags } from "@/components/MetaTags";
import { ProjectsData } from "@/data/projectsData";
import Image from "next/image";
import { notFound } from "next/navigation";

const ProjectDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = ProjectsData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const currentUrl = `https://localhost:3000/projects/${project.slug}`;

  return (
    <>
      <MetaTags
        title={`${project.title} | Creative Web Portfolio`}
        description={project.description.substring(0, 150)}
        image={project.visuals[0]}
        url={currentUrl}
      />

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
    </>
  );
};

export default ProjectDetail;
