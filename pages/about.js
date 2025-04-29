import React from 'react'
import usePortfolioData from '../hooks/usePortfolioData'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const About = () => {

    const { education, career, certifications } = usePortfolioData()

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-900 dark:text-white">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-sky-600">Professional Career</h2>
        <ol className="relative border-l border-sky-300 dark:border-sky-700">
          {career.map((item, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 012 0v6h4a1 1 0 010 2H8v6a1 1 0 01-2 0V2z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold">{item.title} @ {item.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.dates} | {item.location}</p>
              <ul className="list-disc ml-5 mt-2 text-sm">
                {item.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-sky-600">Education</h2>
        <ol className="relative border-l border-sky-300 dark:border-sky-700">
          {education.map((edu, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 012 0v6h4a1 1 0 010 2H8v6a1 1 0 01-2 0V2z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold">{edu.degree} @ {edu.institution}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
              <ul className="list-disc ml-5 mt-2 text-sm">
                {edu.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
  <h2 className="text-3xl font-bold mb-6 text-sky-600 dark:text-sky-400">Certifications</h2>

  <Slider
    dots
    infinite
    speed={500}
    slidesToShow={2}
    slidesToScroll={1}
    arrows
    autoplay={true}
    autoplaySpeed={1800}
    className="mb-6"
  >
    {certifications.map((cert, idx) => (
      <div key={idx} className="px-2">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow hover:shadow-md transition h-full">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {cert.issuer} — {cert.date}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
            {cert.description}
          </p>
          {cert.certificateUrl && (
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sky-600 dark:text-sky-400 hover:underline"
            >
              View Certificate →
            </a>
          )}
        </div>
      </div>
    ))}
  </Slider>
</section>


      <section>
        <h2 className="text-3xl font-bold mb-6 text-sky-600">Hobbies & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="mb-4">I enjoy cricket, photography, and exploring technology. I have played U-19 cricket at the regional level, won photography contests, and built a local app for community volunteering.</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Captain, University Cricket Team</li>
              <li>Winner, State Photography Contest</li>
              <li>Volunteer App Developer, NGO Connect</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/hobbies/cricket.jpg" className="rounded-lg shadow" alt="Cricket" />
            <img src="/hobbies/photography.jpg" className="rounded-lg shadow" alt="Photography" />
            <img src="/hobbies/volunteer.jpg" className="rounded-lg shadow" alt="Volunteering" />
            <img src="/hobbies/travel.jpg" className="rounded-lg shadow" alt="Travel" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About