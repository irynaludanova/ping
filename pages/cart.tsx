import Image from "next/image"
import Link from "next/link"
import React, { useContext } from "react"
// import { XCircleIcon } from "@heroicons/react/outline"
import { Layout } from "@/components"
import { Store } from "../utils/Store"
import { useRouter } from "next/router"
import { IProduct } from "@/types/intefaces"
import dynamic from "next/dynamic"
import axios from "axios"
import { toast } from "react-toastify"

function Cart() {
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state
  console.log(state, "state")
  const removeItemHandler = (item: IProduct) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item })
  }
  const updateCartHandler = async (item: IProduct, qty: string) => {
    const quantity = Number(qty)
    const { data } = await axios.get(`/api/base/${item.path}`)
    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock")
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } })
    toast.success("Product updated in the cart")
  }
  return (
    <Layout title="Shopping Cart">
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item: IProduct) => (
                  <tr key={item.item_id} className="border-b">
                    <td>
                      <Link
                        href={`/product/${item.item_id}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        &nbsp;
                        {item.name}
                      </Link>
                    </td>
                    <td className="p-5 text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        remove
                        {/* <XCircleIcon className="w-5 h-5"></XCircleIcon> */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-5 card">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal (
                  {cartItems.reduce(
                    (a: any, c: { quantity: any }) => a + c.quantity,
                    0
                  )}
                  ) : $
                  {cartItems.reduce(
                    (a: number, c: { quantity: number; price: number }) =>
                      a + c.quantity * c.price,
                    0
                  )}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="w-full primary-button"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false })
