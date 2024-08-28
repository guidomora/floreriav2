
import { ProductProps } from '@/app/context/DataProvider'
import { getProduct } from '@/app/Data/OneProduct'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
    params:{
        slug:string
    }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug.replace(/_/g, " ")

  // fetch data
  const product = await getProduct(id)
 
 
  return {
    title: product?.title,
    openGraph: {
      title:product?.title,
      description:product?.description,
      images: [product?.image!],
    },
    description: product?.description
  }
}

const ProductPage = ({params}:Props) => {
  
  const formatTitle = params.slug.replace(/_/g, " ")

  const product = getProduct(formatTitle)
  console.log(product);
  
    
  return (
    <div>{formatTitle}</div>
  )
}

export default ProductPage