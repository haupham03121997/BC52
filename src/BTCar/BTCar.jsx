// rafc

import { useState } from 'react'

export const BTCar = () => {
    const [imgSrc, setimgSrc] = useState('./images/red-car.jpg')
    const handleSetImgSrc = (colorCar) => {
        setimgSrc(`./images/${colorCar}-car.jpg`)
    }
    return (
        <div className="container mt-3">
            <h1>Bài tập car</h1>
            <div className="row">
                <div className="col-8">
                    <img className="img-fluid" src={imgSrc} alt="..." />
                </div>
                <div className="col-4 d-flex flex-column gap-5">
                    <button
                        className="btn btn-danger"
                        // onClick={() => {
                        //     setimgSrc('./images/red-car.jpg')
                        // }}
                        onClick={() => handleSetImgSrc('red')}
                    >
                        Red
                    </button>
                    <button
                        className="btn btn-dark"
                        // onClick={() => {
                        //     setimgSrc('./images/black-car.jpg')
                        // }}
                        onClick={() => handleSetImgSrc('black')}
                    >
                        Black
                    </button>
                    <button
                        className="btn btn-secondary"
                        // onClick={() => {
                        //     setimgSrc('./images/silver-car.jpg')
                        // }}
                        onClick={() => handleSetImgSrc('silver')}
                    >
                        Silver
                    </button>
                    <button
                        className="btn btn-dark"
                        style={{
                            background: 'grey',
                        }}
                        // onClick={() => {
                        //     setimgSrc('./images/steel-car.jpg')
                        // }}
                        onClick={() => handleSetImgSrc('steel')}
                    >
                        Steel
                    </button>
                </div>
            </div>
        </div>
    )
}
