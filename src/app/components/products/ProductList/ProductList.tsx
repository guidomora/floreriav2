import ProductCard from "../ProductCard/ProductCard"

interface CategoryProps {
    category:string
}

const ProductList = ({category}:CategoryProps) => {
  return (
    <div className="flex justify-evenly flex-wrap gap-8 p-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductList