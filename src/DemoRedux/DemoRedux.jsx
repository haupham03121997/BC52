// rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const DemoRedux = () => {
    // useSelector để lấy giá trị trên store của redux
    // const state = useSelector((state) => state)
    const { number, name } = useSelector((state) => state.demoRedux)

    // dispatch dùng để thay đổi giá trị trên store của redux
    const dispatch = useDispatch()

    console.log('name: ', name)
    console.log('number: ', number)
    // console.log('state: ', state)

    return (
        <div className="container mt-3">
            <h1>DemoRedux</h1>
            <p className="fs-3">Number: {number}</p>
            <div className="mt-3">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        // tham số 2 thuộc tính: type, payload
                        // type: => cần thay đổi giá trị nào trên store
                        // payload: => giá trị đó sẽ đc thay đổi ntn

                        dispatch({
                            type: 'INCREASE_NUMBER',
                            payload: 1,
                        })
                    }}
                >
                    + Number
                </button>
                <button
                    className="btn btn-danger ms-3"
                    onClick={() => {
                        dispatch({
                            type: 'DECREASE_NUMBER',
                            payload: -1,
                        })
                    }}
                >
                    - Number
                </button>
            </div>
            <p>Name: {name}</p>
        </div>
    )
}
