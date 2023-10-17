//rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Cart = () => {
    const { carts } = useSelector((state) => state.btPhone)
    console.log('carts: ', carts)

    const dispatch = useDispatch()

    return (
        <div
            className="modal fade"
            id="phoneModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Cart
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {/* Nếu carts rỗng */}
                        {!carts.length && <h2 className="text-center">Vui lòng chọn sản phẩm</h2>}

                        {/* carts có sản phẩm */}
                        {!!carts.length && (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((product, index) => {
                                        return (
                                            <tr key={product.maSP}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img
                                                        style={{
                                                            width: 80,
                                                            height: 80,
                                                        }}
                                                        src={product.hinhAnh}
                                                        alt="..."
                                                    />
                                                </td>
                                                <td>{product.tenSP}</td>
                                                <td>{product.giaBan}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-success"
                                                        onClick={() => {
                                                            dispatch({
                                                                type: 'HANDLE_CART_QUANTITY',
                                                                payload: {
                                                                    productId: product.maSP,
                                                                    quantity: 1,
                                                                },
                                                            })
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                    <span className="mx-2">{product.soLuong}</span>
                                                    <button
                                                        className="btn btn-outline-danger"
                                                        onClick={() => {
                                                            dispatch({
                                                                type: 'HANDLE_CART_QUANTITY',
                                                                payload: {
                                                                    productId: product.maSP,
                                                                    quantity: -1,
                                                                },
                                                            })
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                </td>
                                                <td>{product.soLuong * product.giaBan}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-outline-dark"
                                                        onClick={() => {
                                                            dispatch({
                                                                type: 'DELETE_CART',
                                                                payload: product.maSP,
                                                            })
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
