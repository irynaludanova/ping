import React from "react"
import { CardList, Layout } from "@/components"
import { productData } from "@/data/product.data"

const Base = () => {
  return (
    <Layout title="Base">
      <CardList items={productData} />
    </Layout>
  )
}

export default Base
