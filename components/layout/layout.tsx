import React from "react"
import { Header, ActionPanel, Aside, Footer } from "@/components"
import Head from "next/head"
type Props = {
  children?: React.ReactNode
  title: string | "" | undefined | string[]
}
export function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Ping Pong 777" : "Ping Pong 777"}</title>
        <meta name="description" content="table tennis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-stretch justify-center w-full min-h-screen bg-white">
        <Header />
        <ActionPanel />
        <div className="flex justify-between w-full">
          <Aside />
          <main className="w-3/4 p-4 bg-white">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}
