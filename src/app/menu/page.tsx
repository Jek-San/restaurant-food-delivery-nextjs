import Link from "next/link"
import React from "react"
import { menu } from "../data"

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col  md:flex-row items-center md:bg-slate-600  lg:bg-lime-800 xl:bg-zinc-500 2xl:bg-red-500">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 lg:h-[70%] lg:flex 2xl:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div
            className={`text-${category.color} w-1/2 2xl:justify-between 2xl:flex 2xl:flex-col 2xl:gap-6  `}
          >
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`hidden 2xl:block bg-black text-white py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage
