import React from "react"
import { navbarData } from "@/data/navbar.data"
import Link from "next/link"
import { useLocale } from "@/hooks"

export const MainNavbar = () => {
  const t = useLocale()
  return (
    <nav
      className="justify-end hidden w-full md:flex md:items-center md:w-auto"
      id="menu"
    >
      <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
        {navbarData.map((item) => (
          <li key={item.id}>
            <Link
              className="block py-2 text-lg md:p-4 hover:text-indigo-400"
              href={item.to}
            >
              {t[item.title]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
