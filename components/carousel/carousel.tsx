import React, { useContext } from "react"
import styles from "./styles.module.scss"
import { CarouselCard } from "./carousel_card"
import { IProduct } from "@/types/intefaces"
import { Store } from "@/utils/Store"

type Props = {
  items: IProduct[]
  addToCartHandler: any
}

export const Carousel = ({ items }: Props) => {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        {items.map((item) => (
          <div className={styles.slide} key={item.item_id}>
            <CarouselCard product={item} cart={cart} dispatch={dispatch} />
          </div>
        ))}
      </div>
    </div>
  )
}
