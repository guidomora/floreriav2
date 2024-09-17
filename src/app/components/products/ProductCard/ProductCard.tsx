import { ProductProps } from '@/app/context/DataProvider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ image, price, title }: ProductProps) => {

  const path = title.replace(/ /g, "_")
  const formatedPrice = price.toLocaleString()
  

  return (
    <div className="overflow-hidden bg-white justify-between rounded-3xl shadow-2xl flex flex-col m-2 w-[75%] sm:w-[35%] md:w-[35%]  lg:w-[35%] xl:w-[20%] 2xl:w-[18%]">
      <Link  href={`/producto/${path}`}>
        <div className="h-[40vh] sm:h-[30vh] md:h-[33vh] lg:h-[37vh] 2xl:h-[40vh] overflow-hidden rounded-t-3xl">
          <Image
            className="w-full h-full object-cover"
            src={image}
            width={1000}
            height={1000}
            alt={title}
            priority={false}
          />
        </div>
        <div className="p-2 flex flex-col">
          <div className="flex justify-between items-baseline gap-4 mb-3 min-h-[60px]">
            <h4 className="text-lg text-violet-700">{title}</h4>
            <span className="text-sm font-thin">
              <strong className=" text-black text-lg">${formatedPrice}</strong>
            </span>
          </div>
          <div className="w-[100%]">
              <button className="text-sm w-[100%] hover:border-violet-500 hover:text-white hover:bg-violet-500 text-violet-500 bg-white border border-violet-500 p-2 rounded-xl">Ver Producto</button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
