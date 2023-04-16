import React from "react"
import { useLocale } from "@/hooks"
import Link from "next/link"
import { useRouter } from "next/router"
import { IItems, IProduct } from "@/types/intefaces"
import { baseCategoryData } from "@/data/base.category.data"
import { Carousel } from "@/components"

type Props = {
  products: IProduct[]
}
export const CardList = ({ products }: Props) => {
  const router = useRouter()
  const t = useLocale()
  const locale = router.locale

  return (
    <div>
      {products &&
        products.map((item) => (
          <div className="" key={item.item_id}>
            {/* <p className="p-4 text-2xl border-2">{t[item.desc]}</p> */}
            <div className="flex items-center justify-around my-8">
              {baseCategoryData.map((cat) => (
                <Link locale={locale} href={cat.title} key={cat.id}>
                  <div className="px-12 py-8 m-4 text-2xl text-center rounded-sm cursor-pointer card glass">
                    {cat.title.toUpperCase()}
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex">
              <div className="flex flex-col flex-1 w-full">
                {/* <Carousel items={products} /> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
