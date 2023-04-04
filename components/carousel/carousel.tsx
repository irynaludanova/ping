import React from "react"
import styles from "./styles.module.scss"
import { CarouselCard } from "./carousel_card"
import { IProduct } from "@/types/intefaces"

type Props = {
  items: IProduct[]
}
export const Carousel = ({ items }: Props) => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        {items.map((item) => (
          <div className={styles.slide} key={item.item_id}>
            <CarouselCard
              img={item.img}
              price={item.price}
              name={item.name}
              new_price={item.new_price}
              path={item.path}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
