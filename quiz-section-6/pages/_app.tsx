import { Poppins } from 'next/font/google'
import '../styles/globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700'],
  subsets: ['latin-ext']
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
