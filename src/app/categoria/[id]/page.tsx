import ProductList from "@/app/components/products/ProductList/ProductList"
import { descriptionSelector, titleChange } from "@/app/helpers/helpers"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

interface Props {
  params: {
    id:string
  }
}





export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

 
  return {
    title: `${id} Floreria Morabito`,
    description: descriptionSelector(id),
  }
}

const CategoryPage = ({params}:Props) => {

  let {id} = params
  
  if (id === 'Arreglo'){
    id = "Arreglo floral"
  }

  return (
    <div>
      <h1 className="text-3xl mb-10 mt-[10vh] text-center">{titleChange(id)}</h1>
      <ProductList category={id} />
    </div>
  )
}

export default CategoryPage