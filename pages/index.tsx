import { useContext } from "react"
import { useLocale } from "@/hooks"
import { MainImage, Layout } from "@/components"
import { CarouselCard } from "@/components/carousel/carousel_card"
import Base from "@/models/Base"
import db from "../utils/db"
import { Store } from "../utils/Store"
import { IProduct } from "@/types/intefaces"

type Props = {
  products: IProduct[]
}
export default function Home({ products }: Props) {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  const t = useLocale()

  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-between w-full">
          <MainImage />
          <div className="p-8 my-12 glass">
            <p className="text-2xl text-center ">{t.main_desc_1}</p>
          </div>
          <div className="flex flex-wrap flex-1">
            {products &&
              products.map(
                (item) =>
                  item.new_price && (
                    <CarouselCard
                      dispatch={dispatch}
                      cart={cart}
                      key={item.item_id}
                      product={item}
                    />
                  )
              )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  await db.connect()
  const products = await Base.find().lean()
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  }
}
