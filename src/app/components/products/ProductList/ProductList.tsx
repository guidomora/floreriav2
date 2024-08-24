'use client'

import { useContext, useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { DataContext } from "@/app/context/DataContext"

interface CategoryProps {
    category:string
}

const ProductList = ({category}:CategoryProps) => {
    
    const {getData, products} = useContext(DataContext)
    useEffect(() => {
        getData(category)
        
    }, [])
    
    
    

  return (
    <div className="flex justify-evenly flex-wrap gap-8 p-3">
        {products.map(product => 
        <ProductCard key={product.title} title={product.title} image={product.image} price={product.price}/>
        )}
    </div>
  )
}

export default ProductList