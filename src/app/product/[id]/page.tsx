import { singleProduct } from "@/app/data"
import Price from "@/components/Price"
import Image from "next/image"
import React from "react"

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:items-center md:gap-4 xl:gap-6">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-1/2 md:h-[70%]">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain "
          />
        )}
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full h-1/2 flex flex-col gap-4 md:h-[70%]  md:justify-center">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p className="">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  )
}

export default SingleProductPage
