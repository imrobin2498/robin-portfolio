import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline'
import { GithubIcon, LinkedinIcon, KaggleIcon, LeetcodeIcon } from '../components/SocialIcons'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4 text-sky-500">Contact Me</h2>
        <p className="mb-4">Feel free to reach out or explore my profiles:</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5 text-sky-600" />
            <a href="mailto:your.email@example.com" className="text-sky-600 hover:underline">your.email@example.com</a>
          </li>
          <li className="flex items-center space-x-2">
            <GithubIcon className="w-5 h-5 text-sky-600" />
            <a href="https://github.com/imrobin2498" target="_blank" className="text-sky-600 hover:underline">github.com/imrobin2498</a>
          </li>
          <li className="flex items-center space-x-2">
            <LinkedinIcon className="w-5 h-5 text-sky-600" />
            <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" className="text-sky-600 hover:underline">linkedin.com/in/YOUR-LINKEDIN</a>
          </li>
          <li className="flex items-center space-x-2">
            <LeetcodeIcon className="w-5 h-5 text-sky-600" />
            <a href="https://leetcode.com/YOUR-LEETCODE" target="_blank" className="text-sky-600 hover:underline">leetcode.com/YOUR-LEETCODE</a>
          </li>
          <li className="flex items-center space-x-2">
            <KaggleIcon className="w-5 h-5 text-sky-600" />
            <a href="https://kaggle.com/YOUR-KAGGLE" target="_blank" className="text-sky-600 hover:underline">kaggle.com/YOUR-KAGGLE</a>
          </li>
        </ul>


      </main>

      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
  <div>
    <label className="block mb-1 font-semibold">Name</label>
    <input type="text" required className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Email</label>
    <input type="email" required className="w-full p-2 border border-gray-300 rounded" placeholder="you@example.com" />
  </div>
  <div>
    <label className="block mb-1 font-semibold">Message</label>
    <textarea required className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your message here..." />
  </div>
  <button type="submit" className="px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">Send Message</button>
</form>

      <Footer />
    </>
  )
}
