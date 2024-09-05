
import ProductPageDetail from '@/app/components/products/ProductPage/ProductPage'
import { ProductProps } from '@/app/context/DataProvider'
import { getData, getProduct } from '@/app/Data/OneProduct'
import next, { Metadata, ResolvingMetadata } from 'next'



interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams(){
  const data = await getData()
  const allProducts = data.map(item => ({
    slug:item.title
  }))
  return allProducts.map(({slug}) => ({slug: slug}))
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.slug.replace(/_/g, " ")

  // fetch data
  const product = await getProduct(id)

  if (!product) {
    return {
      title: 'Producto no encontrado',
      description: 'Este producto no existe.',
    };
  }

  return {
    title: product?.title,
    openGraph: {
      title: product!.title,
      description: product!.description,
      images: [product!.image],
    },
    description: product!.description
  }
}

const getTheProduct = async (title:string):Promise<ProductProps | null> => {

  
  try {
    const formatTitle = title.replace(/_/g, " ")
    const product = await getProduct(formatTitle)
    return product
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }

}

const ProductPage = async ({ params }: Props) => {
  

  const formatTitle = params.slug.replace(/_/g, " ")
  const product = await getTheProduct(formatTitle);
  if (!product) {
    return <p>Producto no encontrado</p>; // Manejo de producto no encontrado
  }


  return (
    <div className='bg-violet-50'>
      <ProductPageDetail image={product!.image} title={product!.title} price={product!.price} description={product!.description} category={product!.category} />
    </div>
  )
}

export const revalidate = 604800;

export default ProductPage