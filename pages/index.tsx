import Head from "next/head"
import { Inter } from "next/font/google"
import { useLocale } from "@/hooks"
import { MainImage, Layout } from "@/components"
import { productData } from "@/data/product.data"
import { CarouselCard } from "@/components/carousel/carousel_card"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
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
            {productData.map((item) =>
              item.products.map(
                (prod) =>
                  prod.new_price && (
                    <CarouselCard
                      key={prod.item_id}
                      price={prod.price}
                      img={prod.img}
                      name={prod.name}
                      path={prod.path}
                      new_price={prod.new_price}
                    />
                  )
              )
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}
