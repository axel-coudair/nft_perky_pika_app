import Test from '../components/Test/Test'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Test />
  </>
}

export default MyApp
