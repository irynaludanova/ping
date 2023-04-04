import React from "react"
import { useLocale } from "@/hooks"
import Link from "next/link"
import { useRouter } from "next/router"
import { IItems } from "@/types/intefaces"
import { baseCategoryData } from "@/data/base.category.data"
import { Carousel } from "../carousel/carousel"
import { Sales } from "@/components"
type Props = {
  items: IItems[]
}
export const CardList = ({ items }: Props) => {
  const router = useRouter()
  const t = useLocale()
  const locale = router.locale
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div>
      {items.map((item) => (
        <div className="" key={item.id}>
          <p className="p-4 text-2xl border-2">{t[item.desc]}</p>
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
              <Carousel items={item.products} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
