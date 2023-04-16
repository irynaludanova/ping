import React from "react"
import { MainNavbar, Search } from "@/components"

export const ActionPanel = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-white">
      <Search /> <MainNavbar />
    </div>
  )
}
