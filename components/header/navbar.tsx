import Link from "next/link"
import React from "react"
import { useLocale } from "@/hooks"
import { MySelect } from "./my_select"
import { Logo } from "../panel"
import { navbarData } from "@/data/navbar.data"

export const Navbar = () => {
  const t = useLocale()
  return (
    <nav className="flex flex-wrap items-center justify-between w-full px-4 py-4 text-lg text-gray-700 bg-white md:py-0">
      <Logo />
      <div
        className="justify-end hidden w-full md:flex md:items-center md:w-auto"
        id="menu"
      >
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          {navbarData.map((item) => (
            <li key={item.id}>
              <a
                className="block py-2 text-2xl md:p-4 hover:text-indigo-400"
                href={item.to}
              >
                {t[item.title]}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a className="block py-2 md:p-4 hover:text-indigo-400" href="#">
        {t.sign}
      </a>
    </nav>
  )
}
