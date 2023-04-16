import React, { useContext } from "react"
import Link from "next/link"
import { Menu } from "@headlessui/react"
import { signOut, useSession } from "next-auth/react"
import Cookies from "js-cookie"
import { Store } from "@/utils/Store"
import { Dropdown, Loading } from "@/components"
import { useLocale } from "@/hooks"

export const ProfileNavbar = () => {
  const { status, data: session } = useSession()
  const { state, dispatch } = useContext(Store)
  const t = useLocale()
  const logoutClickHandler = () => {
    Cookies.remove("cart")
    dispatch({ type: "CART_RESET" })
    signOut({ callbackUrl: "/login" })
  }
  return status === "loading" ? (
    <Loading />
  ) : session?.user ? (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="text-lg text-blue-600">
        {session.user.name}
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg ">
        <Menu.Item>
          <Dropdown className="dropdown-link" href="/profile">
            {t.profile}
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown className="dropdown-link" href="/order-history">
            {t.order}
          </Dropdown>
        </Menu.Item>
        {session.user && (
          <Menu.Item>
            <Dropdown className="dropdown-link" href="/admin/dashboard">
              {t.dashboard}
            </Dropdown>
          </Menu.Item>
        )}
        <Menu.Item>
          <a className="dropdown-link" href="#" onClick={logoutClickHandler}>
            {t.logout}
          </a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  ) : (
    <Link href="/login " className="p-2">
      {t.login}
    </Link>
  )
}
