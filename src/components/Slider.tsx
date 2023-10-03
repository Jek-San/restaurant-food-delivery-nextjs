"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const data = [
  {
    id: 1,
    title: "always fresh & always crispy $ always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
]

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // useEffect(() => {
  //   // Create a timer to change the image every 4 seconds
  //   const intervalId = setInterval(() => {
  //     setIsTransitioning(true)
  //     setTimeout(() => {
  //       setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length)
  //       setIsTransitioning(false)
  //     }, 500) // Adjust the timeout duration to match your CSS transition time
  //   }, 4000)

  //   return () => clearInterval(intervalId) // Clean up the timer on unmount
  // }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className=" flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold ">
        <h1
          className={`text-5xl text-center uppercase md:p-10 p-4 md:text-6xl xl:text-7xl transition-all duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-1"
          }`}
        >
          {data[currentSlide].title}
        </h1>
        <button
          className={`bg-red-500 text-white py-4 px-8 rounded-md hover:bg-red-800 transition-all duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-1"
          }`}
        >
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative">
        <div
          className={`w-full h-full  transition-all duration-500 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-1"
          }`}
        >
          <Image
            src={data[currentSlide].image}
            alt=""
            fill
            className={`object-cover transition-all duration-500 ease-in-out ${
              isTransitioning ? "opacity-0" : "opacity-1"
            }`}
          />
        </div>
      </div>
    </div>
  )
}

export default Slider
