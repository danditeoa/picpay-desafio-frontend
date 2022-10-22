
import { AppProps } from 'next/app'
import Head from 'next/head'
import "@fontsource/montserrat"
import "@fontsource/roboto";
import '../../styles/app.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>picpay me contrata</title>
        <link rel="shortcut icon" href="/public/next/icons/favicon.ico" />
        <link rel="icon-pic-pay" href="/public/next/icons/favicon.ico" />
        <meta name="descrição" content="desafio técnico frontent do picpay" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
