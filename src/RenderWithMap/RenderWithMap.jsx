// rafc

export const RenderWithMap = () => {
    const products = [
        {
            id: 1,
            name: 'Samsung',
            price: 1000,
            color: 'Black',
        },
        {
            id: 2,
            name: 'Iphone',
            price: 1500,
            color: 'White',
        },
        {
            id: 3,
            name: 'Sony',
            price: 1000,
            color: 'Pink',
        },
    ]
    return (
        <div className="container mt-3">
            <h1>RenderWithMap</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 
                            1. Trả về 1 thẻ jsx
                            2. Phải có thuộc tính key ở thẻ bao bọc ngoài cùng 
                            => key phải là giá trị duy nhất ko bị trùng lặp giữa lần lặp 
                            3. Hạn chế sử dụng index làm giá trị của thuộc tính key, 
                            => chỉ sử dụng trong trường hợp mảng ko bị thay đổi
                        */}
                        {products.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>{value.color}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
