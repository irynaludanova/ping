import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src="/static/logo.webp"
        alt="Logo"
        width={180}
        height={37}
        priority
      />
    </Link>
  )
}
