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
    <div className="w-[25vw] bg-white h-[40vw] rounded-3xl shadow-2xl flex flex-col justify-between">
      <Image
        className="rounded-3xl h-[80%] w-[100%]"
        src={img}
        width={500}
        height={500}
        alt="ramo" />
      <div className="h-[100%] p-4 flex justify-around w-[100%]">
        <div className="flex flex-col justify-center w-[60%]">
          <h4 className="text-xl text-violet-500">{title}</h4>
          <span className="text-lg font-thin mt-2">Precio:
            <strong className="ml-2 text-violet-500">${price}</strong>
          </span>
        </div>
        <div className="flex flex-col justify-between w-[40%]">
          <Link href={productPath}>
            <button className="w-[100%] hover:text-violet-500 hover:bg-white hover:border border-violet-500 text-white bg-violet-500 p-3 rounded-xl ">Ver producto</button>
          </Link>
          <Link href={categoryPath}>
            <button className=" w-[100%] hover:border-violet-500 hover:text-white hover:bg-violet-500 text-violet-500 bg-white border border-violet-500 p-3 rounded-xl">Ver ramos</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ProductBest