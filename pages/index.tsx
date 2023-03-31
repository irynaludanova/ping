import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"

import { useRouter } from "next/router"
import { en } from "@/locales/en"
import { ua } from "@/locales/ua"
import { ru } from "@/locales/ru"
import { CardList } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const router = useRouter()
  let t
  if (router.locale === "en") t = en
  if (router.locale === "ua") t = ua
  if (router.locale === "ru") t = ru

  return (
    <>
      <Head>
        <title>Ping pong</title>
        <meta name="description" content="table tennis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between w-full "></div>
    </>
  )
}
