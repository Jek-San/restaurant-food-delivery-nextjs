import { featuredProducts } from "@/app/data"
import Image from "next/image"
import React from "react"

const Featured = () => {
  return (
    <div className="max-w-screen overflow-x-scroll text-red-500 hide-scrollbar">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((p) => (
          <div
            key={p.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 ease-in-out md:w-[50vw] lg:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {p.img && (
              <div className="relative flex-1 w-full transition-all duration-500 ease-linear hover:rotate-[60deg]">
                <Image src={p.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center text-center justify-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {p.title}
              </h1>
              <p className="p-4 2xl:p-8">{p.desc}</p>
              <span className="text-xl font-bold ">${p.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
