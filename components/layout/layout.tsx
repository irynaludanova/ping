import React from "react"
import { Header, ActionPanel, Aside } from "@/components"

type Props = {
  children?: React.ReactNode
}
export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col items-stretch justify-center w-full bg-white">
      <Header />
      <ActionPanel />
      <div className="flex justify-between w-full">
        <Aside />
        <main className="w-3/4 p-4 bg-white">{children}</main>
      </div>
    </div>
  )
}
