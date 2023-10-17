//rafc
import React from 'react'
import { ProductList } from './ProductList'
import data from './data.json'
import { ProductDetail } from './ProductDetail'

export const BTPhone = () => {
    console.log('data: ', data)
    return (
        <div className="container mt-3">
            <h1>BTPhone</h1>
            <ProductList data={data} />
            <ProductDetail />
        </div>
    )
}
