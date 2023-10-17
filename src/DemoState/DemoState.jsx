// rafc

import { useState } from 'react'
import { flushSync } from 'react-dom'

export const DemoState = () => {
    // let number = 10

    // Muốn thay đổi UI => gán vào state
    // để khởi tạo state ở trong react => gọi hàm useState (hook)
    // useState => trả về 1 mảng gồm 2 phần tử
    // => phần tử 0 => gọi là state
    // => phần tử 1 => hàm setState
    // Khi state đc thay đổi thông qua hàm setState => component render lại => UI đc cập nhật
    // tham số truyền vào khi gọi hook useState => giá trị khởi tạo của state (initial State)
    // trong 1 component có thể tạo nhiều state
    // hàm setState là 1 hàm bất đồng bộ

    // destructuring
    const [number, setNumber] = useState(() => {
        return 999
    })

    const [like, setLike] = useState(1)
    // console.log('number: ', number)

    // const stunents = ['NV A', 'NV B']
    // const [std1, std2] = stunents

    const [fontSize, setFontSize] = useState(16)

    const handleNumber = () => {
        // number = number - 1
        setNumber(101)
        setLike(10)
        // flushSync(setNumber(101))
        // flushSync(setLike(10))

        // console.log('number: ', number)
    }

    console.log('RENDER')
    return (
        <div className="container mt-3">
            <h1>DemoState</h1>
            <p className="mt-3 fs-3 fw-bold">Number: {number}</p>
            <button className="btn btn-success mt-3" onClick={handleNumber}>
                Handle Number
            </button>

            <div className="mt-5">
                <p
                    style={{
                        // fontSize: fontSize,
                        fontSize,
                    }}
                >
                    Hello BC53
                </p>
                <button
                    className="btn btn-info"
                    onClick={() => {
                        setFontSize(fontSize + 2)
                    }}
                >
                    + Font Size
                </button>
                <button
                    className="btn btn-warning ms-3"
                    onClick={() => {
                        setFontSize(fontSize - 2)
                    }}
                >
                    - Font Size
                </button>
            </div>
        </div>
    )
}
