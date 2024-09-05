import { ProductProps } from "@/app/context/DataProvider"
import Image from "next/image"
import Link from "next/link";


const ProductPageDetail = ({ title, image, description, price }: ProductProps) => {

    const formatTitle = title.replace(/ /g, "_")
    // http://localhost:3000/
    // https://floreriamorabito.com.ar/producto/
    const message = `${title}, https://floreriamorabito.com.ar/producto/${formatTitle}`

    return (
        <div className="flex pt-[10vh] justify-around p-6 h-screen">
            <div className="border-2 rounded-2xl border-violet-300 p-4 bg-slate-50 max-h-[80%]">
                <Image className="h-[100%] w-[100%] rounded-2xl" width={500} height={500} src={image} alt={'title'} />
            </div>
            <div className="flex flex-col justify-evenly max-h-[50%] border-2 rounded-2xl border-violet-300 p-4 bg-slate-50">
                <div>
                    <h1 className="text-3xl text-violet-400 text-start mb-2">{title}</h1>
                    <p className="text-xl text-start">{description}</p>
                </div>
                <p className="text-2xl text-violet-300 font-thin text-start">${price}</p>
                <Link target="blank" href={`https://wa.me/1169402036?text=Hola%20quisiera%20encargar%20${message}`}>
                    <button className="p-4 rounded-3xl bg-violet-600 text-white text-lg">Encargar Ramo</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductPageDetail