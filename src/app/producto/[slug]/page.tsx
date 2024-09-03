
import ProductPageDetail from '@/app/components/products/ProductPage/ProductPage'
import { ProductProps } from '@/app/context/DataProvider'
import { getProduct } from '@/app/Data/OneProduct'
import { Metadata, ResolvingMetadata } from 'next'


interface Props {
  params: {
    slug: string
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
      title: product?.title,
      description: product?.description,
      images: [product?.image!],
    },
    description: product?.description
  }
}

const ProductPage = async ({ params }: Props) => {

  const formatTitle = params.slug.replace(/_/g, " ")
  
  // const myProduct = async (formatTitle:string) => {
  //   const product = await getProduct(formatTitle)
  //   console.log(product);
    
  // }
  // myProduct(formatTitle)
  const product = await getProduct(formatTitle)

  return (
    <div className='bg-violet-50'>
      <ProductPageDetail image={product!.image} title={product!.title} price={product!.price} description={product!.description} />
    </div>
  )
}

export default ProductPage