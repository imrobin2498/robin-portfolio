import Head from 'next/head'
import usePortfolioData from '../hooks/usePortfolioData'
import {Typewriter} from 'react-simple-typewriter'
import Link from 'next/link'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
    const {about, projects} = usePortfolioData()

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <>
            <Head>
                <title>Robin Singh | Portfolio</title>
            </Head>

            <main className="max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 transition-colors duration-300">


                {/* About Section */}
                <section className="flex flex-col md:flex-row items-start gap-10 mb-10">
                    <img
                        src="/profile.jpg"
                        alt="Robin Singh"
                        className="w-48 h-48 rounded-full object-cover shadow-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-4">
                            Hi, I'm Robin Singh
                        </h1>

                        <div className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-justify">
                            {about && (
                                <Typewriter
                                    words={[about]}
                                    typeSpeed={10}
                                    cursor
                                />
                            )}
                        </div>

                        {/* Tech Stack Row */}
                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-6">
                                Expertise
                            </h3>
                            <div className="flex flex-wrap gap-10 items-center justify-start">
                                {[
                                    {name: 'Python', src: '/tech-icons-icons/python.png', bg: 'bg-yellow-200'},
                                    {name: 'SQL', src: '/tech-icons-icons/sql.png', bg: 'bg-blue-100'},
                                    {name: 'Tableau', src: '/tech-icons-icons/tableau.png', bg: 'bg-indigo-100'},
                                    {name: 'Excel', src: '/tech-icons-icons/excel.jpeg.svg', bg: 'bg-yellow-300'},
                                    {name: 'Aws', src: '/tech-icons-icons/aws.svg', bg: 'bg-cyan-100'},
                                    // {name: 'TailwindCSS', src: '/tech-icons-icons/tailwind.svg', bg: 'bg-sky-100'}
                                ].map((tech, i) => (
                                    <div key={i} className="relative group flex flex-col items-center">
                                        <div
                                            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-sky-400 ${tech.bg}`}
                                        >
                                            <img
                                                src={tech.src}
                                                alt={tech.name}
                                                className="w-12 h-12"
                                            />
                                        </div>
                                        <div
                                            className="absolute bottom-[-2.5rem] opacity-0 group-hover:opacity-100 transition-opacity text-sm bg-gray-800 text-white px-3 py-1 rounded shadow-md z-10 whitespace-nowrap">
                                            {tech.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Carousel Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-sky-600 dark:text-sky-400 mb-6 text-center">
                        Featured Projects
                    </h2>

                    <Slider {...carouselSettings} className="mb-6">
                        {projects.map((proj, i) => (
                            <div key={i} className="px-2">
                                <Link href={`/projects/${proj.slug}`}>
                                    <div
                                        className="border rounded-lg p-4 shadow hover:shadow-xl transition cursor-pointer bg-white dark:bg-gray-800">
                                        {proj.imageUrl && (
                                            <img
                                                src={proj.imageUrl}
                                                // alt={proj.name}
                                                className="w-full h-40 object-cover mb-4 rounded"
                                            />
                                        )}
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{proj.name}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{proj.description}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </section>

                {/* View All Projects Button */}
                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-block px-6 py-2 border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-400 dark:hover:text-gray-900 rounded transition"
                    >
                        View All Projects →
                    </Link>
                </div>
            </main>
        </>
    )
}
