import React from "react"
import { productData } from "@/data/product.data"
import Image from "next/image"
import styles from "./styles.module.css"

export const Sales = () => {
  return (
    <ul className={styles.productGrid}>
      {productData.map((item) =>
        item.products.map((product) => (
          <li key={product.item_id} className={styles.item}>
            <div className={styles.holder}>
              <div className={styles.star}>
                <h2 className={styles.title}>{product.name}</h2>
                <p id="price">{product.price}</p>
                <Image
                  src={product.img}
                  alt={product.name}
                  width={180}
                  height={37}
                  priority
                  className={styles.image}
                />
                /
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  )
}
