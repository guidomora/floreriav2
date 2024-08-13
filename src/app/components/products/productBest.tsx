import Image from "next/image"
import Link from "next/link"

interface BestSellers {
  title: string
  price: string
  img: string
  productPath: string
  categoryPath: string
}

const ProductBest = ({ title, price, img, productPath, categoryPath }: BestSellers) => {
  return (
    <div className=" bg-white  rounded-3xl shadow-2xl flex flex-col justify-between m-2 w-[75%] sm:w-[35%] md:w-[35%]  lg:w-[25%] xl:w-[20%]">
      <Image
        className="rounded-3xl sm:h-[32vh] md:h-[35vh] lg:h-[45vh] w-[100%]"
        src={img}
        width={500}
        height={500}
        alt="ramo" />
      <div className="h-[100%] p-2 flex-col justify-between">
        <div className="flex justify-center items-baseline gap-4 mb-3">
          <h4 className="text-sm text-violet-400">{title}</h4>
          <span className="text-sm font-thin">
            <strong className=" text-violet-700">${price}</strong>
          </span>
        </div>
        <div className="flex gap-4 w-[100%]">
          <Link className="w-[100%]" href={productPath}>
            <button className="text-xs w-[100%] hover:text-violet-500 hover:bg-white hover:border border-violet-500 text-white bg-violet-500 p-2 rounded-xl ">Ver producto</button>
          </Link>
          <Link className="w-[100%]" href={categoryPath}>
            <button className="text-xs w-[100%] hover:border-violet-500 hover:text-white hover:bg-violet-500 text-violet-500 bg-white border border-violet-500 p-2 rounded-xl">Ver Ramos</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProductBest