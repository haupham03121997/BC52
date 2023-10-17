// rafc
import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = ({ data }) => {
    return (
        <div className="row">
            {data.map((product) => {
                return <ProductItem key={product.maSP} product={product} />
            })}
        </div>
    )
}
