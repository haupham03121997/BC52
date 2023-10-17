// rafc
import React from 'react'
import { useSelector } from 'react-redux'

export const DemoRedux = () => {
    // useSelector để lấy giá trị trên store của redux
    // const state = useSelector((state) => state)
    const { number, name } = useSelector((state) => state.demoRedux)
    
    console.log('name: ', name);
    console.log('number: ', number)
    // console.log('state: ', state)

    return (
        <div className="container mt-3">
            <h1>DemoRedux</h1>
        </div>
    )
}
