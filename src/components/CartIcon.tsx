import Image from "next/image"
import Link from "next/link"
import React from "react"

const CartIcon = () => {
  return (
    <Link href="/cart">
      <div>
        <Image src="/cart.png" alt="" />
      </div>
    </Link>
  )
}

export default CartIcon
