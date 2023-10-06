import { pizzas } from "@/app/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full h-[60vh] border-r-2 border-b-2 border-l-2 border-red-500 flex flex-col justify-between sm:w-1/2 lg:w-1/3 p-4 group odd:bg-fuchsia-50"
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} fill alt="" className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex justify-between font-bold items-center group-hover:opacity-100 transition-opacity ease-in-out duration-300 relative">
            <h1 className="uppercase font-bold p-2">{item.title}</h1>
            <h2 className="text-xl transition ease-in-out duration-300 group-hover:opacity-0  group-hover:translate-x-2/4">
              {item.price}
            </h2>
            <button className=" opacity-0 group-hover:opacity-100 hover:bg-red-600 uppercase bg-red-500 text-white rounded-md px-2 py-1 transition-all ease-in-out duration-300">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
