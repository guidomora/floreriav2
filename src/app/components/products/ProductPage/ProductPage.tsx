import { ProductProps } from "@/app/context/DataProvider"
import Image from "next/image"
import Link from "next/link";
import BackTobutton from "../../buttons/BackTobutton";


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
    <div className="flex flex-col pt-[10vh]">
      <BackTobutton />
      <div className="flex flex-col items-center lg:items-start lg:flex-row md:justify-around p-6 min-h-screen">
        <div className="border-2 rounded-2xl border-violet-300 p-4 bg-slate-50 w-[100%] sm:w-[75%] lg:w-[40%] 2xl:w-[33%] ">
          <Image className=" w-[100%] rounded-2xl" width={500} height={500} src={image} alt={'title'} />
        </div>
        <div className="flex flex-col w-[100%] sm:w-[75%] lg:w-[45%]">
          <div className="mt-8 lg:mt-0 mb-8 gap-8 
          flex flex-col justify-evenly border-2 rounded-2xl border-violet-300 p-4 bg-slate-50">
            <div>
              <h1 className="text-3xl text-violet-400 text-center lg:text-start mb-4">{title}</h1>
              <p className="text-xl text-center lg:text-start">{description}</p>
            </div>
            <p className="text-2xl text-violet-400 font-thin text-center lg:text-start">${price}</p>
            <Link target="blank" className="flex justify-center" href={`https://wa.me/1169402036?text=Hola%20quisiera%20encargar%20${message}`}>
              <button className="w-5/6 p-4 rounded-3xl bg-violet-600 text-white text-lg">Encargar Producto</button>
            </Link>
          </div>
          <div className="flex flex-col border-2 rounded-2xl border-violet-300 p-4 bg-slate-50 text-start">
            <h2 className="text-xl text-violet-400 mb-2">Importante:</h2>
            <p className="">Para las entregas en el dia, tenga en cuenta que los productos
              se elaboran en el momento y esto puede llevar tiempo.</p>
            <p className="mt-2">Los {formattedCategory} tardan aproximadamente <strong>{time}</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

// h-[47vh] sm:h-[35vh] lg:h-[30vh]

export default ProductPageDetail