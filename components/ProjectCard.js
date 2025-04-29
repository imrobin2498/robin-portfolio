import Link from 'next/link';

export default function ProjectCard({project}) {
    if (!project || !project.slug || !project.name) return null;

    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="rounded-xl border p-4 hover:shadow-lg transition duration-300">
                {project.imageUrl && (
                    <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover rounded"/>
                )}
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {proj.name}
                </h3>        <p className="text-sm text-gray-600">{project.description}</p>
            </div>
        </Link>
    );
}


