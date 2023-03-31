import React from "react"
import { sidebarData } from "@/data/sidebar.data"
import { useRouter } from "next/router"
import { useLocale } from "@/hooks"
import Link from "next/link"

export const Sidebar = () => {
  const router = useRouter()
  const t = useLocale()

  return (
    <div className="m-2 ">
      <nav>
        <ul>
          {sidebarData.map(({ to, title }) => (
            <li className="m-2" key={title}>
              <Link
                href={to}
                className={`text-2xl flex p-2 bg-white rounded hover:text-white cursor-pointer hover:bg-indigo-400 ${
                  router.asPath === to && "bg-indigo-400 text-white"
                }`}
              >
                {t[title]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
