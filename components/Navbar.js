import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import {
  GithubIcon,
  LinkedinIcon,
  KaggleIcon,
  TwitterIcon,
  MailIcon
} from './SocialIcons'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Side: Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/imrobin2498" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
            <GithubIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-sky-500" />
          </a>
          <a href="https://www.linkedin.com/in/robinsingh-datascientist/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
            <LinkedinIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-sky-500" />
          </a>
          <a href="https://www.kaggle.com/imrobbie" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
            <KaggleIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-sky-500" />
          </a>
          <a href="mailto:imrobin1819@gmail.com" className="transition transform hover:scale-110">
            <MailIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-sky-500" />
          </a>
          <a href="https://x.com/InSwingInsights" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
            <TwitterIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-sky-500" />
          </a>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">Home</Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">About</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">Projects</Link>
          <Link href="/blogs" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">Blogs</Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400 transition">Resume</Link>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}
