import '../styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
