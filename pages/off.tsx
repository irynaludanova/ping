import React, { useState } from "react"
import { productData } from "@/data/product.data"
import { Card, Layout } from "@/components"
import { useLocale } from "@/hooks"
import { defLogoData } from "@/data/def.logo.data"
import Image from "next/image"

const Off = () => {
  const [group, setGroup] = useState("")
  const t = useLocale()

  return (
    <Layout title="Base">
      {" "}
      <div className="flex flex-col flex-wrap">
        <div className="flex items-center justify-center my-8 cursor-pointer">
          {defLogoData.map((item) => (
            <Image
              src={item.img}
              alt={item.alt}
              width={300}
              height={240}
              priority
              key={item.id}
              onClick={() => setGroup(item.alt)}
              className="mx-4"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 m-4 ">
          {productData.map((product) =>
            product.products.map(
              (pr) =>
                pr.category === "OFF" && <Card key={pr.item_id} props={pr} />
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Off
