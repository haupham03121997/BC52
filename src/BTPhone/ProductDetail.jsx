// rafc
import React from 'react'

export const ProductDetail = () => {
    return (
        <div className="row">
            <div className="col-4">
                <img className="img-fluid" src="./images/vsphone.jpg" alt="..." />
            </div>
            <div className="col-8">
                <h2>Thông số kỹ thuật</h2>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Màn hình</td>
                            <td>AMOLED, 6.2Inch...</td>
                        </tr>
                        <tr>
                            <td>Hệ điều hành</td>
                            <td>IOS</td>
                        </tr>
                        <tr>
                            <td>Camera trước</td>
                            <td>20MP</td>
                        </tr>
                        <tr>
                            <td>Camera Sau</td>
                            <td>40MP</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>16GB</td>
                        </tr>
                        <tr>
                            <td>ROM</td>
                            <td>512GB</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
