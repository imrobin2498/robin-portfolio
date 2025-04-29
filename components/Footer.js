import { GithubIcon, LinkedinIcon, KaggleIcon, LeetcodeIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-6 mt-16">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/imrobin2498" target="_blank" rel="noopener noreferrer">
          <GithubIcon className="w-6 h-6 text-sky-600 hover:scale-110" />
        </a>
        <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className="w-6 h-6 text-sky-600 hover:scale-110" />
        </a>
        <a href="https://leetcode.com/YOUR-LEETCODE" target="_blank" rel="noopener noreferrer">
          <LeetcodeIcon className="w-6 h-6 text-sky-600 hover:scale-110" />
        </a>
        <a href="https://kaggle.com/YOUR-KAGGLE" target="_blank" rel="noopener noreferrer">
          <KaggleIcon className="w-6 h-6 text-sky-600 hover:scale-110" />
        </a>
      </div>
      <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Robin Singh. All rights reserved.</p>
    </footer>
  )
}
