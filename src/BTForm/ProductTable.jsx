// rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BTForm/slice'

export const ProductTable = () => {
    const { productList } = useSelector((state) => state.btForm)
    console.log('productList: ', productList)

    const dispatch = useDispatch()

    return (
        <div className="mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>PRICE</th>
                        <th>DESC</th>
                        <th>TYPE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>
                                    <img
                                        style={{
                                            with: 60,
                                            height: 60,
                                        }}
                                        src={product.image}
                                        alt="..."
                                    />
                                </td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.productType}</td>
                                <td style={{ width: 120 }}>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(btFormActions.deleteProduct(product.id))
                                        }}
                                    >
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button
                                        className="btn btn-success ms-3"
                                        onClick={() => {
                                            dispatch(btFormActions.setProductEdit(product))
                                        }}
                                    >
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
