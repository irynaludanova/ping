import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import MyButton from "../shared/my_button"
type Props = {
  price: number
  name: string
  img: string
  new_price: number | undefined
  path: string
}
export const CarouselCard = ({ price, name, img, new_price, path }: Props) => {
  const router = useRouter()

  const locale = router.locale
  const basePath = router.asPath
  console.log(basePath, "base")
  return (
    <Link locale={locale} href={`base/${path}`} className="flex flex-1">
      <div className="flex flex-col items-center justify-between flex-1 p-4 m-2 cursor-pointer glass w-96">
        <div className="flex justify-between w-full">
          <Image
            src={img}
            alt={name}
            width={180}
            height={37}
            priority
            className="w-[45%]"
          />
          <div className="flex flex-col w-[55%] text-center">
            <div className="flex flex-col flex-1">
              {" "}
              <p className="my-4 text-2xl text-center">{name}</p>
              {new_price ? (
                <>
                  <p className="text-3xl font-semibold line-through">
                    {price} грн
                  </p>
                  <p className="text-3xl font-semibold text-indigo-800">
                    {new_price} грн
                  </p>
                </>
              ) : (
                <p className="text-3xl font-semibold">{price} грн</p>
              )}
            </div>

            <div className="flex justify-end my-2 ">
              {" "}
              <MyButton />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
