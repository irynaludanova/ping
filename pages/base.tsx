import React from "react"
import { CardList } from "@/components"
import { productData } from "@/data/product.data"

const Base = () => {
  return <CardList items={productData} />
}

export default Base
