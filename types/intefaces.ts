export interface IProduct {
  category: string
  group?: string
  item_id: number
  img: string
  name: string
  price: number
  new_price?: number
  quantity?: number
  weight?: number
  shape?: string
  desc: string
  speed?: number
  control?: number
  layers?: number
  height?: number
  width?: string
  shape_length?: number
  path: string
  countInStock: number
}

export interface IItems {
  id: number
  desc: string
  products: IProduct[]
}
