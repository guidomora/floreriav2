'use client'

import { DataContext } from '@/app/context/DataContext'
import React, { useContext } from 'react'

interface Props {
    params:{
        slug:string
    }
}

const ProductPage = ({params}:Props) => {
  const {getProduct} = useContext(DataContext)
  
  const formatTitle = params.slug.replace(/_/g, " ")

  const product = getProduct(formatTitle)
  console.log(product);
  
    
  return (
    <div>{params.slug}</div>
  )
}

export default ProductPage