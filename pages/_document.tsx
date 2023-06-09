import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          rel="preload"
          href="/fonts/Ubuntu-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Ubuntu-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Ubuntu-Medium.ttf"
          as="font"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
