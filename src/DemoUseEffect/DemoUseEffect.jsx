//rafc
import React, { useEffect, useState } from 'react'

export const DemoUseEffect = () => {
    // Cú pháp
    // useEffect(()=>{})
    // useEffect(()=>{}, [])
    //  [] : dependencies
    // useEffect sẽ đc thực thi sau khi component render xong

    const [number, setNumber] = useState(1)
    const [like, setLike] = useState(1)

    // TH1:
    // Luôn chạy ít nhất 1 lần sau khi component render xong
    // luôn luôn đc thực thi khi component re-render

    useEffect(() => {
        console.log('useEffect TH1')
    })

    // TH2:
    // chạy duy nhất 1 lần sau khi component render xong
    useEffect(() => {
        console.log('useEffect TH2')
    }, [])

    // TH3:
    //  Luôn chạy ít nhất 1 lần sau khi component render xong
    // Đc thực thi khi giá trị trong mảng dependencies thay đổi

    useEffect(() => {
        console.log('useEffect TH3')
    }, [number])

    // TH4: 
    useEffect(() => {
        return () => {
            // sẽ đc gọi khi component bị hủy khỏi UI
            console.log('useEffect TH4')
        }
    }, [])

    console.log('RENDER')
    return (
        <div className="container mt-3">
            <h1>DemoUseEffect</h1>
            <p>Number: {number}</p>
            <button
                className="btn btn-success"
                onClick={() => {
                    setNumber(number + 2)
                }}
            >
                + Number
            </button>
            <p>Number: {like}</p>
            <button
                className="btn btn-success"
                onClick={() => {
                    setLike(like + 2)
                }}
            >
                + Like
            </button>
        </div>
    )
}
