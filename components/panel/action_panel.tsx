import React from "react"
import { Call, Search, ShoppingCart, MySelect } from ".."

export const ActionPanel = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-white">
      <Search />
      <Call />
      <MySelect />
      <ShoppingCart />
    </div>
  )
}
