import { useRouter } from 'next/router';
import usePortfolioData from '../../hooks/usePortfolioData'
import Head from 'next/head';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { projects } = usePortfolioData();

  if (!projects || projects.length === 0) return <div className="p-4">Loading...</div>;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">404 - Project Not Found</h1>
        <p>We couldn’t find a project with the slug: <strong>{slug}</strong></p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.name} | Robin Singh</title>
      </Head>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-auto rounded-lg shadow mb-6"
          />
        )}
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => {
            const point = project[`bullet${i + 1}`];
            return point ? (
              <li key={i} className="text-gray-700 list-disc ml-5">{point}</li>
            ) : null;
          })}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sky-600 underline hover:text-sky-800"
          >
            View Project ↗
          </a>
        )}
      </div>
    </>
  );
}
