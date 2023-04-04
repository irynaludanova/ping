import { useRouter } from "next/router"
import { productData } from "@/data/product.data"
import Image from "next/image"
import Input from "@material-tailwind/react/components/Input"
import MyButton from "@/components/shared/my_button"
import { useLocale } from "@/hooks"
import { Layout } from "@/components"
import React, { useState, useEffect } from "react"
import { IProduct } from "@/types/intefaces"

const BasePage = () => {
  const [productName, setProductName] = useState("")
  const [productItem, setProductItem] = useState({} as IProduct)
  const router = useRouter()
  const { id } = router.query
  const t = useLocale()
  const setData = (name: string, prod: IProduct) => {
    setProductName(name)
    setProductItem(prod)
  }
  useEffect(() => {
    productData.map((item) => {
      item.products.map((pr) => pr.path === id && setData(pr.name, pr))
    })
  }, [id])

  return (
    <Layout title={productName}>
      <div className="">
        <div className="flex flex-col justify-around p-8 cursor-pointer">
          <div className="flex justify-around ">
            <div className="containerItem">
              <div className="productImage">
                {productItem && (
                  <Image
                    src={productItem.img}
                    alt={productItem.name}
                    width={300}
                    height={280}
                    priority
                    className="mt-40 ml-40 shadow-sm"
                  />
                )}
              </div>

              <p className="mb-32 ml-8 text-3xl text-white bg-indigo-400 shadow-sm speed">
                {t.speed} {productItem.speed}
              </p>

              <p className="mb-12 text-3xl text-white bg-indigo-400 shadow-sm price">
                {t.price} {productItem.price}
              </p>

              <p className="mr-8 text-3xl text-white bg-indigo-400 shadow-sm control mt-36">
                {t.control} {productItem.control}
              </p>

              <p className="mt-4 text-3xl text-center text-white bg-indigo-400 shadow-sm productName">
                {productItem.name}
              </p>
            </div>

            <div className="flex flex-col ">
              <div className="flex flex-col ">
                {productItem.new_price ? (
                  <>
                    <p className="text-2xl line-through ">
                      {productItem.price}
                    </p>
                    <p className="text-2xl text-indigo-800">
                      {productItem.new_price}
                    </p>
                  </>
                ) : (
                  <p className="text-2xl ">{productItem.price}</p>
                )}
                <p className=""> + {t.delivery}</p>
                <div className="w-8 my-4">
                  <Input
                    label=""
                    type="number"
                    size="lg"
                    color="indigo"
                    className="w-8 min-w-full"
                  />
                </div>
                <MyButton />
              </div>
            </div>
          </div>
          <p className="">{t[productItem.desc]}</p>
          {productItem.shape && (
            <div className="flex">
              <p className="pr-8 text-2xl font-semibold">{t.shape}</p>
              <p className="text-2xl font-semibold">{t[productItem.shape]}</p>
            </div>
          )}
          {productItem.speed && (
            <div className="flex">
              <p className="pr-8 text-2xl font-semibold">{t.speed}</p>
              <p className="text-2xl font-semibold">{productItem.speed}</p>
            </div>
          )}
          {productItem.control && (
            <div className="flex">
              <p className="pr-8 text-2xl font-semibold">{t.control}</p>
              <p className="text-2xl font-semibold">{productItem.control}</p>
            </div>
          )}
          {productItem.weight && (
            <div className="flex">
              <p className="pr-8 text-2xl font-semibold">{t.weight}</p>
              <p className="text-2xl font-semibold">{productItem.weight}</p>
            </div>
          )}
          {productItem.layers && (
            <div className="flex">
              <p className="pr-8 text-2xl font-semibold">{t.layers}</p>
              <p className="text-2xl font-semibold">{productItem.layers}</p>
            </div>
          )}
          {productItem.width && (
            <div className="flex">
              <p className="pr-8 text-2xl font-semibold">{t.size}</p>
              <p className="text-2xl font-semibold">{productItem.width}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BasePage
