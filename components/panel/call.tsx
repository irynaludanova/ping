import React from "react"
import { useLocale } from "@/hooks"

export const Call = () => {
  const t = useLocale()
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center pr-8">
        <p className="px-2 py-1 text-3xl font-bold">+380504475198</p>
        <p className="px-2 py-1 text-lg font-bold uppercase">{t.call}</p>
      </div>
      <div className="flex flex-col items-center ">
        <p className="px-2 py-1 text-lg">{t.mode}</p>
        <p className="px-2 py-1 text-lg">{t.time}</p>
      </div>
    </div>
  )
}
