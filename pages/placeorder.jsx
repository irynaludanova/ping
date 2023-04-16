import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import React, { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Layout, CheckoutWizard } from "@/components"
import { getError } from "../utils/error"
import { Store } from "../utils/Store"
import { IProduct } from "@/types/intefaces"

const PlaceOrderScreen = () => {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  const { cartItems, shippingAddress, paymentMethod } = cart

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100

  const itemsPrice = round2(
    cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  ) // 123.4567 => 123.46

  const shippingPrice = itemsPrice > 200 ? 0 : 15
  const taxPrice = round2(itemsPrice * 0.15)
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice)

  const router = useRouter()
  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment")
    }
  }, [paymentMethod, router])

  const [loading, setLoading] = useState(false)

  const placeOrderHandler = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post("/api/orders", {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
      setLoading(false)
      dispatch({ type: "CART_CLEAR_ITEMS" })
      Cookies.set(
        "cart",
        JSON.stringify({
          ...cart,
          cartItems: [],
        })
      )
      router.push(`/order/${data._id}`)
    } catch (err) {
      setLoading(false)
      toast.error(getError(err))
    }
  }

  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
      <h1 className="mb-4 text-xl">Place Order</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="p-5 card">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              {shippingAddress.fullName}, {shippingAddress.address},{" "}
              {shippingAddress.city}, {shippingAddress.postalCode},{" "}
              {shippingAddress.country}
              <Link href="/shipping">Edit</Link>
            </div>
            <div className="p-5 card">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              {paymentMethod}

              <Link href="/payment">Edit</Link>
            </div>
            <div className="p-5 overflow-x-auto card">
              <h2 className="mb-2 text-lg">Order Items</h2>
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 text-left">Item</th>
                    <th className="p-5 text-right ">Quantity</th>
                    <th className="p-5 text-right ">Price</th>
                    <th className="p-5 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
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
                      <td className="p-5 text-right ">{item.quantity}</td>
                      <td className="p-5 text-right">${item.price}</td>
                      <td className="p-5 text-right">
                        ${item.quantity * item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Link href="/cart">Edit</Link>
            </div>
          </div>

          <div className="p-5 card">
            <h2 className="mb-2 text-lg">Order Summary</h2>
            <ul>
              <li className="flex justify-between mb-2">Items ${itemsPrice}</li>

              <li className="flex justify-between mb-2">Tax ${taxPrice}</li>

              <li className="flex justify-between mb-2">
                Shipping ${shippingPrice}
              </li>

              <li className="flex justify-between mb-2">Total ${totalPrice}</li>
            </ul>
            <button
              disabled={loading}
              onClick={placeOrderHandler}
              className="w-full primary-button"
            >
              {loading ? "Loading..." : "Place Order"}
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}

PlaceOrderScreen.auth = true
export default PlaceOrderScreen
