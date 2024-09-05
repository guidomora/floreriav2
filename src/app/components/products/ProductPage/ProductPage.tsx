import { ProductProps } from "@/app/context/DataProvider"
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image"
import Link from "next/link";

const pluralizeCategory = (category: string) => {
    switch (category) {
      case 'Ramo':
        return 'Ramos';
      case 'Caja':
        return 'Cajas';
      case 'Condolencias':
        return 'Bouquets o Coronas';
      case 'Arreglo floral':
        return 'Arreglos florales';
      default:
        return category;
    }
  };


const timeCategory = (category: string) => {
    switch (category) {
      case 'Ramo':
        return '10 a 30min';
      case 'Caja':
        return '30min a 1h';
      case 'Condolencias':
        return '30min a 1h15';
      case 'Arreglo floral':
        return 'Arreglos florales';
      default:
        return category;
    }
  };


const ProductPageDetail = ({ title, image, description, price, category }: ProductProps) => {



    const formatTitle = title.replace(/ /g, "_")
    // http://localhost:3000/
    // https://floreriamorabito.com.ar/producto/
    const message = `${title}, https://floreriamorabito.com.ar/producto/${formatTitle}`
    const formattedCategory = pluralizeCategory(category!);
    const time = timeCategory(category!)
    return (
        <div className="flex flex-col items-center md:flex-row pt-[10vh] md:justify-around p-6 h-full">
            <div className="border-2 rounded-2xl border-violet-300 p-4 bg-slate-50 max-h-[100%]">
                <Image className="h-[100%] w-[100%] rounded-2xl" width={500} height={500} src={image} alt={'title'} />
            </div>
            <div className="flex flex-col justify-evenly h-[70%] w-[50%]">
                <div className="h-[50%] flex flex-col justify-around border-2 rounded-2xl border-violet-300 p-4 bg-slate-50">
                    <div>
                        <h1 className="text-3xl text-violet-400 text-start mb-4">{title}</h1>
                        <p className="text-xl text-start">{description}</p>
                    </div>
                    <p className="text-2xl text-violet-300 font-thin text-start">${price}</p>
                    <Link target="blank" href={`https://wa.me/1169402036?text=Hola%20quisiera%20encargar%20${message}`}>
                        <button className="p-4 rounded-3xl bg-violet-600 text-white text-lg">Encargar Producto</button>
                    </Link>
                </div>
                <div className="flex flex-col border-2 rounded-2xl border-violet-300 p-4 bg-slate-50 text-start">
                    <h2 className="text-xl text-violet-400 mb-2">Importante:</h2>
                    <p className="">Para las entregas en el dia, tenga en cuenta que los productos 
                        se elaboran en el momento y esto puede llevar tiempo.</p>
                    <p className="mt-2 font-bold">Los {formattedCategory} tardan aproximadamente {time}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPageDetail