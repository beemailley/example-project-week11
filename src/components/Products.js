import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // use the useSelector hook(?) to grab the products from the products slice here
  const allProducts = useSelector((store) => store.products)

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
