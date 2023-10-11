"use client"
import React, { useEffect, useState } from "react"

type Props = {
  price: number
  id: number
  options?: { title: string; additionalPrice: number }[]
}

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuatity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price])

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold">{total.toFixed(2)}</h2>
      {/* OPTION CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={index}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY CONTAINER */}
      <div className="flex justify-between items-center">
        {/* CONTAAINER 1 */}
        <div className="flex  justify-between w-full p-3 ring-1 ring-red-500">
          <span className="">Quantity</span>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => setQuatity((prev) => (prev > 1 ? prev - 1 : 1))}
              className=""
            >
              {"<"}
            </button>
            <button className="">{quantity}</button>
            <button
              onClick={() => setQuatity((prev) => (prev < 9 ? prev + 1 : 9))}
              className=""
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CONTAAINER 2 */}
        <button className="uppercase w-56 bg-red-500 text-white ring-1 ring-red-500 p-3   ">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Price
