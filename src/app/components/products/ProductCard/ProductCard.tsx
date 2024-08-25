import { ProductProps } from '@/app/context/DataProvider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ image, price, title }: ProductProps) => {
  return (
    <div className="overflow-hidden  bg-white justify-between rounded-3xl shadow-2xl flex flex-col m-2 w-[75%] sm:w-[35%] md:w-[35%]  lg:w-[25%] xl:w-[20%] 2xl:w-[18%]">

      <div className="h-[38vh] sm:h-[28vh] md:h-[31vh] lg:h-[35vh] 2xl:h-[38vh] overflow-hidden rounded-t-3xl">
        <Image
          className="w-full h-full object-cover"
          src={image}
          width={500}
          height={500}
          alt="ramo"
        />
      </div>
      <div className="p-2 flex-col justify-between">
        <div className="flex justify-between items-baseline gap-4 mb-3">
          <h4 className="text-lg text-violet-700">{title}</h4>
          <span className="text-sm font-thin">
            <strong className=" text-black text-lg">${price}</strong>
          </span>
        </div>
        <div className="flex gap-4 w-[100%]">
          <Link className="w-[100%]" href={'categoryPath'}>
            <button className="text-sm w-[100%] hover:border-violet-500 hover:text-white hover:bg-violet-500 text-violet-500 bg-white border border-violet-500 p-2 rounded-xl">Ver Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


//         className="rounded-3xl h-[42vh] sm:h-[32vh] md:h-[35vh] lg:h-[45vh] 2xl:h-[48vh]"


{/* <div className=" bg-white  rounded-3xl shadow-2xl flex flex-col justify-between m-2 w-[75%] sm:w-[35%] md:w-[35%]  lg:w-[25%] xl:w-[20%] 2xl:w-[18%]">
<Image
  className="rounded-3xl h-[42vh] sm:h-[32vh] md:h-[35vh] lg:h-96 2xl:h-[48vh]"
  src={image}
  width={500}
  height={500}
  alt="ramo" />
<div className="h-[100%] p-2 flex-col justify-between">
  <div className="flex justify-center items-baseline gap-4 mb-3">
    <h4 className="text-lg text-violet-700">{title}</h4>
    <span className="text-sm font-thin">
      <strong className=" text-black text-lg">${price}</strong>
    </span>
  </div>
  <div className="flex gap-4 w-[100%]">
    <Link className="w-[100%]" href={'categoryPath'}>
      <button className="text-sm w-[100%] hover:border-violet-500 hover:text-white hover:bg-violet-500 text-violet-500 bg-white border border-violet-500 p-2 rounded-xl">Ver Detalle</button>
    </Link>
  </div>
</div>
</div> */}