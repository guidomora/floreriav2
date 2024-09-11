import { Preferidos, preferidos } from "@/app/helpers/helpers"
import Image from "next/image"
import Link from "next/link"



const ProductBest = ({title, img, productLink, category, categoryLink }: Preferidos) => {
  return (
    <div className="overflow-hidden bg-white justify-between rounded-3xl shadow-2xl flex flex-col m-2 w-[75%] sm:w-[35%] md:w-[35%]  lg:w-[35%] xl:w-[20%] 2xl:w-[18%]">
        <div className="h-[40vh] sm:h-[30vh] md:h-[33vh] lg:h-[37vh] 2xl:h-[40vh] overflow-hidden rounded-t-3xl">
          <Image
            className="w-full h-full object-cover"
            src={img}
            width={1000}
            height={1000}
            alt={title}
            priority={false}
          />
        </div>
        <div className="h-[100%] p-2 flex-col justify-between">
          <div className="flex justify-center items-baseline gap-4 mb-3">
            <h4 className="text-sm text-violet-400">{title}</h4>
          </div>
          <div className="flex gap-4 w-[100%]">
            <Link className="w-[100%]" href={productLink}>
              <button className="text-xs w-[100%] hover:text-violet-500 hover:bg-white hover:border border-violet-500 text-white bg-violet-500 p-2 rounded-xl ">Ver producto</button>
            </Link>
            <Link className="w-[100%]" href={categoryLink}>
              <button className="text-xs w-[100%] hover:border-violet-500 hover:text-white hover:bg-violet-500 text-violet-500 bg-white border border-violet-500 p-2 rounded-xl">Ver {category}</button>
            </Link>

          </div>
        </div >
    </div>
  )
}

export default ProductBest