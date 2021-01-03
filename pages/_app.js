import '../styles/index.css'
import ProgressBar from '../components/ProgressBar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar />
    </>
  )
}
