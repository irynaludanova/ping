import React from "react"
import { useRouter } from "next/router"
import { en } from "@/locales/en"
import { ua } from "@/locales/ua"
import { ru } from "@/locales/ru"

export const useLocale = () => {
  const router = useRouter()
  let t: any
  if (router.locale === "en") t = en
  if (router.locale === "ua") t = ua
  if (router.locale === "ru") t = ru
  return t
}
