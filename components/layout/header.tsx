import React, { useState, useEffect, useContext } from "react"
import {
  ProfileNavbar,
  Logo,
  ShoppingCart,
  LangSelect,
  WorkTime,
  Call,
} from "@/components"
import Link from "next/link"
import "react-toastify/dist/ReactToastify.css"
import { Store } from "@/utils/Store"

export const Header = () => {
  const { state } = useContext(Store)
  const { cart } = state

  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a: any, c: { quantity: any }) => a + c.quantity, 0)
    )
  }, [cart.cartItems])

  return (
    <header className="z-10 flex justify-between w-full p-4 align-baseline bg-white shadow-md ">
      <Logo />
      <div className="flex items-center justify-between ">
        <Call />
        <WorkTime />
        <LangSelect />
        <Link href="/cart" className="relative p-2">
          <ShoppingCart />
          {cartItemsCount > 0 && (
            <span className="absolute px-2 py-1 ml-1 text-xs font-bold text-white bg-indigo-400 rounded-full bottom-8 left-8">
              {cartItemsCount}
            </span>
          )}
        </Link>
        <ProfileNavbar />
      </div>
    </header>
  )
}
