import ProductList from "@/app/components/products/ProductList/ProductList"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

interface Props {
  params: {
    id:string
  }
}

const metaDescriptionCajas = 'Cajas de flores de distintos tamaños, cajas de flores con chocolates. Envio de cajas con flores. Cajas premium para cumpleaños, regalos, festejos.' 
const metaDescriptionRamos = 'Ramos de flores para regalar, cumpleaños y festejos. Envio de ramos de flores. Ramos de flores premium' 
const metaDescriptionCoronas = 'Coronas de flores y bouquets para condolencias. Envios en el momento. Coronas premium. Llegamos a toco CABA y provincia' 
const metaDescriptionArreglos = 'Arreglos florales personalizados para ocasiones especiales. Armado de todo tipo de arreglos' 

const descriptionSelector = (id:string) => {
  switch (id) {
    case 'Cajas':
      return metaDescriptionCajas
    case 'Ramos':
      return metaDescriptionRamos
    case 'Condolencias':
      return metaDescriptionCoronas
    case 'Arreglos':
      return metaDescriptionArreglos
    default:
      return ''
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: id,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
    description: descriptionSelector(id),
  }
}

const CategoryPage = ({params}:Props) => {

  const {id} = params
  
  if (id === 'kids'){
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl mt-24 text-center">{id}</h1>
      <ProductList category={id} />
    </div>
  )
}

export default CategoryPage