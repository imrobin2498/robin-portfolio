import { useEffect } from 'react'

export default function ProjectPanel({ project, onClose }) {
  useEffect(() => {
    // Auto-scroll to top when opening
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      {/* Overlay Background Blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Slide-In Panel */}
      <div className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-white z-50 shadow-xl transform transition duration-300 ease-in-out">
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-sky-600">{project.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">×</button>
          </div>

          <p className="text-sm text-gray-600 mb-3 italic">{project.tech}</p>

          <p className="text-gray-800 mb-4">{project.description}</p>

          <h3 className="text-md font-semibold text-sky-500 mb-2">Key Highlights:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {project.bullets.map((point, i) => point && <li key={i}>{point}</li>)}
          </ul>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="inline-block mt-6 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </>
  )
}
