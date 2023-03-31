import React from "react"
import { Select, Option } from "@material-tailwind/react"
import { languageData } from "@/data/language.data"
import Link from "next/link"
import { useLocale } from "@/hooks"

export const MySelect = () => {
  const t = useLocale()
  return (
    <div className="flex flex-col w-12 mr-24">
      <Select
        size="md"
        variant="outlined"
        color="indigo"
        label={t.language}
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        {languageData.map((lang) => (
          <Link href="/" locale={lang.locale} key={lang.id}>
            <Option>{lang.title}</Option>
          </Link>
        ))}
      </Select>
    </div>
  )
}
