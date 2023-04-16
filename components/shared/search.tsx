import React, { useState } from "react"
import { useLocale } from "@/hooks"
import { useRouter } from "next/router"
export const Search = () => {
  const t = useLocale()
  const router = useRouter()
  const [query, setQuery] = useState("")
  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    router.push(`/search?query=${query}`)
  }
  return (
    <form onSubmit={submitHandler} className="hidden w-full mx-auto md:flex">
      <div className="flex items-center">
        <div className="flex border border-indigo-400 rounded">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="block w-full px-4 py-2 text-indigo-400 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder={t.search}
          />
          <button className="px-4 text-white bg-indigo-400 border-l rounded ">
            {t.search}
          </button>
        </div>
      </div>
    </form>
  )
}
