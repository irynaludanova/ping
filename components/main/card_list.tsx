import React from "react"
import { Card } from "@/components"

export interface IProduct {
  item_id: number
  img: string
  name: string
  price: number
  weight?: number
  shape?: string
  desc: string
  speed?: number
  control?: number
  layers?: number
  height?: number
  width?: string
  shape_length?: number
}
interface IProducts {
  id: number
  category: string
  items: IProduct[]
}
export interface IItems {
  id: number
  desc: string
  products: IProducts[]
}
type Props = {
  items: IItems[]
}
export const CardList = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <div className="" key={item.id}>
          <p className="p-4 text-2xl border-2">{item.desc}</p>
          {item.products.map((prod_item) => (
            <div className="" key={prod_item.id}>
              <p className="">{prod_item.category}</p>
              {/* {prod_item.items.map((pr_item) => (
                <Card key={pr_item.item_id} props={pr_item} />
              ))} */}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
