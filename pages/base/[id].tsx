import { useRouter } from "next/router"
import Image from "next/image"
import Input from "@material-tailwind/react/components/Input"
import { MyButton } from "@/components"
import { useLocale } from "@/hooks"
import { Layout } from "@/components"
import React, { useState, useEffect, useContext } from "react"
import { toast } from "react-toastify"
import Link from "next/link"
import data from "@/utils/data.js"
import { Store } from "@/utils/Store"
import Base from "@/models/Base"
import db from "@/utils/db"
import { IProduct } from "@/types/intefaces"
import axios from "axios"

const BasePage = (props: IProduct) => {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { id } = router.query

  const product = id && data.base.find((x) => x.path === id)

  const addToCartHandler = async () => {
    const existItem = state.cart?.cartItems?.find(
      (x: { slug: number | undefined }) =>
        product !== "" && x.slug === product?.item_id
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/api/base/${props.path}`)
    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock")
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...props, quantity } })
    router.push("/cart")
  }

  const t = useLocale()
  if (!props) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>
  }
  return (
    product !== "" && (
      <Layout title={product?.name}>
        <div className="py-2">
          <Link href="/base">back to products</Link>
        </div>
        <div className="">
          <div className="flex flex-col justify-around p-8 cursor-pointer">
            <div className="flex justify-around ">
              <div className="containerItem">
                <div className="productImage">
                  {product && (
                    <Image
                      src={product?.img}
                      alt={product?.name}
                      width={300}
                      height={280}
                      priority
                      className="mt-40 ml-40 shadow-sm"
                    />
                  )}
                </div>

                <p className="mb-32 ml-8 text-3xl text-white bg-indigo-400 shadow-sm speed">
                  {t.speed} {product?.speed}
                </p>

                <p className="mb-12 text-3xl text-white bg-indigo-400 shadow-sm price">
                  {t.price} {product?.price}
                </p>

                <p className="mr-8 text-3xl text-white bg-indigo-400 shadow-sm control mt-36">
                  {t.control} {product?.control}
                </p>

                <p className="mt-4 text-3xl text-center text-white bg-indigo-400 shadow-sm productName">
                  {product?.name}
                </p>
              </div>

              <div className="flex flex-col ">
                <div className="flex flex-col ">
                  {product?.new_price ? (
                    <>
                      <p className="text-2xl line-through ">{product?.price}</p>
                      <p className="text-2xl text-indigo-800">
                        {product?.new_price}
                      </p>
                    </>
                  ) : (
                    <p className="text-2xl ">{product?.price}</p>
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
                  <button onClick={addToCartHandler}>Add</button>
                  <MyButton onClick={addToCartHandler} />
                </div>
              </div>
            </div>
            {product && <p className="">{t[product.desc]}</p>}
            {product?.shape && (
              <div className="flex">
                <p className="pr-8 text-2xl font-semibold">{t.shape}</p>
                <p className="text-2xl font-semibold">{t[product.shape]}</p>
              </div>
            )}
            {product?.speed && (
              <div className="flex">
                <p className="pr-8 text-2xl font-semibold">{t.speed}</p>
                <p className="text-2xl font-semibold">{product.speed}</p>
              </div>
            )}
            {product?.control && (
              <div className="flex">
                <p className="pr-8 text-2xl font-semibold">{t.control}</p>
                <p className="text-2xl font-semibold">{product.control}</p>
              </div>
            )}
            {product?.weight && (
              <div className="flex">
                <p className="pr-8 text-2xl font-semibold">{t.weight}</p>
                <p className="text-2xl font-semibold">{product.weight}</p>
              </div>
            )}
            {product?.layers && (
              <div className="flex">
                <p className="pr-8 text-2xl font-semibold">{t.layers}</p>
                <p className="text-2xl font-semibold">{product.layers}</p>
              </div>
            )}
            {product?.width && (
              <div className="flex">
                <p className="pr-8 text-2xl font-semibold">{t.size}</p>
                <p className="text-2xl font-semibold">{product.width}</p>
              </div>
            )}
          </div>
        </div>
      </Layout>
    )
  )
}

export default BasePage
export async function getServerSideProps(context: { params: any }) {
  const { params } = context
  const { slug } = params

  await db.connect()
  const product = await Base.findOne({ slug }).lean()
  await db.disconnect()
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  }
}
