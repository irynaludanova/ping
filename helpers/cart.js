import axios from "axios"
import { toast } from "react-toastify"

export const addToCartHandler = async (product, cart, dispatch) => {
  const existItem = cart.cartItems.find((x) => x.slug === product.item_id)
  const quantity = existItem ? existItem.quantity + 1 : 1
  const { data } = await axios.get(`/api/base/${product.path}`)

  if (data.countInStock < quantity) {
    return toast.error("Sorry. Product is out of stock")
  }
  dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } })

  toast.success("Product added to the cart")
}
