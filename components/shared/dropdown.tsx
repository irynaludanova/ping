import Link from "next/link"
import React from "react"

export const Dropdown = (props: {
  [x: string]: any
  href: any
  children: any
}) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <p {...rest}>{children}</p>
    </Link>
  )
}
