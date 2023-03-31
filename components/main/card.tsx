import React from "react"
import Image from "next/image"

interface IProps {
  price: number
  name: string
  img: string
}
type Props = {
  props: IProps
}
export const Card = ({ props }: Props) => {
  return (
    <div>
      <div className="">
        <Image
          className=""
          src={props.img}
          alt={props.name}
          width={180}
          height={37}
          priority
        />
        <h2 className="">{props.name}</h2>
        <h2 className="">{props.price}</h2>
        <button>Купить</button>
      </div>
    </div>
  )
}
