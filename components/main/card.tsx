import React from "react"
import Image from "next/image"
import { MyButton } from "@/components"
import { useLocale } from "@/hooks"
import Link from "next/link"
import { useRouter } from "next/router"

interface IProps {
  price: number
  name: string
  img: string
  group: string
  new_price?: number
  path: string
}
type Props = {
  props: IProps
}
export const Card = ({ props }: Props): JSX.Element => {
  const t = useLocale()
  const router = useRouter()
  const locale = router.locale
  return (
    <Link
      className="flex flex-col flex-1 p-8 border cursor-pointer border-1"
      href={`base/${props.path}`}
      locale={locale}
    >
      <div className="flex justify-center flex-1">
        <Image
          className="duration-300 ease-out cursor-pointer hover:scale-110 hover:rotate-12"
          src={props.img}
          alt={props.name}
          width={260}
          height={47}
          priority
        />
        <div className="flex flex-col">
          <h2 className="mb-8 text-2xl font-bold">{props.name}</h2>
          {props.new_price ? (
            <>
              <p className="text-3xl font-bold line-through">{props.price}</p>
              <p className="text-3xl text-indigo-800">{props.new_price}</p>
            </>
          ) : (
            <p className="text-3xl font-bold">{props.price}</p>
          )}
          <h2 className="text-lg text-end">+{t.delivery} </h2>
        </div>
      </div>
      <div className="flex justify-end">
        <MyButton />
      </div>
    </Link>
  )
}
