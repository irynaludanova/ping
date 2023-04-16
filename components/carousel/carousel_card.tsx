import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@material-tailwind/react"
import { IProduct } from "@/types/intefaces"
import { addToCartHandler } from "@/helpers/cart"
import { useLocale } from "@/hooks"

type Props = {
  product: IProduct
  dispatch: any
  cart: any
}

export const CarouselCard = ({ product, cart, dispatch }: Props) => {
  const router = useRouter()
  const locale = router.locale
  const t = useLocale()
  return (
    <Link locale={locale} href={`base/${product.path}`} className="flex flex-1">
      <div className="flex flex-col items-center justify-between flex-1 p-4 m-2 cursor-pointer glass w-96">
        <div className="flex justify-between w-full">
          <Image
            src={product.img}
            alt={product.name}
            width={180}
            height={37}
            priority
            className="w-[45%]"
          />
          <div className="flex flex-col w-[55%] text-center">
            <div className="flex flex-col flex-1">
              <p className="my-4 text-2xl text-center">{product.name}</p>
              {product.new_price ? (
                <>
                  <p className="text-3xl font-semibold line-through">
                    {product.price} грн
                  </p>
                  <p className="text-3xl font-semibold text-indigo-800">
                    {product.new_price} грн
                  </p>
                </>
              ) : (
                <p className="text-3xl font-semibold">{product.price} грн</p>
              )}
            </div>

            <div className="flex justify-end my-2 ">
              <Button
                ripple={true}
                color="indigo"
                size="md"
                variant="gradient"
                onClick={() => addToCartHandler(product, cart, dispatch)}
              >
                {t.buy}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
