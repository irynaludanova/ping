import React from "react"
import styles from "./styles.module.scss"
import Image from "next/image"

export const MainImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Image
          src="/static/images/main/m_1.jpg"
          alt="ping"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.box}>
        <Image
          src="/static/images/main/m_2.jpg"
          alt="ping"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.box}>
        <Image
          src="/static/images/main/m_3.jpg"
          alt="ping"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.box}>
        <Image
          src="/static/images/main/m_4.jpg"
          alt="ping"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.box}>
        <Image
          src="/static/images/main/m_5.jpg"
          alt="ping"
          width={180}
          height={37}
          priority
        />
      </div>
    </div>
  )
}
