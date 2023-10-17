import React from 'react'

export const ProductItem = ({ product }) => {
    console.log('product: ', product)
    return (
        <div className="col-4">
            <div className="card">
                <img
                    style={{
                        height: 450,
                    }}
                    src={product.hinhAnh}
                    alt="..."
                />
                <div className="card-body">
                    <p className="fw-bold">{product.tenSP}</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <button className="btn btn-success">Detail</button>
                        <button className="btn btn-danger">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
