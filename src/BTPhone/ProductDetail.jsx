// rafc
import React from 'react'
import { useSelector } from 'react-redux'

export const ProductDetail = () => {
    const { productDetail } = useSelector((state) => state.btPhone)
    // const productDetail = undefined
    // console.log('productDetail: ', productDetail = undefined)

    return (
        <div className="row mt-5">
            <div className="col-4">
                {/* optional chaning */}
                <img className="img-fluid" src={productDetail?.hinhAnh} alt="..." />
            </div>
            <div className="col-8">
                <h2>Thông số kỹ thuật</h2>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Màn hình</td>
                            <td>{productDetail?.manHinh}</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>{productDetail?.heDieuHanh}</td>
                        </tr>
                        <tr>
                            <td>Camera trước</td>
                            <td>{productDetail?.cameraTruoc}</td>
                        </tr>
                        <tr>
                            <td>Camera Sau</td>
                            <td>{productDetail?.cameraSau}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{productDetail?.ram}</td>
                        </tr>
                        <tr>
                            <td>ROM</td>
                            <td>{productDetail?.rom}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
