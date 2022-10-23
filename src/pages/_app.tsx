
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../../styles/globals.scss'
import "@fontsource/montserrat"
import "@fontsource/roboto"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>picpay me contrata</title>
        <link rel="icon-pic-pay" href="/public/next/icons/favicon.ico" />
        <meta name="descrição" content="desafio técnico frontent do picpay #mecontrata" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
