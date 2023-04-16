import React from "react"
import { CardList, Layout } from "@/components"
import { productData } from "@/data/product.data"
import { IItems, IProduct } from "@/types/intefaces"
import db from "../utils/db"
import Base from "@/models/Base"

const BaseScreen = ({ products }: IItems) => {
  console.log(products, "prod from props")
  return (
    <Layout title="Base">
      <CardList products={products} />
    </Layout>
  )
}

export default BaseScreen
export async function getServerSideProps() {
  await db.connect()
  const products = await Base.find().lean()
  console.log(products, "prod from props")
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  }
}
