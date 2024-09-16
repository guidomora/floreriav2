'use client'

import { useContext, useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { DataContext } from "@/app/context/DataContext"
import CardSkeleton from "../../loaders/CardSkeleton"
import { notFound } from "next/navigation"

interface CategoryProps {
  category: string
}


const ProductList = ({ category }: CategoryProps) => {
  const { getData, products } = useContext(DataContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      await getData(category)
      setLoading(false);
    };
    fetchData();
  }, [])

  
  

  const skeletonCount = 8

  return (
    <div className="flex justify-evenly flex-wrap gap-8 p-3 mb-4">

      {loading ? (
        Array.from({ length: skeletonCount }).map((_, index) => (
          <CardSkeleton key={index} />
        ))
      ) : (
        products.map(product => (
          <ProductCard key={product.title} title={product.title} image={product.image} price={product.price} />
        ))
      )}

    </div>
  )
}

export default ProductList