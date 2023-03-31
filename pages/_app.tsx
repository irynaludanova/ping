import "@/styles/globals.css"

import { Layout } from "@/components"

type Props = {
  Component: any
  pageProps: any
}

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
