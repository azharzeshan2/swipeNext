import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  <Head><link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@600&display=swap" rel="stylesheet" /> 
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap" rel="stylesheet" ></link>
</Head>
  return <Component {...pageProps} />
}

export default MyApp
