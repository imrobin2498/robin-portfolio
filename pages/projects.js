import Head from 'next/head'
import usePortfolioData from '../hooks/usePortfolioData'
import Link from 'next/link'

export default function ProjectsPage() {
    const {projects} = usePortfolioData()

    return (
        <>
            <Head>
                <title>All Projects | Robin Singh</title>
            </Head>

            <main className="max-w-5xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold text-sky-600 mb-10">All Projects</h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <Link key={i} href={`/projects/${proj.slug}`}>
                            <div className="border rounded-lg p-4 shadow hover:shadow-xl transition cursor-pointer">
                                {proj.imageUrl && (
                                    <img
                                        src={proj.imageUrl}
                                        // alt={proj.name}
                                        className="w-full h-40 object-cover mb-4 rounded"
                                    />
                                )}
                                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                                    {proj.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {proj.description}
                                </p>
                                <div className="mt-2 text-xs text-sky-500">{proj.tech}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    )
}
