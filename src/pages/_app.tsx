
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../../styles/globals.scss'
import "@fontsource/montserrat"
import "@fontsource/roboto"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PicPayFriends</title>
        <link rel="icon-pic-pay" href="/public/next/icons/favicon.ico" />
        <meta name="descrição" content="desafio técnico frontent do picpay #mecontrata" />

        <title>PicPayFriends</title>
        <link rel="picpayfriends-icon" href="/public/next/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fafafa" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components for picpay test"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
