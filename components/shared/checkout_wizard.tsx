import React from "react"
import { checkoutData } from "@/data/checkout.data"

export function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="flex flex-wrap mb-5">
      {checkoutData.map((item, index) => (
        <div
          key={item.id}
          className={`flex-1 border-b-2
          text-center
       ${
         index <= activeStep
           ? "border-indigo-500   text-indigo-500"
           : "border-gray-400 text-gray-400"
       }

       `}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}
